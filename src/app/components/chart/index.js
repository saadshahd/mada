import {length, map, addIndex, flatten, values} from 'ramda';
import {Stage, Layer, Line, Text, Arrow} from 'react-konva';
import React, { Component } from 'react';

const mapIndexed = addIndex(map);
const lineOptions = {
  lineCap: 'round',
  lineJoin: 'round',
  fill: 'red',
  stroke: 'red',
};

const stepLineOptions = {
  ...lineOptions,
  strokeWidth: 2
};

const stepTextOptions = {
  fontFamily: 'El Messiri',
  fontWeight: '500',
  fontSize: 24,
  width: 100,
  fill: 'green'
};

const barStartMargin = 90;
const barEndMargin = 42;
const getBarPoints = (start, end) => ({
  startX: barStartMargin,
  startY: start - barStartMargin,
  endX: end - barEndMargin,
  endY: start - barStartMargin
});

const getBarVerticalPoints = (start, end) => ({
  startX: barStartMargin,
  startY: end - barStartMargin,
  endX: barStartMargin,
  endY: barEndMargin
});

const drawBar = points => (
  <Arrow
    {...lineOptions}
    points={values(points)}
    strokeWidth={4}
    pointerWidth={18}
    pointerLength={12}
  />
)

const getBarStepSpacing = ({count, start, end, margingFrac}) => Math.abs(start - end) / (count + margingFrac);
const getVerticalStepPoints = ({barPoints, size, step, stepSize, margingFrac}) => ({
  startX: barPoints.startX,
  startY: barPoints.startY - (step + margingFrac) * stepSize,
  endX: barPoints.startX - size,
  endY: barPoints.startY - (step + margingFrac) * stepSize
});

const getStepPoints = ({barPoints, size, step, stepSize, margingFrac}) => ({
  startX: barPoints.startX + (step + margingFrac) * stepSize,
  startY: barPoints.startY,
  endX: barPoints.startX + (step + margingFrac) * stepSize,
  endY: barPoints.startY + size
});

const drawVerticalBarSteps = ({steps, barPoints, size = 10, margingFrac = 0.2}) => {
  const count = length(steps);
  const stepSize = getBarStepSpacing({
    count,
    margingFrac,
    start: barPoints.startY,
    end: barPoints.endY,
  });

  return mapIndexed((text, step) => {
    const points = getVerticalStepPoints({barPoints, size, margingFrac, step, stepSize});

    return [
      <Line {...stepLineOptions} points={values(points)}/>,
      <Text
        {...stepTextOptions}
        text={text}
        x={points.endX - 100 - size}
        y={points.startY - 8}
        align="right"
      />
    ];
  }, steps);
}

const drawHorizontalBarSteps = ({steps, barPoints, size = 10, margingFrac = 0.2}) => {
  const count = length(steps);
  const stepSize = getBarStepSpacing({
    count,
    margingFrac,
    start: barPoints.startX,
    end: barPoints.endX
  });

  return mapIndexed((text, step) => {
    const baseMargingFrac = 0.05;
    const points = getStepPoints({barPoints, size: 15, margingFrac: baseMargingFrac, step, stepSize});
    const points2 = getStepPoints({barPoints, size: 10, margingFrac: baseMargingFrac + 0.25, step, stepSize});
    const points3 = getStepPoints({barPoints, size: 10, margingFrac: baseMargingFrac + 0.5, step, stepSize});
    const points4 = getStepPoints({barPoints, size: 10, margingFrac: baseMargingFrac + 0.75, step, stepSize});

    return [
      <Line {...stepLineOptions} points={values(points)}/>,
      <Line {...stepLineOptions} strokeWidth={1} points={values(points2)}/>,
      <Line {...stepLineOptions} strokeWidth={1} points={values(points3)}/>,
      <Line {...stepLineOptions} strokeWidth={1} points={values(points4)}/>,
      <Text
        {...stepTextOptions}
        text={text}
        x={points.startX + 8}
        y={points.startY + 22}
        rotation={90}
      />
    ];
  }, steps);
}

class Chart extends Component {
  render() {
    const {width, height} = this.props;
    const horizontalBarPoints = getBarPoints(height, width);
    const horizontalBar = drawBar(horizontalBarPoints);
    const horizontalBarSteps = drawHorizontalBarSteps({
      steps: ['2013', '2014', '2015', '2016'],
      barPoints: horizontalBarPoints
    });

    const verticalBarPoints = getBarVerticalPoints(0, height);
    const verticalBar = drawBar(verticalBarPoints);
    const verticalBarSteps = drawVerticalBarSteps({
      steps: ['20%', '40%', '60%', '80%', '100%'],
      barPoints: verticalBarPoints
    });

    return (
      <Stage width={width} height={height}>
        <Layer>
          {
            [
              ...flatten(verticalBarSteps),
              ...flatten(horizontalBarSteps),
              verticalBar,
              horizontalBar
            ]
          }
        </Layer>
      </Stage>
    );
  }
}

export default Chart;

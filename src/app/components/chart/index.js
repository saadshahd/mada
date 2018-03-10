import {length, map, addIndex, flatten, values} from 'ramda';
import {Stage, Layer, Group, Line, Text, Arrow, Circle} from 'react-konva';
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

const getStepPoints = ({size, x = 0}) => ({
  startX: x,
  startY: 0,
  endX: x,
  endY: size
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
  const getX = subfactor => subfactor * stepSize;
  const count = length(steps);
  const stepSize = getBarStepSpacing({
    count,
    margingFrac,
    start: barPoints.startX,
    end: barPoints.endX
  });

  return mapIndexed((text, step) => {
    const points = getStepPoints({size: 15, x: getX(0)});
    const points2 = getStepPoints({size: 10, x: getX(0.25)});
    const points3 = getStepPoints({size: 10, x: getX(0.5)});
    const points4 = getStepPoints({size: 10, x: getX(0.75)});


    return (
      <Group x={barPoints.startX} y={barPoints.startY}>
        <Group x={getX(step + margingFrac)}>
          <Line {...stepLineOptions} points={values(points)}/>
          <Line {...stepLineOptions} strokeWidth={1} points={values(points2)}/>
          <Line {...stepLineOptions} strokeWidth={1} points={values(points3)}/>
          <Line {...stepLineOptions} strokeWidth={1} points={values(points4)}/>
          <Text
            {...stepTextOptions}
            text={text}
            x={points.startX + 8}
            y={points.startY + 22}
            rotation={90}
          />
        </Group>
      </Group>
    );
  }, steps);
}

const drawGraphLine = xys => {
  const points = map(({x, y}) => [x * 200, y * 100])(xys);
  const circles = map(({x, y}) => (
    <Circle fill="red" radius={5} x={x * 200} y={y * 100} />
  ))(xys);

  console.log(circles);

  return (
    <Group x={200} y={100}>
      {
        [
          ...circles,
          <Line {...lineOptions} points={flatten(points)}/>
        ]
      }
    </Group>
  )
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

    const graphLine = drawGraphLine([
      {
        x: 1,
        y: 1
      },
      {
        x: 2,
        y: 4
      },
      {
        x: 3,
        y: 2
      },
      {
        x: 4,
        y: 3
      },
      {
        x: 5,
        y: 1
      },
      {
        x: 6,
        y: 6
      },
      {
        x: 7,
        y: 3
      }
    ])

    return (
      <Stage width={width} height={height}>
        <Layer>
          {
            [
              ...flatten(verticalBarSteps),
              ...horizontalBarSteps,
              graphLine,
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

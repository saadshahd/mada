import React, { Component } from 'react';
import {range, map} from 'ramda';
import {Line} from 'react-chartjs-2';

class Chart extends Component {
  render() {
    const {width, height} = this.props;
    const xLabels = range(0, 16);
    const yLabels = map(num => `${num * 20}%`)(range(0, 6).reverse());
    const xYears = ['2103', '2014', '2015', '2016']

    const data = {
      xLabels,
      yLabels,
      datasets: [{
        data: [
          {x: 0, y: '40%'},
          {x: 1, y: '20%'},
          {x: 2, y: '40%'},
          {x: 3, y: '60%'},
          {x: 4, y: '80%'},
          {x: 5, y: '20%'},
          {x: 6, y: '40%'},
          {x: 7, y: '60%'},
          {x: 8, y: '80%'},
          {x: 9, y: '20%'},
          {x: 10, y: '40%'},
          {x: 11, y: '60%'},
          {x: 12, y: '80%'},
          {x: 13, y: '20%'},
          {x: 14, y: '40%'},
          {x: 15, y: '60%'},
        ],
        fill: false,
        borderColor: 'red',
        lineTension: 0.05
      }]
    };

    const axesConfig = {
      display: true,
      gridLines: {
        display: false,
        lineWidth: 5,
        color: 'red'
      },
      ticks: {
        fontColor: 'green',
        fontFamily: 'El Messiri',
        fontSize: 24,
        fontWeight: 500
      }
    };

    const options = {
      responsive: true,
      legend: {
        display: false
      },
      layout: {
        padding: 50
      },
      scales: {
        yAxes: [{
          ...axesConfig,
          type: 'category',
          scaleLabel: {
            display: true,
            labelString: 'Total',
            fontColor: 'green',
            fontFamily: 'El Messiri',
            fontSize: 24,
            fontWeight: 500,
          },
          ticks: {
            ...axesConfig.ticks,
            reverse: true
          }
        }],
        xAxes: [{
          ...axesConfig,
          scaleLabel: {
            display: true,
            labelString: 'Month',
            fontColor: 'green',
            fontFamily: 'El Messiri',
            fontSize: 24,
            fontWeight: 500,
          },
          ticks: {
            ...axesConfig.ticks,
            userCallback: label => {
              const qNum = label % 4;
              const isFirstQ = qNum === 0;

              return isFirstQ ? xYears[label / 4] : `Q${qNum + 1}`;
            }
          }
        }]
      }
    };

    console.log(this.props.scene);

    return (
      <Line
        width={width}
        height={height}
        data={data}
        options={options}
      />
    );
  }
}

export default Chart;

import React, {Component} from 'react';
import {map} from 'ramda';
import {AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip} from 'recharts';

class Chart extends Component {
  data = [
    {time: '2013 Nov, Dec', politcs: 98.30, social: 100},
    {time: '2014 Q1',       politcs: 98.50, social: 0},
    {time: '2014 Q2',       politcs: 92.17, social: 71.43},
    {time: '2014 Q3',       politcs: 94.97, social: 52.94},
    {time: '2014 Q4',       politcs: 94.48, social: 58.00},
    {time: '2015 Q1',       politcs: 98.16, social: 46.15},
    {time: '2015 Q2',       politcs: 98.03, social: 80.00},
    {time: '2015 Q3',       politcs: 84.50, social: 0},
    {time: '2015 Q4',       politcs: 75.17, social: 0},
    {time: '2016 Q1',       politcs: 87.05, social: 9.09},
    {time: '2016 Q2',       politcs: 58.46, social: 88.64},
    {time: '2016 Q3',       politcs: 91.53, social: 57.14},
    {time: '2016 Q4',       politcs: 94.69, social: 80.77},
  ]

  getAreachart = el => {
    const lengths = map(path => path.getTotalLength())(el.container.querySelectorAll('.recharts-area .recharts-layer path:last-child'));

    this.$line1Length = lengths[0];
    this.$line2Length = lengths[1];
  }

  render() {
    const {width, height} = this.props;
    const chartWidth = width - 80;
    const chartHeight = height - 80;

    return (
      <div style={{margin: 40}}>
        <AreaChart
          width={chartWidth}
          height={chartHeight}
          data={this.data}
          ref={this.getAreachart}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8884d8" stopOpacity={1}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#82ca9d" stopOpacity={1}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <Tooltip separator="" isAnimationActive={false}/>
          <YAxis tickLine={false} name="Label" unit="%"/>
          <XAxis dataKey="time" tickLine={false}/>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <Area
            isAnimationActive={false}
            strokeDasharray={`${this.$line1Length}`}
            strokeDashoffset={`${this.$line1Length - (this.$line1Length * this.props.scene)}`}
            type="monotone"
            stroke="#8884d8"
            fillOpacity={this.props.scene}
            fill="url(#colorUv)"
            dataKey="politcs"
            name=" "
            unit="%"
            dot={{
              stroke: 'red',
              strokeWidth: 2
            }}
          />

          <Area
            isAnimationActive={false}
            strokeDasharray={`${this.$line2Length}`}
            strokeDashoffset={`${(this.$line2Length) - ((this.$line2Length) * this.props.scene)}`}
            type="monotone"
            stroke="green"
            fillOpacity={this.props.scene}
            fill="url(#colorPv)"
            dataKey="social"
            name="social"
            unit="%"
            dot={{
              stroke: 'yellow',
              strokeWidth: 2
            }}
          />
        </AreaChart>
      </div>
    );
  }
}

export default Chart;

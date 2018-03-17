import React, {Component} from 'react';
import {LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip} from 'recharts';

class Chart extends Component {
  data = [
    {time: '2013 Nov, Dec', value: 98.30},
    {time: '2014 Q1', value: 98.50},
    {time: '2014 Q2', value: 92.17},
    {time: '2014 Q3', value: 94.97},
    {time: '2014 Q4', value: 94.48},
    {time: '2015 Q1', value: 98.16},
    {time: '2015 Q2', value: 98.03},
    {time: '2015 Q3', value: 84.50},
    {time: '2015 Q4', value: 75.17},
    {time: '2016 Q1', value: 87.05},
    {time: '2016 Q2', value: 58.46},
    {time: '2016 Q3', value: 91.53},
    {time: '2016 Q4', value: 94.69},
  ]

  getLineRef = el => {
    console.log(el.mainCurve);
    this.$line = el;
  }

  render() {
    const {width, height} = this.props;
    const chartWidth = width - 80;
    const chartHeight = height - 80;
    const dashoffset = chartWidth + chartHeight;

    console.log(this.props.scene);

    return (
      <div style={{margin: 40}}>
        <LineChart width={chartWidth} height={chartHeight} data={this.data}>
          <Tooltip separator="" isAnimationActive={false}/>
          <YAxis tickLine={false} name="Label" unit="%"/>
          <XAxis dataKey="time" tickLine={false}/>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <Line
            ref={this.getLineRef}
            isAnimationActive={false}
            strokeDasharray={`${dashoffset}`}
            strokeDashoffset={`${dashoffset - (dashoffset * this.props.scene) - 20}`}
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            name=" "
            unit="%"
            dot={{
              stroke: 'red',
              strokeWidth: 2
            }}
          />
        </LineChart>
      </div>
    );
  }
}

export default Chart;

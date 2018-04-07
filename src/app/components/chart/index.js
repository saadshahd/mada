import React, {Component} from 'react';
import {map, addIndex} from 'ramda';
import {AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Chart extends Component {
  getAreachart = el => {
    if (!el || !el.container) return;

    const lengths = map(path => path.getTotalLength())(el.container.querySelectorAll('.recharts-area .recharts-layer path:last-child'));

    this.$line1Length = lengths[0];
    this.$line2Length = lengths[1];
  }

  render() {
    const {width, height} = this.props;
    const $line1Length = this.$line1Length || 10000;
    const $line2Length = this.$line2Length || 10000;

    return (
      <div style={{margin: '0 10px 10px 10px', direction: 'ltr'}}>
        <AreaChart
          width={width}
          height={height}
          data={this.props.data}
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
          <Tooltip
            separator=""
            isAnimationActive={false}
            content={({payload}) => {
              return payload.length !== 0 && (
                <div className="tooltip">
                  <h4>{payload[0].payload.q}</h4>
                  <ul>
                  {
                    addIndex(map)((point, idx) => (
                      <li key={idx}>
                        <span className="tooltip-circle" style={{backgroundColor: point.color}}/>
                        <span className="tooltip-text">{point.payload[point.dataKey]}{this.props.axis[idx].unit}</span>
                      </li>
                    ))(payload)
                  }
                  </ul>

                  {
                    payload[0].payload.event && <strong style={{marginTop: 12, display: 'block'}}>{payload[0].payload.event}</strong>
                  }
                </div>
              );
            }}
          />
          <Legend verticalAlign="top" iconType="circle" height={36}/>
          <YAxis
            name="Label"
            label={{value: this.props.label, angle: -90, position: 'insideLeft', offset: 10}}
            tickMargin={5}
            unit={this.props.axis[0].unit}
            width={100}
          />
          <XAxis dataKey="time"/>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
          <Area
            isAnimationActive={false}
            strokeDasharray={`${$line1Length}`}
            strokeDashoffset={`${$line1Length - ($line1Length * this.props.scene)}`}
            type="monotone"
            stroke="#8884d8"
            fillOpacity={this.props.scene}
            fill="url(#colorUv)"
            {...this.props.axis[0]}
            dot={{
              stroke: 'red',
              strokeWidth: 2
            }}
          />

          <Area
            isAnimationActive={false}
            strokeDasharray={`${$line2Length}`}
            strokeDashoffset={`${($line2Length) - (($line2Length) * this.props.scene)}`}
            type="monotone"
            stroke="green"
            fillOpacity={this.props.scene}
            fill="url(#colorPv)"
            {...this.props.axis[1]}
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

import React, {Component} from 'react';
import {map, addIndex} from 'ramda';
import {AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class Chart extends Component {
  state = {
    scene: 0.01
  }

  getAreachart = el => {
    if (!el || !el.container) return;

    const lengths = map(path => path.getTotalLength())(el.container.querySelectorAll('.recharts-area .recharts-layer path:last-child'));

    this.$line1Length = lengths[0];
    this.$line2Length = lengths[1];
  }

  componentDidMount() {
    const timer = setInterval(() => {
      if (this.state.scene < 1) {
        this.setState({
          scene: this.state.scene + 0.015
        });
      } else clearInterval(timer);
    }, 100);
  }

  render() {
    const $line1Length = this.$line1Length || 10000;
    const $line2Length = this.$line2Length || 10000;

    return (
      <div
        style={{margin: '0 10px 10px 10px', direction: 'ltr'}}
      >
        <AreaChart
          width={window.innerWidth - 40}
          height={window.innerHeight - 20}
          data={this.props.data}
          ref={this.getAreachart}
        >
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
            strokeDashoffset={`${$line1Length - ($line1Length * this.state.scene)}`}
            type="monotone"
            fill="#A31C27"
            stroke="#A31C27"
            fillOpacity={this.state.scene}
            {...this.props.axis[0]}
            dot={{
              stroke: 'yellow',
              strokeWidth: 2
            }}
          />

          <Area
            isAnimationActive={false}
            strokeDasharray={`${$line2Length}`}
            strokeDashoffset={`${($line2Length) - (($line2Length) * this.state.scene)}`}
            type="monotone"
            stroke="#121212"
            fill="#121212"
            fillOpacity={this.state.scene}
            {...this.props.axis[1]}
            dot={{
              stroke: 'black',
              strokeWidth: 2
            }}
          />
        </AreaChart>
      </div>
    );
  }
}

export default Chart;

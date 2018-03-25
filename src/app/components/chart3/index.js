import {pluck, mapObjIndexed, identity, sum, min, take} from 'ramda';
import React, {Component} from 'react';
import Slider from 'rc-slider';
import numeral from 'numeral';

class Chart3 extends Component {
  getValueFromScene = scene => Math.round(scene * 13)

  data = [
    {time: '2013 Nov, Dec', all: 626, notGuilty: 209},
    {time: '2014 Q1',       all: 431, notGuilty: 384},
    {time: '2014 Q2',       all: 231, notGuilty: 59},
    {time: '2014 Q3',       all: 304, notGuilty: 79},
    {time: '2014 Q4',       all: 355, notGuilty: 40},
    {time: '2015 Q1',       all: 371, notGuilty: 50},
    {time: '2015 Q2',       all: 130, notGuilty: 21},
    {time: '2015 Q3',       all: 19,  notGuilty: 1},
    {time: '2015 Q4',       all: 30,  notGuilty: 8},
    {time: '2016 Q1',       all: 46,  notGuilty: 5},
    {time: '2016 Q2',       all: 48,  notGuilty: 9},
    {time: '2016 Q3',       all: 6,   notGuilty: 3},
    {time: '2016 Q4',       all: 26,  notGuilty: 12},
  ]

  handleChange = v => {
    const element = document.documentElement;
    const height = element.scrollHeight - element.clientHeight;

    element.scrollTop = (height / 13) * v;
  }

  render() {
    const {width, height} = this.props;
    const maxCircleHeight = height - 80;
    const circleMaxRadius = min(width, maxCircleHeight);
    const times = mapObjIndexed(identity, pluck('time')(this.data));
    const total = sum(pluck('all', this.data));
    const unitSize = circleMaxRadius / total;
    const value = this.getValueFromScene(this.props.scene);
    const currentValues = take(value + 1, this.data);
    const currentAll = sum(pluck('all', currentValues));
    const currentNotGuilty = sum(pluck('notGuilty', currentValues));
    const currentAllRadius = currentAll * unitSize;
    const currentNotGuiltyRadius = currentNotGuilty * unitSize;

    return (
      <div
        className="d-flex"
        style={{
          width,
          height,
          margin: 'auto',
          flexDirection: 'column'
        }}
      >
        <div className="d-flex align-center justify-center" style={{flex: 1}}>
          <div
            className="circle"
            style={{
              width: currentAllRadius,
              height: currentAllRadius
            }}
            data-wenk={`${numeral(currentAll).format('0[,]0')} years`}
            data-wenk-pos="right"
          >
            <div
              className="circle"
              style={{
                width: currentNotGuiltyRadius,
                height: currentNotGuiltyRadius
              }}
              data-wenk={`${numeral(currentNotGuilty).format('0[,]0')} years`}
            >Not Guilty</div>
          </div>
        </div>
        <div className="align-self-end w-100">
          <Slider
            key={value}
            min={0}
            max={this.data.length - 1}
            marks={times}
            step={1}
            onAfterChange={this.handleChange}
            defaultValue={value}
          />
        </div>
      </div>
    )
  }
}

export default Chart3;

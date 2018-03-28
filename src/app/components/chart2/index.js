import React, {Component} from 'react';
import {BarChart, Bar, YAxis, XAxis, CartesianGrid, Tooltip} from 'recharts';

class Chart2 extends Component {
  data = [
    {
      time: '2013 Nov, Dec',
      total: {
        '<6': 813,
        '6-18': 303,
        '18-24': 27,
        '>24': 129
      },
      illegal: {
        '6-18': 89,
        '18-24': 3,
        '>24': 92,
        '>24-2': 37
      }
    },
    {
      time: '2014 Q1',
      total: {
        '<6': 1145,
        '6-18': 533,
        '18-24': 51,
        '>24': 242
      },
      illegal: {
        '6-18': 266,
        '18-24': 1,
        '>24': 85,
        '>24-2': 155
      }
    },
    {
      time: '2014 Q2',
      total: {
        '<6': 205,
        '6-18': 90,
        '18-24': 21,
        '>24': 37
      },
      illegal: {
        '6-18': 38,
        '18-24': 0,
        '>24': 5,
        '>24-2': 32
      }
    },
    {
      time: '2014 Q3',
      total: {
        '<6': 251,
        '6-18': 153,
        '18-24': 6,
        '>24': 43
      },
      illegal: {
        '6-18': 47,
        '18-24': 2,
        '>24': 3,
        '>24-2': 40
      }
    },
    {
      time: '2014 Q4',
      total: {
        '<6': 443,
        '6-18': 74,
        '18-24': 14,
        '>24': 102
      },
      illegal: {
        '6-18': 1,
        '18-24': 5,
        '>24': 37,
        '>24-2': 65
      }
    },
    {
      time: '2015 Q1',
      total: {
        '<6': 297,
        '6-18': 130,
        '18-24': 106,
        '>24': 0
      },
      illegal: {
        '6-18': 5,
        '18-24': 7,
        '>24': 0,
        '>24-2': 0
      }
    },
    {
      time: '2015 Q2',
      total: {
        '<6': 86,
        '6-18': 77,
        '18-24': 36,
        '>24': 0
      },
      illegal: {
        '6-18': 11,
        '18-24': 16,
        '>24': 0,
        '>24-2': 0
      }
    },
    {
      time: '2015 Q3',
      total: {
        '<6': 94,
        '6-18': 14,
        '18-24': 1,
        '>24': 0
      },
      illegal: {
        '6-18': 1,
        '18-24': 0,
        '>24': 0,
        '>24-2': 0
      }
    },
    {
      time: '2015 Q4',
      total: {
        '<6': 79,
        '6-18': 30,
        '18-24': 0,
        '>24': 0
      },
      illegal: {
        '6-18': 19,
        '18-24': 0,
        '>24': 0,
        '>24-2': 0
      }
    },
    {
      time: '2016 Q1',
      total: {
        '<6': 127,
        '6-18': 41,
        '18-24': 0,
        '>24': 0
      },
      illegal: {
        '6-18': 5,
        '18-24': 0,
        '>24': 0,
        '>24-2': 0
      }
    },
    {
      time: '2016 Q2',
      total: {
        '<6': 268,
        '6-18': 12,
        '18-24': 0,
        '>24': 0
      },
      illegal: {
        '6-18': 14,
        '18-24': 0,
        '>24': 0,
        '>24-2': 0
      }
    },
    {
      time: '2016 Q3',
      total: {
        '<6': 53,
        '6-18': 1,
        '18-24': 0,
        '>24': 0
      },
      illegal: {
        '6-18': 1,
        '18-24': 0,
        '>24': 0,
        '>24-2': 0
      }
    },
    {
      time: '2016 Q4',
      total: {
        '<6': 95,
        '6-18': 12,
        '18-24': 0,
        '>24': 0
      },
      illegal: {
        '6-18': 0,
        '18-24': 0,
        '>24': 0,
        '>24-2': 0
      }
    }
  ]

  render() {
    const {width, height} = this.props;

    return (
      <div style={{margin: 40}}>
        <BarChart
          width={width}
          height={height}
          data={this.data}
          ref={this.getAreachart}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Bar stackId="total" name="إجمالي الأقل من 6 شهور" dataKey="total[<6]" fill="green"/>

          <Bar stackId="total" name="إجمالي من 6 لـ 18 شهر" dataKey="total[6-18]" fill="purple"/>
          <Bar stackId="illegal" name="حبس احتياطي في الجنح مدة (6-18 شهر)" dataKey="illegal[6-18]" fill="purple"/>

          <Bar stackId="total" name="إجمالي الحبس الإحتياطي لمدة من (18 شهر - سنتين)" dataKey="total[18-24]" fill="blue"/>
          <Bar stackId="illegal" name="حبس احتياطي في الجنح مدة (18 شهر - سنتين)" dataKey="illegal[18-24]" fill="blue"/>

          <Bar stackId="total" name="إجمالي الحبس الإحتياطي لمدة أكتر من سنتين" dataKey="total[>24]" fill="black"/>
          <Bar stackId="illegal" name="حبس احتياطي في الجنح مدة (أكبر من سنتين)" dataKey="illegal[>24]" fill="black"/>
          <Bar stackId="illegal" name="حبس احتياطي في الجنايات مدة (أكبر من سنتين)" dataKey="illegal[>24-2]" fill="red"/>
        </BarChart>
      </div>
    );
  }
}

export default Chart2;

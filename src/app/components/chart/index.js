import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class Chart extends Component {
  state = {
    options: {
      maintainAspectRatio: false
    },
    data: {
      labels: ['مخلى سبيلهم', 'محبوسين', 'إحتياطي'],
      datasets: [
        {
          data: [10, 20, 30],
          backgroundColor: ['#333666', '#fe8989', '#9ecece']
        }
      ]
    }
  };

  style = {
    position: 'fixed',
    top: 50,
    left: 50,
    zIndex: 99
  };

  render() {
    return (
      <div className="pie-chart" style={this.style}>
        <Pie
          width={380}
          height={380}
          data={this.state.data}
          options={this.state.options}
        />
      </div>
    );
  }
}

export default Chart;

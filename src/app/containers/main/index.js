import React, { Component } from 'react';
import Chart from '../../components/chart';

class Main extends Component {
  state = {
    $line1Length: 0,
    $line2Length: 0
  };

  data1 = [
    {time: '',     q: 'نوفمبر وديسمبر', event: 'إقرار قانون التظاهر', politcs: 98.30, social: 100},
    {time: '2014', q: 'الربع الأول',      event: 'مظاهرات في الذكرى الثالثة للثورة', politcs: 98.50, social: 0},
    {time: '',     q: 'الربع الثاني',     politcs: 92.17, social: 71.43},
    {time: '',     q: 'الربع  الثالث',     politcs: 94.97, social: 52.94},
    {time: '',     q: 'الربع  الأخير',    politcs: 94.48, social: 58.00},
    {time: '2015', q: 'الربع الأول',      event: 'مظاهرات في الذكرى الرابعة للثورة', politcs: 98.16, social: 46.15},
    {time: '',     q: 'الربع الثاني',     politcs: 98.03, social: 80.00},
    {time: '',     q: 'الربع  الثالث',     politcs: 84.50, social: 0},
    {time: '',     q: 'الربع الأخير',     politcs: 75.17, social: 0},
    {time: '2016', q: 'الربع  الأول',     politcs: 87.05, social: 9.09},
    {time: '',     q: 'الربع الثاني',     event: 'مظاهرات تيران وصنافير', politcs: 58.46, social: 88.64},
    {time: '',     q: 'الربع  الثالث',     politcs: 91.53, social: 57.14},
    {time: '',     q: 'الربع الأخير',     politcs: 94.69, social: 80.77},
  ]

  axis1 = [
    {dataKey: 'politcs', unit: '%', name: 'قضايا سياسية'},
    {dataKey: 'social',  unit: '%', name: 'قضايا مطلبية'}
  ]

  render() {
    return (
      <div>
        <div className="main">
          <Chart
            data={this.data1}
            axis={this.axis1}
            label=" نسبة الميل للحبس"
          />
        </div>
      </div>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import WindowSizeListener from 'react-window-size-listener';
import Chart from '../../components/chart';

class Main extends Component {
  state = {
    $mainRef: null,
    height: 0,
    width: 0,
    scene: 0.01,
    tab: 1,
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

  data2 = [
    {time: '',     q: 'نوفمبر وديسمبر', event: 'إقرار قانون التظاهر', all: 626, notGuilty: 209},
    {time: '2014', q: 'الربع الأول',      event: 'مظاهرات في الذكرى الثالثة للثورة', all: 431, notGuilty: 384},
    {time: '',     q: 'الربع الثاني',     all: 231, notGuilty: 59},
    {time: '',     q: 'الربع  الثالث',     all: 304, notGuilty: 79},
    {time: '',     q: 'الربع  الأخير',    all: 355, notGuilty: 40},
    {time: '2015', q: 'الربع الأول',      event: 'مظاهرات في الذكرى الرابعة للثورة', all: 371, notGuilty: 50},
    {time: '',     q: 'الربع الثاني',     all: 130, notGuilty: 21},
    {time: '',     q: 'الربع  الثالث',     all: 19,  notGuilty: 1},
    {time: '',     q: 'الربع الأخير',     all: 30,  notGuilty: 8},
    {time: '2016', q: 'الربع  الأول',     all: 46,  notGuilty: 5},
    {time: '',     q: 'الربع الثاني',     event: 'مظاهرات تيران وصنافير', all: 48,  notGuilty: 9},
    {time: '',     q: 'الربع  الثالث',     all: 6,   notGuilty: 3},
    {time: '',     q: 'الربع الأخير',     all: 26,  notGuilty: 12}
  ]

  axis1 = [
    {dataKey: 'politcs', unit: '%', name: 'قضايا سياسية'},
    {dataKey: 'social',  unit: '%', name: 'قضايا مطلبية'}
  ]

  axis2 = [
    {dataKey: 'all',       unit: ' سنة', name: 'العمر الضائع في الحبس'},
    {dataKey: 'notGuilty', unit: ' سنة', name: 'العمر الضائع في الحبس قبل البراءة'}
  ]

  getMainRef = el => {
    this.setState({$mainRef: el}, this.updateBoundries);
  };

  getScene = () => {
    const element = document.documentElement;
    const scroll = element.scrollTop;
    const height = element.scrollHeight - element.clientHeight;

    return (scroll / height);
  }

  updateBoundries = () => {
    const { width, height } = this.state.$mainRef.getBoundingClientRect();

    this.setState({
      width,
      height
    }, this.handleScroll);
  };

  handleScroll = () => {
    this.setState({
      scene: this.getScene()
    });
  }

  setTab = tab => () => {
    window.scrollTo(0, 0);
    this.setState({tab, scene: 0});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const chartHeight = this.state.height - 10;
    const chartWidth = this.state.width - 20;

    return (
      <div>
        <div className="header">
          <div className="row center-md middle-md">
            <div className="col-md shrink">
              <div className="header__btns">
                <button
                  data-wenk="نسبة الميل للحبس هي نسبة المتهمين الذين قررت النيابة حبسهم احتياطيًا مرة على اﻷقل"
                  data-wenk-pos="right"
                  onClick={this.setTab(1)}
                  className={this.state.tab === 1 ? 'is-active' : ''}
                >الميل للحبس الاحتياطي</button>
                <button
                  data-wenk="مجموع السنوات التي ضاعت من أعمار المتهمين في الحبس الاحتياطي"
                  data-wenk-pos="left"
                  onClick={this.setTab(2)}
                  className={this.state.tab === 2 ? 'is-active' : ''}
                >مجموع العمر الضائع</button>
              </div>
            </div>
          </div>
        </div>

        <WindowSizeListener onResize={this.updateBoundries} />

        <div style={{height: '800vh'}}/>
        <div ref={this.getMainRef} className="main">
          {this.state.$mainRef && this.state.height && (
            <div>
              {
                this.state.tab === 1 && <Chart
                  data={this.data1}
                  axis={this.axis1}
                  width={chartWidth}
                  height={chartHeight}
                  scene={this.state.scene}
                  label=" نسبة الميل للحبس"
                />
              }
              {
                this.state.tab === 2 && <Chart
                  data={this.data2}
                  axis={this.axis2}
                  width={chartWidth}
                  height={chartHeight}
                  scene={this.state.scene}
                  label="عدد سنوات الحبس"
                />
              }
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Main;

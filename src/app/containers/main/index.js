import React, { Component } from 'react';
import { connect } from 'react-redux';
import WindowSizeListener from 'react-window-size-listener';
import Chart from '../../components/chart';
import Chart3 from '../../components/chart3';

class Main extends Component {
  state = {
    $mainRef: null,
    height: 0,
    width: 0,
    scene: 0.01,
    tab: 3,
    $line1Length: 0,
    $line2Length: 0
  };

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
    this.setState({tab});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const chartHeight = this.state.height - 80;
    const chartWidth = this.state.width - 80;

    return (
      <div>
        <div className="header">
          <div className="row center-md middle-md">
            <div className="col-md shrink">
              <div className="header__btns">
                <button onClick={this.setTab(1)} className={this.state.tab === 1 ? 'is-active' : ''}>الميل للحبس</button>
                <button onClick={this.setTab(2)} className={this.state.tab === 2 ? 'is-active' : ''}>مدة الحبس</button>
                <button onClick={this.setTab(3)} className={this.state.tab === 3 ? 'is-active' : ''}>مجموع العمر</button>
              </div>
            </div>
          </div>
        </div>

        <WindowSizeListener onResize={this.updateBoundries} />

        <div style={{height: '800vh'}}/>
        <div ref={this.getMainRef} className="main">
          {this.state.$mainRef && this.state.height && (
            <div>
              {this.state.tab === 1 && <Chart width={chartWidth} height={chartHeight} scene={this.state.scene} />}
              {this.state.tab === 3 && <Chart3 width={chartWidth} height={chartHeight} scene={this.state.scene} />}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  data
});

export default connect(mapStateToProps)(Main);

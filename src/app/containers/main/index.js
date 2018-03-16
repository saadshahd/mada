import React, { Component } from 'react';
import { connect } from 'react-redux';
import WindowSizeListener from 'react-window-size-listener';
import Header from '../../components/header';
import Chart from '../../components/chart';

class Main extends Component {
  state = {
    $mainRef: null,
    $scrollRef: null,
    height: 0,
    width: 0,
    viewHeight: 0,
    scene: 1
  };

  getMainRef = el => {
    this.setState({
      $mainRef: el
    });
  };

  getScrollRef = el => {
    this.setState({
      $scrollRef: el
    });
  };

  getScene = (scroll = window.scrollY) => this.state.viewHeight / scroll

  updateBoundries = () => {
    const { width, height } = this.state.$mainRef.getBoundingClientRect();
    const viewHeight = this.state.$scrollRef.offsetHeight;

    this.setState({
      width,
      height,
      viewHeight
    });
  };

  handleScroll = () => {
    this.setState({
      scene: this.getScene(this.scrollY)
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        <Header />
        <WindowSizeListener onResize={this.updateBoundries} />

        <div ref={this.getScrollRef} style={{height: '1600vh'}}/>
        <div ref={this.getMainRef} className="main">
          {this.state.$mainRef && (
            <Chart width={this.state.width} height={this.state.height} scene={this.state.scene} />
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

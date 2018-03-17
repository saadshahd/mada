import React, { Component } from 'react';
import { connect } from 'react-redux';
import WindowSizeListener from 'react-window-size-listener';
import Header from '../../components/header';
import Chart from '../../components/chart';

class Main extends Component {
  state = {
    $mainRef: null,
    height: 0,
    width: 0,
    scene: 0.01
  };

  getMainRef = el => {
    this.setState({$mainRef: el}, this.updateBoundries);
  };

  getScene = () => {
    const scrollY = window.scrollY || 1;

    return this.state.height ? (scrollY / this.state.height) / 8 : 0;
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

        <div style={{height: 'calc(800vh - 576px)'}}/>
        <div ref={this.getMainRef} className="main">
          {this.state.$mainRef && this.state.height && (
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

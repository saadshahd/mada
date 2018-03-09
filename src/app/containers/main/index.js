import React, { Component } from 'react';
import { connect } from 'react-redux';
import WindowSizeListener from 'react-window-size-listener';
import Header from '../../components/header';
import Chart from '../../components/chart';

class Main extends Component {
  state = {
    activeLayer: 0,
    $mainRef: null,
    height: 0,
    width: 0
  };

  getMainRef = el => {
    this.setState({
      $mainRef: el
    });
  };

  updateBoundries = () => {
    const { width, height } = this.state.$mainRef.getBoundingClientRect();

    this.setState({ width, height });
  };

  render() {
    return (
      <div>
        <Header />
        <WindowSizeListener onResize={this.updateBoundries} />

        <div ref={this.getMainRef} className="main">
          {this.state.$mainRef && (
            <Chart width={this.state.width} height={this.state.height} />
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

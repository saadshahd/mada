import * as R from 'ramda';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parallax from 'react-springy-parallax';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';
import Chart from '../../components/chart';

class Main extends Component {
  state = {
    activeLayer: 0
  };

  getParallaxRef = parallax => {
    this.parallax = parallax;
  };

  handleScrollToClick = offset => () => {
    this.parallax.scrollTo(offset);
    this.setState({ activeLayer: offset });
  };

  render() {
    const sidebarItems = this.props.data.stats;
    const footerItems = R.drop(1, R.keys(this.props.data));

    console.log(footerItems);

    return (
      <div className={`layer-${this.state.activeLayer}`}>
        <Header />
        <Sidebar
          items={sidebarItems}
          activeLayer={this.state.activeLayer}
          scrollTo={this.handleScrollToClick}
        />
        <Chart />
        <div
          style={{
            backgroundColor: '#333',
            marginLeft: -50,
            paddingLeft: 50,
            height: '100vh',
            position: 'relative'
          }}
        >
          <Parallax
            ref={this.getParallaxRef}
            scrolling={false}
            style={{ transform: 'none' }}
            pages={5}
          >
            <Parallax.Layer offset={0} speed={0}>
              <div className="layer">
                <span>Layers can contain anything</span>
              </div>
            </Parallax.Layer>
            <Parallax.Layer offset={1} speed={0}>
              <div className="layer">
                <span>Layer 2222n anything</span>
              </div>
            </Parallax.Layer>
            <Parallax.Layer offset={2} speed={0}>
              <div className="layer">
                <span>Laye33333 anything</span>
              </div>
            </Parallax.Layer>
            <Parallax.Layer offset={3} speed={0}>
              <div className="layer">
                <span>Laye4444 anything</span>
              </div>
            </Parallax.Layer>
            <Parallax.Layer offset={4} speed={0}>
              <div className="layer">
                <span>Lay555555 anything</span>
              </div>
            </Parallax.Layer>
          </Parallax>
        </div>
        <Footer items={footerItems} />
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  data
});

export default connect(mapStateToProps)(Main);

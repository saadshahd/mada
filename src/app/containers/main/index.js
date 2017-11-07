import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';

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
    return (
      <div className={`layer-${this.state.activeLayer}`}>
        <Header />
        <Sidebar
          activeLayer={this.state.activeLayer}
          scrollTo={this.handleScrollToClick}
        />
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
        <Footer />
      </div>
    );
  }
}

export default Main;

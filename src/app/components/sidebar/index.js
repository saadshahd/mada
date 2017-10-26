import React, { Component } from 'react';

class Sidebar extends Component {
  isActive = idx => this.props.activeLayer === idx;
  getClassName = idx => (this.isActive(idx) ? `is-active` : '');
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li className={this.getClassName(0)}>
            <button onClick={this.props.scrollTo(0)}>
              قرار أول عرض على النيابة
            </button>
          </li>
          <li className={this.getClassName(1)}>
            <button onClick={this.props.scrollTo(1)}>خلال أسبوع حبس</button>
          </li>
          <li className={this.getClassName(2)}>
            <button onClick={this.props.scrollTo(2)}>خلال شهر حبس</button>
          </li>
          <li className={this.getClassName(3)}>
            <button onClick={this.props.scrollTo(3)}>خلال 6 شهور حبس</button>
          </li>
          <li className={this.getClassName(4)}>
            <button onClick={this.props.scrollTo(4)}>خلال سنة حبس</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;

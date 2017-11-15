import * as R from 'ramda';
import React, { Component } from 'react';

class Sidebar extends Component {
  isActive = idx => this.props.activeLayer === idx;
  getClassName = idx => (this.isActive(idx) ? `is-active` : '');
  render() {
    return (
      <div className="sidebar">
        <ul>
          {R.addIndex(R.map)((item, idx) => (
            <li className={this.getClassName(idx)} key={item}>
              <button onClick={this.props.scrollTo(idx)}>{item}</button>
            </li>
          ))(this.props.items)}
        </ul>
      </div>
    );
  }
}

export default Sidebar;

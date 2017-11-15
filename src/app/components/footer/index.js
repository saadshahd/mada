import * as R from 'ramda';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul>
          {R.addIndex(R.map)((item, idx) => (
            <li key={item}>
              <button>{item}</button>
            </li>
          ))(this.props.items)}
        </ul>
      </div>
    );
  }
}

export default Footer;

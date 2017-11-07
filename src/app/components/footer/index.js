import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul>
          <li className="is-active">
            <button>قرار أول عرض على النيابة</button>
          </li>
          <li>
            <button>خلال أسبوع حبس</button>
          </li>
          <li>
            <button>خلال شهر حبس</button>
          </li>
          <li className="is-active">
            <button>خلال 6 شهور حبس</button>
          </li>
          <li>
            <button>خلال سنة حبس</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;

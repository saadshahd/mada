import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="row center-md middle-md">
          <div className="col-md shrink">
            <div className="header__btns">
              <button className="is-active">el mil</button>
              <button>modet elhabs</button>
              <button>magmo3 ela3mar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Lunomics</a>
          </div>
          <ul className="nav navbar-nav">
            <li ><a href="#">Home</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#"><span className="glyphicon glyphicon-user"></span>name</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
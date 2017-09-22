import React, { Component } from 'react'

export default class Header extends Component {

  render () {
    return (
      <header className="header">
        <div className="cube">
          <div className="origin active">
            <div className="wall front" />
            <div className="wall left" />
            <div className="wall back" />
            <div className="wall right" />
            <div className="wall top" />
            <div className="wall bottom" />
          </div>
        </div>
        <h1>FANTASY</h1>
        <small>Life is a long long journey.</small>
      </header>
    )
  }
}

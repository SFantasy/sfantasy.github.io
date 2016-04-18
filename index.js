import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './src/Header'
import Footer from './src/Footer'

import './src/style.scss'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main>
        <Header />
        <Footer />
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('home')
)

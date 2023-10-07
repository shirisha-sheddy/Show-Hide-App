// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onClickFirstNameBtn = () => {
    console.log('clicked')
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onClickLastNameBtn = () => {
    console.log('Click')
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div className="name-container">
            <button
              className="btn"
              type="button"
              onClick={this.onClickFirstNameBtn}
            >
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className="btn"
              type="button"
              onClick={this.onClickLastNameBtn}
            >
              Show/Hide lastname
            </button>
            {isLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {ShowFirstButton: false, ShowLastButton: false}

  onShowHideFirstName = () => {
    this.setState(prevState => ({
      ShowFirstButton: !prevState.ShowFirstButton,
    }))
  }

  onShowHideLastName = () => {
    this.setState(prevState => ({
      ShowLastButton: !prevState.ShowLastButton,
    }))
  }

  render() {
    const {ShowFirstButton, ShowLastButton} = this.state
    return (
      <div className="main-bg-container">
        <h1 className="main-heading">Show/Hide</h1>
        <div className="button-card-container">
          <div className="container-name1">
            <button
              type="button"
              className="main-button1"
              onClick={this.onShowHideFirstName}
            >
              Show/Hide Firstname
            </button>
            {ShowFirstButton && <p className="button-name">Joe</p>}
          </div>
          <div className="container-name1">
            <button
              type="button"
              className="main-button1"
              onClick={this.onShowHideLastName}
            >
              Show/Hide Lastname
            </button>
            {ShowLastButton && <p className="button-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide

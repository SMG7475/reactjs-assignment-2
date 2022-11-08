/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem/index'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    username: '',
    password: '',
  }

  onSubmibmission = event => {
    const {passwordsList} = this.state
    event.preventDefault()
    const newPassword = {
      id: uuidv4(),
      website: event.target.website.value,
      username: event.target.username.value,
      password: event.target.password.value,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
    }))
  }

  render() {
    const {passwordsList, website, username, password} = this.state
    console.log(passwordsList)
    const lengthOfList = passwordsList.length
    return (
      <div className="main-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          alt="app logo"
        />
        <div className="container">
          <div className="top-container">
            <div className="form-container">
              <form className="form" onSubmit={this.onSubmibmission}>
                <p>Add New Password</p>
                <div className="website-input">
                  <img
                    className="input-image"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                  <input
                    id="website"
                    className="input"
                    type="text"
                    placeholder="Enter Website"
                  />
                </div>
                <div className="website-input">
                  <img
                    className="input-image"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                  <input
                    id="username"
                    className="input"
                    type="text"
                    placeholder="Enter Username"
                  />
                </div>
                <div className="website-input">
                  <img
                    className="input-image"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                  <input
                    id="password"
                    className="input"
                    type="text"
                    placeholder="Enter Website"
                  />
                </div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <img
              className="password-manager-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
          <div className="bottom-container">
            <div className="bottom-header">
              <p>Your Passwords {lengthOfList}</p>
              <div className="bottom-search-input-container">
                <img
                  className="input-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input type="text" className="input" placeholder="Search" />
              </div>
            </div>
            <hr />
            {lengthOfList === 0 && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
              />
            )}
            <ul className="list-container">
              {passwordsList.map(each => (
                <PasswordItem key={each.id} details={each} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager

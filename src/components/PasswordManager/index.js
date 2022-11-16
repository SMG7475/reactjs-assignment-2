/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem/index'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    isChecked: true,
    searchInput: '',
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const filteredPasswordsData = passwordsList.filter(each => each.id !== id)
    this.setState({
      passwordsList: filteredPasswordsData,
    })
  }

  checkbox = () => {
    const {isChecked} = this.state
    this.setState({isChecked: !isChecked})
  }

  onSubmibmission = event => {
    const form = document.getElementById('form')
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
    form.reset()
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {passwordsList, isChecked, searchInput} = this.state
    const searchResults = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const lengthOfList = searchResults.length
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
              <form id="form" className="form" onSubmit={this.onSubmibmission}>
                <h1>Add New Password</h1>
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
                    type="password"
                    placeholder="Enter Password"
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
              <div className="length">
                <h1>Your Passwords</h1>
                <p className="length-of-list">{lengthOfList}</p>
              </div>
              <div className="bottom-search-input-container">
                <img
                  className="input-image"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input
                  type="search"
                  className="input"
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <hr />
            <div className="show-passwords-container">
              <div>
                <input id="checkbox" type="checkbox" onClick={this.checkbox} />
                <label htmlFor="checkbox">Show Passwords</label>
              </div>
            </div>
            <div className="no-passwords-container">
              {lengthOfList === 0 && (
                <div className="no-password-container">
                  <p>No Passwords</p>
                  <img
                    className="no-passwords-image"
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                    alt="no passwords"
                  />
                </div>
              )}
            </div>
            <ul className="list-container">
              {searchResults.map(each => (
                <PasswordItem
                  key={each.id}
                  details={each}
                  isChecked={isChecked}
                  deletePassword={this.deletePassword}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager

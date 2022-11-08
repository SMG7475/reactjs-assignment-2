import {Component} from 'react'
import './index.css'

class PasswordItem extends Component {
  constructor(props) {
    super(props)
    this.state = {isDeleted: true}
  }

  onDelete = () => {
    const {details, deletePassword} = this.props
    const {id} = details
    deletePassword(id)
  }

  render() {
    const {isDeleted} = this.state
    const {details, isChecked} = this.props
    const {website, username, password} = details
    const firstLetter = username[0]

    return (
      <div>
        {isDeleted && (
          <li className="list-item">
            <p className="first-letter">{firstLetter}</p>
            <div className="vals">
              <p>{website}</p>
              <p>{username}</p>
              {isChecked ? (
                <img
                  className="stars"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
                  alt="stars"
                />
              ) : (
                <p>{password}</p>
              )}
            </div>
            <button
              type="button"
              className="delete-button"
              onClick={this.onDelete}
            >
              <img
                className="delete-image"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                alt="delete"
              />
            </button>
          </li>
        )}
      </div>
    )
  }
}
export default PasswordItem

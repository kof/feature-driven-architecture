import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Profile = ({ login, avatarUrl, name }) => (
  <div>
    <Link to={`/${login}`}>
      <img src={avatarUrl} alt={login} width="72" height="72" />
      <h3>
        {login} {name && <span>({name})</span>}
      </h3>
    </Link>
  </div>
)

Profile.propTypes = {
  login: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string,
}

export default Profile

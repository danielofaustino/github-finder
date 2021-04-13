import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="profile_img"
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>

      <div>
        <a href={html_url} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

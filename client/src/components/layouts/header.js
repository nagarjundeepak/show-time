import React from 'react';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import {logoutUser} from '../../store/actions/authActions';

function Header (props) {
  const {isAuthenticated} = props.auth;
  const handleClick = () => {
    props.logoutUser ();
    alert ('you are logging out!');
  };
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Show Time
        </Link>
        <ul className="navbar-nav">
          {isAuthenticated
            ? <div
                style={{
                  display: 'flex',
                  width: '200px',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <li className="nav-item">
                    <NavLink to="/dashboard" className="nav-link">
                      My Ratings
                    </NavLink>
                  </li>
                </div><div onClick={handleClick}>
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">
                      Logout
                    </NavLink>
                  </li>
                </div>
              </div>
            : <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  minWidth: '150px',
                }}
              >
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
              </div>}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect (mapStateToProps, {logoutUser}) (Header);

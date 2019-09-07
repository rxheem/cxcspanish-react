import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavItem = props => {
  return (
    <Fragment>
      <Link to={props.to} className='navbar-item'>
        { props.hasIcon ? ( <i className={props.iconClass} style={{ color: props.color }} />) : null }
        {props.title}
      </Link>
    </Fragment>
  )
}

export default NavItem;

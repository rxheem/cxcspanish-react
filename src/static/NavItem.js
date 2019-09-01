import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavItem = props => {
  return (
    <Fragment>
      <a href={props.to} className='navbar-item'>
        { props.hasIcon ? ( <i className={props.iconClass} style={{ color: props.color }} />) : null }
        {props.title}
      </a>
    </Fragment>
  )
}

export default NavItem;

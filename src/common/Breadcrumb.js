import React from 'react';

const Breadcrumb = props => {
  return (
    <nav className='breadcrumb' ariaLabel='breadcrumbs'>
      <ul>
        <li><a href="/">Home</a></li>
        { props.children }
      </ul>
    </nav>
  )
}

export default Breadcrumb;

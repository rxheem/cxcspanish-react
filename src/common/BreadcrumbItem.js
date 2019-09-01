import React from 'react';

const BreadcrumbItem = props => {
  return (
    <li>
      <a href={ props.href }> { props.title } </a>
    </li>
  )
}

export default BreadcrumbItem;

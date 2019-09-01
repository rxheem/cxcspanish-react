import React, { Component } from 'react';

import uuid from 'uuid/v4';

// Common imports
import Breadcrumb from '../common/Breadcrumb';
import BreadcrumbItem from '../common/BreadcrumbItem';

class ExamTopics extends Component {
  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='container'>
        {/* Braedcrumb */}
        <Breadcrumb>
          <BreadcrumbItem title='Exam Topics' href='/exam-topics' />
        </Breadcrumb>

        <h1 className="title is-4">Exam Topics</h1>
      </div>
    )
  }
}

export default ExamTopics;

import React, {Component } from 'react';

// Common inports
import Breadcrumb from '../common/Breadcrumb';
import IconItem from '../common/IconItem';
import DoubleIconItem from '../common/DoubleIconItem';

class Home extends Component {
  render(){

      const listStyle = {
        marginLeft: '15px',
        marginBottom: '10px'
      }
    return (
      <div className="container">
        <Breadcrumb />

        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <h3 className='title is-4'>We're Almost There</h3>
            <p>
              We're preparing our study materials for you, and this takes times.
              These include:
            </p>

            <ul style={{ paddingTop: '20px' }}>
              <IconItem liStyle={listStyle} iconColor={'brown'} text='Exercise booklets' />
              <IconItem liStyle={listStyle} iconColor={'red'} text='Study notes' />
              <IconItem liStyle={listStyle} iconColor={'pink'} text='Video tutorials' />
              <IconItem liStyle={listStyle} iconColor={'orange'} text='Handouts' />
              <IconItem liStyle={listStyle} iconColor={'black'} text='Practice/ mock exams' />
              <IconItem liStyle={listStyle} iconColor={'teal'} text='Articles and discussions' />

            </ul>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <h3 className='title is-4'>Need more info?</h3>

            <ul>
              <IconItem liStyle={listStyle} iconColor={'orange'} text={
                <span>
                  Have questions? Read out <a href='/FAQ'>FAQ</a>.
                </span>
              } />
            </ul>

            <br />
            <p>Join our mailing list! and get</p>

            <ul style={{ paddingTop: '20px' }}>
              <DoubleIconItem liStyle={listStyle} iconColor={'blue'} text='free weekly past paper exercises' />
              <DoubleIconItem liStyle={listStyle} iconColor={'grey'} text='free weekly study notes' />
              <DoubleIconItem liStyle={listStyle} iconColor={'purple'} text='instantly notified about new posts' />
            </ul>

            <br />
            <p>
              Send us an email at <a href='mailto:hola@cxcspanish.com'>hola@cxcspanish.com</a> with additional inquiries and know when we go live.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

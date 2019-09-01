import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Fragment>
      <br />
    <footer id="footer" class="footer has-background-dark">
      <h4>CXC Spanish Guide | Study Notes, Past Papers and Exercises</h4>
      <br />
      
      <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
          <h3 class="title is-6 has-text-white">POPULAR GUIDES</h3>

          <ul>
            <li><a href=''>Pronunciation Tips</a></li>
            <li><a href=''>Adverbs</a></li>
            <li><a href=''>'Ser' vs. 'Estar'</a></li>
            <li><a href=''>Spanish Tongue Twisters</a></li>
            <li><a href=''>Numbers in Spanish</a></li>
          </ul>
          <br className='is-hidden-desktop' />
        </div>
        <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
          <h3 class="title is-6 has-text-white">AWESOME TOOLS WE USE</h3>

          <ul>
            <li><a href='https://www.spanishdict.com' target='_blank'>SpanishDict</a></li>
            <li><a href='https://www.cxc.org' target='_blank'>CXC</a></li>
            <li><a href='https://cxc-store.com' target='_blank'>CXC Store</a></li>
            <li><a href='https://www.passmycxc.com/courses/view/spanish' target='_blank'>Pass My CXC</a></li>
          </ul>
          <br className='is-hidden-desktop' />
        </div>
        <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
          <h3 class="title is-6 has-text-white">JUMP START</h3>
          <ul>
            <li><a href=''>Letter Writing</a></li>
            <li><a href=''>Contextual Announcement</a></li>
            <li><a href=''>Directed Situations</a></li>
            <li><a href=''>Oral Exercises</a></li>
            <li><a href=''>Reading Comprehension</a></li>
          </ul>
          <br className='is-hidden-desktop' />
        </div>
        <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3'>
          <h3 class="title is-6 has-text-white">PRESS</h3>
          <ul>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/terms-of-use'>Terms of Use</a></li>
            <li><a href='/privacy-policy'>Privacy Policy</a></li>
            <li><a href='/contact'>Contact Us</a></li>
            <li><a href='/sitemap'>View Sitemap</a></li>
          </ul>
          <br className='is-hidden-desktop' />
        </div>
      </div>

      <br/>
      <div class="has-text-centered">
        © 2018 Copyright {' '}
        <a href="https://www.cxcspanish.com">CXC Spanish Online</a>
      </div>
    </footer>
    </Fragment>
  )
}

export default Footer;

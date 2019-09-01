import React, { Component } from 'react';
import FAQItem from '../common/FAQItem';
import uuid from 'uuid/v4';

// Common imports
import Breadcrumb from '../common/Breadcrumb';
import BreadcrumbItem from '../common/BreadcrumbItem';


class Contact extends Component {

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='container'>

        {/* Braedcrumb */}
        <Breadcrumb>
          <BreadcrumbItem title='Contact' href='/contact' />
        </Breadcrumb>

        <div className='row'>

          {/* First column */}
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <h1 className="title is-4">Contact Us</h1>

            <p>
            Whether you're a beginner or just looking for some refreshers, we
            want to express gratitue for letting us be a part of your journey.
            </p>

            <br />
            <p>
            Before proceeding, read our {' '}
            <a href="/FAQ">Frequently Asked Quesions</a> to see if your
            question might of already been answered. These include:
            </p>
            <br />

            <FAQItem id={ uuid() } iconColor='#e0218a' question='What is the cost of this course?' answer='All the lessons, guides are completely free of cost and no sign up is required.' />
            <FAQItem id={ uuid() } iconColor='#0abab5' question='Will it be helping me with my orals?' answer='Yes, we will a review of the oral exam, practice exercises, pronunciation and study tips.' />
            <FAQItem id={ uuid() } iconColor='orange' question='How often will we receive mailers?' answer='We will send weekly emails and free monthly exercises.' />

            <br />
          </div>

          {/* Second column */}
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <div className='columns'>
              <div className='column'>
                <section>
                  <h1 className='title is-5'>General Inquiries</h1>
                  <ul>
                    <li>
                      <i
                        style={{ color: 'green' }}
                        className='fas fa-phone-alt inline-icon'
                      ></i>
                      (876) XXX-XXXX
                    </li>
                    <br />
                    <li>
                      <i
                        style={{ color: 'grey' }}
                        className="fas fa-envelope inline-icon"
                      ></i>
                      <a href="mailto:hola@cxcspanish.com">hola@cxcspanish.com</a>
                    </li>
                  </ul>
                </section>
              </div>

              <div className='column'>
                <h1 className="title is-5">Social Media</h1>

                <ul>
                  <li>
                    <i style={{ color: 'green' }} className="fab fa-facebook inline-icon facebook-blue" />
                      <a href="www.facebook.comcxcspanishguide" target="_blank">
                      CXC Spanish Guide
                      </a>
                  </li>
                  <br />
                  <li>
                    <i
                      style={{ color: '#E1306C' }}
                      class="fab fa-instagram inline-icon"
                    ></i>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/cxcspanish/"
                      >cxcspanish</a
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div className="video-container">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="600"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=kingston%20jamaica&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe
                  >Kingston, Jamaica
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;

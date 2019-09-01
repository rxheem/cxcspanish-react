import React, { Component } from 'react';

// Imports
import uuid from 'uuid/v4';
import Breadcrumb from '../common/Breadcrumb';
import BreadcrumbItem from '../common/BreadcrumbItem';
import FAQItem from '../common/FAQItem';

class FAQ extends Component {
  render() {
    return (
      <div className='container'>

        {/* Braedcrumb */}
        <Breadcrumb>
          <BreadcrumbItem title='Frequently Asked Questions' href='/FAQ' />
        </Breadcrumb>

         <h4 className='title is-4'>FAQ</h4>

         <p>
          Here we've listed some of our most frequently asked questions. If your
          question isn't asnwered, please send us an email at {' '}
          <a href='mailto:hola@cxcspanish.com'>hola@cxcspanish.com</a>.
        </p>
        <br />

        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>

            {/* All Quesions */}
            <FAQItem id={uuid()} iconColor='blue' question='What is CXC Spanish Online?' answer={
              <div>
                CXC Spanish Online is a free online study guide for students sitting the CXC
                Spanish exam at the CSEC level that aims to assist students
                score higher in class on and pass their exams.
              </div>
            }/>

            <FAQItem id={uuid()} iconColor='orange' question='Are the courses free?' answer='Most of the lessons and guides are completely free of cost.'/>

            <FAQItem id={uuid()} iconColor='yellow' question='When will the website be ready?' answer='We currenly project that we be live towards the end of September.' />
            <FAQItem id={uuid()} iconColor='green' question='Will it be helping me with my orals?' answer='Yes, we will a review of the oral exam, practice exercises, pronunciation and study tips.' />
            <FAQItem id={uuid()} iconColor='black' question='Will it focus on all aspects of the CSEC Spanish Syallabus?' answer='We will be covering all exam topics on Paper I and Paper II.' />

          </div>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>

            {/* All Quesions */}
            <FAQItem id={uuid()} iconColor='purple' question='How often will you be posting activities?' answer={
              <div>
                <p>
                  Our initial releases will include more than enough
                  activities to keep you busy. After that, we intend to start
                  uploading new weekly starting in December.
                </p>
                <br />
                <p>
                  It is important to note that while we will have interactive
                  activities online, the majority of our activities will be in
                  a free downloadable PDF format. You can check out all the
                  activities we currently have
                  <a href="/resources">here</a>
                </p>
              </div>
            } />
            <FAQItem id={uuid()} iconColor='grey' question='Am I required to sign up?' answer='No, you are not required to sign up to use our website and donwload our material.' />
            <FAQItem id={uuid()} iconColor='skyblue' question='Will you guys be using official CXC past papers?' answer={
              <p>
                Yes, we will be using over <b>11 YEARS</b> worth of past
                papers, as well as lesson plans and guides.
              </p>
            } />
            <FAQItem id={uuid()} iconColor='limegreen' question='Apart from the syllabus topics, what other additional' answer={
              <div>
                <p>
                  We will be postinig a lot of additional learning content,
                  such as
                </p>

                <br />
                <ul style={{ listStyle: 'disc', paddingLeft: '35px' }}>
                  <li>Study tips</li>
                  <li>At the airport scenarios</li>
                  <li>Greetings and common courtesy</li>
                  <li>Food, food and more food! <i class="em em-yum"></i></li>
                  <li>Spanish Cultures</li>
                  <li>At the home</li>
                  <li>Asking for directions</li>
                </ul>
              </div>
            } />
            <FAQItem id={uuid()} iconColor='gainsboro' question='Where are we based?' answer='We are a small team based in Kingston, Jamaica.' />
          </div>
        </div>

      </div>
    )
  }
}

export default FAQ;

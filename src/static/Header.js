import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

// Improt NavItem
import NavItem from './NavItem';

class Header extends Component {

  componentDidMount() {
    $(document).ready(function() {

    // Displays the full menu on click for mobile devices
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
      });
    });

    // Hides the navigation menu after a menu item is selected
    $(document).ready(function() {

    $(".navbar-item").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      });
    });
  }

  render() {
    return (
      <header>
        <nav
          role='navigation'
          className='navbar has-shadow is-spaced is-danger'
          aria-label='main navigation'
          >

          <div className='navbar-brand'>
            <Link className='navbar-item' to='/'>
              <h1 className='title is-5' style={{ paddingBottom: '1px' }}>
                <span style={{ color: 'white' }}>CXC Spanish Guide</span>
              </h1>
            </Link>

            <a
              role='button'
              className='navbar-burger burger'
              aria-label='menu'
              aria-expanded='false'
              data-target='mainNavbar'
              >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id='mainNavbar' className='navbar-menu'>
            <div className='navbar-start'>

              {/* Exam topics dropdown */}
              <div className='navbar-item has-dropdown is-hoverable'>
                <a className='navbar-link' href='/exam-topics'>
                  Exam Topics
                </a>

                <div className='navbar-dropdown'>
                  <NavItem hasIcon={true} iconClass={'fas fa-angle-double-right inline-icon'} color={'orange'} title='Directed Situations' to='/topics/directed-situations' />
                  <NavItem hasIcon={true} iconClass={'fas fa-angle-double-right inline-icon'} color={'pink'} title='Letter Writing' to='/topics/letter-writing' />
                  <NavItem hasIcon={true} iconClass={'fas fa-angle-double-right inline-icon'} color={'red'} title='Composition' to='/topics/composition' />
                  <NavItem hasIcon={true} iconClass={'fas fa-angle-double-right inline-icon'} color={'limegreen'} title='Contextual Announcement' to='/topics/contextual-announcement' />
                  <NavItem hasIcon={true} iconClass={'fas fa-angle-double-right inline-icon'} color={'purple'} title='Contextual Dialogue' to='/topics/contextual-dialogue' />
                  <NavItem hasIcon={true} iconClass={'fas fa-angle-double-right inline-icon'} color={'grey'} title='Reading Comprehension' to='/topics/reading-comprehension' />

                  <hr class='navbar-divider' />
                  <NavItem hasIcon={true} iconClass={'fas fa-angle-double-right inline-icon'} color={'black'} title='View All' to='/exam-topics' />
                </div>
              </div>

              <NavItem title='Guide' to='/guide' />

              {/* Verb tenses dropdown */}
              <div className='navbar-item has-dropdown is-hoverable'>
                <a className='navbar-link'>Verb Tenses</a>

                <div className='navbar-dropdown'>
                  <NavItem hasIcon={true} iconClass={'fas fa-caret-right inline-icon'} color={'grey'} title='Present Tense' to='/tenses/present-tense' />
                  <NavItem hasIcon={true} iconClass={'fas fa-caret-right inline-icon'} color={'red'} title='Present Progressive' to='/tenses/present-progressive' />
                  <NavItem hasIcon={true} iconClass={'fas fa-caret-right inline-icon'} color={'grey'} title='Preterite Tense' to='/tenses/preterite-tense' />
                  <NavItem hasIcon={true} iconClass={'fas fa-caret-right inline-icon'} color={'teal'} title='Imperfect Tense' to='/tenses/imperfect-tense' />
                  <NavItem hasIcon={true} iconClass={'fas fa-caret-right inline-icon'} color={'purple'} title='Conditional Tense' to='/tenses/conditional-tense' />
                  <NavItem hasIcon={true} iconClass={'fas fa-caret-right inline-icon'} color={'skyblue'} title='Future Tense' to='/tenses/future-tense' />
                  <NavItem hasIcon={true} iconClass={'fas fa-caret-right inline-icon'} color={'yellow'} title='Subjunctive Mood' to='/tenses/subjunctive-mood' />

                  <hr class='navbar-divider' />
                  <NavItem hasIcon={true} iconClass={'fas fa-caret-right inline-icon'} color={'coral'} title='View All' to='/tense' />
                </div>
              </div>

              <NavItem title='Resources' to='/resources' />
              <NavItem title='Blog' to='/blog' />
              <NavItem title='eTests' to='/etests' />
            </div>

            <div className='navbar-end'>
              <NavItem hasIcon={true} iconClass={'fas fa-users inline-icon'} title='About Us' to='/about' />
              <NavItem hasIcon={true} iconClass={'fas fa-chalkboard-teacher inline-icon'} title='Tutoring' to='/tutoring' />
              <NavItem hasIcon={true} iconClass={'far fa-comment inline-icon'} title='FAQ' to='/FAQ' />
              <NavItem hasIcon={true} iconClass={'fas fa-id-badge inline-icon'} title='Contact' to='/contact' />
            </div>
          </div>
        </nav>

        <br />
      </header>
    )
  }
}

export default Header;

/* eslint-disable sonarjs/no-duplicate-string */
import React, { Component } from 'react';
import '../css/AboutNav.css';

class AboutNav extends Component {
  constructor() {
    super();
    this.state = { mainSkills: true,
      experience: false,
      education: false };
  }

  changeSelected =({ target }) => {
    const selected = document.querySelector('.selected2');
    if (selected) {
      selected.classList.remove('selected2');
    }
    target.classList.add('selected2');
    const selected2 = document.querySelector('.selected2');
    const validSkill = selected2.classList.contains('mainSkills');
    if (validSkill) { this.setState({ mainSkills: true }); } else {
      this.setState({ mainSkills: false });
    }
    const validEducation = selected2.classList.contains('education');
    if (validEducation) { this.setState({ education: true }); } else {
      this.setState({ education: false });
    }
    const validExperience = selected2.classList.contains('experience');
    if (validExperience) { this.setState({ experience: true }); } else {
      this.setState({ experience: false });
    }
  }

  validateRender =() => {

  }

  render() {
    const { mainSkills, education, experience } = this.state;
    return (
      <div>
        <div className="about__nav">
          <a
            style={ { fontSize: '20px',
              fontWeight: '500' } }
            className=" mainSkills selected2"
            onClick={ this.changeSelected }
            href="#main-skills"
          >
            Main Skills

          </a>
          <a
            style={ { fontSize: '20px',
              fontWeight: '500' } }
            className="experience"
            onClick={ this.changeSelected }
            href="#experience"
          >
            Experience

          </a>
          <a
            style={ { fontSize: '20px',
              fontWeight: '500' } }
            className="education"
            onClick={ this.changeSelected }
            href="#education"
          >
            Education

          </a>
        </div>
        {
          mainSkills && (
            <div
              style={ { display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start' } }
            >
              <p>Html, CSS, JS, React</p>
              <p>Redux</p>
              <p>React Testing Library</p>
              <p>Agile methodology</p>
            </div>)
        }
        {
          education && (
            <div
              style={ { display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start' } }
            >
              <p>
                {' '}
                <strong> Full Stack Web Development </strong>
                {' '}
                - Trybe 2022
              </p>
              <p>
                {' '}
                <strong> Game Development  </strong>
                {' '}
                - Unicuritiba 2019
              </p>
              <p>
                {' '}
                <strong> Computer Engineering </strong>
                {' '}
                - UNISO 2016
              </p>
              <p>
                {' '}
                <strong> Assistant Manager </strong>
                {' '}
                - CIEE  2014
              </p>
            </div>)
        }
        {
          experience && (
            <div
              style={ { display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start' } }
            >
              <p>Web Development Student</p>
              <p>TI Analist</p>
              <p>Marketing Assistant</p>
              <p>Financial Assistant </p>
              <p>Manager Assistant</p>
            </div>)
        }

      </div>
    );
  }
}

export default AboutNav;

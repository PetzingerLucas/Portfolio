import React, { Component } from 'react';
import ProjectsCard from '../components/ProjectsCard';
import '../css/Portfolio.css';
import projects from '../assets/services/projects';

class Portfolio extends Component {
  render() {
    return (
      <section
        style={ { backgroundColor: '#101010',
          width: '100%',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center' } }
      >
        <div id="portfolio" className="portfolio__page">
          <h1 style={ { width: '100%', fontSize: '60px' } }>My Latest Projects</h1>
          {projects.map(({ name, tools, image, link }) => (
            <ProjectsCard
              key={ name }
              name={ name }
              tools={ tools }
              image={ image }
              link={ link }
            />))}
        </div>
      </section>);
  }
}

export default Portfolio;

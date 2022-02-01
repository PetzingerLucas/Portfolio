import React, * as react from 'react';
import { FaCss3Alt, FaJsSquare } from 'react-icons/fa';

class ProjectsCard extends react.Component {
  render() {
    const { name, image, tools, link } = this.props;
    return (
      <div className="portfolio__card">
        <a href={ link } target="_blank" rel="noopener noreferrer">
          <h3 style={ { zIndex: '0' } }>{name}</h3>
          <img src={ image } alt={ name } />
          <span>
            {tools}
            <FaJsSquare />
            <FaCss3Alt />
          </span>
        </a>
      </div>);
  }
}

export default ProjectsCard;

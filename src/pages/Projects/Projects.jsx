import React from 'react';
import { Link } from 'react-router-dom';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPager } from '@fortawesome/free-solid-svg-icons';
// Components
import Image from '../../components/ResponsiveImage';
import ELibrary from '../../components/Projects/ELibrary/ELibrary';
// Style
import './projects.scss';

library.add(faPager);

const desk = require.context('../../../public/images/sets/', true, /desk-(300|768|1280)w\.png$/);

export const ProjectList = [
  {
    id: 0,
    title: 'E-Library',
    preview: desk,
    status: 'visible',
    description: (
      <p>
        Online library where users can access, download books and view
        details using the metadata stored in the book&apos;s file with an extension like
        {' '}
        <em>epub</em>
        ,
        {' '}
        <em>mobi</em>
        {' '}
        and more.
      </p>),
    component: <ELibrary />,
  },
];

export default function Projects() {
  return (
    <section id="intro" className="projects">
      <header>
        <h1>
          My recent
          {' '}
          <em>Works</em>
        </h1>
        <p>See the projects I&apos;ve worked on recently</p>
      </header>
      <section className="product-list">
        {ProjectList.filter(({ status }) => status !== 'hidden').map(({
          id, title, preview, description,
        }) => (
          <article key={id} id={`product-${id}`} className="product">
            <section className="preview">
              <Image loader={preview} alt="Product preview" />
            </section>
            <h2>{title}</h2>
            <section className="description">
              {description}
            </section>
            <Link to={`/projects/${id}`} className="visit">
              <FontAwesomeIcon icon={faPager} />
              {' '}
              View
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}

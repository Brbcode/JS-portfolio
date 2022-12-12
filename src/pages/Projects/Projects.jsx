import React from 'react';
import { Link, useParams } from 'react-router-dom';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPager } from '@fortawesome/free-solid-svg-icons';
// Components
import Image from '../../components/ResponsiveImage';
import NotFound from '../../components/NotFound/NotFound';
// Style
import './projects.scss';

library.add(faPager);

const elib = require.context('../../../public/images/sets/', true, /desk-(300|768|1280)w\.png$/);

export const ProjectList = [
  {
    id: 0,
    title: 'E-Library',
    preview: elib,
    status: 'visible',
    description: (
      <>
        <p>p1</p>
        <p>p2</p>
      </>),
  },
];

export function Project() {
  const { id } = useParams();
  const ids = {
    test: {
      title: 'Test project route',
      element: <h1>Element found</h1>,
    },
  };

  if (ids[id] === undefined) return <NotFound />;
  return (
    <>
      <h2>
        {ids[id].title}
      </h2>
      {ids[id].element}
    </>
  );
}

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
            <Image loader={preview} alt="Product preview" />
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

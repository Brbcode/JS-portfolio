import React from 'react';
import { Link, useParams } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';

export default function Projects() {
  return (
    <section id="intro">
      <h1>
        My recent
        <em>Works</em>
      </h1>
      <p>See the projects I&apos;ve worked on recently</p>
      <br />
      <Link to="test">Test</Link>
    </section>
  );
}

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

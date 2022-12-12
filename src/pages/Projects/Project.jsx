import React from 'react';
import { useParams } from 'react-router-dom';
// Components
import NotFound from '../../components/NotFound/NotFound';
import { ProjectList } from './Projects';
// Style
import './project.scss';

export default function Project() {
  const { id } = useParams();
  const ids = ProjectList.filter(({ status }) => status !== 'hidden');

  if (ids[id] === undefined) return <NotFound />;
  return (
    <>
      <section id="intro" className="product-intro">
        <h2>
          {ids[id].title}
        </h2>
      </section>

      {ids[id].element}
    </>
  );
}

import React from 'react';
import Card from './Card';

const projects = [
  {
    name: 'Spot',
    description: 'The best boy',
    id: 1,
  },
  {
    name: 'Zero',
    description: 'A kind soul',
    id: 2,
  },
  {
    name: 'Walter',
    description: 'Friend for life',
    id: 3,
  },
];


export default function CardContent() {
  return (
    <div>
      {projects.map((project) => (
        <Card name={project.name} description={project.description} key={project.id} />
      ))}
    </div>
  );
}

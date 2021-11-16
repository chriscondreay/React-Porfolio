import React from 'react';
import Card from './Card';

const projects = [
  {
    name: 'Music Forum',
    description: 'A music forum to read and post bands, fans, and concerts',
    id: 1,
    
  },
  {
    name: 'Pints and Pixels',
    description: 'Got a favorite bar? Want to explore new pubs? Pints and Pixels will point you in the right direction',
    id: 2,
  },
  {
    name: 'A Wheel Good Time',
    description: 'Plan a road trip and site see while your at it! Might also need some bathrooms breaks too',
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

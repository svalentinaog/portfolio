import React from 'react';
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [lg] = useTranslation();

  const projectsData = [
    {
      image: 'eventox.png',
      name: 'EventoX',
      description: "Plataforma Integral de Eventos.",
      technologies: "Next.js, Redux Toolkit, SCSS, Bootstrap, TypeScript, NestJS, Express.js, PostgreSQL, MySQL, Microservicios, Firebase, Mercado Pago."
    },

    {
      image: 'spootchat.png',
      name: 'SpootChat',
      description: "Donde la Música y la Comunidad se Encuentran.",
      technologies: "React, Vite.js, Redux, CSS3, Tailwind CSS, Node.js, Express.js, MongoDB, PostgreSQL, Sequelize, Redis, Arquitectura MVC, Firebase, Mercado Pago."
    },
  ];

  return (
    <div id='section4' className='container-projects paddings'>

      <h1>{lg("projects1")}</h1>

      <div className='all-projects'>
        {projectsData.map((project, index) => (
          <div key={index} className='content-project'>
            <div className='image-project'>
              <img className='' src={`images/${project.image}`} alt="about" />
            </div>
            <h3>
              {project.name}
              <small> - {project.description}</small>
            </h3>
            <p>
              {project.technologies}
            </p>
            <button><p>{lg("projects2")}</p></button>
          </div>
        ))}
      </div>

    </div>
  );
}



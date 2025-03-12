import React from 'react';
import './AboutMe.css';

const AboutMe = () => {

const customHeader = (
<div className="about-me-header">
    <div className="profile-image-container">
    <img
        src="/carolina-dominguez.jpg"
        alt="Carolina Domínguez Pérez"
        className="profile-image"
        onError={(e) => {
        e.target.src = `https://www.gravatar.com/avatar/carolina@ejemplo.com?d=mp`;
        }}
    />
    </div>
    <div className="header-content">
    <h2>Carolina Domínguez Pérez</h2>
    <h3>Desarrolladora Full Stack</h3>
    <p>Apasionada por crear soluciones tecnológicas innovadoras</p>
    </div>
</div>
);

return (
<div className="about-me-container">
    {customHeader}
    <div className="about-me-content">
    <p>
        Soy una desarrolladora full stack apasionada por la creación de soluciones tecnológicas innovadoras. 
        Mi objetivo es transformar ideas en realidad a través del código, construyendo aplicaciones web y móviles 
        que sean funcionales, eficientes y visualmente atractivas.
    </p>
    <p>
        Con experiencia en el desarrollo tanto del frontend como del backend, me siento cómoda trabajando con 
        tecnologías como React, Node.js, Express, MongoDB y PostgreSQL. Me encanta aprender nuevas herramientas 
        y metodologías para mantenerme al día con las últimas tendencias en el mundo del desarrollo de software.
    </p>
    <p>
        Además de mi pasión por la programación, disfruto colaborar en equipo, resolver problemas complejos y 
        aportar valor a cada proyecto en el que participo. Estoy siempre dispuesta a asumir nuevos desafíos y 
        a superar las expectativas.
    </p>
    </div>
</div>
);
};

export default AboutMe;

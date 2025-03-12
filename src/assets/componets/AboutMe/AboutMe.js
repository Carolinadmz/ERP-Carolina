"use client"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import { Timeline } from "primereact/timeline"
import { Card } from "primereact/card"
import "./AboutMe.css"

export default function AboutMe({ visible, onHide }) {
const experiences = [
    {
    title: "Desarrolladora Full Stack",
    company: "ERP Solutions",
    date: "2023 - Presente",
    description:
        "Desarrollo de sistemas ERP y soluciones empresariales utilizando React, Node.js y bases de datos SQL.",
    icon: "pi pi-code",
    color: "#1a4b8e",
    },
    {
    title: "Ingeniera de Software",
    company: "Tech Innovations",
    date: "2021 - 2023",
    description: "Desarrollo de aplicaciones web y móviles con enfoque en experiencia de usuario.",
    icon: "pi pi-desktop",
    color: "#2196F3",
    },
    // Puedes añadir más experiencias según necesites
]

const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "SQL", level: 75 },
    { name: "HTML/CSS", level: 85 },
]

const customHeader = (
    <div className="about-me-header">
    <div className="profile-image-container">
        <img
        src="/carolina-dominguez.jpg"
        alt="Carolina Domínguez Pérez"
        className="profile-image"
        onError={(e) => {
            e.target.src = `https://www.gravatar.com/avatar/carolina@ejemplo.com?d=mp`
        }}
        />
    </div>
    <div className="header-content">
        <h2>Carolina Domínguez Pérez</h2>
        <h3>Desarrolladora Full Stack</h3>
        <p>Apasionada por crear soluciones tecnológicas innovadoras</p>
    </div>
    </div>
)

return (
    <Dialog
    visible={visible}
    onHide={onHide}
    header={customHeader}
    className="about-me-dialog"
    breakpoints={{ "960px": "75vw", "641px": "90vw" }}
    style={{ width: "60vw" }}
    >
    <div className="about-me-content">
        <section className="about-section">
        <h3>Sobre Mí</h3>
        <p>
            Soy una desarrolladora Full Stack con experiencia en la creación de aplicaciones web modernas y sistemas
            empresariales. Mi enfoque se centra en construir soluciones escalables y mantenibles que resuelvan problemas
            reales del negocio.
        </p>
        <p>
            Con un fuerte conocimiento en tecnologías front-end y back-end, me especializo en crear experiencias de
            usuario intuitivas y atractivas respaldadas por arquitecturas robustas y eficientes.
        </p>
        </section>

        <section className="skills-section">
        <h3>Habilidades Técnicas</h3>
        <div className="skills-container">
            {skills.map((skill, index) => (
            <div key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: `${skill.level}%` }} />
                </div>
            </div>
            ))}
        </div>
        </section>

        <section className="experience-section">
        <h3>Experiencia Profesional</h3>
        <Timeline
            value={experiences}
            content={(item) => (
            <Card className="experience-card">
                <h4>{item.title}</h4>
                <h5>{item.company}</h5>
                <p className="experience-date">{item.date}</p>
                <p>{item.description}</p>
            </Card>
            )}
            marker={(item) => (
            <span className="custom-marker" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
            )}
        />
        </section>

        <section className="contact-section">
        <h3>Contacto</h3>
        <div className="contact-buttons">
            <Button
            icon="pi pi-envelope"
            label="Email"
            className="p-button-outlined"
            onClick={() => (window.location.href = `mailto:carolina@ejemplo.com`)}
            />
            <Button
            icon="pi pi-linkedin"
            label="LinkedIn"
            className="p-button-outlined"
            onClick={() => window.open("https://linkedin.com/in/carolina-dominguez", "_blank")}
            />
            <Button
            icon="pi pi-github"
            label="GitHub"
            className="p-button-outlined"
            onClick={() => window.open("https://github.com/carolina-dominguez", "_blank")}
            />
        </div>
        </section>
    </div>
    </Dialog>
)
}


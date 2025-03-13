"use client"
import { useEffect } from "react"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import { Timeline } from "primereact/timeline"
import { Card } from "primereact/card"
import { Divider } from "primereact/divider"
import { Badge } from "primereact/badge"
import "./AboutMe.css"

export default function AboutMe({ visible, onHide, user }) {
  // Efecto para animar las barras de habilidades cuando el diálogo es visible
useEffect(() => {
    if (visible) {
    const skillBars = document.querySelectorAll(".skill-bar")
    skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        setTimeout(() => {
        bar.style.width = `${width}%`
        }, 300)
    })
    }
}, [visible])

const experiences = [
    {
    title: "Proyecto ERP Universitario",
    company: "Universidad Tecnológica",
    date: "2023 - Presente",
    description:
        "Desarrollo de un sistema ERP para la gestión de recursos universitarios utilizando React, Node.js y bases de datos SQL.",
    icon: "pi pi-code",
    color: "#1a4b8e",
    },
    {
    title: "Prácticas Profesionales",
    company: "Tech Solutions",
    date: "2022 - 2023",
    description:
        "Colaboración en el desarrollo de aplicaciones web empresariales y análisis de datos para toma de decisiones.",
    icon: "pi pi-desktop",
    color: "#2196F3",
    },
    {
    title: "Proyecto Académico",
    company: "Facultad de Negocios",
    date: "2021 - 2022",
    description:
        "Desarrollo de un sistema de análisis de datos para pequeñas empresas como parte del proyecto final de la materia de Sistemas de Información.",
    icon: "pi pi-chart-bar",
    color: "#4CAF50",
    },
]

const skills = [
    { name: "React", level: 85, icon: "pi pi-code" },
    { name: "JavaScript", level: 80, icon: "pi pi-code" },
    { name: "Node.js", level: 75, icon: "pi pi-server" },
    { name: "SQL", level: 70, icon: "pi pi-database" },
    { name: "HTML/CSS", level: 85, icon: "pi pi-file-code" },
    { name: "Análisis de Datos", level: 80, icon: "pi pi-chart-bar" },
    { name: "Gestión de Proyectos", level: 75, icon: "pi pi-briefcase" },
]

const customHeader = (
    <div className="about-me-header">
    <div className="profile-image-container">
        <img
          src="/carolina-profile.jpg" // Actualizado a .jpeg
        alt="Carolina Domínguez"
        className="profile-image"
        onError={(e) => {
            e.target.src = `https://www.gravatar.com/avatar/carolina@ejemplo.com?d=mp`
        }}
        />
    </div>
    <div className="header-content">
        <h2>Carolina Domínguez</h2>
        <h3>Estudiante de Tecnologías de la Información en los Negocios</h3>
        <p>Apasionada por la innovación tecnológica aplicada a soluciones empresariales</p>
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
            Soy estudiante de la carrera de Tecnologías de la Información en los Negocios, actualmente cursando el 6to
            semestre. Me apasiona el desarrollo de soluciones tecnológicas que resuelvan problemas reales en el ámbito
            empresarial.
        </p>
        <p>
            Mi enfoque académico combina conocimientos técnicos de programación y sistemas con fundamentos de
            administración y negocios, lo que me permite entender tanto las necesidades tecnológicas como los objetivos
            estratégicos de las organizaciones.
        </p>
        <p>
            Actualmente estoy desarrollando un sistema ERP como proyecto universitario, aplicando metodologías ágiles y
            tecnologías modernas para crear una solución integral de gestión empresarial.
        </p>
        </section>

        <section className="education-section">
        <h3>Educación</h3>
        <Card className="education-card">
            <div className="education-content">
            <div className="education-icon">
                <i className="pi pi-book"></i>
            </div>
            <div className="education-details">
                <h4>Licenciatura en Tecnologías de la Información en los Negocios</h4>
                <h5>Universidad Tecnológica Nacional</h5>
                <p className="education-date">2021 - Presente</p>
                <div className="education-badges">
                <Badge value="Promedio: 9.2" severity="success" className="education-badge" />
                <Badge value="6to Semestre" severity="info" className="education-badge" />
                </div>
            </div>
            </div>
        </Card>

        <Divider />

        <Card className="education-card">
            <div className="education-content">
            <div className="education-icon">
                <i className="pi pi-certificate"></i>
            </div>
            <div className="education-details">
                <h4>Certificación en Desarrollo Web</h4>
                <h5>Plataforma Educativa Online</h5>
                <p className="education-date">2022</p>
            </div>
            </div>
        </Card>
        </section>

        <section className="skills-section">
        <h3>Habilidades Técnicas</h3>
        <div className="skills-container">
            {skills.map((skill, index) => (
            <div key={index} className="skill-item">
                <div className="skill-header">
                <i className={skill.icon}></i>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: visible ? `${skill.level}%` : "0%" }} />
                </div>
            </div>
            ))}
        </div>
        </section>

        <section className="experience-section">
        <h3>Experiencia Académica y Proyectos</h3>
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
            onClick={() => (window.location.href = `mailto:carolina.dominguez@estudiantes.utn.edu.ar`)}
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


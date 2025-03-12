"use client"
import { useState, useEffect } from "react"
import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import { Timeline } from "primereact/timeline"
import { Card } from "primereact/card"
import { Divider } from "primereact/divider"
import { TabView, TabPanel } from "primereact/tabview"
import { ProgressBar } from "primereact/progressbar"
import { Badge } from "primereact/badge"
import { Ripple } from "primereact/ripple"
import "./AboutMe.css"

export default function AboutMe({ visible, onHide }) {
  const [activeTab, setActiveTab] = useState(0)
  const [animateSkills, setAnimateSkills] = useState(false)

  useEffect(() => {
    if (visible && activeTab === 1) {
      // Delay animation to make it visible after tab switch
      const timer = setTimeout(() => {
        setAnimateSkills(true)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      setAnimateSkills(false)
    }
  }, [visible, activeTab])

  const experiences = [
    {
      title: "Desarrolladora Full Stack",
      company: "ERP Solutions",
      date: "2023 - Presente",
      description:
        "Desarrollo de sistemas ERP y soluciones empresariales utilizando React, Node.js y bases de datos SQL.",
      icon: "pi pi-briefcase",
      color: "#1a4b8e",
      tags: ["React", "Node.js", "SQL", "ERP"],
    },
    {
      title: "Ingeniera de Software",
      company: "Tech Innovations",
      date: "2021 - 2023",
      description: "Desarrollo de aplicaciones web y móviles con enfoque en experiencia de usuario.",
      icon: "pi pi-desktop",
      color: "#2196F3",
      tags: ["JavaScript", "React Native", "UX/UI"],
    },
    {
      title: "Desarrolladora Frontend",
      company: "Digital Solutions",
      date: "2019 - 2021",
      description: "Creación de interfaces de usuario modernas y responsivas para aplicaciones web.",
      icon: "pi pi-palette",
      color: "#4CAF50",
      tags: ["HTML/CSS", "JavaScript", "React"],
    },
  ]

  const skills = [
    { name: "React", level: 90, icon: "pi pi-react", color: "#61DAFB" },
    { name: "JavaScript", level: 85, icon: "pi pi-code", color: "#F7DF1E" },
    { name: "Node.js", level: 80, icon: "pi pi-server", color: "#339933" },
    { name: "SQL", level: 75, icon: "pi pi-database", color: "#336791" },
    { name: "HTML/CSS", level: 85, icon: "pi pi-file-code", color: "#E34F26" },
    { name: "Git", level: 82, icon: "pi pi-github", color: "#F05032" },
    { name: "Docker", level: 70, icon: "pi pi-box", color: "#2496ED" },
    { name: "AWS", level: 65, icon: "pi pi-cloud", color: "#FF9900" },
  ]

  const projects = [
    {
      title: "Sistema ERP Empresarial",
      description: "Desarrollo de un sistema ERP completo con módulos de RRHH, Contabilidad y Ventas.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      link: "#",
    },
    {
      title: "Aplicación de Gestión de Inventario",
      description: "Aplicación para gestionar inventario en tiempo real con reportes y análisis.",
      technologies: ["React", "Express", "MongoDB", "Chart.js"],
      link: "#",
    },
    {
      title: "Dashboard Analítico",
      description: "Panel de control para visualización de datos empresariales con gráficos interactivos.",
      technologies: ["React", "D3.js", "Firebase", "Material UI"],
      link: "#",
    },
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
        <div className="profile-status">
          <span className="status-dot"></span>
          <span className="status-text">Disponible para proyectos</span>
        </div>
      </div>
      <div className="header-content">
        <h2>Carolina Domínguez Pérez</h2>
        <h3>Desarrolladora Full Stack</h3>
        <p>Apasionada por crear soluciones tecnológicas innovadoras</p>
        <div className="social-links">
          <Button
            icon="pi pi-linkedin"
            className="p-button-rounded p-button-text p-button-sm"
            onClick={() => window.open("https://linkedin.com/in/carolina-dominguez", "_blank")}
          />
          <Button
            icon="pi pi-github"
            className="p-button-rounded p-button-text p-button-sm"
            onClick={() => window.open("https://github.com/carolina-dominguez", "_blank")}
          />
          <Button
            icon="pi pi-twitter"
            className="p-button-rounded p-button-text p-button-sm"
            onClick={() => window.open("https://twitter.com/carolina_dev", "_blank")}
          />
        </div>
      </div>
    </div>
  )

  const renderExperienceContent = (item) => (
    <Card className="experience-card p-ripple" style={{ borderLeftColor: item.color }}>
      <Ripple />
      <div className="experience-header">
        <h4>{item.title}</h4>
        <span className="experience-date">{item.date}</span>
      </div>
      <h5>{item.company}</h5>
      <p>{item.description}</p>
      <div className="experience-tags">
        {item.tags.map((tag, i) => (
          <Badge key={i} value={tag} severity="info" className="experience-tag" />
        ))}
      </div>
    </Card>
  )

  const renderExperienceMarker = (item) => (
    <span className="custom-marker" style={{ backgroundColor: item.color }}>
      <i className={item.icon}></i>
    </span>
  )

  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header={customHeader}
      className="about-me-dialog"
      breakpoints={{ "960px": "80vw", "641px": "95vw" }}
      style={{ width: "70vw", maxWidth: "1200px" }}
      dismissableMask
      draggable={false}
    >
      <div className="about-me-content">
        <TabView activeIndex={activeTab} onTabChange={(e) => setActiveTab(e.index)}>
 



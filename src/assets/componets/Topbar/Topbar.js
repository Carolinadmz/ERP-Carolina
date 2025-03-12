"use client"

import { useState, useRef } from "react"
import { Toolbar } from "primereact/toolbar"
import { Avatar } from "primereact/avatar"
import { Button } from "primereact/button"
import { Menu } from "primereact/menu"
import { useAuth0 } from "@auth0/auth0-react"
import { Sidebar } from "primereact/sidebar"
import { Tooltip } from "primereact/tooltip"
import AboutMe from "../AboutMe/AboutMe"
import "./Topbar.css"

export default function Topbar() {
const { user, logout } = useAuth0()
const [visible, setVisible] = useState(false)
const [aboutMeVisible, setAboutMeVisible] = useState(false)
  // Usar useRef en lugar de useState para el menú
const userMenu = useRef(null)

const userMenuItems = [
    {
    label: "Perfil",
    icon: "pi pi-user",
    command: () => (window.location.href = "/profile"),
    },
    {
    label: "Cerrar Sesión",
    icon: "pi pi-power-off",
    command: () => logout({ returnTo: window.location.origin }),
    },
]

const menuItems = [
    {
    label: "Dashboard",
    icon: "pi pi-chart-bar",
    className: "menu-item",
    command: () => (window.location.href = "/dashboard"),
    },
    {
    label: "RH",
    icon: "pi pi-users",
    className: "menu-item",
    command: () => (window.location.href = "/rh"),
    },
    {
    label: "Contabilidad",
    icon: "pi pi-calculator",
    className: "menu-item",
    command: () => (window.location.href = "/contabilidad"),
    },
    {
    label: "Ventas",
    icon: "pi pi-shopping-cart",
    className: "menu-item",
    command: () => (window.location.href = "/ventas"),
    },
]

const startContent = (
    <div className="topbar-start">
    <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="p-button-text p-button-plain" />
    </div>
)

const endContent = (
    <div className="topbar-end">
    <Button
        id="about-me-button"
        icon="pi pi-user"
        className="p-button-rounded p-button-text p-button-plain about-me-button"
        onClick={() => setAboutMeVisible(true)}
        aria-label="About Me"
    />
    <Tooltip target="#about-me-button" content="About Me" position="bottom" />

    <div className="user-profile" onClick={(e) => userMenu.current.toggle(e)}>
        <Avatar
        image={user?.picture || `https://www.gravatar.com/avatar/${user?.email ? btoa(user.email) : "0"}?d=mp`}
        shape="circle"
        className="user-avatar"
        />
        <span className="user-name">{user?.name || "Usuario"}</span>
    </div>
    <Menu model={userMenuItems} popup ref={userMenu} />
    </div>
)

return (
    <>
    <div className="card">
        <Toolbar start={startContent} end={endContent} className="topbar" />
    </div>

    <Sidebar visible={visible} onHide={() => setVisible(false)} className="custom-sidebar">
        <div className="sidebar-header">
        <h2>ERP System</h2>
        </div>
        <div className="sidebar-menu">
        {menuItems.map((item, index) => (
            <div key={index} className="menu-item" onClick={item.command}>
            <i className={item.icon}></i>
            <span>{item.label}</span>
            </div>
        ))}
        </div>

        <div className="sidebar-footer">
        <Avatar
            image={user?.picture || `https://www.gravatar.com/avatar/${user?.email ? btoa(user.email) : "0"}?d=mp`}
            shape="circle"
            className="user-avatar"
        />
        <div className="user-info">
            <span className="user-name">{user?.name || "Usuario"}</span>
            <span className="user-email">{user?.email || "correo@ejemplo.com"}</span>
        </div>
        </div>
    </Sidebar>

      {/* Componente About Me */}
    <AboutMe visible={aboutMeVisible} onHide={() => setAboutMeVisible(false)} user={user} />
    </>
)
}


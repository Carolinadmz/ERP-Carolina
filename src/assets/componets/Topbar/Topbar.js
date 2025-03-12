"use client"

import { useState } from "react"
import { Menubar } from "primereact/menubar"
import { Button } from "primereact/button"
import { Avatar } from "primereact/avatar"
import { Tooltip } from "primereact/tooltip"
import AboutMe from "./AboutMe"
import "./Topbar.css"

function Topbar({ user }) {
  const [aboutMeVisible, setAboutMeVisible] = useState(false)

  const start = (
    <div className="topbar-start">
      <h2 className="app-logo">ERP Solutions</h2>
    </div>
  )

  const end = (
    <div className="topbar-end">
      <Tooltip target=".about-me-button" position="bottom" />
      <Button
        icon="pi pi-user"
        className="about-me-button p-button-rounded p-button-text"
        onClick={() => setAboutMeVisible(true)}
        data-pr-tooltip="Sobre Mí"
        aria-label="Sobre Mí"
      />

      {user && (
        <div className="user-profile">
          <Avatar
            image={user.picture || "/carolina-dominguez.jpg"}
            shape="circle"
            className="user-avatar"
            onError={(e) => {
              e.target.src = `https://www.gravatar.com/avatar/carolina@ejemplo.com?d=mp`
            }}
          />
          <span className="user-name">{user.name || "Carolina Domínguez"}</span>
        </div>
      )}
    </div>
  )

  return (
    <>
      <Menubar start={start} end={end} className="topbar" />

      <AboutMe visible={aboutMeVisible} onHide={() => setAboutMeVisible(false)} />
    </>
  )
}

export default Topbar


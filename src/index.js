import React from "react"
import { createRoot } from "react-dom/client"
import { Auth0Provider } from "@auth0/auth0-react"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "bootstrap/dist/css/bootstrap.min.css"

const root = createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-kdqtkxvgayafze2r.us.auth0.com"
      clientId="CorEjmj7b1veNMtXYUGX4oSpDj9LFpb5"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
)

reportWebVitals()

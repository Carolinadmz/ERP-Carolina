import React, { useState, useEffect, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function SidebarMenu() {
const [visible, setVisible] = useState(false);
const { user } = useAuth0();
const menu = useRef(null);

  // Opciones del menú principal
const items = [
    {
    label: 'Dashboard',
    icon: 'pi pi-chart-bar',
    command: () => {
        window.location.href = '/dashboard';
    }
    },
    {
    label: 'RH',
    icon: 'pi pi-users',
    items: [
        {
        label: 'Empleados',
        icon: 'pi pi-user',
        command: () => {
            window.location.href = '/rh/empleados';
        }
        },
        {
        label: 'Nómina',
        icon: 'pi pi-money-bill',
        command: () => {
            window.location.href = '/rh/nomina';
        }
        },
        {
        label: 'Vacaciones',
        icon: 'pi pi-calendar',
        command: () => {
            window.location.href = '/rh/vacaciones';
        }
        }
    ]
    },
    {
    label: 'Contabilidad',
    icon: 'pi pi-calculator',
    items: [
        {
        label: 'Facturas',
        icon: 'pi pi-file',
        command: () => {
            window.location.href = '/contabilidad/facturas';
        }
        },
        {
        label: 'Gastos',
        icon: 'pi pi-wallet',
        command: () => {
            window.location.href = '/contabilidad/gastos';
        }
        },
        {
        label: 'Reportes',
        icon: 'pi pi-chart-line',
        command: () => {
            window.location.href = '/contabilidad/reportes';
        }
        }
    ]
    },
    {
    label: 'Ventas',
    icon: 'pi pi-shopping-cart',
    items: [
        {
        label: 'Clientes',
        icon: 'pi pi-users',
        command: () => {
            window.location.href = '/ventas/clientes';
        }
        },
        {
        label: 'Pedidos',
        icon: 'pi pi-list',
        command: () => {
            window.location.href = '/ventas/pedidos';
        }
        },
        {
        label: 'Productos',
        icon: 'pi pi-box',
        command: () => {
            window.location.href = '/ventas/productos';
        }
        }
    ]
    }
];

return (
    <div className="sidebar-container">
      {/* Botón hamburguesa para abrir el Sidebar */}
    <Button 
        icon="pi pi-bars" 
        onClick={() => setVisible(true)} 
        className="hamburger-button p-button-rounded p-button-text"
    />

    <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="custom-sidebar"
        style={{ width: '300px' }}
    >
        <div className="sidebar-content">
          {/* Header del Sidebar con logo */}
        <div className="sidebar-header">
            <img 
            src="/logo.png" 
            alt="ERP Logo" 
            onError={(e) => e.target.src='https://via.placeholder.com/150x50?text=ERP+Logo'} 
            height="50"
            />
            <h2>ERP System</h2>
        </div>

          {/* Menú principal */}
        <div className="sidebar-menu-container">
            <Menu model={items} className="w-full" />
        </div>
          {/* Perfil de usuario */}
        <div className="sidebar-footer">
            <Avatar 
            image={user?.picture || `https://www.gravatar.com/avatar/${user?.email ? btoa(user.email) : '0'}?d=mp`}
            shape="circle" 
            className="user-avatar"
            />
            <div className="user-info">
            <span className="user-name">{user?.name || 'Usuario'}</span>
            <span className="user-email">{user?.email || 'correo@ejemplo.com'}</span>
            </div>
        </div>
        </div>
    </Sidebar>
    </div>
);
}
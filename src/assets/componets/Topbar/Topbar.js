import React, { useState, useRef } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { useAuth0 } from "@auth0/auth0-react";
import { Sidebar } from 'primereact/sidebar';
import './Topbar.css';

export default function Topbar() {
    const { user, logout } = useAuth0();
    const [visible, setVisible] = useState(false);
    // Usar useRef en lugar de useState para el menú
    const userMenu = useRef(null);

    const userMenuItems = [
        {
            label: 'Cerrar Sesión',
            icon: 'pi pi-power-off',
            command: () => logout({ returnTo: window.location.origin })
        }
    ];

    const menuItems = [
        {
            label: 'Dashboard',
            icon: 'pi pi-chart-bar',
            className: 'menu-item',
            command: () => window.location.href = '/dashboard'
        },
        {
            label: 'RH',
            icon: 'pi pi-users',
            className: 'menu-item',
            command: () => window.location.href = '/rh'
        },
        {
            label: 'Contabilidad',
            icon: 'pi pi-calculator',
            className: 'menu-item',
            command: () => window.location.href = '/contabilidad'
        },
        {
            label: 'Ventas',
            icon: 'pi pi-shopping-cart',
            className: 'menu-item',
            command: () => window.location.href = '/ventas'
        }
    ];

    const startContent = (
        <Button 
            icon="pi pi-bars" 
            onClick={() => setVisible(true)} 
            className="p-button-text p-button-plain"
        />
    );

    const endContent = (
        <div className="flex align-items-center gap-2">
            <div 
                className="user-profile"
                onClick={(e) => userMenu.current.toggle(e)}
            >
                <Avatar 
                    image={user?.picture || `https://www.gravatar.com/avatar/${user?.email ? btoa(user.email) : '0'}?d=mp`} 
                    shape="circle" 
                    className="user-avatar"
                />
                <span className="user-name">{user?.name || 'Usuario'}</span>
            </div>
            <Menu model={userMenuItems} popup ref={userMenu} />
        </div>
    );

    return (
        <>
            <div className="card">
                <Toolbar 
                    start={startContent} 
                    end={endContent} 
                    className="topbar"
                />
            </div>

            <Sidebar 
                visible={visible} 
                onHide={() => setVisible(false)}
                className="custom-sidebar"
            >
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
                        image={user?.picture || `https://www.gravatar.com/avatar/${user?.email ? btoa(user.email) : '0'}?d=mp`}
                        shape="circle" 
                        className="user-avatar"
                    />
                    <div className="user-info">
                        <span className="user-name">{user?.name || 'Usuario'}</span>
                        <span className="user-email">{user?.email || 'correo@ejemplo.com'}</span>
                    </div>
                </div>
            </Sidebar>
        </>
    );
}
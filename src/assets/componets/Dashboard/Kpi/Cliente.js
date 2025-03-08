import React from 'react'; 
import { Card } from 'primereact/card';



export default function Cliente() {
    return (
        <div className="card">
            <Card title="Total de clientes">
                <p className="m-0">
                    Campaña de Marketing = 10
                    Campaña de Activos = 100
                    Campaña de Potenciales = 20
                    Clientes Perdidos = 5
                    Clientes Ganados = 10
                    Clientes totales= 150
                </p>
            </Card>
        </div>
    )
}
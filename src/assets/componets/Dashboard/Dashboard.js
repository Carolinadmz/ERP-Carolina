import React from 'react'; 
import { Card } from 'primereact/card';
import { Chart } from 'primereact/chart';
import './Dashboard.css';

export default function Dashboard() {
    // Datos para el gráfico de clientes
    const clientesData = {
        labels: ['Marketing', 'Activos', 'Potenciales', 'Perdidos', 'Ganados'],
        datasets: [
            {
                data: [10, 100, 20, 5, 10],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ],
                hoverBackgroundColor: [
                    '#FF4569',
                    '#2693E6',
                    '#FFBD31',
                    '#36B2B2',
                    '#8A50FF'
                ]
            }
        ]
    };

    // Datos para el gráfico de ventas
    const ventasData = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Ventas 2023',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                borderColor: '#4BC0C0',
                tension: 0.4
            },
            {
                label: 'Ventas 2022',
                data: [8, 15, 7, 4, 3, 2],
                fill: false,
                borderColor: '#FF6384',
                tension: 0.4
            }
        ]
    };

    // Datos para el gráfico de gastos
    const gastosData = {
        labels: ['Operativos', 'Marketing', 'Salarios', 'Tecnología', 'Otros'],
        datasets: [
            {
                data: [300, 50, 100, 75, 25],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ],
                hoverBackgroundColor: [
                    '#FF4569',
                    '#2693E6',
                    '#FFBD31',
                    '#36B2B2',
                    '#8A50FF'
                ]
            }
        ]
    };

    // Datos para el gráfico de empleados
    const empleadosData = {
        labels: ['RH', 'Ventas', 'Desarrollo', 'Administración', 'Soporte'],
        datasets: [
            {
                label: 'Empleados por departamento',
                backgroundColor: '#36A2EB',
                data: [15, 20, 30, 10, 5]
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                position: 'bottom'
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Dashboard</h2>
            
            <div className="dashboard-grid">
                <div className="dashboard-card">
                    <Card title="Total de Clientes" subTitle="Resumen de clientes por categoría" className="kpi-card kpi-clientes">
                        <div className="kpi-content">
                            <div className="kpi-chart">
                                <Chart type="pie" data={clientesData} options={options} />
                            </div>
                            <div className="kpi-details">
                                <p><strong>Campaña de Marketing:</strong> <span>10</span></p>
                                <p><strong>Clientes Activos:</strong> <span>100</span></p>
                                <p><strong>Clientes Potenciales:</strong> <span>20</span></p>
                                <p><strong>Clientes Perdidos:</strong> <span>5</span></p>
                                <p><strong>Clientes Ganados:</strong> <span>10</span></p>
                                <p className="kpi-total"><strong>Total:</strong> <span>145</span></p>
                            </div>
                        </div>
                    </Card>
                </div>
                
                <div className="dashboard-card">
                    <Card title="Ventas Mensuales" subTitle="Comparativa de ventas" className="kpi-card kpi-ventas">
                        <div className="kpi-chart">
                            <Chart type="line" data={ventasData} options={options} />
                        </div>
                    </Card>
                </div>
                
                <div className="dashboard-card">
                    <Card title="Distribución de Gastos" subTitle="Gastos por categoría" className="kpi-card kpi-gastos">
                        <div className="kpi-chart">
                            <Chart type="doughnut" data={gastosData} options={options} />
                        </div>
                    </Card>
                </div>
                
                <div className="dashboard-card">
                    <Card title="Empleados por Departamento" subTitle="Distribución de personal" className="kpi-card kpi-empleados">
                        <div className="kpi-chart">
                            <Chart type="bar" data={empleadosData} options={options} />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
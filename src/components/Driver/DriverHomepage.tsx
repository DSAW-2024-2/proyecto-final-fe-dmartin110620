import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DriverHomePage.css';
import { getVehicles, getConfirmedPassengers } from '../../utils/api.ts';
import VehicleForm from './VehicleForm.tsx';
import ConfirmedPassengerCard from './ConfirmedPassengerCard.tsx';

const DriverHomePage = () => {
    const [vehicles, setVehicles] = useState<any[]>([]);
    const [confirmedPassengers, setConfirmedPassengers] = useState<any[]>([]);
    const [showVehicleForm, setShowVehicleForm] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchVehicles();
        fetchConfirmedPassengers();
    }, []);

    const fetchVehicles = async () => {
        try {
            const response = await getVehicles();
            setVehicles(response.data);
        } catch (error) {
            console.error('Error fetching vehiculos', error);
        }
    };

    const fetchConfirmedPassengers = async () => {
        try {
            const response = await getConfirmedPassengers();
            setConfirmedPassengers(response.data);
        } catch (error) {
            console.error('Error fetching pasajeros confirmados]', error);
        }
    };

    const handleNavigateToPassenger = () => {
        navigate('/passenger');
    }

    const handleNavigateToCreateWheels = () => {
        navigate('/createwheels'); 
    }

    return (
        <div className="driver-homepage">
            <h1>Página Principal del Conductor</h1>

            <div className="tab-buttons">
                <button className="tab-button" onClick={handleNavigateToPassenger}>Pasajero</button>
                <button className="tab-button active">Conductor</button>
            </div>

            {vehicles.length === 0 ? (
                <div className="no-vehicles-message">
                    <h2>No tienes vehículos registrados.</h2>
                    <button className="add-vehicle-button" onClick={() => setShowVehicleForm(true)}>Agregar Vehículo</button>
                </div>
            ) : (
                <div>
                    <h2>Tus Vehículos</h2>
                    <ul className="vehicles-list">
                        {vehicles.map(vehicle => (
                            <li key={vehicle.id}>
                                {vehicle.model} - {vehicle.plate}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <h2>Pasajeros Confirmados</h2>
            <div className='confirmed-passengers-cont'>
                <div className="confirmed-passengers">
                {confirmedPassengers.length === 0 ? (
                    <p>No hay pasajeros confirmados.</p>
                ) : (
                    confirmedPassengers.map(passenger => (
                        <ConfirmedPassengerCard key={passenger.id} passenger={passenger} />
                    ))
                )}
            </div>
            </div>

            <button className="create-wheel-button" onClick={handleNavigateToCreateWheels}>Crear Wheel</button>

            {showVehicleForm && (
                <VehicleForm
                    onClose={() => setShowVehicleForm(false)}
                    onSave={fetchVehicles}
                />
            )}
        </div>
    );
};

export default DriverHomePage;

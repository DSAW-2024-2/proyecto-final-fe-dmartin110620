import React from 'react';

interface ConfirmedPassengerCardProps {
    passenger: any;
    className?: string; 
}

const ConfirmedPassengerCard: React.FC<ConfirmedPassengerCardProps> = ({ passenger, className }) => {
    return (
        <div className={`confirmed-passenger-card ${className || ''}`}>
            {}
            <p>{passenger.name}</p>
            {}
        </div>
    );
};

export default ConfirmedPassengerCard;

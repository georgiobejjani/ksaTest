import React, { useState } from 'react';
import './CardNavigation.css';

export default function CardNavigation() {
    const [activeIndex, setActiveIndex] = useState(0);

    const navigationMenu = [
        { label: 'Packages', action: '' },
        { label: 'Programs', action: '' },
        { label: 'Certificates', action: '' },
        { label: 'Assessments', action: '' }
    ];

    const NavigationCard = ({ label, index }) => {
        const isActive = index === activeIndex;
        return (
            <div
                className={`navigationCard ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
            >
                <span>{label}</span>
            </div>
        );
    };

    return (
        <nav className='cardNavigation'>
            {navigationMenu.map((menu, index) => (
                <NavigationCard key={index} label={menu.label} index={index} />
            ))}
        </nav>
    );
}

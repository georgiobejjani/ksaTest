import React from 'react'
import LearningJourney from '../components/LearningJourney/LearningJourney'
import './Journey.css';
import CardNavigation from '../components/CardNavigation/CardNavigation';

export default function Journey() {
    return (
        <div className='journey'>
            <h1 className='journey__title'>Your Employees’ Learning Journey</h1>
            <p className='journey__subTitle'>Boost your team's capabilities with tailor-made programs designed to match your company's goals.<br/>
                Check our programs’ offerings</p>
                <CardNavigation/>
            <LearningJourney />
        </div>
    )
}

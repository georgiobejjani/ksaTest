import React from 'react'
import './ProgramCard.css';
import favoritesIcon from '../../assets/icons/favorites.png';
import certificateIcon from '../../assets/icons/certificate.png';
import location from '../../assets/icons/location.png';
import language from '../../assets/icons/language.png';
import rating from '../../assets/icons/star.png';
import attendee1 from '../../assets/images/person1.jpeg';
import attendee2 from '../../assets/images/person2.jpeg';
import attendee3 from '../../assets/images/person3.jpeg';
import attendee4 from '../../assets/images/person4.jpeg';
import seat from '../../assets/icons/Seat.png';
export default function ProgramCard({ backgroundImage }) {
    return (
        <div className="card">
            <div className='card__content'>
                <div className="card__header" style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div className='card__badges'>
                        <span className="card__badge card__badge--date">Feb 29, 2024</span>
                        <span className="card__badge card__badge--new">New!</span>
                    </div>
                    <button className="card__favorite-button">
                        <img src={favoritesIcon} alt='favorites' className='icon-favorites' />
                    </button>
                </div>
                <div className="card__body">
                    <h2 className="card__title">Preparation Program for Insurance Foundations</h2>
                    <div className="card__details">
                        <div className="card__detail">
                            <img className="icon-notification" alt='icon' src={certificateIcon} />
                            <span className="icon-label">Earn a Professional Certificate</span>
                        </div>
                        <div className='card__aligned'>
                            <div className="card__detail">
                                <img className="icon-notification" alt='icon' src={location} />
                                <span className="icon-label">On-site</span>
                            </div>
                            <div className="card__detail">
                                <img className="icon-notification" alt='icon' src={language} />
                                <span className="icon-label">English</span>
                            </div>
                            <div className="card__detail">
                                <img className="icon-notification" alt='icon' src={rating} />
                                <span className="icon-label">4.8/5</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card__footer">
                    <div className="card__attendees">
                        <img src={attendee1} className="card__attendee" alt="Attendee" />
                        <img src={attendee2} className="card__attendee" alt="Attendee" />
                        <img src={attendee3} className="card__attendee" alt="Attendee" />
                        <img src={attendee4} className="card__attendee" alt="Attendee" />
                        <span className="card__attendee-count">+35</span>
                    </div>
                    <div className="card__notification">
                        <img className="icon-notification" src={seat} alt='icon'/>
                        <span className="card__notification-count">11</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

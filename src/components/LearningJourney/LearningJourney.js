import React from 'react'
import './LearningJourney.css';
import editMessage from '../../assets/icons/message-edit.png';
import arrowRight from '../../assets/icons/arrow-right.png';
import certification from '../../assets/icons/ceertificateGrayscale.png';
import location from '../../assets/icons/locationGrayScale.png';
import language from '../../assets/icons/languageGrayScale.png';
import communication from '../../assets/icons/communication.png';
import decisionMaking from '../../assets/icons/decision skills.png';
import businessEthics from '../../assets/icons/business.png';
import trainerPhoto from '../../assets/images/person5.jpeg';
import ProgramCard from '../ProgramCard/ProgramCard';
import cardBg from '../../assets/images/cityBg.jpeg';

export default function LearningJourney() {
  return (
    <div className='learningJourney'>
      <div className='learningJourney__contentCard'>
        <div className='learningJourney__part'>
          <h1 className='learningJourney__title'>The Ultimate Package</h1>
          <p className='learningJourney__description'>Enrich your senior employees skills and competencies with this package containing<br /></p>
          <div className='learningJourney__earnings'>
            <div className='learningJourney__earning'>
              <img src={certification} alt='icon' className='learningJourney__icon' />
              <span className='learningJourney__label'>Earn a Professional Certificate</span>
            </div>
            <div className='learningJourney__earning'>
              <img src={location} alt='icon' className='learningJourney__icon' />
              <span className='learningJourney__label'>On-site</span>
            </div>
            <div className='learningJourney__earning'>
              <img src={language} alt='icon' className='learningJourney__icon' />
              <span className='learningJourney__label'>English</span>
            </div>
          </div>
          <h2 className='learningJourney__skillsTitle'>Skills Gained</h2>
          <div className='learningJourney__earnings skillsSet'>
            <div className='learningJourney__earning'>
              <img src={communication} alt='icon' className='learningJourney__icon learningJourney__icon--skills' />
              <span className='learningJourney__label learningJourney__label--skills'>Communication skills </span>
            </div>
            <div className='learningJourney__earning'>
              <img src={decisionMaking} alt='icon' className='learningJourney__icon learningJourney__icon--skills' />
              <span className='learningJourney__label learningJourney__label--skills'>Decision-making skills </span>
            </div>
            <div className='learningJourney__earning'>
              <img src={businessEthics} alt='icon' className='learningJourney__icon learningJourney__icon--skills' />
              <span className='learningJourney__label learningJourney__label--skills'>Business-ethics skills </span>
            </div>
          </div>
          <div className="learningJourney__separator">
            <div className="learningJourney__dashed-line"></div>
          </div>
          <div className="learningJourney__quoteContainer">
            <div className='learningJourney__trainerImg'>
              <img className='learningJourney__trainerImg' alt='trainer' src={trainerPhoto} />
            </div>
            <div className='learningJourney__quote'>
              <p className='learningJourney__paragraph'>
                "Transforming organizations from surviving to thriving. Our tailored training, resources, and innovation empower teams to excel and drive remarkable success!”
              </p>
              <span className='learningJourney__trainer'>
                Mr. Walid Khalid - Certified Financial Trainer
              </span>
            </div>
          </div>
          <div className='learningJourney__actions'>
            <h2 className='learningJourney__price previousPrice'>SAR 30,000</h2>
            <h2 className='learningJourney__price currentPrice'>SAR 20,000</h2>
            <button className='learningJourney__btn purchaseBtn'>
              Purchase package
              <img alt='purchaseIcon' src={arrowRight} className='learningJourney__btnIcon' />
            </button>
          </div>
        </div>
        <div className='learningJourney__part'>
          <div className='learningJourney__actionBtns'>
            <button className='learningJourney__btn customizeProgram'>
              Customize Program
              <img src={editMessage} alt='icon-editMessage' className='learningJourney__btnIcon customizeIcon' />
            </button>
            <button className='learningJourney__btn viewAll'>
              View All
              <img src={arrowRight} alt='icon-arrowRight' className='learningJourney__btnIcon viewAllIcon' />
            </button>
          </div>

          <div className='learningJourney__cards'>
            <ProgramCard backgroundImage={cardBg}/>
            <ProgramCard backgroundImage={cardBg}/>
          </div>
        </div>
      </div>
    </div>
  )
}

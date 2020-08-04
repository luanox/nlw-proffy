import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIncon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img src={landingImg} alt="pla estudos" className="hero-img"/>
                <div className="button-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="study"/>
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={giveClassesIncon} alt=""/>
                        Dar aulas
                    </a>
                </div>
                <span className="total-connections">
                    Total de 400 conexoes ja realizadas <img src={purpleHeartIcon} alt="purple heard"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;
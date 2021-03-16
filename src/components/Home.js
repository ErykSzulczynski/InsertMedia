import React, { useState } from 'react'
import logo from '../assets/logo.png';
import styled from 'styled-components';
import { BrowserView, MobileView } from "react-device-detect";
import pattern from '../assets/pattern_black.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


import Slider from './Slider';

const HomeContainer = styled.div`
    @media (max-width: 768px) {
        position: relative;
        height: 100vh;
        margin-bottom: 20vh;
    }
`;

const LogoContainer = styled.div`
    position: relative;
    width: 20vh;
    height: 20vh;
    margin: 10vh auto;
    z-index: 100 !important;

    @media (max-width: 768px) {
        height: 90vh;
        margin: 0 auto;
    }
`;

const Logo = styled.img`
    width: 100%;
    @media (max-width: 768px) {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%,-50%);
    }
`;

const PatternLeft = styled.img`
            position: absolute;
            bottom: 0;
            left: 0;
            height: 100vh;
            opacity: 0.1;
            transform: rotate(-45deg);
            z-index: 1 !important;
        `;

const ArrowDown = styled.p`
    color: white;
    font-size: 3rem;
    position: absolute;
    bottom: 5vh;
    width: 100%;
    text-align: center;
`;

export default function Home() {
    return (
        <div>
            <HomeContainer>
                <MobileView>
                    <PatternLeft src={pattern}/>
                </MobileView>
                <LogoContainer>
                    <Logo src={logo} alt="Insert Media"/>
                </LogoContainer>
                <BrowserView>
                    <Slider/>
                </BrowserView>
                <MobileView>
                    <ArrowDown>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </ArrowDown>
                </MobileView>
            </HomeContainer>
        </div>
    )
}
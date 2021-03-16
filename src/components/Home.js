import React, { useState } from 'react'
import logo from '../assets/logo.png';
import styled from 'styled-components';
import { BrowserView, MobileView } from "react-device-detect";
import pattern from '../assets/pattern_black.png';


import Slider from './Slider';

const HomeContainer = styled.div`
    @media (max-width: 768px) {
        position: relative;
        height: 100vh;
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

export default function Home() {
    return (
        <div>
            <HomeContainer>
                <PatternLeft src={pattern}/>
                <LogoContainer>
                    <Logo src={logo} alt="Insert Media"/>
                </LogoContainer>
                <BrowserView>
                    <Slider/>
                </BrowserView>
            </HomeContainer>
        </div>
    )
}
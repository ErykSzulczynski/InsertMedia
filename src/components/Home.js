import React, { useState } from 'react'
import logo from '../assets/logo.png';
import styled from 'styled-components';
import { BrowserView } from "react-device-detect";

import Slider from './Slider';

const HomeContainer = styled.div``;

const LogoContainer = styled.div`
    position: relative;
    width: 20vh;
    height: 20vh;
    margin: 10vh auto;
    z-index: 100 !important
`;

const Logo = styled.img`
    width: 100%;
`;

export default function Home() {
    return (
        <div>
            <HomeContainer>
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
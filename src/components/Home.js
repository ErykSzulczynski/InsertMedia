import React from 'react'
import logo from '../assets/logo.png';
import styled from 'styled-components';
import { BrowserView } from "react-device-detect";

import Slider from './Slider';

export default function Home() {
    const Home = styled.div`
    `;

    const LogoContainer = styled.div`
        width: 20vh;
        height: 20vh;
        margin: 10vh auto;
    `;

    const Logo = styled.img`
        width: 100%;
    `;

    return (
        <div>
            <Home>
                <LogoContainer>
                    <Logo src={logo} alt="Insert Media"/>
                </LogoContainer>
                <BrowserView>
                    <Slider/>
                </BrowserView>
            </Home>
        </div>
    )
}
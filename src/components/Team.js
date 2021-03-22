import React, { Component } from 'react';
import styled from 'styled-components';
import userImage from '../assets/sample2.jpg';

import {useTransition, animated, useSpring} from 'react-spring';

export default function Team(){
        const Team = styled.div`
            position: relative;
            z-index: 100 !important;
            height: 80vh;
            margin-top: 5vh;
        `;

        const TeamGridContainer = styled.div`
            display: grid;
            grid-template-columns: auto auto auto;
            width: 50%;
            margin: 0 auto;
            grid-gap: 5vw;
        `;

        const TeamItem = styled.div`
            width: 100%;
        `;

        const TeamPhoto = styled.div`
            width: 100%;
            height: 25vh;
            border: 3px solid white;
            border-radius: 5px;
            background-image: url(${userImage});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        `;
        
        const TeamName = styled.p`
            text-align: center;
            font-size: 1.8rem;
            font-weight: bold;
            color: #6AA0A2;
            margin: 1vh 0;
        `;

        const TeamRole = styled.p`
            text-align: center;
            color: white;
            margin: 1vh 0;
        `;

        const textAnimation = useSpring({to: {opacity: 1, top: 0}, from: {opacity: 0, top: 200}, delay: 200});

        return (
            <Team>
                <animated.div style={textAnimation} className="animation__logo">
                    <TeamGridContainer>
                        <TeamItem>
                            <TeamPhoto></TeamPhoto>
                            <TeamName>Jan Kowalski</TeamName>
                            <TeamRole>Designer</TeamRole>
                        </TeamItem>
                        <TeamItem>
                            <TeamPhoto></TeamPhoto>
                            <TeamName>Jan Kowalski</TeamName>
                            <TeamRole>Designer</TeamRole>
                        </TeamItem>
                        <TeamItem>
                            <TeamPhoto></TeamPhoto>
                            <TeamName>Jan Kowalski</TeamName>
                            <TeamRole>Designer</TeamRole>
                        </TeamItem>
                        <TeamItem>
                            <TeamPhoto></TeamPhoto>
                            <TeamName>Jan Kowalski</TeamName>
                            <TeamRole>Designer</TeamRole>
                        </TeamItem>
                        <TeamItem>
                            <TeamPhoto></TeamPhoto>
                            <TeamName>Jan Kowalski</TeamName>
                            <TeamRole>Designer</TeamRole>
                        </TeamItem>
                        <TeamItem>
                            <TeamPhoto></TeamPhoto>
                            <TeamName>Jan Kowalski</TeamName>
                            <TeamRole>Designer</TeamRole>
                        </TeamItem>
                    </TeamGridContainer>
                </animated.div>
            </Team>
        )
}


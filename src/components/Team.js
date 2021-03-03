import React, { Component } from 'react';
import styled from 'styled-components';

export default class Team extends Component {
    render() {
        const Team = styled.div`
            height: 90vh;
            margin-top: 5vh;
        `;

        const TeamGridContainer = styled.div`
            display: grid;
            grid-template-columns: auto auto auto;
            width: 60%;
            margin: 0 auto;
            grid-gap: 5vw;
        `;

        const TeamItem = styled.div`
            width: 100%;
        `;

        const TeamPhoto = styled.div`
            width: 100%;
            height: 30vh;
            border: 3px solid white;
            border-radius: 5px;
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

        return (
            <Team>
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
            </Team>
        )
    }
}


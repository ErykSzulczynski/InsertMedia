import React, { Component } from 'react';
import styled from 'styled-components';

export default class Team extends Component {
    render() {
        const Team = styled.div`
            height: 100vh;
        `;

        const TeamGridContainer = styled.div``;

        const TeamItem = styled.div``;

        const TeamPhoto = styled.div``;
        
        const TeamName = styled.p``;

        const TeamRole = styled.p``;

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
                </TeamGridContainer>
            </Team>
        )
    }
}


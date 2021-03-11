import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHandshake, faUsers, faShoppingBasket, faIdBadge } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
    render() {
        const Contact = styled.div`
            height: 90vh;
        `;

        const ContactContainer = styled.div`
            margin: 0 auto;
            width: 70vw;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        `;

        const ContactLeftPanel = styled.div`
            width: 60%;
        `;

        const ContactRightPanel = styled.div`
            width: 40%;
        `;

        const ContactInfo = styled.div`
            font-size: 3rem;
            color: white;
            font-weight: bolder;
        `;

        const ContactForm = styled.div`
            border: 1px solid white;
            height: 50vh;
            width: 100%;
        `;

        return (
            <Contact>
                <ContactContainer>
                    <ContactLeftPanel>
                        <ContactInfo>
                            <FontAwesomeIcon icon={faHome} />example@gmail.com
                        </ContactInfo>
                        <ContactInfo>
                            <FontAwesomeIcon icon={faHome} />+48 520 122 041
                        </ContactInfo>
                    </ContactLeftPanel>
                    <ContactRightPanel>
                        <ContactForm></ContactForm>
                    </ContactRightPanel>
                </ContactContainer>
            </Contact>
        )
    }
}


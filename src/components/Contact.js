import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
    render() {
        const Contact = styled.div`
            height: 90vh;
            position: relative;
            z-index: 100 !important;
        `;

        const ContactContainer = styled.div`
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%,-50%);
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
            margin-top: 3vh;
        `;

        const ContactIcon = styled.span`
            color: #6AA0A2;
            padding-right: 2vw;
        `;

        const ContactForm = styled.div`
            border: 2px solid white;
            border-radius: 5px;
            width: 100%;
            padding: 3%;
        `;

        const FormInput = styled.input`
            width: 96%;
            padding: 1vh 2%;
            border-radius: 3px;
            font-size: 1.3rem;
            border: 1px solid gray;
            margin-bottom: 3vh;
        `;

        const FormTextarea = styled.textarea`
            width: 96%;
            padding: 1vh 2%;
            border-radius: 3px;
            font-size: 1.3rem;
            border: 1px solid gray;
            min-height: 40vh;
        `;

        const FormSend = styled.button`
            width: 80%;
            cursor: pointer;
            display: block;
            background: none;
            color: #6AA0A2;
            border: 2px solid #6AA0A2;
            padding: 1vh 4vw;
            font-size: 1.3rem;
            border-radius: 5px;
            margin: 0 auto;
            margin-top: 3vh;
            transition-duration: .3s;

            &:hover{
                color: white;
                background: #6AA0A2;
            }
        `;

        const FormText = styled.p`
            font-size: 3rem;
            margin: 0;
            margin-bottom: 3vh;
            color: #6AA0A2;
            font-weight: bolder;
        `;

        return (
            <Contact>
                <ContactContainer>
                    <ContactLeftPanel>
                        <ContactInfo>
                            <ContactIcon><FontAwesomeIcon icon={faPhone} /></ContactIcon>example@gmail.com
                        </ContactInfo>
                        <ContactInfo>
                            <ContactIcon><FontAwesomeIcon icon={faEnvelope} /></ContactIcon>+48 520 122 041
                        </ContactInfo>
                    </ContactLeftPanel>
                    <ContactRightPanel>
                        <ContactForm>
                        <form>
                            <FormText>Wyślij nam wiadomość</FormText>
                            <FormInput type="text" name="email" placeholder="Twój email"/><br/>
                            <FormTextarea placeholder="Wiadomość"></FormTextarea><br/>
                            <FormSend>Wyślij</FormSend>
                        </form>
                        </ContactForm>
                    </ContactRightPanel>
                </ContactContainer>
            </Contact>
        )
    }
}


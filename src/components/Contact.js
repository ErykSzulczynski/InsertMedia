import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {useTransition, animated, useSpring} from 'react-spring';

export default function Contact() {
        const Contact = styled.div`
            height: 90vh;
            position: relative;
            z-index: 100 !important;

            @media (max-width: 768px) {
                height: auto;
                min-height: 90vh;
                margin-bottom: 5vh;
            }
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

            @media (max-width: 768px) {
                width: 90vw;
                flex-direction: column;
                position: static;
                transform: none;
                left: auto;
                top: auto;
            }
        `;

        const ContactLeftPanel = styled.div`
            width: 100%;

            @media (max-width: 768px) {
                width: 90%;
                margin-bottom: 5vh;
            }
        `;

        const ContactRightPanel = styled.div`
            width: 100%;

            @media (max-width: 768px) {
                width: 100%;
            }
        `;

        const ContactInfo = styled.div`
            font-size: 4rem;
            color: white;
            font-weight: bolder;
            margin-top: 3vh;

            @media (max-width: 768px) {
                font-size: 2rem;
            }
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

            @media (max-width: 768px) {
                width: 90%;
                padding: 5%;
            }
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

        const ContactBackground = styled.span`
            display: block;
            position: absolute;
            font-size: 30rem;
            color: black;
            opacity: 0.1;
            left: 20vw;
            z-index: 1 !important;

            @media (max-width: 768px) {
                visibility: hidden;
            }
        `;

        const imgAnimation = useSpring({to: {opacity: 1, left: 0}, from: {opacity: 0, left: 200}});
        const iconAnimation = useSpring({to: {opacity: 1}, from: {opacity: 0}});
        const textAnimation = useSpring({to: {opacity: 1, top: 0}, from: {opacity: 0, top: 200}, delay: 200});

        return (
            <Contact id="contact">
                <ContactContainer>
                    <animated.div style={iconAnimation} className="animation__logo">
                        <ContactBackground><FontAwesomeIcon icon={faPhone} /></ContactBackground>
                    </animated.div>
                    <animated.div style={imgAnimation} className="animation__logo">
                        <ContactLeftPanel>
                            <ContactInfo>
                                <ContactIcon><FontAwesomeIcon icon={faPhone} /></ContactIcon>example@gmail.com
                            </ContactInfo>
                            <ContactInfo>
                                <ContactIcon><FontAwesomeIcon icon={faEnvelope} /></ContactIcon>+48 520 122 041
                            </ContactInfo>
                        </ContactLeftPanel>
                    </animated.div>
                    <animated.div style={textAnimation} className="animation__logo">
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
                    </animated.div>
                </ContactContainer>
            </Contact>
        )
}


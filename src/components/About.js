import React, { Component } from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/about-image.jpg';

export default function About(props) {
    const About = styled.div`
        position: relative;
        width: 100vw;
        height: 90vh;
        color: white;
        z-index: 100 !important;

        @media (max-width: 768px) {
            min-height: 90vh;
            height: auto;
            margin: 0 auto;
            margin-bottom: 20vh;
            width: 90vw;
            position: static;
        }
    `;

    const AboutContent = styled.div`
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-conent: center;

        @media (max-width: 768px) {
            flex-direction: column;
            position: relative;
            transform: none;
            left: auto;
            top: auto;
        }
    `;

    const AboutImageContainer = styled.div`
        width: 35%;
        border: 2px solid white;
        border-radius: 5px;
        height: 55vh;
        background-image: url(${aboutImage});

        @media (max-width: 768px) {
            width: 100%;
        }
    `;

    const AboutText = styled.div`
        width: 70%;
        padding-left: 3vw;
        font-size: 1.2rem;

        @media (max-width: 768px) {
            width: 90%;
        }
    `;

    const AboutTitle = styled.h2`
        color: #6AA0A2;
        text-transform: uppercase;
        font-size: 2.3rem;
        margin-top: 0;

        @media (max-width: 768px) {
            margin: 3vh 0;
        }
    `;

    const AboutReadMore = styled.button`
        cursor: pointer;
        display: block;
        background: none;
        color: #6AA0A2;
        border: 2px solid #6AA0A2;
        padding: 1vh 4vw;
        font-size: 1.4rem;
        border-radius: 5px;
        margin-top: 3vh;
        transition-duration: .3s;

        &:hover{
            color: white;
            background: #6AA0A2;
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    `;

    return (
        <About id="about">
            <AboutContent>
                <AboutImageContainer/>
                <AboutText>
                    <AboutTitle>
                        Tytuł sekcji
                    </AboutTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam augue eros, venenatis vel placerat vitae, congue sit amet nisl.
                    Sed interdum ante nec malesuada venenatis. Proin tincidunt in quam at facilisis. Nulla ut rhoncus ipsum. Sed ante sem,
                    placerat vitae leo sit amet, congue bibendum lorem. Duis sagittis lacinia urna at feugiat. Duis dictum, tortor ut aliquet consequat,
                    orci enim dignissim massa, a convallis ipsum est in nulla. Vestibulum sit amet commodo odio, sit amet finibus dolor.
                    Duis pharetra ullamcorper justo, ut porttitor magna eleifend lacinia.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam augue eros, venenatis vel placerat vitae, congue sit amet nisl.
                    Sed interdum ante nec malesuada venenatis. Proin tincidunt in quam at facilisis. Nulla ut rhoncus ipsum. Sed ante sem,
                    placerat vitae leo sit amet, congue bibendum lorem. Duis sagittis lacinia urna at feugiat. Duis dictum, tortor ut aliquet consequat,
                    orci enim dignissim massa, a convallis ipsum est in nulla. Vestibulum sit amet commodo odio, sit amet finibus dolor.
                    Duis pharetra ullamcorper justo, ut porttitor magna eleifend lacinia.
                    <AboutReadMore onClick={() => {props.switch("about-details")}}>
                        Zobacz więcej
                    </AboutReadMore>
                </AboutText>
            </AboutContent>
        </About>
    )
}



import React, { Component } from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/about-image.jpg';

export default function About() {
    const About = styled.div`
        position: relative;
        width: 100vw;
        height: 90vh;
        color: white;
    `;

    const AboutContent = styled.div`
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-conent: center;
    `;

    const AboutImageContainer = styled.div`
        width: 35%;
        border: 2px solid white;
        border-radius: 5px;
        height: 55vh;
        background-image: url(../assets/about-image.jpg);
    `;

    const AboutText = styled.div`
        width: 50%;
        padding-left: 3vw;
    `;

    const AboutTitle = styled.h2`
        color: #6AA0A2;
        text-transform: uppercase;
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
    `;

    return (
        <About>
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
                    <AboutReadMore>
                        Zobacz więcej
                    </AboutReadMore>
                </AboutText>
            </AboutContent>
        </About>
    )
}



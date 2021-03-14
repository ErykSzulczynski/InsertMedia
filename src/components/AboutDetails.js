import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import img from '../assets/sample.jpg';

export default function AboutDetails(props) {
    const About = styled.div`
        position: relative;
        width: 100vw;
        min-height: 85vh;
        color: white;
        z-index: 100 !important;
    `;

    const AboutContent = styled.div`
        display: block;
        width: 50vw;
        margin: 0 auto;
        margin-top: 5vh;
    `;

    const AboutText = styled.div`
        padding-left: 3vw;
        font-size: 1.2rem;
    `;

    const AboutTitle = styled.h2`
        color: #6AA0A2;
        text-transform: uppercase;
        font-size: 2.3rem;
        margin-top: 0;
    `;

    const AboutImageContainer = styled.div`
        text-align: center;
        margin: 3vh 0;
    `;

    const AboutImage = styled.img`
        border-radius: 5px;
    `;

    const AboutImageText = styled.p`
        margin: 0;
        margin-top: 1vh;
        font-weight: lighter;
        opacity: 0.7;
    `;

    const GoBack = styled.div`
        cursor: pointer;
        color: #6AA0A2;
        font-size: 1.5rem;
        font-weight: bolder;
        padding-bottom: 3vh;

        &:hover{
            text-decoration: underline; 
        }
    `;

    const GoBackText = styled.span`
        padding-left: 0.5vw;
    `;

    return (
        <About>
            <AboutContent>
                <AboutText>
                    <GoBack onClick={() => props.switch('about')}>
                        <FontAwesomeIcon icon={faArrowLeft} /><GoBackText>Powrót</GoBackText>
                    </GoBack>
                    <AboutTitle>
                        Tytuł sekcji
                    </AboutTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam augue eros, venenatis vel placerat vitae, congue sit amet nisl.
                    Sed interdum ante nec malesuada venenatis. Proin tincidunt in quam at facilisis. Nulla ut rhoncus ipsum. Sed ante sem,
                    placerat vitae leo sit amet, congue bibendum lorem. Duis sagittis lacinia urna at feugiat. Duis dictum, tortor ut aliquet consequat,
                    orci enim dignissim massa, a convallis ipsum est in nulla. Vestibulum sit amet commodo odio, sit amet finibus dolor.
                    Duis pharetra ullamcorper justo, ut porttitor magna eleifend lacinia.<br/>
                    <AboutImageContainer>
                        <AboutImage src={img}/>
                        <AboutImageText>
                            Description of photo
                        </AboutImageText>
                    </AboutImageContainer>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam augue eros, venenatis vel placerat vitae, congue sit amet nisl.
                    Sed interdum ante nec malesuada venenatis. Proin tincidunt in quam at facilisis. Nulla ut rhoncus ipsum. Sed ante sem,
                    placerat vitae leo sit amet, congue bibendum lorem. Duis sagittis lacinia urna at feugiat. Duis dictum, tortor ut aliquet consequat,
                    orci enim dignissim massa, a convallis ipsum est in nulla. Vestibulum sit amet commodo odio, sit amet finibus dolor.
                    Duis pharetra ullamcorper justo, ut porttitor magna eleifend lacinia.
                </AboutText>
            </AboutContent>
        </About>
    )
}

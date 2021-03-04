import './App.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Switch, FormGroup, FormControl, FormControlLabel, formatMs } from '@material-ui/core';
import { BrowserView, MobileView} from "react-device-detect";
import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import pattern from './assets/pattern_black.png';

import NavbarMobile from './components/NavbarMobile';
import NavbarTop from './components/NavbarTop';
import Home from './components/Home';
import About from './components/About';
import AboutDetails from './components/AboutDetails';
import Offer from './components/Offer';
import Team from './components/Team';
import Contact from './components/Contact';
import OfferDetails from './components/OfferDetails';
import OffersSection from './components/OffersSection';

export default class App extends Component {
    constructor(){
        super();

        this.state = {
            activeSection: "home",
        }

        this.switchSection = this.switchSection.bind(this);
    }

    switchSection = (name) => {
        this.setState(() => {
            return {
                activeSection: name
            } 
        });
    }

    render(){
        const App = styled.div`
            overflow: hidden;
            min-height: 100vh;
            background: #2D3436;
            z-index: -50;
        `;

        const Footer = styled.div`
            position: fixed;
            bottom: 1vw;
            right: 0;
            display: flex;
        `;

        const Socials = styled.div`
            display: flex;
            color: #6AA0A2;
            font-size: 2rem;
            padding-right: 2vw;
        `;

        const SocialsItem = styled.div`
            padding: 0 0.5vw;
        `;

        const ModeSwitch = styled.div`
            display: flex;
            color: white;
            font-size: 2rem;
        `;

        const ModeSwitchIcon = styled.div`
            color: white;
        `;

        const PatternLeft = styled.img`
            position: absolute;
            bottom: -75vh;
            left: -60vw;
            height: 100vh;
            opacity: 0.1;
            transform: rotate(-45deg);
            z-index: 1 !important;
        `;

        const PatternRight = styled.img`
            position: absolute;
            bottom: 0;
            right: -50vw;
            height: 100vh;
            opacity: 0.1;
            z-index: 1 !important;
        `;

        return (
            <App>
                <MobileView>
                    <NavbarMobile/>
                </MobileView>
                <BrowserView>
                    <NavbarTop switch={this.switchSection}/>
                </BrowserView>
                    {this.state.activeSection == "home" ? <Home /> : null}
                    {this.state.activeSection == "about" ? <About switch={this.switchSection}/> : null}
                    {this.state.activeSection == "about-details" ? <AboutDetails switch={this.switchSection}/> : null}
                    {this.state.activeSection == "offer" ? <Offer switch={this.switchSection}/> : null}
                    {this.state.activeSection == "offer-details" ? <OfferDetails switch={this.switchSection}/> : null}
                    {this.state.activeSection == "offers-section" ? <OffersSection switch={this.switchSection}/> : null}
                    {this.state.activeSection == "team" ? <Team /> : null}
                    {this.state.activeSection == "contact" ? <Contact /> : null}
                <BrowserView>
                    {/*<PatternLeft src={pattern}/>*/}
                    {/*<PatternRight src={pattern}/>*/}
                    <Footer>
                        <Socials>
                            <SocialsItem>
                                <FontAwesomeIcon icon={faFacebook} />
                            </SocialsItem>
                            <SocialsItem>
                                <FontAwesomeIcon icon={faInstagram} />
                            </SocialsItem>
                            <SocialsItem>
                                <ModeSwitchIcon>
                                    <FontAwesomeIcon icon={faMoon} />
                                </ModeSwitchIcon>
                            </SocialsItem>
                        </Socials>
                        <ModeSwitch>
                            {/*<FormGroup>
                            <FormControlLabel
                                control={<Switch checked={false} />}
                            />
                            </FormGroup>*/}
                            
                        </ModeSwitch>
                    </Footer>
                </BrowserView>
                {/*<About />*/}
            </App>
        );
    }
    
}

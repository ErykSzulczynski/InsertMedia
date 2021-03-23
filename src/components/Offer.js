import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from "react-device-detect";

import {useTransition, animated, useSpring} from 'react-spring';

export default function Offer(props) {
        const Offer = styled.div`
            position: relative;
            width: 100%;
            height: 90vh;
            z-index: 100 !important;

            @media (max-width: 768px) {
                position: static;
                height: auto;
                min-height: 90vh;
                margin-bottom: 20vh;
            }
        `;

        const OfferItemsContainer = styled.div`
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%,-50%);

            @media (max-width: 768px) {
                position: static;
                transform: none;
                left: auto;
                top: auto;
            }
        `;

        const OfferGridContainer = styled.div`
            display: grid;
            grid-template-columns: auto auto auto;
            width: 70vw;
            margin: 0 auto;
            grid-gap: 5vw;

            @media (max-width: 768px) {
                width: 90vw;
                grid-template-columns: auto;
            }
        `;

        const OfferItem = styled.div`
            width: 90%;
            padding: 5%;
            border-radius: 5px;
            background: white;

            @media (max-width: 768px) {
                width: 80vw;
                padding: 5vw;
                margin-bottom: 10vh;
            }
        `;

        const OfferTitle = styled.h2`
            color: #2D3436;
            font-size: 3rem;
            margin-top: 0;
            margin-bottom: 1vh;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 5px;
        `;

        const OfferPrice = styled.div`
            text-align: center;
            margin-bottom: 1vh;
        `;

        const OfferUnit = styled.p`
            margin: 0;
            opacity: 60%;
            margin-bottom: -15px;
            margin-left: -60px;
        `;

        const OfferAmount = styled.h3`
            margin: 0;
            font-size: 3rem;
            color: #6AA0A2;
        `;

        const OfferText = styled.p`
            font-size: 1.2rem;
        `;

        const OfferDetails = styled.button`
            cursor: pointer;
            display: block;
            background: none;
            width: 100%;
            color: #6AA0A2;
            border: 2px solid #6AA0A2;
            padding: 1vh 4vw;
            font-size: 1.4rem;
            border-radius: 5px;
            transition-duration: .3s;

            &:hover{
                color: white;
                background: #6AA0A2;
            }
        `;

        const OfferReadMore = styled.button`
            cursor: pointer;
            display: block;
            background: none;
            color: #6AA0A2;
            border: 2px solid #6AA0A2;
            padding: 1vh 4vw;
            font-size: 1.4rem;
            border-radius: 5px;
            margin: 0 auto;
            margin-top: 3vh;
            transition-duration: .3s;

            &:hover{
                color: white;
                background: #6AA0A2;
            }

            @media (max-width: 768px) {
                width: 90%;
                margin-top: 0;
                margin-bottom: 10vh;
            }
        `;

        const OfferSectionTitle = styled.p`
            color: #6AA0A2;
            text-transform: uppercase;
            font-size: 2.3rem;
            margin: 3vh 0;
            text-align: center;
            font-weight: bolder;
        `;

        const gridAnimation = useSpring({to: {opacity: 1, top: 0}, from: {opacity: 0, top: 200}});
        const buttonAnimation = useSpring({to: {opacity: 1, top: 0}, from: {opacity: 0, top: 200}, delay: 200});

        return (
            <Offer id="offer">
                <MobileView>
                    <OfferSectionTitle>Oferta</OfferSectionTitle>
                </MobileView>
                <OfferItemsContainer>
                    <animated.div style={gridAnimation} className="animation__logo">
                        <OfferGridContainer>
                            <OfferItem>
                                <OfferTitle>
                                    Title
                                </OfferTitle>
                                <OfferPrice>
                                    <OfferUnit>
                                        PLN
                                    </OfferUnit>
                                    <OfferAmount>
                                        100
                                    </OfferAmount>
                                </OfferPrice>
                                <OfferText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id metus libero. Nulla eget lacus elit. Donec volutpat varius urna id finibus. Nunc bibendum semper auctor. Curabitur sit amet placerat neque, sit amet congue odio. Vestibulum suscipit, elit at semper pharetra, dui nibh hendrerit tortor, eget rhoncus eros nunc ut lacus. Suspendisse massa lectus, viverra at ligula in, bibendum pulvinar orci. Nulla hendrerit tristique eleifend. Nunc ullamcorper lorem sed rhoncus consectetur. Praesent eu augue turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </OfferText>
                                <OfferDetails onClick={() => {props.switch('offer-details')}}>
                                    Szczegóły
                                </OfferDetails>
                            </OfferItem>

                            <OfferItem>
                                <OfferTitle>
                                    Title
                                </OfferTitle>
                                <OfferPrice>
                                    <OfferUnit>
                                        PLN
                                    </OfferUnit>
                                    <OfferAmount>
                                        100
                                    </OfferAmount>
                                </OfferPrice>
                                <OfferText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id metus libero. Nulla eget lacus elit. Donec volutpat varius urna id finibus. Nunc bibendum semper auctor. Curabitur sit amet placerat neque, sit amet congue odio. Vestibulum suscipit, elit at semper pharetra, dui nibh hendrerit tortor, eget rhoncus eros nunc ut lacus. Suspendisse massa lectus, viverra at ligula in, bibendum pulvinar orci. Nulla hendrerit tristique eleifend. Nunc ullamcorper lorem sed rhoncus consectetur. Praesent eu augue turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </OfferText>
                                <OfferDetails onClick={() => {props.switch('offer-details')}}>
                                    Szczegóły
                                </OfferDetails>
                            </OfferItem>

                            <OfferItem>
                                <OfferTitle>
                                    Title
                                </OfferTitle>
                                <OfferPrice>
                                    <OfferUnit>
                                        PLN
                                    </OfferUnit>
                                    <OfferAmount>
                                        100
                                    </OfferAmount>
                                </OfferPrice>
                                <OfferText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id metus libero. Nulla eget lacus elit. Donec volutpat varius urna id finibus. Nunc bibendum semper auctor. Curabitur sit amet placerat neque, sit amet congue odio. Vestibulum suscipit, elit at semper pharetra, dui nibh hendrerit tortor, eget rhoncus eros nunc ut lacus. Suspendisse massa lectus, viverra at ligula in, bibendum pulvinar orci. Nulla hendrerit tristique eleifend. Nunc ullamcorper lorem sed rhoncus consectetur. Praesent eu augue turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </OfferText>
                                <OfferDetails onClick={() => {props.switch('offer-details')}}>
                                    Szczegóły
                                </OfferDetails>
                            </OfferItem>
                        </OfferGridContainer>
                    </animated.div>
                    <animated.div style={buttonAnimation} className="animation__logo">
                        <OfferReadMore onClick={() => {props.switch('offers-section')}}>
                            Zobacz więcej
                        </OfferReadMore>
                    </animated.div>
                </OfferItemsContainer>
            </Offer>
        )
    }


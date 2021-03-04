import React, { Component } from 'react';
import styled from 'styled-components';

export default class Offer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Offer = styled.div`
            position: relative;
            width: 100%;
            height: 90vh;
        `;

        const OfferItemsContainer = styled.div`
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%,-50%);
        `;

        const OfferGridContainer = styled.div`
            display: grid;
            grid-template-columns: auto auto auto;
            width: 70vw;
            margin: 0 auto;
            grid-gap: 5vw;
        `;

        const OfferItem = styled.div`
            width: 100%;
            padding: 1vw;
            border-radius: 5px;
            background: white;
        `;

        const OfferTitle = styled.h2`
            color: #6AA0A2;
        `;

        const OfferPrice = styled.div`

        `;

        const OfferUnit = styled.p`

        `;

        const OfferAmount = styled.h3`

        `;

        const OfferText = styled.p`
        
        `;

        const OfferDetails = styled.button`
        
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
        `;

        return (
            <Offer>
                <OfferItemsContainer>
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
                            <OfferDetails onClick={() => {this.props.switch('offer-details')}}>
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
                            <OfferDetails onClick={() => {this.props.switch('offer-details')}}>
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
                            <OfferDetails onClick={() => {this.props.switch('offer-details')}}>
                                Szczegóły
                            </OfferDetails>
                        </OfferItem>
                    </OfferGridContainer>
                    <OfferReadMore onClick={() => {this.props.switch('offers-section')}}>
                        Zobacz więcej
                    </OfferReadMore>
                </OfferItemsContainer>
            </Offer>
        )
    }
}


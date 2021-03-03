import React, { Component } from 'react';
import styled from 'styled-components';

export default class Offer extends Component {
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
            grid-grap: 5vw;
        `;

        const OfferItem = styled.div`
            width: 100%;
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

        const OfferReadMore = styled.button``;

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
                                Lorem
                            </OfferText>
                            <OfferDetails>
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
                                Lorem
                            </OfferText>
                            <OfferDetails>
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
                                Lorem
                            </OfferText>
                            <OfferDetails>
                                Szczegóły
                            </OfferDetails>
                        </OfferItem>
                    </OfferGridContainer>
                    <OfferReadMore>
                        Zobacz więcej
                    </OfferReadMore>
                </OfferItemsContainer>
            </Offer>
        )
    }
}


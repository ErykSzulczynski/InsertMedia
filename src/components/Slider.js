import React from 'react';
import { Slide } from 'react-slideshow-image';
import img from '../assets/sample.jpg';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Slider() {
    const SliderContainer = styled.div`
        width: 85vw;
        margin: 0 auto;
    `;

    const SliderItem = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const OfferItemContainer = styled.div`
        width: 30%;
        height 40vh;
    `;

    const OfferItem = styled.div`
        height: 80%;
        border: 2px solid white;
        margin: 0 5%;
        border-radius: 5px;
        background-image: url(${img});
    `;

    const OfferName = styled.p`
        width: 100%;
        height 15%;
        color: white;
        font-size: 1.3rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 3px;
    `;

    const SliderChange = styled.div`
        font-size: 2rem;
        color: white;
        cursor: pointer;
        transition-duration: .2s;

        &:hover{
            color: #6AA0A2;
        }
    `;

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: <SliderChange><FontAwesomeIcon icon={faChevronLeft} /></SliderChange>,
        nextArrow: <SliderChange><FontAwesomeIcon icon={faChevronRight} /></SliderChange>
      };

    return (
        <SliderContainer>
          <Slide easing="ease" {...properties}>
            <SliderItem>
                <OfferItemContainer>
                    <OfferItem />
                    <OfferName>
                        Logo
                    </OfferName>
                </OfferItemContainer>
                <OfferItemContainer>
                    <OfferItem />
                    <OfferName>
                        Logo
                    </OfferName>
                </OfferItemContainer>
                <OfferItemContainer>
                    <OfferItem />
                    <OfferName>
                        Logo
                    </OfferName>
                </OfferItemContainer>
            </SliderItem>
            <SliderItem>
                <OfferItemContainer>
                    <OfferItem />
                    <OfferName>
                        Logo
                    </OfferName>
                </OfferItemContainer>
                <OfferItemContainer>
                    <OfferItem />
                    <OfferName>
                        Logo
                    </OfferName>
                </OfferItemContainer>
                <OfferItemContainer>
                    <OfferItem />
                    <OfferName>
                        Logo
                    </OfferName>
                </OfferItemContainer>
            </SliderItem>
            <SliderItem>
                <OfferItemContainer>
                    <OfferItem />
                    <OfferName>
                        Logo
                    </OfferName>
                </OfferItemContainer>
                <OfferItemContainer>
                    <OfferItem />
                    <OfferName>
                        Logo
                    </OfferName>
                </OfferItemContainer>
                <OfferItemContainer>
                    <OfferItem />
                    <OfferName>
                        Logo
                    </OfferName>
                </OfferItemContainer>
            </SliderItem>
          </Slide>
        </SliderContainer>
    )
}

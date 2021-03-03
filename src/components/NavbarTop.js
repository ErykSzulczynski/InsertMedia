import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHandshake, faUsers, faShoppingBasket, faIdBadge } from '@fortawesome/free-solid-svg-icons'

export default class NavbarTop extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props.name);
    }
    
    render() {
        const Navbar = styled.div`
            display: grid;
            height: 10vh;
            grid-template-columns: 25% 50% 25%;
        `;

        const GridItem = styled.div`
            height: 5vh;
            border-bottom: 1px solid white;
        `;

        const GridItemMiddle = styled.div`
            display: grid;
            grid-template-columns: 20% 20% 20% 20% 20%;
            text-align: middle;
            height: 10vh;
        `;

        const NavbarLink = styled.div`
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            color: white;
            transition-duration: .3s;

            &:hover{
                color: #6AA0A2;
            }
            
        `;

        const NavbarLinkText = styled.p`
            margin: 0;
        `;

        const NavbarLinkIcon = styled.div`
            margin: 0 auto;
            font-size: 2rem;
            
        `;

        return (
            <Navbar>
                <GridItem/>
                <GridItemMiddle>
                    <NavbarLink onClick={() => this.props.switch("home")}>
                        <NavbarLinkIcon>
                            <FontAwesomeIcon icon={faHome} />
                        </NavbarLinkIcon>
                        <NavbarLinkText>
                            Strona główna
                        </NavbarLinkText>
                    </NavbarLink>
                    <NavbarLink onClick={() => this.props.switch("about")}>
                        <NavbarLinkIcon>
                            <FontAwesomeIcon icon={faHandshake} />
                        </NavbarLinkIcon>
                        <NavbarLinkText>
                            O nas
                        </NavbarLinkText>
                    </NavbarLink>
                    <NavbarLink onClick={() => this.props.switch("offer")}>
                        <NavbarLinkIcon>
                            <FontAwesomeIcon icon={faShoppingBasket} />
                        </NavbarLinkIcon>
                        <NavbarLinkText>
                            Oferta
                        </NavbarLinkText>
                    </NavbarLink>
                    <NavbarLink onClick={() => this.props.switch("team")}>
                        <NavbarLinkIcon>
                            <FontAwesomeIcon icon={faUsers} />
                        </NavbarLinkIcon>
                        <NavbarLinkText>
                            Zespół
                        </NavbarLinkText>
                    </NavbarLink>
                    <NavbarLink onClick={() => this.props.switch("contact")}> 
                        <NavbarLinkIcon>
                            <FontAwesomeIcon icon={faIdBadge} />
                        </NavbarLinkIcon>
                        <NavbarLinkText>
                            Contact
                        </NavbarLinkText>
                    </NavbarLink>
                </GridItemMiddle>
                <GridItem/>
            </Navbar>
        )
    }
}

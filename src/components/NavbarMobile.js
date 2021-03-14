import React from 'react'
import { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHandshake, faUsers, faShoppingBasket, faIdBadge } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const NavbarLink = styled.div`
    margin: 4vh 0;
`;

        const NavbarLinkText = styled.span`
            margin: 0;
            padding-left: 4vw;
        `;

        const NavbarLinkIcon = styled.span`
            margin: 0 auto;
            font-size: 2rem;
            color: #6AA0A2;
`;

export default class NavbarMobile extends Component {
    constructor(props) {
        super(props);
    }

    showSettings (event) {
        event.preventDefault();
    }

    render(){
        return (
            <Menu>
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
            </Menu>
        )
    }
    
}

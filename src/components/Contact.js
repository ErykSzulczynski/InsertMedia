import React, { Component } from 'react';
import styled from 'styled-components';

export default class Contact extends Component {
    render() {
        const Contact = styled.div`
            height: 100vh;
        `;

        const ContactContainer = styled.div``;

        const ContactLeftPanel = styled.div`

        `;

        const ContactRightPanel = styled.div`

        `;

        const ContactInfo = styled.div`

        `;

        const ContactForm = styled.div`

        `;

        return (
            <Contact>
                <ContactContainer>
                    <ContactLeftPanel>
                        <ContactInfo></ContactInfo>
                        <ContactInfo></ContactInfo>
                    </ContactLeftPanel>
                    <ContactRightPanel>
                        <ContactForm></ContactForm>
                    </ContactRightPanel>
                </ContactContainer>
            </Contact>
        )
    }
}


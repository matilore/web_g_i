import React from 'react'
import { navigate } from 'gatsby'

import styled from 'styled-components'
import ContentDetails from './contact-details'
import Map from './map'
import { Button } from '../../styles/shared'

const Wrapper = styled.div`
    margin-top: 32px;
    display: flex;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 32px;
    width: 50%;
    justify-content: space-between;
`

const ContactInfo = () => {
    return (
        <>
            <h4>Contacto</h4>
            <Wrapper>
                <Map />
                <ContentWrapper>
                    <ContentDetails />

                    <Button onClick={() => navigate('/contact')}>
                        Contactanos
                    </Button>
                </ContentWrapper>
            </Wrapper>
        </>
    )
}

export default ContactInfo

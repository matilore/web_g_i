import React from 'react'
import styled from 'styled-components'
import Email from '../../images/email.svg'
import Phone from '../../images/phone.svg'
import Location from '../../images/location.svg'

import { Text2, Icon, Button } from '../../styles/shared'

const Wrapper = styled.div`
    margin-top: 32px;
    display: flex;
`

const MapWrapper = styled.div`
    width: 500px;
`

const Map = styled.img`
    border-radius: 20px;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
    width: 50%;
    justify-content: space-between;
`
const ContentDetails = styled.div`
    display: flex;
    flex-direction: column;
`

const ContactDetail = styled.div`
    display: flex;
    align-items: center;
    margin: 16px;

    p {
        margin: 0;
    }
`

const contactDetails = [
    { icon: Location, text: 'Via Manzoni' },
    { icon: Phone, text: '+34 65654654' },
    { icon: Email, text: 'hello@info.com' },
]

const LeafetMap = () => {
    return (
        <MapWrapper>
            <Map src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/10.89,44.6437,15,0/500x350?access_token=sk.eyJ1IjoibWF0aWxvcmUiLCJhIjoiY2todGhzMXg1MW5hbDMwcDVneDA5Mm05eCJ9.CEs6HiZn9R5qkMK6-YKxZQ" />
        </MapWrapper>
    )
}

const ContactInfo = () => {
    return (
        <>
            <h4>Contacto</h4>
            <Wrapper>
                {typeof window !== 'undefined' && <LeafetMap />}
                <ContentWrapper>
                    <ContentDetails>
                        {contactDetails.map(({ icon, text }) => {
                            return (
                                <ContactDetail>
                                    <Icon as={icon} />
                                    <Text2>{text}</Text2>
                                </ContactDetail>
                            )
                        })}
                    </ContentDetails>
                    <Button>Contactanos</Button>
                </ContentWrapper>
            </Wrapper>
        </>
    )
}

export default ContactInfo

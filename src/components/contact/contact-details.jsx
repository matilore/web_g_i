import React from 'react'
import styled from 'styled-components'
import Email from '../../images/email-icon.svg'
import Phone from '../../images/phone-icon.svg'
import Location from '../../images/location-icon.svg'
import { Text2, Icon } from '../../styles/shared'

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

export const ContactDetails = () => {
    return (
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
    )
}

export default ContactDetails

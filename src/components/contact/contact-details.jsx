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

    svg {
        flex-shrink: 0;
    }

    p {
        margin: 0;
    }
`

const contactDetails = [
    { icon: Location, text: 'home.contact.address' },
    { icon: Phone, text: 'home.contact.phone' },
    { icon: Email, text: 'home.contact.email' },
]

export const ContactDetails = ({ intl }) => {
    return (
        <ContentDetails>
            {contactDetails.map(({ icon, text }) => {
                return (
                    <ContactDetail>
                        <Icon as={icon} />
                        <Text2>
                            {intl.formatMessage({
                                id: text,
                            })}
                        </Text2>
                    </ContactDetail>
                )
            })}
        </ContentDetails>
    )
}

export default ContactDetails

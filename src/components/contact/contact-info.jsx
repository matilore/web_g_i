import React from 'react'
import { Row, Col } from 'react-bootstrap'

import styled from 'styled-components'
import ContentDetails from './contact-details'
import Map from './map'
import { Button, Spacer } from '../../styles/shared'
import Link from '../LocalizedLink'

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

const ContactInfo = ({ intl }) => {
    return (
        <>
            <h4>
                {intl.formatMessage({
                    id: 'home.contact',
                })}
            </h4>
            <Spacer top={2}>
                <Row>
                    <Col lg={6}>
                        <Map />
                    </Col>
                    <Col lg={6}>
                        <ContentWrapper>
                            <ContentDetails intl={intl} />
                            <Link to={'/contact'}>
                                <Button>
                                    {intl.formatMessage({
                                        id: 'home.contact.cta',
                                    })}
                                </Button>
                            </Link>
                        </ContentWrapper>
                    </Col>
                </Row>
            </Spacer>
        </>
    )
}

export default ContactInfo

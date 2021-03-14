import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'
import { FooterSection, FooterWrapper } from './styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { TitleH6, Text2, Link2 } from '../../styles/shared'
import { injectIntl } from 'react-intl'

const Footer = ({ intl }) => (
    <FooterWrapper>
        <Container>
            <Row>
                <Col sm={3}>
                    <FooterSection>
                        <TitleH6>
                            {intl.formatMessage({
                                id: 'footer.about_us.title',
                            })}
                        </TitleH6>
                        <Text2>
                            {intl.formatMessage({
                                id: 'footer.about_us.content',
                            })}
                        </Text2>
                    </FooterSection>
                </Col>
                <Col sm={3}>
                    <FooterSection>
                        <TitleH6>
                            {intl.formatMessage({
                                id: 'footer.address.title',
                            })}
                        </TitleH6>
                        <Text2>
                            {intl.formatMessage({
                                id: 'footer.address.content',
                            })}
                        </Text2>
                    </FooterSection>
                </Col>
                <Col sm={3}>
                    <FooterSection>
                        <TitleH6>
                            {intl.formatMessage({
                                id: 'footer.contact.title',
                            })}
                        </TitleH6>
                        <Text2>
                            {intl.formatMessage({
                                id: 'footer.contact.tel',
                            })}
                        </Text2>
                        <Text2>
                            {intl.formatMessage({
                                id: 'footer.contact.email',
                            })}
                        </Text2>
                    </FooterSection>
                </Col>
                <Col sm={3}>
                    <FooterSection>
                        <TitleH6>
                            {intl.formatMessage({
                                id: 'products.title',
                            })}
                        </TitleH6>
                        <Link2 href="/a">
                            {intl.formatMessage({
                                id: 'products.industrialCouplings',
                            })}
                        </Link2>

                        <Link2 href="/b">
                            {intl.formatMessage({
                                id: 'products.pneumaticBrake',
                            })}
                        </Link2>
                        <Link2 href="/c">
                            {intl.formatMessage({
                                id: 'products.pneumaticCameras',
                            })}
                        </Link2>
                    </FooterSection>
                </Col>
            </Row>
        </Container>
    </FooterWrapper>
)

export default injectIntl(Footer)

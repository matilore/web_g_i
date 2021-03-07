import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'
import { FooterSection, FooterWrapper } from './styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { TitleH5, Text2, Link2 } from '../../styles/shared'
import { injectIntl } from 'react-intl'

const Footer = ({ intl }) => (
    <FooterWrapper>
        <Container>
            <Row>
                <FooterSection>
                    <TitleH5>
                        {intl.formatMessage({
                            id: 'footer.about_us.title',
                        })}
                    </TitleH5>
                    <Text2>
                        {intl.formatMessage({
                            id: 'footer.about_us.content',
                        })}
                    </Text2>
                </FooterSection>
                <FooterSection>
                    <TitleH5>
                        {intl.formatMessage({
                            id: 'footer.address.title',
                        })}
                    </TitleH5>
                    <Text2>
                        {intl.formatMessage({
                            id: 'footer.address.content',
                        })}
                    </Text2>
                </FooterSection>
                <FooterSection>
                    <TitleH5>
                        {intl.formatMessage({
                            id: 'footer.contact.title',
                        })}
                    </TitleH5>
                    <Text2>
                        {intl.formatMessage({
                            id: 'footer.contact.tel',
                        })}
                    </Text2>
                    <Link2 href="mailto:info@gummiitalia.it">
                        {intl.formatMessage({
                            id: 'footer.contact.email',
                        })}
                    </Link2>
                </FooterSection>
                <FooterSection>
                    <TitleH5>
                        {intl.formatMessage({
                            id: 'products.title',
                        })}
                    </TitleH5>
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
            </Row>
        </Container>
    </FooterWrapper>
)

export default injectIntl(Footer)

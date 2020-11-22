import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'
import { FooterSection, FooterWrapper } from './styled-components'
import { TitleH4, Text1, Link1 } from '../../styles/shared'
import { injectIntl } from 'react-intl'

const Footer = ({ intl }) => (
    <FooterWrapper>
        <FooterSection>
            <TitleH4>
                {intl.formatMessage({
                    id: 'footer.about_us.title',
                })}
            </TitleH4>
            <Text1>
                {intl.formatMessage({
                    id: 'footer.about_us.content',
                })}
            </Text1>
        </FooterSection>
        <FooterSection>
            <TitleH4>
                {intl.formatMessage({
                    id: 'footer.address.title',
                })}
            </TitleH4>
            <Text1>
                {intl.formatMessage({
                    id: 'footer.address.content',
                })}
            </Text1>
        </FooterSection>
        <FooterSection>
            <TitleH4>
                {intl.formatMessage({
                    id: 'footer.contact.title',
                })}
            </TitleH4>
            <Text1>
                {intl.formatMessage({
                    id: 'footer.contact.tel',
                })}
            </Text1>
            <Link1 href="mailto:email">
                {' '}
                {intl.formatMessage({
                    id: 'footer.contact.email',
                })}
            </Link1>
        </FooterSection>
        <FooterSection>
            <TitleH4>
                {intl.formatMessage({
                    id: 'products.title',
                })}
            </TitleH4>
            <Link1 href="/acoplamientos">
                {intl.formatMessage({
                    id: 'products.acoplamientos',
                })}
            </Link1>

            <Link1 href="/embragues">
                {intl.formatMessage({
                    id: 'products.embragues_frenos',
                })}
            </Link1>
        </FooterSection>
    </FooterWrapper>
)

export default injectIntl(Footer)
import React from 'react'
import { FormattedHTMLMessage } from 'react-intl'
import { FooterSection, FooterWrapper } from './styled-components'
import { TitleH6, Text1, Link1 } from '../../styles/shared'
import { injectIntl } from 'react-intl'

const Footer = ({ intl }) => (
    <FooterWrapper>
        <FooterSection>
            <TitleH6>
                {intl.formatMessage({
                    id: 'footer.about_us.title',
                })}
            </TitleH6>
            <Text1>
                {intl.formatMessage({
                    id: 'footer.about_us.content',
                })}
            </Text1>
        </FooterSection>
        <FooterSection>
            <TitleH6>
                {intl.formatMessage({
                    id: 'footer.address.title',
                })}
            </TitleH6>
            <Text1>
                {intl.formatMessage({
                    id: 'footer.address.content',
                })}
            </Text1>
        </FooterSection>
        <FooterSection>
            <TitleH6>
                {intl.formatMessage({
                    id: 'footer.contact.title',
                })}
            </TitleH6>
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
            <TitleH6>
                {intl.formatMessage({
                    id: 'products.title',
                })}
            </TitleH6>
            <Link1 href="/acoplamientos">
                {intl.formatMessage({
                    id: 'products.industrialCouplings',
                })}
            </Link1>

            <Link1 href="/embragues">
                {intl.formatMessage({
                    id: 'products.pneumaticBrake',
                })}
            </Link1>
        </FooterSection>
    </FooterWrapper>
)

export default injectIntl(Footer)

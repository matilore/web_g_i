import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { injectIntl, intlShape } from 'react-intl'
import withPageContext from '../pageContext'
import { Container, Row, Col } from 'react-bootstrap'
import withLayout from '../layout'
import { compose } from 'recompose'
import cert from '../images/certificate-iso.jpg'
import atex from '../images/certificate-atex.jpg'
import { TitleH1, Spacer } from '../styles/shared'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        box-shadow: 10px 10px 8px #888888;
    }
`

const Certifications = ({ intl }) => {
    return (
        <Container>
            <Wrapper>
                <Spacer bottom={2} top={8}>
                    <TitleH1>
                        {intl.formatMessage({
                            id: 'aboutUs.certificates.iso.title',
                        })}
                    </TitleH1>
                </Spacer>
                <img src={cert} />
            </Wrapper>
            <Wrapper>
                <Spacer bottom={2} top={8}>
                    <TitleH1>
                        {intl.formatMessage({
                            id: 'aboutUs.certificates.atex.title',
                        })}
                    </TitleH1>
                </Spacer>
                <img src={atex} />
            </Wrapper>
        </Container>
    )
}

export default compose(withPageContext, withLayout, injectIntl)(Certifications)

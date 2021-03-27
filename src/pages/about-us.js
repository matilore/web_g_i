import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { injectIntl, intlShape } from 'react-intl'
import withPageContext from '../pageContext'
import { Container, Row, Col } from 'react-bootstrap'
import withLayout from '../layout'
import { compose } from 'recompose'
import { default as Industry } from '../images/industry.jpg'
import { default as Story } from '../images/story_2.jpg'
import { default as Story3 } from '../images/story_3.jpg'

import { TitleH4, Spacer, Text2, Li, Ul, Separator } from '../styles/shared'
import { BREAKPOINTS } from '../styles/constants'

const ImageCrop = styled.div`
    @media (min-width: ${BREAKPOINTS.xl}) {
        width: 140%;
        overflow: hidden;
        margin: 0;

        img {
            margin: 0 -28.885%;
            width: 177.777%;
        }
    }
`

const ImagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media (max-width: ${BREAKPOINTS.xl}) {
        ${ImageCrop}:nth-child(2) {
            display: none;
        }
    }
`

const industries = [
    'oil',
    'paper',
    'mineral',
    'pm',
    'li',
    'pn',
    'water',
    'textil',
    'metal',
    'general',
    'power',
]

const AboutUs = ({ intl }) => {
    return (
        <Spacer top={6}>
            <Container>
                <Row>
                    <Col xl={5}>
                        <ImagesWrapper>
                            <ImageCrop>
                                <Spacer bottom={2}>
                                    <img src={Story} />
                                </Spacer>
                            </ImageCrop>
                            <ImageCrop>
                                <img src={Story3} />
                            </ImageCrop>
                        </ImagesWrapper>
                    </Col>
                    <Col xl={7}>
                        <Spacer bottom={3}>
                            <TitleH4>
                                {intl.formatMessage({
                                    id: 'aboutUs.story.title',
                                })}
                            </TitleH4>
                            <Separator />
                        </Spacer>

                        <Text2>
                            {intl.formatMessage({
                                id: 'aboutUs.story.content',
                            })}
                        </Text2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Spacer bottom={3}>
                            <TitleH4>
                                {intl.formatMessage({
                                    id: 'aboutUs.industries.title',
                                })}
                            </TitleH4>
                            <Separator />
                        </Spacer>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <Ul>
                            {industries.map((industryName) => (
                                <Li>
                                    <Text2>
                                        {intl.formatMessage({
                                            id: `aboutUs.industries.${industryName}`,
                                        })}
                                    </Text2>
                                </Li>
                            ))}
                        </Ul>
                        <Text2>
                            {intl.formatMessage({
                                id: 'aboutUs.industries.content',
                            })}
                        </Text2>
                    </Col>
                    <Col lg={4}>
                        <img src={Industry} />
                    </Col>
                </Row>
            </Container>
        </Spacer>
    )
}

export default compose(withPageContext, withLayout, injectIntl)(AboutUs)

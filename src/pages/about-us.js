import React, { useEffect, useState } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import withPageContext from '../pageContext'
import { Container, Row, Col } from 'react-bootstrap'
import withLayout from '../layout'
import { compose } from 'recompose'
import { TitleH4, Spacer, Text2, Li, Ul, Separator } from '../styles/shared'

const serialize = (formFields) => {
    return Object.entries(formFields).reduce((acc, [key, val], index) => {
        return `${!!index ? `${acc}&` : acc}${key}=${encodeURIComponent(val)}`
    }, '')
}

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
    const [formFields, setFormFields] = useState({})

    const handleOnChange = (event) => {
        const name = event.target.getAttribute('name')
        setFormFields({ ...formFields, [name]: event.target.value })
    }

    return (
        <Spacer top={6}>
            <Container>
                <Row>
                    <Col lg={12}>
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

                        <Spacer top={10}>
                            <Spacer bottom={3}>
                                <TitleH4>
                                    {intl.formatMessage({
                                        id: 'aboutUs.industries.title',
                                    })}
                                </TitleH4>
                                <Separator />
                            </Spacer>
                            <Ul>
                                {industries.map((industryName) => (
                                    <Li>
                                        {intl.formatMessage({
                                            id: `aboutUs.industries.${industryName}`,
                                        })}
                                    </Li>
                                ))}
                            </Ul>
                            <Text2>
                                {intl.formatMessage({
                                    id: 'aboutUs.industries.content',
                                })}
                            </Text2>
                        </Spacer>
                    </Col>
                </Row>
            </Container>
        </Spacer>
    )
}

export default compose(withPageContext, withLayout, injectIntl)(AboutUs)

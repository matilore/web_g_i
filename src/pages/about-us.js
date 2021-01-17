import React, { useEffect, useState } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import withPageContext from '../pageContext'
import { Container, Row, Col } from 'react-bootstrap'
import withLayout from '../layout'
import { compose } from 'recompose'
import { TitleH4, Spacer, Text1, Li, Ul } from '../styles/shared'

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
        <Spacer top={3}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Spacer bottom={3}>
                            <TitleH4>
                                {intl.formatMessage({
                                    id: 'aboutUs.story.title',
                                })}
                            </TitleH4>
                        </Spacer>

                        <Text1>
                            {intl.formatMessage({
                                id: 'aboutUs.story.content',
                            })}
                        </Text1>

                        <Spacer top={8}>
                            <Spacer bottom={3}>
                                <TitleH4>
                                    {intl.formatMessage({
                                        id: 'aboutUs.industries.title',
                                    })}
                                </TitleH4>
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
                            <Text1>
                                {intl.formatMessage({
                                    id: 'aboutUs.industries.content',
                                })}
                            </Text1>
                        </Spacer>
                    </Col>
                </Row>
            </Container>
        </Spacer>
    )
}

export default compose(withPageContext, withLayout, injectIntl)(AboutUs)

import React, { useEffect, useState } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import withPageContext from '../../pageContext'
import { Container, Row, Col } from 'react-bootstrap'
import withLayout from '../../layout'
import { compose } from 'recompose'
import { Button, TitleH6, Spacer } from '../../styles/shared'
import ContactDetails from '../../components/contact/contact-details'
import Map from '../../components/contact/map'

const serialize = (formFields) => {
    return Object.entries(formFields).reduce((acc, [key, val], index) => {
        return `${!!index ? `${acc}&` : acc}${key}=${encodeURIComponent(val)}`
    }, '')
}

const Contact = () => {
    const [formFields, setFormFields] = useState({})

    // const parseMessage = (name, message) =>
    //     `${name} te ha escrito lo siguiente \n
    //     ${message}
    //     `

    const handleOnChange = (event) => {
        const name = event.target.getAttribute('name')
        setFormFields({ ...formFields, [name]: event.target.value })
    }

    const handleClick = () => {
        // axios({
        //     method: 'post',
        //     url:
        //         'https://script.google.com/macros/s/AKfycbywUrKmjH1UYLB-TKBISw6uU3HJiVvdIQGydzvnhX0FZDOKfeeW/exec',
        //     data: serialize(formFields),
        // })
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err))
    }

    return (
        <Spacer top={3}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Spacer bottom={3}>
                            <TitleH6> Leave us a message</TitleH6>
                        </Spacer>
                        <form
                            method="post"
                            netlify-honeypot="bot-field"
                            data-netlify="true"
                            name="contact"
                        >
                            <input type="hidden" name="bot-field" />
                            <input
                                type="hidden"
                                name="form-name"
                                value="contact"
                            />
                            <Form.Group controlId="form.name" role="form">
                                <Form.Control
                                    type="text"
                                    placeholder="Full name"
                                    onChange={handleOnChange}
                                    name="name"
                                />
                            </Form.Group>
                            <Form.Group controlId="form.email">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    onChange={handleOnChange}
                                    name="email"
                                />
                            </Form.Group>
                            <Form.Group controlId="form.subject">
                                <Form.Control
                                    type="text"
                                    placeholder="Subject"
                                    onChange={handleOnChange}
                                    name="subject"
                                />
                            </Form.Group>
                            <Form.Group controlId="form.message">
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    onChange={handleOnChange}
                                    name="message"
                                    placeholder="Your message..."
                                />
                            </Form.Group>
                            <Button
                                type="button"
                                disabled={
                                    !(
                                        formFields.name &&
                                        formFields.email &&
                                        formFields.subject &&
                                        formFields.message
                                    )
                                }
                                onClick={handleClick}
                            >
                                Send message
                            </Button>
                        </form>
                    </Col>

                    <Col lg={6}>
                        <Spacer top={5}>
                            <ContactDetails />
                            <Map height={224} />
                        </Spacer>
                    </Col>
                </Row>
            </Container>
        </Spacer>
    )
}

export default compose(withPageContext, withLayout, injectIntl)(Contact)

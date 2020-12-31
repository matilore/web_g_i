import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import { Form } from 'react-bootstrap'
import withPageContext from '../../pageContext'
import { Container, Row, Col } from 'react-bootstrap'
import withLayout from '../../layout'
import { compose } from 'recompose'
import { Button, TitleH6, Spacer } from '../../styles/shared'
import ContactDetails from '../../components/contact/contact-details'
import Map from '../../components/contact/map'

const Contact = () => {
    return (
        <Spacer top={3}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Spacer bottom={3}>
                            <TitleH6> Leave us a message</TitleH6>
                        </Spacer>
                        <Form>
                            <Form.Group controlId="form.name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="name" />
                            </Form.Group>
                            <Form.Group controlId="form.email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            </Form.Group>
                            <Form.Group controlId="form.message">
                                <Form.Label>Your message</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                            <Button>Send message</Button>
                        </Form>
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

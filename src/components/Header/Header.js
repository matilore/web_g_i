import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Navbar, Nav } from 'react-bootstrap'
import { injectIntl } from 'react-intl'
import { NavDropdown } from './styled-components'

import LanguageSwitcher from '../LanguageSwitcher'

const Header = ({ intl }) => (
    <Navbar className="justify-content-end" bg="light" expand="lg">
        <Navbar.Brand href="#home">Gummi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavDropdown
                    title={intl.formatMessage({
                        id: 'navbar.products',
                    })}
                >
                    <NavDropdown.Item href="/products/a">
                        {intl.formatMessage({
                            id: 'products.industrialCouplings',
                        })}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/products/b">
                        {intl.formatMessage({
                            id: 'products.pneumaticBrake',
                        })}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/products/c">
                        {intl.formatMessage({
                            id: 'products.pneumaticCameras',
                        })}
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    title={intl.formatMessage({
                        id: 'navbar.aboutus',
                    })}
                >
                    <NavDropdown.Item href="/about-us">
                        {intl.formatMessage({
                            id: 'about-us.story',
                        })}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/certifications">
                        {intl.formatMessage({
                            id: 'about-us.certifications',
                        })}
                    </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                    title={intl.formatMessage({
                        id: 'navbar.contact',
                    })}
                >
                    <NavDropdown.Item href="#action/3.1">
                        Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                        Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        <LanguageSwitcher />
    </Navbar>
)

export default injectIntl(Header)

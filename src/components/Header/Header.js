import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Navbar, Nav } from 'react-bootstrap'
import { injectIntl } from 'react-intl'
import { getLocalizedPath } from '../../i18n'
import { NavDropdown, LogoWrapper } from './styled-components'
import Link from '../../components/LocalizedLink'
import { default as Logo } from '../../images/logo-gummi.svg'

import LanguageSwitcher from '../LanguageSwitcher'

const Header = ({ intl, locale }) => (
    <Navbar className="justify-content-end" bg="light" expand="lg">
        <Link to="/">
            <LogoWrapper>
                <img src={Logo} />
            </LogoWrapper>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavDropdown
                    title={intl.formatMessage({
                        id: 'navbar.products',
                    })}
                >
                    <NavDropdown.Item
                        href={getLocalizedPath('/products/a', locale)}
                    >
                        {intl.formatMessage({
                            id: 'products.industrialCouplings',
                        })}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href={getLocalizedPath('/products/b', locale)}
                    >
                        {intl.formatMessage({
                            id: 'products.pneumaticBrake',
                        })}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href={getLocalizedPath('/products/c', locale)}
                    >
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
                    <NavDropdown.Item
                        href={getLocalizedPath('/about-us', locale)}
                    >
                        {intl.formatMessage({
                            id: 'navbar.about-us.story',
                        })}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        href={getLocalizedPath('/certifications', locale)}
                    >
                        {intl.formatMessage({
                            id: 'navbar.about-us.certifications',
                        })}
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Link to={'/contact'}>
                {intl.formatMessage({
                    id: 'navbar.contact',
                })}
            </Link>
        </Navbar.Collapse>
        <LanguageSwitcher />
    </Navbar>
)

export default injectIntl(Header)

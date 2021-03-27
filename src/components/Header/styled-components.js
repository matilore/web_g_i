import {
    NavDropdown as BootstrapNav,
    Navbar as BootstrapNavbar,
} from 'react-bootstrap'
import styled from 'styled-components'

const gummiBlue = '#1565a8'

export const NavDropdown = styled(BootstrapNav)`
    && {
        a {
            &:after {
                content: none;
            }
            color: ${gummiBlue} !important;
        }
    }
`

export const Navbar = styled(BootstrapNavbar)`
    && {
        height: 64px;
    }
`

export const LogoWrapper = styled.div`
    width: 180px;
`

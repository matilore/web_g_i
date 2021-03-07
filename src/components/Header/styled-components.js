import { NavDropdown as BootstrapNav } from 'react-bootstrap'
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

export const LogoWrapper = styled.div`
    width: 150px;
`

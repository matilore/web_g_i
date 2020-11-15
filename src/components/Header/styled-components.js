import { NavDropdown as BootstrapNav } from 'react-bootstrap'
import styled from 'styled-components'

export const NavDropdown = styled(BootstrapNav)`
    && {
        a {
            &:after {
                content: none;
            }
        }
    }
`

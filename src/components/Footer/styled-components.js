import styled from 'styled-components'
const gummiBlue = '#1565a8'
import { BREAKPOINTS } from '../../styles/constants'

export const FooterSection = styled.div`
    width: calc(25% - 32px);
    display: flex;
    flex-direction: column;
    word-wrap: break-word;

    &:not(:first-child) {
        margin-left: 32px;
    }

    &:first-child {
        margin-left: 16px;
    }

    a {
        text-decoration: none;
        width: fit-content;
        &: hover {
            background: ${gummiBlue};
            color: white;
        }
    }

    p {
        margin-bottom: 4px;
    }
`

export const FooterWrapper = styled.footer`
    margin-top: 64px;
    height: 150px;
    position: relative;
    bottom: 0;
    padding: 24px 32px;
    background-color: #193263;
    color: white;

    @media (max-width: ${BREAKPOINTS.lg}) {
        padding: 16px 8px;
    }

    @media (max-width: ${BREAKPOINTS.md}) {
        padding: 8px 8px;
    }
`

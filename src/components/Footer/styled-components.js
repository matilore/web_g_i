import styled from 'styled-components'
const gummiBlue = '#1565a8'
import { BREAKPOINTS } from '../../styles/constants'

export const FooterSection = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

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
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        color: ${gummiBlue};
    }
`

export const FooterWrapper = styled.footer`
    margin-top: 64px;
    height: 150px;
    position: relative;
    bottom: 0;
    padding: 24px 32px;
    background-color: #102142;
    color: white;

    @media (max-width: ${BREAKPOINTS.lg}) {
        padding: 16px 8px;
    }

    @media (max-width: ${BREAKPOINTS.md}) {
        padding: 8px 8px;
    }

    @media (max-width: ${BREAKPOINTS.sm}) {
        height: auto;
        h6 {
            margin-top: 16px;
        }
    }
`

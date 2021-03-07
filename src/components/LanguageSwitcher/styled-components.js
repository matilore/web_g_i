import styled from 'styled-components'

export const LanguageSwitcherWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 40px;

    // @media (max-width: 576px) {
    //     flex-direction: column;
    //     align-items: start;
    // }

    img {
        width: 1.2em;
        height: 30px;
        margin: 0 0 0 0.5em;
    }

    a:first-child img {
        margin: 0 0 0 0;
    }
`

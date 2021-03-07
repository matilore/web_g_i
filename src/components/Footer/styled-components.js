import styled from 'styled-components'
const gummiBlue = '#1565a8'

export const FooterSection = styled.div`
    width: calc(25% - 32px);
    display: flex;
    flex-direction: column;
    word-wrap: break-word;

    &:not(:first-child) {
        margin-left: 32px;
    }

    a {
        text-decoration: none;
        width: fit-content;
        &: hover {
            background: ${gummiBlue};
            color: white;
        }
    }
`

export const FooterWrapper = styled.footer`
    margin-top: 64px;
    height: 150px;
    position: relative;
    bottom: 0;
    padding: 32px;
    background-color: lightGrey;
`

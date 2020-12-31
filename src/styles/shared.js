import styled, { css } from 'styled-components'

export const TitleH4 = styled.h4`
    text-tranform: uppercase;
    width: 28vw;
    font-size: 2vw;
    color: ${({ color }) => (color ? color : 'inherit')};
`

export const TitleH6 = styled.h6`
    text-tranform: uppercase;
    width: 25vw;
    font-size: 1.6vw;
    color: ${({ color }) => (color ? color : 'inherit')};
`

export const Spacer = styled.div`
    ${({ top, right, bottom, left }) => css`
        margin-top: ${top ? top * 8 : 0}px;
        margin-right: ${right ? right * 8 : 0}px;
        margin-bottom: ${bottom ? bottom * 8 : 0}px;
        margin-left: ${left ? left * 8 : 0}px;
    `}
`

export const Text1 = styled.p``

export const Text2 = styled.p`
    font-size: 0.75rem;
`

export const Link1 = styled.a``

export const ProductCard = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 40px;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        transform: scale(1.04);
    }

    h4 {
        padding-bottom: 16px;
        border-bottom: 2px solid darkGrey;
    }
`

export const ProductContent = styled.div`
    height: 60px;
    margin-bottom: 16px;
    text-align: center;
`

export const Icon = styled.svg`
    height: 24px;
    width: 24px;
    margin-right: 16px;
`

export const Button = styled.button`
    padding: 8px 32px;
    background-color: #6c5ce7;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: bold;
    width: 100%;
`

import styled from 'styled-components'

export const TitleH4 = styled.h4`
    text-tranform: uppercase;
    width: 28vw;
    font-size: 2.5vw;
    color: ${({ color }) => (color ? color : 'inherit')};
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
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        transform: scale(1.04);
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

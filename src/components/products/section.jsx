import React from 'react'
import styled from 'styled-components'
import {
    ProductCard,
    ProductContent,
    TitleH4,
    Text1,
} from '../../styles/shared'

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 64px 0;
    width: 100%;
    justify-content: space-around;
`

const ProductsSection = ({ products, intl }) => {
    return (
        <Section>
            {products.map((product) => {
                return (
                    <ProductCard>
                        <ProductContent>
                            {product.label && (
                                <TitleH4>
                                    {intl.formatMessage({
                                        id: product.label,
                                    })}
                                </TitleH4>
                            )}
                        </ProductContent>
                        <img src={product.image} />
                    </ProductCard>
                )
            })}
        </Section>
    )
}

export default ProductsSection

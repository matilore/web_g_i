import React from 'react'
import styled from 'styled-components'
import {
    ProductCard,
    ProductContent,
    TitleH5,
    Text1,
    ImageWrapper,
} from '../../styles/shared'

import Link from '../../components/LocalizedLink'

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 64px 0;
    width: 100%;
    justify-content: flex-start;
`

const ProductsSection = ({ products, intl }) => {
    return (
        <Section>
            {products.map((product) => {
                return (
                    <ProductCard>
                        <Link to={product.route || '/'}>
                            <ProductContent>
                                {product.label && (
                                    <TitleH5>
                                        {intl.formatMessage({
                                            id: product.label,
                                        })}
                                    </TitleH5>
                                )}
                            </ProductContent>
                            <ImageWrapper>
                                <img src={product.image} />
                            </ImageWrapper>
                        </Link>
                    </ProductCard>
                )
            })}
        </Section>
    )
}

export default ProductsSection

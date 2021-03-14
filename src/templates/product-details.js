import React, { useEffect, useState } from 'react'
import ProductsSection from '../components/products/section'
import { TitleH1, Spacer, Text2, TitleH6, Button } from '../styles/shared'
import { Container, Row, Col } from 'react-bootstrap'

import { injectIntl } from 'react-intl'
import { compose } from 'recompose'

import withPageContext from '../pageContext'
import withLayout from '../layout'

import {
    COUPLINGS,
    PNEUMATIC_BRAKS,
    PNEUMATIC_CAMERAS,
} from '../static-data/static-data'

const PRODUCTS = {
    a: COUPLINGS,
    b: PNEUMATIC_BRAKS,
    c: PNEUMATIC_CAMERAS,
}

const ProductDetails = ({ pageContext, intl }) => {
    const {
        product: { productCategory, name },
        locale,
    } = pageContext

    const [cat, setCat] = useState(null)

    const product = PRODUCTS[productCategory][name]

    useEffect(() => {
        if (name) {
            import(`catalogues/${locale}/${name}.pdf`)
                .then((module) => {
                    setCat(module.default)
                })
                .catch((e) => {
                    setCat(null)
                })
        }
    }, [])

    const handleOpenCat = (url) => () => window.open(url)

    return (
        <Container>
            <Spacer top={5}>
                <Row>
                    <Col lg={6}>
                        <img src={product.image} />
                    </Col>
                    <Col lg={6}>
                        <TitleH1>
                            {intl.formatMessage({
                                id: product.label,
                            })}
                        </TitleH1>
                        <Text2>
                            {intl.formatMessage({
                                id: product.general,
                            })}
                        </Text2>
                        <TitleH6>
                            {intl.formatMessage({
                                id: 'product.details.characteristcs',
                            })}
                        </TitleH6>

                        <Text2>
                            {intl.formatMessage({
                                id: product.description,
                            })}
                        </Text2>

                        <TitleH6>
                            {intl.formatMessage({
                                id: 'product.details.power',
                            })}
                        </TitleH6>

                        <Text2>
                            {intl.formatMessage({
                                id: product.power,
                            })}
                        </Text2>
                        <TitleH6>
                            {intl.formatMessage({
                                id: 'product.details.sizes',
                            })}
                        </TitleH6>

                        <Text2>
                            {intl.formatMessage({
                                id: product.sizes,
                            })}
                        </Text2>

                        <TitleH6>
                            {intl.formatMessage({
                                id: 'product.details.useCases',
                            })}
                        </TitleH6>

                        <Text2>
                            {intl.formatMessage({
                                id: product.useCases,
                            })}
                        </Text2>
                        {cat && (
                            <Button onClick={handleOpenCat(cat)}>
                                {intl.formatMessage({
                                    id: 'product.details.download.catalogue',
                                })}
                            </Button>
                        )}
                    </Col>
                </Row>
            </Spacer>
        </Container>
    )
}

export default compose(withPageContext, withLayout, injectIntl)(ProductDetails)

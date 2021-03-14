import React, { useEffect, useState } from 'react'
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
    const {
        image,
        label,
        general,
        characteristics,
        power,
        sizes,
        useCases,
    } = product

    return (
        <Container>
            <Spacer top={5}>
                <Row>
                    <Col lg={6}>
                        <img src={image} />
                    </Col>
                    <Col lg={6}>
                        <TitleH1>
                            {intl.formatMessage({
                                id: label,
                            })}
                        </TitleH1>
                        <Text2>
                            {intl.formatMessage({
                                id: general,
                            })}
                        </Text2>
                        {characteristics && (
                            <>
                                <TitleH6>
                                    {intl.formatMessage({
                                        id: 'product.details.characteristcs',
                                    })}
                                </TitleH6>
                                <Text2>
                                    {intl.formatMessage({
                                        id: characteristics,
                                    })}
                                </Text2>
                            </>
                        )}
                        {power && (
                            <>
                                <TitleH6>
                                    {intl.formatMessage({
                                        id: 'product.details.power',
                                    })}
                                </TitleH6>

                                <Text2>
                                    {intl.formatMessage({
                                        id: power,
                                    })}
                                </Text2>
                            </>
                        )}
                        {sizes && (
                            <>
                                <TitleH6>
                                    {intl.formatMessage({
                                        id: 'product.details.sizes',
                                    })}
                                </TitleH6>

                                <Text2>
                                    {intl.formatMessage({
                                        id: sizes,
                                    })}
                                </Text2>
                            </>
                        )}
                        {useCases && (
                            <>
                                <TitleH6>
                                    {intl.formatMessage({
                                        id: 'product.details.useCases',
                                    })}
                                </TitleH6>
                                <Text2>
                                    {intl.formatMessage({
                                        id: useCases,
                                    })}
                                </Text2>
                            </>
                        )}
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

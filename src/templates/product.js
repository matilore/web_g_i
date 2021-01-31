import React from 'react'
import ProductsSection from '../components/products/section'
import { TitleH1, Spacer } from '../styles/shared'
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

const AllProducts = ({ pageContext, intl }) => {
    const {
        product: { name, title },
    } = pageContext

    const productsList = Object.values(PRODUCTS[name])

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <Spacer top={5}>
                        <TitleH1>
                            {intl.formatMessage({
                                id: title,
                            })}
                        </TitleH1>
                    </Spacer>
                    <ProductsSection intl={intl} products={productsList} />
                </Col>
            </Row>
        </Container>
    )
}

export default compose(withPageContext, withLayout, injectIntl)(AllProducts)

import React from 'react'
import ProductsSection from '../components/products/section'
import { TitleH1, Spacer } from '../styles/shared'
import { Container, Row, Col } from 'react-bootstrap'

import { default as LineaA } from '../images/a/a.png'
import { default as LineaAn } from '../images/a/an.png'
import { default as LineaBr } from '../images/a/br.png'
import { default as LineaEz } from '../images/a/ez.png'
import { default as Spiroflex } from '../images/a/spiroflex.png'
import { default as LineaVndd } from '../images/a/vndd.png'

import { default as LineaFk } from '../images/b/fk.png'
import { default as LineaFke } from '../images/b/fke.png'
import { default as LineaFkr } from '../images/b/fkr.png'
import { default as LineaFkt } from '../images/b/fkt.png'
import { default as LineaFm } from '../images/b/fm.png'
import { default as LineaRn } from '../images/b/rn.png'

import { default as Cn } from '../images/c/cn.png'

import { injectIntl } from 'react-intl'
import { compose } from 'recompose'

import withPageContext from '../pageContext'
import withLayout from '../layout'

const PRODUCTS = {
    a: [
        {
            image: LineaA,
            title: 'products.pneumaticBrake',
        },
        {
            image: LineaAn,
            title: 'products.industrialCouplings',
        },
        {
            image: LineaBr,
            title: 'products.pneumaticBrake',
        },
        {
            image: LineaEz,
            title: 'products.industrialCouplings',
        },
        {
            image: Spiroflex,
            title: 'products.pneumaticBrake',
        },
        {
            image: LineaVndd,
            title: 'products.industrialCouplings',
        },
    ],
    b: [
        {
            image: LineaFk,
            title: 'products.pneumaticBrake',
        },
        {
            image: LineaFke,
            title: 'products.industrialCouplings',
        },
        {
            image: LineaFkr,
            title: 'products.pneumaticBrake',
        },
        {
            image: LineaFkt,
            title: 'products.industrialCouplings',
        },
        {
            image: LineaFm,
            title: 'products.pneumaticBrake',
        },
        {
            image: LineaRn,
            title: 'products.industrialCouplings',
        },
    ],
    c: [
        {
            image: Cn,
            title: 'products.industrialCouplings',
        },
    ],
}

const AllProducts = ({ pageContext, intl }) => {
    const {
        product: { name, title },
    } = pageContext

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
                    <ProductsSection intl={intl} products={PRODUCTS[name]} />
                </Col>
            </Row>
        </Container>
    )
}

export default compose(withPageContext, withLayout, injectIntl)(AllProducts)

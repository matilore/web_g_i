import React from 'react'
import Helmet from 'react-helmet'
import { injectIntl, intlShape } from 'react-intl'
import { compose } from 'recompose'
import { Container, Row, Col } from 'react-bootstrap'

import withPageContext from '../pageContext'
import withLayout from '../layout'
import Slider from '../components/slider'
import ProductsSection from '../components/products/section'
import { ContactInfo } from '../components/contact'
import {
    EmbraguesImg,
    AcoplesImg,
    CamarasImg,
} from '../components/products/constants'

const HOME_PRODUCTS = [
    {
        route: '/products/a',
        image: AcoplesImg,
        label: 'products.industrialCouplings',
    },
    {
        route: '/products/b',
        image: EmbraguesImg,
        label: 'products.pneumaticBrake',
    },
    {
        route: '/products/c',
        image: CamarasImg,
        label: 'products.pneumaticCameras',
    },
]

const IndexPage = ({ intl }) => (
    <React.Fragment>
        <Helmet>
            <title>{intl.formatMessage({ id: 'home.title' })}</title>
        </Helmet>
        <main>
            <Slider />
            <Container>
                <Row>
                    <Col>
                        <ProductsSection intl={intl} products={HOME_PRODUCTS} />
                        <ContactInfo intl={intl} />
                    </Col>
                </Row>
            </Container>
        </main>
    </React.Fragment>
)

IndexPage.propTypes = {
    intl: intlShape.isRequired,
}

export default compose(withPageContext, withLayout, injectIntl)(IndexPage)

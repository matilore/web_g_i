import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GlobalStyle from '../styles/global-style'

import { getDisplayName } from '../utils'
import 'bootstrap/dist/css/bootstrap.min.css'

const withLayout = (Component) => {
    const WrapperComponent = (props) => {
        return (
            <React.Fragment>
                <Header />
                <Component {...props} />
                <Footer />
                <GlobalStyle />
            </React.Fragment>
        )
    }
    WrapperComponent.displayName = `Layout(${getDisplayName(Component)})`
    return WrapperComponent
}

export default withLayout

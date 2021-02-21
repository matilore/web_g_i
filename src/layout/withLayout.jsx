import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GlobalStyle from '../styles/global-style'

import { getDisplayName } from '../utils'
import 'bootstrap/dist/css/bootstrap.min.css'

const Wrapper = styled.div`
    min-height: calc(100vh - 246px);
    position: relative;
`

const withLayout = (Component) => {
    const WrapperComponent = (props) => {
        return (
            <>
                <Header locale={props?.pageContext?.locale} />
                <Wrapper>
                    <Component {...props} />
                </Wrapper>
                <Footer />
                <GlobalStyle />
            </>
        )
    }
    WrapperComponent.displayName = `Layout(${getDisplayName(Component)})`
    return WrapperComponent
}

export default withLayout

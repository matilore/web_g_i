import React, { useEffect, useState } from 'react'
import { injectIntl, intlShape } from 'react-intl'
import withPageContext from '../pageContext'
import { Container, Row, Col } from 'react-bootstrap'
import withLayout from '../layout'
import { compose } from 'recompose'

const Certifications = ({ intl }) => {
    return <div>Certifications</div>
}

export default compose(withPageContext, withLayout, injectIntl)(Certifications)

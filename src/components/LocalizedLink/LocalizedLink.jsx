import React from 'react'
import { Link } from 'gatsby'
import { GatbsyLink } from '../../styles/shared'

import { getLocalizedPath } from '../../i18n'
import { PageContext } from '../../pageContext'

const LocalizedLink = ({ to, ...props }) => (
    <PageContext.Consumer>
        {({ locale }) => (
            <GatbsyLink {...props} to={getLocalizedPath(to, locale)} />
        )}
    </PageContext.Consumer>
)

export default LocalizedLink

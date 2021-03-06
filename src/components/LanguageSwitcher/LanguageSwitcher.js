import React from 'react'
import { Link } from 'gatsby'

import es from '../../images/es.svg'
import en from '../../images/en.svg'
import it from '../../images/it.svg'

import { languages, getLocalizedPath } from '../../i18n'

import { PageContext } from '../../pageContext'
import { LanguageSwitcherWrapper } from './styled-components'

const flags = {
    it,
    es,
    en,
}

const LanguageSwitcher = () => (
    <PageContext.Consumer>
        {({ originalPath, locale }) => (
            <LanguageSwitcherWrapper>
                {languages.map((lang) => {
                    return lang.locale === locale ? (
                        <img
                            key={lang.locale}
                            src={flags[lang.locale]}
                            alt={lang.label}
                        />
                    ) : (
                        <Link
                            key={lang.locale}
                            to={getLocalizedPath(originalPath, lang.locale)}
                        >
                            <img src={flags[lang.locale]} alt={lang.label} />
                        </Link>
                    )
                })}
            </LanguageSwitcherWrapper>
        )}
    </PageContext.Consumer>
)

export default LanguageSwitcher

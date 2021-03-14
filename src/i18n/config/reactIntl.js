import { addLocaleData } from 'react-intl'
import esData from 'react-intl/locale-data/es'
import enData from 'react-intl/locale-data/en'
import itData from 'react-intl/locale-data/it'

addLocaleData([...esData, ...enData, ...itData])

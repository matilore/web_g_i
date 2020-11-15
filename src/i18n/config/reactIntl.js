import { addLocaleData } from 'react-intl'
import esData from 'react-intl/locale-data/es'
import enData from 'react-intl/locale-data/en'
import ptData from 'react-intl/locale-data/pt'

addLocaleData([...esData, ...enData, ...ptData])

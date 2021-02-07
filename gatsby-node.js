/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { languages, getLocalizedPath } = require('./src/i18n')

const COUPLINGS_PATHS = ['a', 'an', 'br', 'ez', 'spiroflex', 'tlb']
const PNEUMATIC_BRAKS_PATHS = ['fk', 'fke', 'fkr', 'fkt', 'fm', 'rn']
const PNEUMATIC_CAMERAS_PATHS = ['cn']

const createProductsPages = (createPage) => {
    const allProducts = [
        { name: 'a', title: 'products.industrialCouplings' },
        { name: 'b', title: 'products.pneumaticBrake' },
        { name: 'c', title: 'products.pneumaticCameras' },
    ]
    // Create a page for each Pokémon.
    allProducts.forEach((product) => {
        languages.forEach((lang) => {
            const localizedPath = getLocalizedPath(
                `/products/${product.name}`,
                lang.locale
            )
            createPage({
                path: localizedPath,
                component: require.resolve('./src/templates/product.js'),
                context: {
                    product,
                    locale: lang.locale,
                    originalPath: `/products/${product.name}`,
                },
            })

            createProductDetailsPage(createPage, product.name)
        })
    })
}

const createProductDetailsPage = (createPage, productCategory) => {
    const list = {
        a: COUPLINGS_PATHS,
        b: PNEUMATIC_BRAKS_PATHS,
        c: PNEUMATIC_CAMERAS_PATHS,
    }
    const allProducts = list[productCategory]
    // Create a page for each Pokémon.
    allProducts.forEach((product) => {
        languages.forEach((lang) => {
            const localizedPath = getLocalizedPath(
                `/products/${productCategory}/${product}`,
                lang.locale
            )
            createPage({
                path: localizedPath,
                component: require.resolve(
                    './src/templates/product-details.js'
                ),
                context: {
                    product: { productCategory, name: product },
                    locale: lang.locale,
                    originalPath: `/products/${productCategory}/${product}`,
                },
            })
        })
    })
}

exports.createPages = ({ actions: { createPage } }) => {
    // `getPokemonData` is a function that fetches our data

    return new Promise((resolve) => {
        createProductsPages(createPage)
        resolve()
    })
}

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions

    if (page.internalComponentName === 'ComponentDev404Page') {
        return
    }

    return new Promise((resolve) => {
        deletePage(page)

        languages.forEach((lang) => {
            const localizedPath = getLocalizedPath(page.path, lang.locale)
            const localePage = {
                ...page,
                path: localizedPath,
                context: {
                    locale: lang.locale,
                    originalPath: page.path,
                },
            }

            createPage(localePage)
        })

        resolve()
    })
}

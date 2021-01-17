/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { languages, getLocalizedPath } = require('./src/i18n')

exports.createPages = ({ actions: { createPage } }) => {
    // `getPokemonData` is a function that fetches our data

    return new Promise((resolve) => {
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
            })
        })
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

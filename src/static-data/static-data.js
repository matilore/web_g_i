import { default as LineaA } from '../images/a/a.png'
import { default as LineaAn } from '../images/a/an.png'
import { default as LineaBr } from '../images/a/br.png'
import { default as LineaEz } from '../images/a/ez.png'
import { default as Spiroflex } from '../images/a/spiroflex.png'
import { default as LineaTlb } from '../images/a/tlb.png'

import { default as LineaFk } from '../images/b/fk.png'
import { default as LineaFke } from '../images/b/fke.png'
import { default as LineaFkr } from '../images/b/fkr.png'
import { default as LineaFkt } from '../images/b/fkt.png'
import { default as LineaFm } from '../images/b/fm.png'
import { default as LineaRn } from '../images/b/rn.png'

import { default as Cn } from '../images/c/cn.png'

export const COUPLINGS = {
    a: {
        route: '/products/a/a',
        image: LineaA,
        label: 'products.industrialCouplings.line_a.name',
        general: 'products.industrialCouplings.line_a.general',
        characteristics: 'products.industrialCouplings.line_a.description',
        power: 'products.industrialCouplings.line_a.power',
        sizes: 'products.industrialCouplings.line_a.sizes',
        useCases: 'products.industrialCouplings.line_a.useCases',
    },
    an: {
        route: '/products/a/an',
        image: LineaAn,
        label: 'products.industrialCouplings.line_an.name',
        general: 'products.industrialCouplings.line_an.general',
        characteristics: 'products.industrialCouplings.line_an.description',
        sizes: 'products.industrialCouplings.line_an.sizes',
    },
    br: {
        route: '/products/a/br',
        image: LineaBr,
        label: 'products.industrialCouplings.line_br.name',
        general: 'products.industrialCouplings.line_br.general',
        characteristics: 'products.industrialCouplings.line_br.description',
        power: 'products.industrialCouplings.line_br.power',
        sizes: 'products.industrialCouplings.line_br.sizes',
        useCases: 'products.industrialCouplings.line_br.useCases',
    },
    ez: {
        route: '/products/a/ez',
        image: LineaEz,
        label: 'products.industrialCouplings.line_ez.name',
        general: 'products.industrialCouplings.line_ez.general',
        characteristics: 'products.industrialCouplings.line_ez.description',
        sizes: 'products.industrialCouplings.line_ez.sizes',
        useCases: 'products.industrialCouplings.line_ez.useCases',
    },
    spiroflex: {
        route: '/products/a/spiroflex',
        image: Spiroflex,
        label: 'products.industrialCouplings.spiroflex.name',
        general: 'products.industrialCouplings.line_spiroflex.general',
        sizes: 'products.industrialCouplings.spiroflex.sizes',
        useCases: 'products.industrialCouplings.spiroflex.useCases',
    },
    tlb: {
        route: '/products/a/tlb',
        image: LineaTlb,
        label: 'products.industrialCouplings.tlb.name',
        general: 'products.industrialCouplings.tlb.general',
    },
}

export const PNEUMATIC_BRAKS = {
    fk: {
        route: '/products/b/fk',
        image: LineaFk,
        label: 'products.pneumaticBrake.fk.name',
        general: 'products.pneumaticBrake.fk.general',
        characteristics: 'products.pneumaticBrake.fk.description',
        power: 'products.pneumaticBrake.fk.power',
        sizes: 'products.pneumaticBrake.fk.sizes',
    },
    fke: {
        route: '/products/b/fke',
        image: LineaFke,
        label: 'products.pneumaticBrake.fke.name',
        general: 'products.pneumaticBrake.fke.general',
        characteristics: 'products.pneumaticBrake.fke.description',
        power: 'products.pneumaticBrake.fke.power',
        sizes: 'products.pneumaticBrake.fke.sizes',
    },
    fkr: {
        route: '/products/b/fkr',
        image: LineaFkr,
        label: 'products.pneumaticBrake.fkr.name',
        general: 'products.pneumaticBrake.fkr.general',
        characteristics: 'products.pneumaticBrake.fkr.description',
        power: 'products.pneumaticBrake.fkr.power',
        sizes: 'products.pneumaticBrake.fkr.sizes',
    },
    fkt: {
        route: '/products/b/fkt',
        image: LineaFkt,
        label: 'products.pneumaticBrake.fkt.name',
        general: 'products.pneumaticBrake.fkt.general',
        characteristics: 'products.pneumaticBrake.fkt.description',
        power: 'products.pneumaticBrake.fkt.power',
        sizes: 'products.pneumaticBrake.fkt.sizes',
        useCases: 'products.pneumaticBrake.fkt.useCases',
    },
}
export const PNEUMATIC_CAMERAS = {
    cn: {
        route: '/products/c/cn',
        image: Cn,
        label: 'products.pneumaticCameras.cn.name',
        general: 'products.pneumaticCameras.cn.general',
        sizes: 'products.pneumaticCameras.cn.sizes',
        useCases: 'products.pneumaticCameras.cn.useCases',
    },
}

import styled from 'styled-components'

export const SwiperWrapper = styled.div`
    .swiper-button-prev,
    .swiper-button-next {
        color: white;
    }

    .swiper-pagination {
        .swiper-pagination-bullet-active {
            background: white;
        }
    }
`

export const SlideWrapper = styled.div`
    overflow: hidden;
    height: 120%;
    width: 120%;

    img {
        width: 120%;
        height: 120%;
        margin: -2.5% 0 0 -10%;
    }
`

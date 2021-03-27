import React from 'react'
import styled from 'styled-components'

const StyledMap = styled.img`
    border-radius: 20px;
    width: 100% !important;
`

const Map = ({ width = 500, height = 250 }) =>
    typeof window !== 'undefined' ? (
        <StyledMap
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+841515(10.8901,44.6437)/10.9174,44.6395,11,0/${width}x${height}?access_token=pk.eyJ1IjoibWF0aWxvcmUiLCJhIjoiY2todGhwbW00MTJxejJycGJya2pvMnRqcCJ9.477I2zziqQm1EMjHJyvs1g`}
        />
    ) : null

export default Map

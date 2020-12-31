import React from 'react'
import styled from 'styled-components'

const StyledMap = styled.img`
    border-radius: 20px;
`

const Map = ({ width = 500, height = 250 }) =>
    typeof window !== 'undefined' ? (
        <StyledMap
            src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/10.89,44.6437,15,0/${width}x${height}?access_token=sk.eyJ1IjoibWF0aWxvcmUiLCJhIjoiY2todGhzMXg1MW5hbDMwcDVneDA5Mm05eCJ9.CEs6HiZn9R5qkMK6-YKxZQ`}
        />
    ) : null

export default Map

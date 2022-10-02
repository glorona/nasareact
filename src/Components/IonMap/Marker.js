import { Icon } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import "./marker.css"

export default function Marker(props) {
    const { r = 5 } = props

    return (
        <svg>
            <circle cx={50} cy={50} r={r} fill="red" />
        </svg>
    )
}

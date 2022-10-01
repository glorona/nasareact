import { Icon } from '@mui/material'
import React from 'react'

export default function Marker(props) {
    const { lat, lng } = props

    return (
        <div lat={lat} lng={lng} style={{ position: "absolute", transform: "translate(-50%, -50%)" }}>
            <svg>
                <circle cx={50} cy={50} r={10} fill="red" />
            </svg>
        </div>
    )
}

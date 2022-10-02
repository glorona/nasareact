import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export default function LoadingComponent() {
    return (
        <Box className="h-full w-full flex justify-center items-center">
            <CircularProgress />

        </Box>
    )
}

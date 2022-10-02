import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function Submit() {

    return (
        <Box className="flex justify-center m-4">
            <Button variant="contained" sx={{
                paddingX: 5,
            }}>
                <Typography variant="h5" color="initial" className='normal-case text-white font-semibold text-sm'>
                    Submit
                </Typography>
            </Button>
        </Box>
    )
}

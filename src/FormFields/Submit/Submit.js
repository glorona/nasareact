import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import Context from '../../Context'

export default function Submit() {

    const [state, setState] = useContext(Context)

    function handleClick() {
        console.log(state)
    }

    return (
        <Box className="flex justify-center m-4">
            <Button variant="contained" sx={{
                paddingX: 5,
            }} onClick={handleClick}>
                <Typography variant="h5" color="initial" className='normal-case text-white font-semibold text-sm'>
                    Submit
                </Typography>
            </Button>
        </Box>
    )
}

import { Label } from "@mui/icons-material"
import { Box, Slider, Typography } from "@mui/material"
import { useState, useContext } from "react"
import './Slider.css'
import Context from "../../Context"

function SliderField(props) {

    const [state, setState] = useContext(Context)

    const {
        min = 10,
        max = 50,
        step = 1,
        label = "Slider placeholder",
        nameKey
    } = props


    function handleChange(event, value) {
        event.preventDefault()

        setState({ ...state, [nameKey]: value })
    }



    return (
        <Box className="bg-slate-200 rounded p-2 my-3 drop-shadow-md shadow-slate-800">
            <Box className="flex justify-center">
                <Typography variant="body1" className="justify-self-center font-bold text-lg">
                    {label}
                </Typography>
            </Box>
            <Slider
                value={state.nameKey}
                onChange={handleChange}
                aria-label={label}
                valueLabelDisplay="auto"
                marks
                step={step}
                min={min}
                max={max}
            />
            <Box className="flex justify-center bg-slate-500/25 mx-10 rounded">
                <Typography variant="h6" className="justify-self-center font-bold text-xs">
                    {state[nameKey]}
                </Typography>
            </Box>

        </Box>
    )
}

export default SliderField
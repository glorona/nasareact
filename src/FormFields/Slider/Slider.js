import { Label } from "@mui/icons-material"
import { Box, Slider, Typography } from "@mui/material"
import { useState } from "react"
import './Slider.css'

function SliderField(props) {

    const {
        defaultValue = 30,
        min = 10,
        max = 50,
        step = 1,
        label = "Slider placeholder"
    } = props

    const [value, setValue] = useState(defaultValue)

    function handleChange(event, value) {
        event.preventDefault()
        setValue(value)
    }



    return (
        <Box className="bg-slate-200 rounded p-2 my-3 drop-shadow-md shadow-slate-800">
            <Box className="flex justify-center">
                <Typography variant="body1" className="justify-self-center font-bold text-lg">
                    {label}
                </Typography>
            </Box>
            <Slider
                value={value}
                onChange={handleChange}
                aria-label={label}
                defaultValue={defaultValue}
                valueLabelDisplay="auto"
                marks
                step={step}
                min={min}
                max={max}
            />
            <Box className="flex justify-center bg-slate-500/25 mx-10 rounded">
                <Typography variant="h6" className="justify-self-center font-bold text-xs">
                    {value}
                </Typography>
            </Box>

        </Box>
    )
}

export default SliderField
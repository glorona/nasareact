import { Slider, Typography } from "@mui/material"
import { useState } from "react"

function SliderField(props) {

    const { defaultValue = 30, min = 10, max = 50, step = 1, label = "slider placeholder" } = props
    const [value, setValue] = useState(defaultValue)

    function handleChange(event, value) {
        event.preventDefault()
        setValue(value)
    }
    


    return (
        <div>
            <Typography>
                {label}
            </Typography>
            <Slider
                
                value={value}
                onChange={handleChange}
                aria-label={label}
                defaultValue={defaultValue}
                valueLabelDisplay="auto"
                step={step}
                marks
                min={min}
                max={max}
            />
        </div>
    )
}

export default SliderField
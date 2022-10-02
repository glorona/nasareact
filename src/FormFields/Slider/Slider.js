import { Label } from "@mui/icons-material"
import { Box, Button, Slider, Typography } from "@mui/material"
import { useState, useContext, useEffect } from "react"
import './Slider.css'
import Context from "../../Context"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useLayoutEffect } from "react"

function SliderField(props) {

    const [state, setState] = useContext(Context)


    const {
        min = 10,
        max = 50,
        step = 1,
        label = "Slider placeholder",
        nameKey
    } = props

    const [play, setPlay] = useState(false)
    const [value, setValue] = useState(min)

    const getNextValue = (value, step, max) => Math.min(value + step, max)

    useEffect(() => {
        if (!play) return
        if (value == max) {
            setPlay(false)
            return
        }

        let timer;

        async function playAnimation() {
            console.log({ value, min, step, max, play, [nameKey]: state[nameKey] })
            timer = setTimeout(() => {
                setState((state) => ({ ...state, [nameKey]: getNextValue(value, step, max) }))
                setValue(getNextValue(value, step, max))
            }, 1000);
        }

        playAnimation();


        return () => { clearTimeout(timer); }

    }, [play, value])


    function handleChange(event, value) {
        event.preventDefault()

        setState((state) => ({ ...state, [nameKey]: value }))
    }

    function handleClick() {
        setState((state) => ({ ...state, [nameKey]: min }))
        setValue(min);
        setTimeout(() => {
            setPlay(true);
        }, 500)
    }



    return (
        <Box className="bg-slate-200 rounded p-2 my-3 mx-2 drop-shadow-md shadow-slate-800">
            <Box className="flex justify-center">
                <Typography variant="body1" className="justify-self-center font-bold text-lg">
                    {label}
                </Typography>
            </Box>
            <Slider
                value={state[nameKey]}
                onChange={handleChange}
                aria-label={label}
                valueLabelDisplay="auto"
                marks
                step={step}
                min={min}
                max={max}
            />
            <Box className="flex mx-10">
                <Box className="flex justify-center w-1/2 bg-slate-500/25 mx-4 rounded">
                    <Typography variant="h6" className="justify-self-center font-bold text-xs">
                        {state[nameKey]}
                    </Typography>
                </Box>
                <Button variant="contained" endIcon={<PlayArrowIcon />} onClick={handleClick}>
                    Play
                </Button>
            </Box>

        </Box>
    )
}

export default SliderField
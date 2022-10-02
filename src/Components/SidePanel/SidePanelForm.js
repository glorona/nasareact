import { Box, Typography } from "@mui/material"
import { useContext } from "react"
import SliderField from "../../FormFields/Slider/Slider"
import Submit from "../../FormFields/Submit/Submit"
import Context from "../../Context"




function SidePanelForm(props) {

    return (
        <Box>
            <SliderField nameKey={"hour"} min={0} max={23} label={"Hour of the day"} />
            <SliderField nameKey={"day"} min={166} max={264} label={"Day of the year"} />
            <Submit />
        </Box>
    )
}

export default SidePanelForm
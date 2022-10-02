import { Box, Typography } from "@mui/material"
import SliderField from "../../FormFields/Slider/Slider"
import Submit from "../../FormFields/Submit/Submit"


function SidePanelForm(props) {
    return (
        <Box>
            <SliderField />
            <SliderField />
            <Submit />
        </Box>
    )
}

export default SidePanelForm
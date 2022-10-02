import { Box } from "@mui/material"
import SliderField from "../../FormFields/Slider/Slider"




function SidePanelForm(props) {

    return (
        <Box>
            <SliderField nameKey={"hour"} min={0} max={23} label={"Hour of the day"} />
            <SliderField nameKey={"day"} min={166} max={264} label={"Day of the year"} />
            <SliderField nameKey={"file"} min={1} max={25} label={"File"} />
        </Box>
    )
}

export default SidePanelForm
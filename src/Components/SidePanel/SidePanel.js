import { Paper, Slider } from "@mui/material"
import { Box } from "@mui/system"
import SidePanelForm from "./SidePanelForm"



function SidePanel(props) {
    return (
        <Box className="flex flex-col flex-grow bg-slate-300 p-3" >
            <SidePanelForm />
        </Box >
    )
}

export default SidePanel
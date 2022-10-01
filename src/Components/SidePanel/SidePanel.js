import { Paper, Slider } from "@mui/material"
import { Box } from "@mui/system"
import SidePanelForm from "./SidePanelForm"

function SidePanel(props) {
    return (
        <Paper style={{ backgroundColor: "yellow", height:"100vh", width:"100%", padding: 20 }}>
            <Box sx={{ flexDirection: "column", flexGrow: 1, background:"yellow" }}>
                <SidePanelForm/>
            </Box>
        </Paper>
    )
}

export default SidePanel
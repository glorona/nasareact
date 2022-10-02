import { Grid } from '@mui/material'
import SidePanel from "./SidePanel/SidePanel"
import HeaderComponent from "./Header/HeaderComponent"
import IonMap from './IonMap/IonMap'


function Home() {
    return (
        <Grid container direction="column">
            <Grid item xs={4}>
                <HeaderComponent />
            </Grid>

            <Grid item container xs={8}>

                <Grid item container xs={3}>
                    <SidePanel />

                </Grid>
                <Grid item container xs={9}>
                    <IonMap />
                </Grid>

            </Grid>


        </Grid>
    )
}

export default Home
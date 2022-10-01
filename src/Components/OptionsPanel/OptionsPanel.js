import getLatLngs from "../../DataServices/getLatLngs"


function OptionsPanel(props) {

    const data = getLatLngs()
    return(
        <div style={{backgroundColor: "green", maxHeight: 100, width: "100%"}}>
            {JSON.stringify(data)}
        </div>
    )
}

export default OptionsPanel
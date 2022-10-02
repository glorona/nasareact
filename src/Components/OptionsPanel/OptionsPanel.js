import getLatLngs from "../../DataServices/getLatLngs"


function OptionsPanel(props) {

    const data = getLatLngs()
    return (
        <div className="bg-green-500 h-fit w-full" >
            {JSON.stringify(data)}
        </div>
    )
}

export default OptionsPanel
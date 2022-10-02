import papa from "papaparse"
// const fileData = papa.parse("./data/data3.csv")
// const fileData = fetch("./data/data3.csv").then(data => data.text()).then(text => papa.parse(text))

async function getLatLngs() {
    const response = await fetch("./data/data3.csv")
    const text = await response.text()
    const parsedData = await papa.parse(text)
    return parsedData.data
}

export default getLatLngs
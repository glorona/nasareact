import papa from "papaparse"
// const fileData = papa.parse("./data/data3.csv")
// const fileData = fetch("./data/data3.csv").then(data => data.text()).then(text => papa.parse(text))
const fileData = fetch("./data/data3.csv").then(data => {
    return data.text()
}).then(text => {
    console.log({ text })
    return papa.parse(text)
})

function getLatLngs() {
    return fileData
}

export default getLatLngs
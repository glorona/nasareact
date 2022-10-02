import { useState, useEffect } from 'react'
import getLatLngs from '../DataServices/getLatLngs'


export default function useData() {

    const [data, setData] = useState([])

    async function getData() {
        const parsedData = await getLatLngs()
        setData(parsedData)
    }

    useEffect(() => {
        getData()
    }, [])


    return data
}

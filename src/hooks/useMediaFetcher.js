import { useEffect, useState } from 'react'
import axios from "axios";

const useMediaFetcher = (url, method = 'get', data=null, dependec) => {

    const [isLoading, setIsLoading] = useState(false)
    const [fetchedData, setFetchedData] = useState(null)
    const [err, setErr] = useState(null)

    useEffect(() => {
            const fetchData = async () => {
                setIsLoading(true)
                try {
                    const result = await axios({
                        method,
                        url,
                        data 
                      })
                    setFetchedData(result);
                } catch (err) {
                    setErr(err);
                }
                finally {
                    setIsLoading(false)
                }
            }

            fetchData()
    }, [url, dependec])




    return ({ isLoading, fetchedData, setFetchedData, err })
}

export default useMediaFetcher
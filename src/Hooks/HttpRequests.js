import axios from "axios";
import { useState, useEffect } from "react";

export function useGet(url) {
    const [request, setRequest] = useState({ data: null, loading: false, error: null })
    useEffect(() => {
        setRequest(req => { return { ...req, data: null, loading: true, error: null } })
        axios.get(url)
            .then(res => {
                setRequest(req => { return { ...req, data: res.data, loading: false } })
            })
            .catch(error => {
                setRequest(req => { return { ...req, loading: false, error: error.message } })
            })

    }, [url])

    return request
}

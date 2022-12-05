import { useState, useEffect } from "react";
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
    const [appts, setAppts] = useState([]);
    const [dcs, setDcs] = useState([]);
    const [ills, setIlls] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch appointments
    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();
        const fetchAppointments = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setAppts(response.data);
                    setFetchError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err.message);
                    setAppts([]);
                }
            } finally {
                isMounted && setTimeout(() => setIsLoading(false), 2000);
            }
        }

        fetchAppointments(dataUrl);

        const cleanUp = () => {
            console.log('cleanup function');
            isMounted = false;
            source.cancel();
        }

        return cleanUp;
    }, [dataUrl])

    // Fetch doctors
    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();
        const fetchDoctors = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setDcs(response.data);
                    setFetchError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err.message);
                    setDcs([]);
                }
            } finally {
                isMounted && setTimeout(() => setIsLoading(false), 2000);
            }
        }

        fetchDoctors(dataUrl);

        const cleanUp = () => {
            console.log('cleanup function');
            isMounted = false;
            source.cancel();
        }

        return cleanUp;
    }, [dataUrl])

    // Fetch Ailments
    useEffect(() => {
        let isMounted = true;
        const source = axios.CancelToken.source();
        const fetchAilments = async (url) => {
            setIsLoading(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setIlls(response.data);
                    setFetchError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err.message);
                    setIlls([]);
                }
            } finally {
                isMounted && setTimeout(() => setIsLoading(false), 2000);
            }
        }

        fetchAilments(dataUrl);

        const cleanUp = () => {
            console.log('cleanup function');
            isMounted = false;
            source.cancel();
        }

        return cleanUp;
    }, [dataUrl])

    return { appts, dcs, ills, fetchError, isLoading }
}

export default useAxiosFetch;
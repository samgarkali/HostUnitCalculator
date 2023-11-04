import { useEffect, useState } from "react";
import { monitoredEntitiesClient } from '@dynatrace-sdk/client-classic-environment-v2';


export const useTest2 = (): Object[] => {
    const [monitoredEntities, setMonitoredEntities] = useState<Object[]>([])

    useEffect(() => {
        const abortController = new AbortController();
        const abortSignal = abortController.signal;

        const config: Object = {
            entitySelector: "type(HOST)",
            from: "now-365d",
            to: "now",
            abortSignal: abortSignal
        }

        monitoredEntitiesClient.getEntities(config)
        .then((response) => {
            if (response.entities){
                setMonitoredEntities(response.entities)
            }
        })

        return () => {
            abortController.abort()
        }

    })

    return monitoredEntities
}


export const useTest = (): Object[] => {
    const result: {id: number, name: string } [] = [
        { "id": 0, "name": "Available" },
        { "id": 1, "name": "Ready" },
        { "id": 2, "name": "Started" }
    ]

    return result
}

// Getting the Host list
export const useEntitiesAPI2 = () => {
    
    return monitoredEntitiesClient.getEntities({
        entitySelector: "type(HOST)",
        from: "now-365d",
        to: "now"
    })

}


export const useEntitiesAPI = (): Object[] => {
    const [hostList, setHostList] = useState<Object[]>([])
    const config = {
        entitySelector: "type(HOST)",
        from: "now-365d",
        to: "now",
        fields: "+properties.hostGroupName, +properties.installerVersion, +properties.state"
    }

    useEffect(() => {
        monitoredEntitiesClient.getEntities(config)
            .then((response) => {
                if(response.entities){
                    setHostList(response.entities)
                }
            })
    }, []);

    return hostList
}

import { useEffect, useState } from "react"
import { useAdventureListsStore } from "../store/useAdventureListsStore"
import { fetchAdventuresList } from "../api/adventures"

export function useLoadAdventuresList() {
    const setAdventuresList = useAdventureListsStore(state => state.setAdventuresList)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        const load = async () => {
            try {
                const data = await fetchAdventuresList()
                console.log({ "fetched data>>": data.adventures });
                setAdventuresList(data.adventures)

            } catch (error) {
                setError("Failed to fetch adventures list")
            }
            finally {
                setLoading(false)
            }
        }

        load()

    }, [setAdventuresList])

    return { loading, error }
}
import { useQuery } from '@bytesoftio/use-query'
import {WatchListQueryParams} from '~/src/pages/Watch/WatchList/WatchListQueryParams'
import {Watch} from '~/src/services/types/Watch';
import { useAsync, AsyncHandle } from '@bytesoftio/use-async';
import  {SearchWatches} from '~/src/services/searchWatches';
import {useApiClient} from '~/src/hooks/useApiClient';

export const useWatchList = () => {
    const [query, setQuery] = useQuery<WatchListQueryParams>({})
    const list = useWatches(query);
    const handleSearch = (value: string) => {
        setQuery({ keyword: value })
    }

    return {
        query,
        list,
        handleSearch
    }
}
const useWatches = (query: WatchListQueryParams): AsyncHandle<Watch[]> => {
    const api = useApiClient()

    return useAsync<Watch[]>(async () => {
        const events = await SearchWatches(api, query.keyword)

        return (
            events?.map((event) => ({
                id: event.id,
                name: event.name,
                brand: event.brand,
                description: event.description,
                price: event.price,
                image: event.image,
                boughtAt: event.boughtAt
            })) || []
        )
    }, [JSON.stringify(query)])
}
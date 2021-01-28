import {useQuery} from '@bytesoftio/use-query'
import {WatchListQueryParams} from '~/src/types/WatchListQueryParams'
import {Watch} from '~/src/types/Watch';
import {useAsync, AsyncHandle} from '@bytesoftio/use-async';
import {searchWatches} from '~/src/services/watch.service';
import { apiClient } from '~/src/configs/configAxios';

export const useWatchList = () => {
    const [query, setQuery] = useQuery<WatchListQueryParams>({})
    const payload = getWatches(query);
    const handleSearch = (value: string) => {
        setQuery({keyword: value})
    };

    return {
        query,
        payload,
        handleSearch
    };
}
const getWatches = (query: WatchListQueryParams): AsyncHandle<Watch[]> => {
    const api = apiClient;
    return useAsync<Watch[]>(async () =>
        (await searchWatches(api, query.keyword) || []), [JSON.stringify(query)]);
}

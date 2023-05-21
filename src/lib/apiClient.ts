import axios from 'axios';
import type {GeneralSearchParams} from '../config/types';

export enum SearchType {
    SIMPLE = 'simple',
    RADICAL = 'radical',
    DISTANCE = 'distance',
}

export const getGeneralSearch = async (params: GeneralSearchParams, type: SearchType) => {
    let url = ''
    switch (type) {
        case SearchType.SIMPLE:
            url = import.meta.env.SIMPLE_SEARCH_URL;
            break;
        case SearchType.RADICAL:
            url = import.meta.env.RADICAL_SEARCH_URL;
            break;
        case SearchType.DISTANCE:
            url = import.meta.env.DISTANCE_SEARCH_URL;
            break;
    }
    url += `?termo=${params.termo}&classe=${params.classe}&situacao=${params.situacao}`
    const response = await axios.get(url, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}

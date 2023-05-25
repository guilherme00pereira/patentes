import axios from 'axios';
import type {DistanceSearchParams, GeneralSearchParams, RadicalSearchParams} from '../config/types';

const baseUrl = 'https://<code>.execute-api.us-east-1.amazonaws.com/teste/appleads';

export enum SearchType {
    SIMPLE = 'simple',
    REPORT = 'report',
    IA = 'ia',
}

export const getGeneralSearch = async (params: GeneralSearchParams, type: SearchType) => {
    let url = ''
    switch (type) {
        case SearchType.SIMPLE:
            url = baseUrl.replace('<code>', 'x2m3r6x3re')
            break;
        case SearchType.REPORT:
            url = baseUrl.replace('<code>', 'v33lb92yl3')
            break;
        case SearchType.IA:
            url = baseUrl.replace('<code>', 'wvbtkxfybj')
            break;
    }
    url += `?termo=${params.termo}&classe=${params.classe.toString()}&situacao=${params.situacao}`
    const response = await axios.get(url, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}

export const getRadicalSearch = async (params: RadicalSearchParams) => {
    let url = baseUrl.replace('<code>', 'qhmx82lgf3')
    url += `?termo=${params.termo}&classe=${params.classe.toString()}&situacao=${params.situacao}`
    const response = await axios.get(url, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}

export const getDistanceSearch = async (params: DistanceSearchParams) => {
    let url = baseUrl.replace('<code>', 'prwhds00u7')
    url += `?termo=${params.termo}&classe=${params.classe.toString()}&situacao=${params.situacao}&distance=${params.distance}`
    const response = await axios.get(url, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}

export const postIncludeProcess = async (params: any) => {
    let url = baseUrl.replace('<code>', 'lof8gj8bwk')
    const response = await axios.post(url, params, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}

export const postExcludeProcess = async (params: any) => {
    let url = baseUrl.replace('<code>', 'exkeir5z25')
    const response = await axios.post(url, params, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}

export const getSearchProcess = async (searchprocess: string) => {
    let url = baseUrl.replace('<code>', '1nfu4zrkj8') + `?processo=${searchprocess}`
    const response = await axios.get(url, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}

export const getFololowUpProcess = async (mail: string, process: string) => {
    let url = baseUrl.replace('<code>', 'go3acergu1') + `?processo=${process}&usuario=${mail}`
    const response = await axios.get(url, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}
import axios from 'axios';
import type {DistanceSearchParams, GeneralSearchParams, RadicalSearchParams} from '../config/types';

const baseUrl = 'https://<code>.execute-api.us-east-1.amazonaws.com/teste/appleads';

export enum SearchType {
    SIMPLE = 'simple',
    RADICAL = 'radical',
    DISTANCE = 'distance',
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
    url += `?and01=${params.and01}`
    if(params.and02) url += `&and02=${params.and02}`
    if(params.and03) url += `&and03=${params.and03}`
    if(params.and04) url += `&and04=${params.and04}`
    if(params.and05) url += `&and05=${params.and05}`
    if(params.and06) url += `&and06=${params.and06}`
    if(params.not01) url += `&not01=${params.not01}`
    if(params.not02) url += `&not02=${params.not02}`
    if(params.not03) url += `&not03=${params.not03}`
    url += `&classe=${params.classe.toString()}&situacao=${params.situacao}`
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
    const url = baseUrl.replace('<code>', 'lof8gj8bwk')
    const response = await axios.post(url, params, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}

export const postExcludeProcess = async (params: any) => {
    const url = baseUrl.replace('<code>', 'exkeir5z25')
    const response = await axios.post(url, params, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}

export const getSearchProcess = async (searchprocess: string) => {
    const url = baseUrl.replace('<code>', '1nfu4zrkj8') + `?processo=${searchprocess}`
    const response = await axios.get(url, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}

export const getFololowUpProcess = async (mail: string) => {
    const url = baseUrl.replace('<code>', 'go3acergu1') + `?usuario=${mail}`
    const response = await axios.get(url, {headers: {'Content-Type': 'application/json'}});
    return response.data;
}
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
    url += `?and1=${params.and1}`
    if(params.and2) url += `&and2=${params.and2}`
    if(params.and3) url += `&and3=${params.and3}`
    if(params.or1) url += `&or1=${params.or1}`
    if(params.or2) url += `&or2=${params.or2}`
    if(params.or3) url += `&or3=${params.or3}`
    if(params.not1) url += `&not1=${params.not1}`
    if(params.not2) url += `&not2=${params.not2}`
    if(params.not3) url += `&not3=${params.not3}`
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
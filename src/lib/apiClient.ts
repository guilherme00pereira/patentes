//https://prwhds00u7.execute-api.us-east-1.amazonaws.com/teste/appleads?termo=casa&classe=42&situacao=1
import axios from 'axios';
import type { GeneralSearchParams } from '../config/types';

const apiClient = axios.create({
    baseURL: 'https://prwhds00u7.execute-api.us-east-1.amazonaws.com/teste/appleads',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getGeneralSearch = async (params: GeneralSearchParams) => {
    const response = await apiClient.get(`?termo=${params.termo}&classe=${params.classe}&situacao=${params.situacao}`);
    return response.data;
}

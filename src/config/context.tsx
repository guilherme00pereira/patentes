import {createContext} from "react";
import {BrandTableData} from "./types.ts";

export const BrandContext = createContext<{
    setRenderTable: (newValue: boolean) => void,
    setLoading: (newValue: boolean) => void,
    setBlank: (newValue: boolean) => void,
    tableData: BrandTableData[],
    setTableData: (newValue: BrandTableData[]) => void
}>({
    setRenderTable: () => undefined,
    setLoading: () => undefined,
    setBlank: () => undefined,
    tableData: [],
    setTableData: () => undefined
})

export const FollowUpContext = createContext<{
    setRenderTable: (newValue: boolean) => void,
    setLoading: (newValue: boolean) => void,
    setBlank: (newValue: boolean) => void
}>({
    setRenderTable: () => undefined,
    setLoading: () => undefined,
    setBlank: () => undefined
})

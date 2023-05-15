import {createContext} from "react";
import type { BrandSearch } from "./types";
import { initialBrandSearchData } from "./data";

export const BrandContext = createContext<{
    setRenderTable: (newValue: boolean) => void,
    setLoading: (newValue: boolean) => void,
    data: BrandSearch,
    setData: (newValue: BrandSearch) => void
    setBlank: (newValue: boolean) => void
}>({
    setRenderTable: () => undefined,
    setLoading: () => undefined,
    data: initialBrandSearchData,
    setData: () => undefined,
    setBlank: () => undefined
})

export const FollowUpContext = createContext<{
    setRenderTable: (newValue: boolean) => void,
    setLoading: (newValue: boolean) => void
}>({
    setRenderTable: () => undefined,
    setLoading: () => undefined
})

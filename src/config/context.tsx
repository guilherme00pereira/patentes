import {createContext} from "react";

export const BrandContext = createContext<{
    setRenderTable: (newValue: boolean) => void,
    setLoading: (newValue: boolean) => void,
    setBlank: (newValue: boolean) => void
}>({
    setRenderTable: () => undefined,
    setLoading: () => undefined,
    setBlank: () => undefined
})

export const FollowUpContext = createContext<{
    setRenderTable: (newValue: boolean) => void,
    setLoading: (newValue: boolean) => void
}>({
    setRenderTable: () => undefined,
    setLoading: () => undefined
})

export type variantType = "warning" | "danger" | "info" | "success" | "primary"

export interface ToastConfigType {
    variant: variantType
    message: string
    title: string
    timeout: number
    open: boolean
}

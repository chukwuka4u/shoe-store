import type { ShoeSizes } from "./ShoeSizes";

export interface ProductOrder {
    id: string,
    image: string,
    label?: string,
    title: string,
    price: number,
    size: ShoeSizes,
    quantity: number,
}
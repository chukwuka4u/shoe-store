'use client'
import { useState, useEffect, createContext, ReactNode, useContext } from 'react'
import { ProductOrder } from '../types/ProductOrder'
import { writeOrder } from '@/lib/config/firebase/app'

type CartContextProp = {
    cartItems?: ProductOrder[],
    addItem: (i: ProductOrder) => void,
    removeItem: (i: ProductOrder) => void,
    deleteItem: (i: ProductOrder) => void,
    submitOrder: () => Promise<string>
    getTotQuantnPrice: () => number[],

}
const CartContext = createContext<CartContextProp | null>(null)

function CartContextProvider({ children }: { children: ReactNode }) {

    const [cartItems, setCartItems] = useState<ProductOrder[]>([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    const addItem = (item: ProductOrder) => {
        setCartItems((prev) => {
            const newItems = [...prev];
            const existingItem = newItems.find(i => i.id === item.id) as ProductOrder | undefined;
            if (existingItem) {
                existingItem.quantity += 1;
                console.log(existingItem.quantity)
            } else {
                item.quantity = 1;
                newItems.push(item);
            }

            localStorage.setItem('cart', JSON.stringify(newItems));
            return newItems;
        });
    };
    const removeItem = (item: ProductOrder) => {
        setCartItems((prev) => {
            const newItems = [...prev];
            const existingItem = newItems.find(i => i.id === item.id) as ProductOrder | undefined;

            const indx = newItems.indexOf(existingItem!)

            if (existingItem)

                if (existingItem.quantity === 1)
                    newItems.splice(indx, 1)
                else
                    existingItem.quantity -= 1;

            localStorage.setItem('cart', JSON.stringify(newItems));

            return newItems;
        });
    };
    const deleteItem = (item: ProductOrder) => {
        setCartItems((prev) => {
            const newItems = [...prev];
            const existingItem = newItems.find(i => i.id === item.id) as ProductOrder | undefined;

            const indx = newItems.indexOf(existingItem!)

            if (existingItem) {
                newItems.splice(indx, 1)
            }
            localStorage.setItem('cart', JSON.stringify(newItems));

            return newItems;
        });
    };
    const submitOrder = async () => {
        //create a document with an array of Products
        //get the document Id
        console.log("order submitted")
        const id = await writeOrder(cartItems)
        if (id) {
            localStorage.removeItem('cart')
            setCartItems([])
        }
        console.log(id)
        return id;
    }
    //
    const getTotalQuantity = () => {
        const lst = cartItems.map(i => i.quantity)
        for (const i in lst) {
            if (Number(i) == 0)
                continue;
            else
                lst[Number(i)] += lst[Number(i) - 1]
        }
        //
        const plst = cartItems.map(i => i.quantity * i.price)
        for (const i in plst) {
            if (Number(i) == 0)
                continue;
            else
                plst[Number(i)] += plst[Number(i) - 1]
        }
        return [lst[lst.length - 1], plst[plst.length - 1]]
    }

    const val: CartContextProp = {
        cartItems,
        addItem,
        removeItem,
        deleteItem,
        submitOrder,
        getTotQuantnPrice: getTotalQuantity
    }

    return (
        <CartContext.Provider value={val}>{children}</CartContext.Provider>
    )
}

export function useCartContext() {
    const ctxt = useContext(CartContext)
    if (!ctxt)
        throw "use cart context withing the context provider"
    return ctxt
}

export default CartContextProvider;
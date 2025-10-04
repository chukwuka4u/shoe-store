'use client'
import Button from "@/components/Button";
import InputField from "@/components/InputFields";
import { getUserDetails } from "@/lib/config/firebase/app";
import { auth } from "@/lib/config/firebase/auth";
import { useEffect, useState } from "react";
import { uid } from "uid"
import { useCartContext } from "@/lib/providers/cart-provider"
// import MyModal from "@/components/checkout/modal";
import { initiatePayment } from "@/lib/config/paystack/app"
// import { useRouter } from "next/navigation";
import { comeback } from "@/components/checkout/popup"


type TransferProps = object & {
    quantity: number,
    amount: number,
    email: string,
    currency: string,
    tx_ref: string,
    fullname: string,
    phone_number?: string
}
export default function CheckOut() {
    const { getTotQuantnPrice } = useCartContext();
    // const [showModal, setShowModal] = useState(false)
    const [form, setForm] = useState<TransferProps>({
        quantity: 0,
        amount: 0,
        email: "",
        currency: "NGN",
        tx_ref: "",
        fullname: "",
        phone_number: "",
    })
    // const router = useRouter()

    useEffect(() => {
        //get email from user
        const id = setTimeout(() => fun(), 3000)
        return () => clearTimeout(id)
    }, []);
    const fun = async () => {
        console.log(auth)
        const [quantity, price] = getTotQuantnPrice();
        const data = await getUserDetails(auth.currentUser!.uid)
        setForm({ ...form, email: data.email, fullname: data.firstName + " " + data.lastName, amount: Number(price) + 1000, quantity: quantity, tx_ref: 'MC-MC-' + uid(17) })
    }
    async function submit() {
        if (form.phone_number == "") {
            window.alert("Please fill in phone number")
            return;
        }
        else {
            try {
                const response = await initiatePayment();
                console.log(response.data.authorization_url)
                comeback(response.data.authorization_url)

            }
            catch (e) {
                console.error(e)
            }
            // finally {
            //     setShowModal(true)
            // }

        }
    }

    return (
        <div>
            <p>Pay with Bank Transfer</p>
            <section>
                <p>Payment Details</p>
                {
                    Object.entries(form).map(([key, value], indx) =>
                        <div key={indx} className="text-base tracking-wide max-w-[358px] text-zinc-500">
                            <p className="text-black py-2">{key}</p>
                            <div className="w-full">
                                <div className="relative">
                                    <div className={`flex-1 w-full px-4 py-4 rounded-lg border border-solid border-zinc-400 min-h-12 text-zinc-500 text-base tracking-wide `}>
                                        <p>{value}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div >
                    <p className="text-black py-2 mb-2">put your phone number here</p>

                    <InputField
                        placeholder=""
                        value={form.phone_number}
                        onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
                        name="phone_number"
                        required={true}
                        type="text"

                    />
                </div>
            </section>
            <Button
                variant="secondary"
                size="small"
                onClick={() => submit()}>
                <p>PROCEED</p>
            </Button>
            {/* {
                showModal && <MyModal transferObj={Object()} />
            } */}
        </div>
    )
}
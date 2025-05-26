'use client'
import Button from "@/components/Button";
import InputField from "@/components/InputFields";
import { logIn, signInWithGoogle } from "@/lib/config/firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function SignUp() {
    const router = useRouter();

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    function submit() {
        if (form.email == "" || form.password == "") {
            window.alert("Please fill all input fields")
            return;
        }
        else {
            logIn(form)
            // setLoggedIn(true)
        }
    }


    return (
        <div>
            <p>Login</p>
            <p className="underline">Forgot your password?</p>
            <section>
                <InputField
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    name="email"
                    required={true}
                    type="text"
                />
                <InputField
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    name="password"
                    required={true}
                    type="text"
                />
            </section>
            <section>
                <div className="flex flex-row justify-evenly">
                    <input
                        type="checkbox"
                        value=""
                    />
                    <p>Keep me logged in - applies to all log in options below. More info</p>
                </div>
            </section>
            <Button
                variant="secondary"
                size="large"
                onClick={() => submit()}>
                <p>EMAIL LOGIN</p>
            </Button>

            <button onClick={() => {
                signInWithGoogle()
                router.push("/")
            }}>
                SIGN IN WITH GOOGLE
            </button>
        </div>
    )
}
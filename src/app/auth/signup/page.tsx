'use client'
import Button from "@/components/Button";
import InputField from "@/components/InputFields";
import { signUp } from "@/lib/config/firebase/auth";
import { useState } from "react";

export default function SignUp() {
    const [error, setError] = useState<boolean>(false)
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        password: "",
    })
    function compare(value: string, password: string): void {
        if (value.localeCompare(password) != 0)
            setError(true)
        else
            setError(false)
    }
    function submit() {
        if (form.firstName == "" || form.lastName == "" || form.gender == "" || form.email == "" || form.password == "") {
            window.alert("Please fill all input fields")
            return;
        }
        else {
            signUp(form)
            console.log(form)
        }
    }
    const genders = ["Male", "Female", "Others"]

    return (
        <div>
            <p>Register</p>
            <p>Sign up with</p>
            <div>
                SIGN UP WITH GOOGLE
            </div>
            <p>OR</p>
            <section>
                <p>Your Name</p>
                <InputField
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    name="first name"
                    required={true}
                    type="text"
                />
                <InputField
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    name="last name"
                    required={true}
                    type="text"
                />
            </section>
            <section>
                <p>Gender</p>
                <div className="flex flex-row justify-between">
                    {genders.map((i, indx) =>
                        <div key={indx} className="flex flex-row justify-evenly">
                            <input
                                type="checkbox"
                                value={i}
                                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                            />
                            <p>{i}</p>
                        </div>)}

                </div>
            </section>
            <section>
                <p>Login Details</p>
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
                <InputField
                    placeholder="Cofirm Password"
                    onChange={(e) => compare(e.target.value, form.password)}
                />
                <p className={`text-red-600 text-xs ${error ? "" : "hidden"}`}>this is not same with password!</p>
                <p className="text-xs">Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number</p>
            </section>
            <section>
                <div className="flex flex-row justify-evenly">
                    <input
                        type="checkbox"
                        value=""
                    />
                    <p>By clicking SignUp you agree to our website gritandsole Terms & Conditions, Privacy Policy</p>
                </div>
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
                <p>REGISTER</p>
            </Button>
        </div>
    )
}
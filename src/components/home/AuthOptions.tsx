export default function AuthOptions() {
    return (
        <>
            <div className="bg-slate-100 p-4">
                <p>
                    wanna get the full gns experience? <a className="underline text-blue-500" href="/auth/signin">Sign In</a>
                </p>
                <p>OR</p>
                <p> <a className="underline text-blue-500" href="/auth/signup">Sign Up</a> if you dont have an account </p>
                <ol>
                    <li>get access to:</li>
                    <li>personalization: save your orders, save your favorite products, access to newsletter</li>
                    <li>fast payment: make payments directly without copying order links, pay with ussd, bank transfer and debit card

                    </li>
                    <li>savings: set saving goals, and get auto debited to save for your shoes weekly or monthly</li>
                </ol>
            </div>
        </>
    )
}
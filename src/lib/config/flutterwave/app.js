/*
    TODO: to be done later/ or never
    there will be three payment plans
    1. #1000 weekly for #45000 or #90000
    2. #2000 weekly for 
    3. #4000 weekly for 
    4. #8000 
    5. #16000

    *******************

    when i get account number and details,
    show modal
*/
const payWithTransfer = (form) => {
    const { amount, email, tx_ref, fullname, phone_number, quantity } = form;
    const options = {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Authorization": 'Bearer FLWSECK_TEST-065c80c06b51c4d1630673b9160cb582-X',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            amount: amount,
            email: email,
            currency: 'NGN',
            tx_ref: tx_ref,
            fullname: fullname,
            phone_number,
            client_ip: '154.123.220.1',
            device_fingerprint: '62wd23423rq324323qew1',
            meta: { flightID: '123949494DC', sideNote: quantity.toString() + " pairs" },
            narration: "payment for gritandsole shopping",
            is_permanent: false
        })
    };

    const response = fetch('https://api.flutterwave.com/v3/charges?type=bank_transfer', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
    console.log(response)
    return response
}
export { payWithTransfer };
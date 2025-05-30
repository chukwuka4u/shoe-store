async function initiatePayment() {
    const url = "https://api.paystack.co/transaction/initialize"

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Authorization": 'Bearer sk_test_5c1e97b431a2658805db680436adc4e0cd7cdf9d',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: "chukwuka@email.com",
            amount: "50000"
        })
    })
    const data = await response.json();
    console.log(data)
    return data;
}
export { initiatePayment }
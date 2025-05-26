// app/api/webhook/route.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const payload = req.body;
        console.log('Webhook received:', payload);
        res.status(200).json({ message: 'Webhook received successfully' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}
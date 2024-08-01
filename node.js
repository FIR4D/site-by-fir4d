const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Временное хранилище заказов
let orders = [];

// Отправка заказа по почте
app.post('/submit-order', (req, res) => {
    const { nickname, email, telegram, details, productTitle } = req.body;
    const newOrder = { id: orders.length + 1, nickname, email, telegram, details, productTitle, status: 'Новый' };
    orders.push(newOrder);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'admin-email@example.com',
        subject: `Новый заказ на ${productTitle}`,
        text: `
            Никнейм: ${nickname}
            Почта: ${email}
            Телеграм: ${telegram}
            Подробности: ${details}
            Продукт: ${productTitle}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ error: 'Ошибка отправки почты' });
        }
        res.send({ success: true });
    });
});

// Получение заказов
app.get('/get-orders', (req, res) => {
    res.send(orders);
});

// Подтверждение заказа
app.post('/confirm-order/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = 'Подтвержден';
        res.send({ success: true });
    } else {
        res.status(404).send({ error: 'Заказ не найден' });
    }
});

// Отмена заказа
app.post('/cancel-order/:id', (req, res) => {
    const orderId = parseInt(req.params.id);
    orders = orders.filter(o => o.id !== orderId);
    res.send({ success: true });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

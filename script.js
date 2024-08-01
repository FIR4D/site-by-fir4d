const categories = [
    {
        name: '4D Функционал',
        products: [
            {
                title: '4D СКИН',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 1.',
                price: '169 ₽ | 429 G'
            },
            {
                title: 'HD ПЛАЩ',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '109 ₽ | 259 G'
            },
            {
                title: '4D СКИН + ОБЫЧНЫЙ ПЛАЩ',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '209 ₽ | 519 G'
            },
            {
                title: 'ОБЫЧНЫЙ ПЛАЩ',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '39 ₽ | 109 G'
            },
            {
                title: '4D КОСМЕТИКА',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '129 ₽ | 299 G'
            },
            {
                title: 'ДОРАБОТКА 4D СКИНА',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '129 ₽ | 299 G'
            }
        ]
    },
    {
        name: '5D Функционал',
        products: [
            {
                title: '5D СКИН',
                shortDescription: 'Краткое описание товара 3.',
                description: 'Полное описание товара 3.',
                price: '429 ₽ | 949 G'
            },
            {
                title: '5D КОСМЕТИКА',
                shortDescription: 'Краткое описание товара 4.',
                description: 'Полное описание товара 4.',
                price: '249 ₽ | 599 G'
            },
            {
                title: 'ДОРАБОТКА 5D СКИНА',
                shortDescription: 'Краткое описание товара 4.',
                description: 'Полное описание товара 4.',
                price: '149 ₽ | 339 G'
            }
        ]
    },
    {
        name: 'Другое',
        products: [
            {
                title: 'ТОТЕМ (4D ВИДА)',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 1.',
                price: '75 ₽ | 169 G'
            },
            {
                title: 'ОБНОВЛЕНИЕ ВЕРСИИ MINECRAFT',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '109 ₽ | 259 G'
            },
            {
                title: 'АВАТАРКИ (PNG, ОБЫЧНЫЕ СКИНЫ)',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '69 ₽ | 159 G'
            },
            {
                title: 'АВАТАРКИ (PNG, С ФУНКЦИОНАЛОМ)',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '89 ₽ | 199 G'
            },
            {
                title: 'ДОРАБОТКА HD ПЛАЩА / КОСМЕТИКИ / ПРОЧЕГО',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '99 ₽ | 259 G'
            },
            {
                title: 'АНИМАЦИЯ ДЛЯ 4D / 5D СКИНОВ ',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '149 ₽ | 339 G'
            }
        ]
    },
    {
        name: 'Пользовательские услуги',
        products: [
            {
                title: 'ЗАЩИТА СКИНПАКОВ ОТ ВМЕШАТЕЛЬСТВ',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 1.',
                price: '169 ₽ | 399 G'
            },
            {
                title: 'ПОРТ НА iOS (1 СКИНПАК)',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '126 ₽ | 299 G'
            },
            {
                title: 'СОЗДАНИЕ MULTI-PERSONA',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '211 ₽ | 509 G'
            },
            {
                title: 'СОЗДАНИЕ КАСТОМНОГО PANCAPE',
                shortDescription: 'Нажмите для получения подробностей',
                description: 'Полное описание товара 2.',
                price: '152 ₽ | 339 G'
            }
        ]
    }
];

function showOrderModal() {
    const modal = document.getElementById('order-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    modal.style.display = 'flex';
    modal.classList.remove('show');
    void modal.offsetWidth; 
    modal.classList.add('show');
    
    modalContent.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
}

function closeOrderModal() {
    const modal = document.getElementById('order-modal');
    const modalContent = modal.querySelector('.modal-content');

    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); 
}

document.getElementById('order-close-btn').addEventListener('click', closeOrderModal);

function showProductModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10); 
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('show'); 
    setTimeout(() => {
        modal.style.display = 'none'; 
    }, 300); 
}

function showCategory(categoryName) {
    const categoryContent = document.getElementById('category-content');
    categoryContent.classList.remove('show');
    setTimeout(() => {
        categoryContent.innerHTML = ''; 

        const category = categories.find(cat => cat.name === categoryName);

        if (category) {
            categoryContent.innerHTML = `<p>Показаны товары для категории: ${category.name}</p>`;
            category.products.forEach(product => {
                categoryContent.innerHTML += `
                    <div class="product-item" onclick="showProductDetails('${product.title}', '${product.description}', '${product.price}')">
                        <h3>${product.title}</h3>
                        <p>${product.shortDescription}</p>
                        <p><strong>Цена:</strong> ${product.price}</p>
                    </div>
                `;
            });
            categoryContent.classList.add('show');
        } else {
            categoryContent.innerHTML = `<p>Категория не найдена</p>`;
            categoryContent.classList.add('show');
        }
    }, 500); 
}

function showProductDetails(title, description, price) {
    document.getElementById('product-title').innerText = title;
    document.getElementById('product-details').innerHTML = `
        <p>${description}</p>
        <p><strong>Цена:</strong> ${price}</p>
    `;
    showProductModal();
}

function chooseProduct() {
    console.log("chooseProduct function is called");
    const productTitle = document.getElementById('product-title').innerText;
    document.getElementById('product-title-hidden').value = productTitle;
    closeProductModal();
    openOrderForm();
}

function openOrderForm() {
    const modal = document.getElementById('order-form-modal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10); 
}

function closeOrderForm() {
    const modal = document.getElementById('order-form-modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); 
}

function toggleChat() {
    const chatBox = document.getElementById('chat-box');

    if (chatBox.classList.contains('show')) {
        chatBox.classList.add('hide');
        setTimeout(() => {
            chatBox.classList.remove('show');
            chatBox.classList.remove('hide');
        }, 500); 
    } else {
        chatBox.classList.add('show');
        chatBox.classList.remove('hide');
    }
}

document.getElementById('send-message-btn').addEventListener('click', sendMessage);
document.getElementById('chat-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    var video = document.getElementById('background-video');
    if (video) {
        video.playbackRate = 0.1; // Устанавливаем скорость воспроизведения
    } else {
        console.error('Element with id "background-video" not found.');
    }
});


function sendMessage(event) {
    if (event && event.type === 'keydown' && event.key !== 'Enter') return;
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    if (message) {
        const chatMessages = document.getElementById('chat-messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'sent');
        messageElement.innerText = message;
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function confirmOrderSubmission() {
    const confirmationModal = document.getElementById('confirmation-modal');
    const confirmButton = document.getElementById('confirm-btn');
    const cancelButton = document.getElementById('cancel-btn');
    const form = document.getElementById('order-form');

    confirmationModal.style.display = 'flex';

    confirmButton.onclick = function() {
        confirmationModal.style.display = 'none';
        form.submit(); // Отправляем форму
    }

    cancelButton.onclick = function() {
        confirmationModal.style.display = 'none';
    }

    return false; // Предотвращает отправку формы до подтверждения
}

function updateFormState() {
    // Функция для обновления состояния формы, если это необходимо
    const nickname = document.getElementById('nickname').value;
    const email = document.getElementById('email').value;
    // Добавьте логику для отображения информации о выборе пользователя
    console.log(`Никнейм: ${nickname}, Почта: ${email}`);
}

// Вызов функции обновления состояния формы при изменении значений
document.querySelectorAll('#order-form input, #order-form textarea').forEach((input) => {
    input.addEventListener('input', updateFormState);
});


function showServices() {
    // Implement the function to display the services section
}

function showGallery() {
    // Implement the function to display the gallery section
}

function showContact() {
    // Implement the function to display the contact section
}

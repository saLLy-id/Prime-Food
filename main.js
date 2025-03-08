// Sample data for recipes
const recipes = [
    {
        id: 1,
        title: 'Греческий салат с киноа',
        description: 'Питательный салат с киноа, свежими овощами и оливковым маслом.',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        calories: 320,
        time: '20 мин',
        category: 'Обеды'
    },
    {
        id: 2,
        title: 'Овсянка с ягодами и орехами',
        description: 'Полезный завтрак с овсянкой, свежими ягодами и орехами.',
        image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        calories: 280,
        time: '10 мин',
        category: 'Завтраки'
    },
    {
        id: 3,
        title: 'Запеченный лосось с овощами',
        description: 'Нежный лосось с овощами, запеченный в духовке.',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        calories: 420,
        time: '30 мин',
        category: 'Ужины'
    },
    {
        id: 4,
        title: 'Смузи-боул с фруктами',
        description: 'Освежающий смузи-боул с бананом, ягодами и семенами чиа.',
        image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        calories: 250,
        time: '15 мин',
        category: 'Завтраки'
    },
    {
        id: 5,
        title: 'Чиа-пудинг с кокосовым молоком',
        description: 'Полезный десерт с семенами чиа, кокосовым молоком и свежими фруктами.',
        image: 'https://images.unsplash.com/photo-1495546968767-f0573cca821e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        calories: 220,
        time: '5 мин + 4 часа',
        category: 'Десерты'
    },
    {
        id: 6,
        title: 'Куриная грудка с киноа и овощами',
        description: 'Сочная куриная грудка с гарниром из киноа и свежих овощей.',
        image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        calories: 380,
        time: '25 мин',
        category: 'Обеды'
    }
];

// Sample data for products
const products = {
    favorites: [
        { id: 1, name: 'Киноа', calories: 120 },
        { id: 2, name: 'Авокадо', calories: 160 },
        { id: 3, name: 'Греческий йогурт', calories: 100 },
        { id: 4, name: 'Лосось', calories: 208 }
    ],
    recommended: [
        { id: 5, name: 'Чиа', calories: 486 },
        { id: 6, name: 'Кокосовое молоко', calories: 230 },
        { id: 7, name: 'Киноа', calories: 120 },
        { id: 8, name: 'Куриная грудка', calories: 165 }
    ],
    shopping: [
        { id: 9, name: 'Овсянка', calories: 68 },
        { id: 10, name: 'Миндальное молоко', calories: 30 },
        { id: 11, name: 'Бананы', calories: 89 },
        { id: 12, name: 'Шпинат', calories: 23 }
    ]
};

// Sample data for reminders
let reminders = [
    { id: 1, product: 'Овсянка', date: '2023-06-15', time: '10:00' },
    { id: 2, product: 'Греческий йогурт', date: '2023-06-16', time: '12:00' }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize recipes
    displayRecipes('Все');
    
    // Initialize products
    displayProducts('favorites');
    displayProducts('recommended');
    displayProducts('shopping');
    
    // Initialize reminders
    displayReminders();
    
    // Event listeners for recipe filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            displayRecipes(this.textContent);
        });
    });
    
    // Event listeners for product tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update active tab content
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(tabName).classList.add('active');
        });
    });
    
    // Event listener for adding a product
    const addProductForm = document.querySelector('.add-product');
    if (addProductForm) {
        addProductForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const productNameInput = this.querySelector('input[type="text"]');
            const productCaloriesInput = this.querySelector('input[type="number"]');
            
            const productName = productNameInput.value.trim();
            const productCalories = parseInt(productCaloriesInput.value);
            
            if (productName && !isNaN(productCalories)) {
                addProduct('shopping', productName, productCalories);
                productNameInput.value = '';
                productCaloriesInput.value = '';
            }
        });
    }
    
    // Event listener for reminder form
    const reminderForm = document.getElementById('reminder-form');
    if (reminderForm) {
        reminderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const productInput = document.getElementById('reminder-product');
            const dateInput = document.getElementById('reminder-date');
            const timeInput = document.getElementById('reminder-time');
            
            const product = productInput.value.trim();
            const date = dateInput.value;
            const time = timeInput.value;
            
            if (product && date && time) {
                addReminder(product, date, time);
                productInput.value = '';
                dateInput.value = '';
                timeInput.value = '';
            }
        });
    }
});

// Display recipes based on filter
function displayRecipes(filter) {
    const recipesGrid = document.querySelector('.recipes-grid');
    if (!recipesGrid) return;
    
    recipesGrid.innerHTML = '';
    
    const filteredRecipes = filter === 'Все' 
        ? recipes 
        : recipes.filter(recipe => recipe.category === filter);
    
    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.innerHTML = `
            <div class="recipe-image" style="background-image: url('${recipe.image}')"></div>
            <div class="recipe-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <div class="recipe-meta">
                    <span><i class="fas fa-fire"></i> ${recipe.calories} ккал</span>
                    <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                </div>
            </div>
        `;
        recipesGrid.appendChild(recipeCard);
    });
}

// Display products for a specific category
function displayProducts(category) {
    const productsList = document.querySelector(`#${category} .products-list`);
    if (!productsList) return;
    
    productsList.innerHTML = '';
    
    products[category].forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <div class="product-info">
                <span class="product-name">${product.name}</span>
                <span class="product-calories">${product.calories} ккал</span>
            </div>
            <div class="product-actions">
                ${category !== 'favorites' ? `<button class="add-to-favorites" data-id="${product.id}"><i class="far fa-heart"></i></button>` : ''}
                ${category === 'shopping' ? `<button class="remove-product" data-id="${product.id}"><i class="far fa-trash-alt"></i></button>` : ''}
            </div>
        `;
        productsList.appendChild(productItem);
    });
    
    // Add event listeners for product actions
    if (category !== 'favorites') {
        const addToFavoritesButtons = productsList.querySelectorAll('.add-to-favorites');
        addToFavoritesButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                moveToFavorites(category, productId);
            });
        });
    }
    
    if (category === 'shopping') {
        const removeButtons = productsList.querySelectorAll('.remove-product');
        removeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeProduct('shopping', productId);
            });
        });
    }
}

// Add a new product to a category
function addProduct(category, name, calories) {
    const newId = Math.max(...products[category].map(p => p.id), 0) + 1;
    const newProduct = { id: newId, name, calories };
    products[category].push(newProduct);
    displayProducts(category);
}

// Remove a product from a category
function removeProduct(category, productId) {
    products[category] = products[category].filter(product => product.id !== productId);
    displayProducts(category);
}

// Move a product to favorites
function moveToFavorites(fromCategory, productId) {
    const product = products[fromCategory].find(p => p.id === productId);
    if (product && !products.favorites.some(p => p.name === product.name)) {
        const newId = Math.max(...products.favorites.map(p => p.id), 0) + 1;
        products.favorites.push({ ...product, id: newId });
        displayProducts('favorites');
    }
}

// Display reminders
function displayReminders() {
    const remindersContainer = document.getElementById('active-reminders');
    if (!remindersContainer) return;
    
    remindersContainer.innerHTML = '';
    
    if (reminders.length === 0) {
        remindersContainer.innerHTML = '<p>У вас нет активных напоминаний</p>';
        return;
    }
    
    reminders.forEach(reminder => {
        const reminderItem = document.createElement('div');
        reminderItem.className = 'reminder-item';
        reminderItem.innerHTML = `
            <div class="reminder-info">
                <div class="reminder-product">${reminder.product}</div>
                <div class="reminder-datetime">${formatDate(reminder.date)} в ${reminder.time}</div>
            </div>
            <div class="reminder-actions">
                <button class="remove-reminder" data-id="${reminder.id}"><i class="far fa-trash-alt"></i></button>
            </div>
        `;
        remindersContainer.appendChild(reminderItem);
    });
    
    // Add event listeners for reminder actions
    const removeButtons = remindersContainer.querySelectorAll('.remove-reminder');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const reminderId = parseInt(this.getAttribute('data-id'));
            removeReminder(reminderId);
        });
    });
}

// Add a new reminder
function addReminder(product, date, time) {
    const newId = Math.max(...reminders.map(r => r.id), 0) + 1;
    reminders.push({ id: newId, product, date, time });
    displayReminders();
    
    // Schedule notification
    scheduleNotification(newId, product, date, time);
}

// Remove a reminder
function removeReminder(reminderId) {
    reminders = reminders.filter(reminder => reminder.id !== reminderId);
    displayReminders();
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Schedule a notification for a reminder
function scheduleNotification(id, product, date, time) {
    const reminderDate = new Date(`${date}T${time}`);
    const now = new Date();
    
    if (reminderDate > now) {
        const timeUntilReminder = reminderDate - now;
        
        setTimeout(() => {
            if (Notification.permission === 'granted') {
                new Notification('Prime Food - Напоминание', {
                    body: `Не забудьте купить: ${product}`,
                    icon: 'favicon.ico'
                });
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        new Notification('Prime Food - Напоминание', {
                            body: `Не забудьте купить: ${product}`,
                            icon: 'favicon.ico'
                        });
                    }
                });
            }
        }, timeUntilReminder);
    }
}

// Request notification permission on page load
if ('Notification' in window) {
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
        Notification.requestPermission();
    }
}

// Add event listener for the "Add Product" button
document.addEventListener('DOMContentLoaded', function() {
    const addProductButton = document.querySelector('.add-product button');
    if (addProductButton) {
        addProductButton.addEventListener('click', function() {
            const productNameInput = document.querySelector('.add-product input[type="text"]');
            const productCaloriesInput = document.querySelector('.add-product input[type="number"]');
            
            const productName = productNameInput.value.trim();
            const productCalories = parseInt(productCaloriesInput.value);
            
            if (productName && !isNaN(productCalories)) {
                addProduct('shopping', productName, productCalories);
                productNameInput.value = '';
                productCaloriesInput.value = '';
            }
        });
    }
});

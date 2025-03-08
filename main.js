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

// Sample data for products with icons
const products = {
    favorites: [
        { id: 1, name: 'Киноа', calories: 120, icon: 'fa-seedling' },
        { id: 2, name: 'Авокадо', calories: 160, icon: 'fa-avocado' },
        { id: 3, name: 'Греческий йогурт', calories: 100, icon: 'fa-cheese' },
        { id: 4, name: 'Лосось', calories: 208, icon: 'fa-fish' },
        { id: 5, name: 'Шпинат', calories: 23, icon: 'fa-leaf' },
        { id: 6, name: 'Черника', calories: 57, icon: 'fa-apple-alt' }
    ],
    recommended: [
        { id: 7, name: 'Чиа', calories: 486, icon: 'fa-seedling' },
        { id: 8, name: 'Кокосовое молоко', calories: 230, icon: 'fa-glass-whiskey' },
        { id: 9, name: 'Киноа', calories: 120, icon: 'fa-seedling' },
        { id: 10, name: 'Куриная грудка', calories: 165, icon: 'fa-drumstick-bite' },
        { id: 11, name: 'Брокколи', calories: 34, icon: 'fa-tree' },
        { id: 12, name: 'Морковь', calories: 41, icon: 'fa-carrot' },
        { id: 13, name: 'Яблоко', calories: 52, icon: 'fa-apple-alt' },
        { id: 14, name: 'Банан', calories: 89, icon: 'fa-apple-alt' },
        { id: 15, name: 'Клубника', calories: 32, icon: 'fa-apple-alt' },
        { id: 16, name: 'Малина', calories: 52, icon: 'fa-apple-alt' },
        { id: 17, name: 'Огурец', calories: 15, icon: 'fa-seedling' },
        { id: 18, name: 'Помидор', calories: 18, icon: 'fa-apple-alt' }
    ],
    shopping: [
        { id: 19, name: 'Овсянка', calories: 68, icon: 'fa-wheat-awn' },
        { id: 20, name: 'Миндальное молоко', calories: 30, icon: 'fa-glass-whiskey' },
        { id: 21, name: 'Бананы', calories: 89, icon: 'fa-apple-alt' },
        { id: 22, name: 'Шпинат', calories: 23, icon: 'fa-leaf' },
        { id: 23, name: 'Сладкий перец', calories: 31, icon: 'fa-pepper-hot' },
        { id: 24, name: 'Цветная капуста', calories: 25, icon: 'fa-cloud' },
        { id: 25, name: 'Киви', calories: 61, icon: 'fa-apple-alt' },
        { id: 26, name: 'Апельсин', calories: 47, icon: 'fa-apple-alt' },
        { id: 27, name: 'Грейпфрут', calories: 42, icon: 'fa-apple-alt' }
    ]
};

// Expanded list of fruits and vegetables
const fruitsAndVegetables = [
    { name: 'Яблоко', calories: 52, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Банан', calories: 89, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Апельсин', calories: 47, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Груша', calories: 57, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Киви', calories: 61, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Ананас', calories: 50, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Манго', calories: 60, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Авокадо', calories: 160, icon: 'fa-avocado', category: 'Фрукты' },
    { name: 'Грейпфрут', calories: 42, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Персик', calories: 39, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Нектарин', calories: 44, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Абрикос', calories: 48, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Слива', calories: 46, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Черешня', calories: 50, icon: 'fa-apple-alt', category: 'Фрукты' },
    { name: 'Клубника', calories: 32, icon: 'fa-apple-alt', category: 'Ягоды' },
    { name: 'Малина', calories: 52, icon: 'fa-apple-alt', category: 'Ягоды' },
    { name: 'Черника', calories: 57, icon: 'fa-apple-alt', category: 'Ягоды' },
    { name: 'Голубика', calories: 57, icon: 'fa-apple-alt', category: 'Ягоды' },
    { name: 'Ежевика', calories: 43, icon: 'fa-apple-alt', category: 'Ягоды' },
    { name: 'Смородина', calories: 56, icon: 'fa-apple-alt', category: 'Ягоды' },
    { name: 'Крыжовник', calories: 44, icon: 'fa-apple-alt', category: 'Ягоды' },
    { name: 'Помидор', calories: 18, icon: 'fa-apple-alt', category: 'Овощи' },
    { name: 'Огурец', calories: 15, icon: 'fa-seedling', category: 'Овощи' },
    { name: 'Морковь', calories: 41, icon: 'fa-carrot', category: 'Овощи' },
    { name: 'Брокколи', calories: 34, icon: 'fa-tree', category: 'Овощи' },
    { name: 'Цветная капуста', calories: 25, icon: 'fa-cloud', category: 'Овощи' },
    { name: 'Сладкий перец', calories: 31, icon: 'fa-pepper-hot', category: 'Овощи' },
    { name: 'Баклажан', calories: 25, icon: 'fa-eggplant', category: 'Овощи' },
    { name: 'Кабачок', calories: 17, icon: 'fa-seedling', category: 'Овощи' },
    { name: 'Тыква', calories: 26, icon: 'fa-seedling', category: 'Овощи' },
    { name: 'Шпинат', calories: 23, icon: 'fa-leaf', category: 'Овощи' },
    { name: 'Руккола', calories: 25, icon: 'fa-leaf', category: 'Овощи' },
    { name: 'Салат', calories: 15, icon: 'fa-leaf', category: 'Овощи' },
    { name: 'Лук', calories: 40, icon: 'fa-seedling', category: 'Овощи' },
    { name: 'Чеснок', calories: 149, icon: 'fa-seedling', category: 'Овощи' },
    { name: 'Имбирь', calories: 80, icon: 'fa-seedling', category: 'Овощи' },
    { name: 'Картофель', calories: 77, icon: 'fa-seedling', category: 'Овощи' },
    { name: 'Батат', calories: 86, icon: 'fa-seedling', category: 'Овощи' },
    { name: 'Свекла', calories: 43, icon: 'fa-seedling', category: 'Овощи' },
    { name: 'Редис', calories: 16, icon: 'fa-seedling', category: 'Овощи' }
];

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

    // Add datalist for product suggestions
    createProductSuggestions();
    
    // Initialize category cards
    initCategoryCards();
    
    // Initialize modal
    initModal();
});

// Create datalist for product suggestions
function createProductSuggestions() {
    const datalist = document.createElement('datalist');
    datalist.id = 'product-suggestions';
    
    fruitsAndVegetables.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        datalist.appendChild(option);
    });
    
    document.body.appendChild(datalist);
    
    // Add datalist to product inputs
    const productInputs = document.querySelectorAll('input[placeholder="Добавить продукт"], #reminder-product');
    productInputs.forEach(input => {
        input.setAttribute('list', 'product-suggestions');
    });
}

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
                <div class="product-icon"><i class="fas ${product.icon || 'fa-apple-alt'}"></i></div>
                <span class="product-name">${product.name}</span>
                <span class="product-calories">${product.calories} ккал</span>
            </div>
            <div class="product-actions">
                ${category !== 'favorites' ? `<button class="add-to-favorites" data-id="${product.id}" title="Добавить в избранное"><i class="far fa-heart"></i></button>` : ''}
                ${category === 'shopping' ? `<button class="remove-product" data-id="${product.id}" title="Удалить"><i class="far fa-trash-alt"></i></button>` : ''}
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
    // Try to find an icon for the product
    let icon = 'fa-apple-alt'; // Default icon
    
    const matchingProduct = fruitsAndVegetables.find(p => 
        p.name.toLowerCase() === name.toLowerCase() || 
        name.toLowerCase().includes(p.name.toLowerCase())
    );
    
    if (matchingProduct) {
        icon = matchingProduct.icon;
        calories = calories || matchingProduct.calories;
    }
    
    const newId = Math.max(...products[category].map(p => p.id), 0) + 1;
    const newProduct = { id: newId, name, calories, icon };
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
        
        // Show notification
        showNotification(`${product.name} добавлен в избранное`);
    }
}

// Show notification
function showNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.querySelector('.notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.className = 'notification';
        document.body.appendChild(notification);
        
        // Add styles
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.padding = '15px 25px';
        notification.style.backgroundColor = 'var(--primary-color)';
        notification.style.color = 'white';
        notification.style.borderRadius = 'var(--border-radius)';
        notification.style.boxShadow = 'var(--shadow)';
        notification.style.zIndex = '1000';
        notification.style.transform = 'translateY(100px)';
        notification.style.opacity = '0';
        notification.style.transition = 'all 0.3s ease';
    }
    
    // Set message and show notification
    notification.textContent = message;
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateY(100px)';
            notification.style.opacity = '0';
        }, 3000);
    }, 100);
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
                <div class="reminder-datetime"><i class="far fa-calendar-alt"></i> ${formatDate(reminder.date)} в ${reminder.time}</div>
            </div>
            <div class="reminder-actions">
                <button class="remove-reminder" data-id="${reminder.id}" title="Удалить напоминание"><i class="far fa-trash-alt"></i></button>
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
    
    // Show notification
    showNotification(`Напоминание для "${product}" создано`);
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

// Initialize category cards
function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            openCategoryModal(category);
        });
    });
}

// Initialize modal
function initModal() {
    const modal = document.getElementById('category-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        closeModal();
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}

// Open category modal
function openCategoryModal(category) {
    const modal = document.getElementById('category-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalProducts = document.getElementById('modal-products');
    
    // Set modal title
    modalTitle.textContent = category;
    
    // Clear previous products
    modalProducts.innerHTML = '';
    
    // Filter products by category
    const filteredProducts = fruitsAndVegetables.filter(product => product.category === category);
    
    // Display products
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <div class="product-info">
                <div class="product-icon"><i class="fas ${product.icon}"></i></div>
                <span class="product-name">${product.name}</span>
                <span class="product-calories">${product.calories} ккал</span>
            </div>
            <div class="product-actions">
                <button class="add-to-shopping" title="Добавить в список покупок"><i class="fas fa-cart-plus"></i></button>
                <button class="add-to-favorites" title="Добавить в избранное"><i class="far fa-heart"></i></button>
            </div>
        `;
        modalProducts.appendChild(productItem);
        
        // Add event listeners for product actions
        const addToShoppingBtn = productItem.querySelector('.add-to-shopping');
        const addToFavoritesBtn = productItem.querySelector('.add-to-favorites');
        
        addToShoppingBtn.addEventListener('click', function() {
            addProduct('shopping', product.name, product.calories);
            showNotification(`${product.name} добавлен в список покупок`);
        });
        
        addToFavoritesBtn.addEventListener('click', function() {
            // Check if product already exists in favorites
            if (!products.favorites.some(p => p.name === product.name)) {
                const newId = Math.max(...products.favorites.map(p => p.id), 0) + 1;
                products.favorites.push({ 
                    id: newId, 
                    name: product.name, 
                    calories: product.calories,
                    icon: product.icon
                });
                displayProducts('favorites');
                showNotification(`${product.name} добавлен в избранное`);
            } else {
                showNotification(`${product.name} уже в избранном`);
            }
        });
    });
    
    // Show modal
    modal.classList.add('show');
    setTimeout(() => {
        modal.querySelector('.modal-content').style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('category-modal');
    
    // Hide modal content first
    modal.querySelector('.modal-content').style.opacity = '0';
    modal.querySelector('.modal-content').style.transform = 'translateY(-50px)';
    
    // Then hide the modal
    setTimeout(() => {
        modal.classList.remove('show');
        // Re-enable body scrolling
        document.body.style.overflow = '';
    }, 300);
}

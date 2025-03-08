-- Create database
CREATE DATABASE IF NOT EXISTS prime_food;
USE prime_food;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create user_products table
CREATE TABLE IF NOT EXISTS user_products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    category VARCHAR(20) NOT NULL,
    name VARCHAR(100) NOT NULL,
    calories INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX (user_id, category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create user_reminders table
CREATE TABLE IF NOT EXISTS user_reminders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product VARCHAR(100) NOT NULL,
    reminder_date DATE NOT NULL,
    reminder_time TIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create recipes table
CREATE TABLE IF NOT EXISTS recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    calories INT NOT NULL,
    preparation_time VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    created_at DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert sample recipes
INSERT INTO recipes (title, description, image_url, calories, preparation_time, category, ingredients, instructions, created_at) VALUES
(
    'Греческий салат с киноа',
    'Питательный салат с киноа, свежими овощами и оливковым маслом.',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    320,
    '20 мин',
    'Обеды',
    '1 стакан киноа\n2 огурца\n2 помидора\n1 красный лук\n100г феты\n50г оливок\n2 ст.л. оливкового масла\nСоль и перец по вкусу',
    '1. Промойте киноа и отварите согласно инструкции на упаковке.\n2. Нарежьте огурцы, помидоры и лук.\n3. Смешайте все ингредиенты в большой миске.\n4. Заправьте оливковым маслом, посолите и поперчите по вкусу.',
    NOW()
),
(
    'Овсянка с ягодами и орехами',
    'Полезный завтрак с овсянкой, свежими ягодами и орехами.',
    'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    280,
    '10 мин',
    'Завтраки',
    '50г овсяных хлопьев\n200мл миндального молока\n1 ст.л. меда\n50г свежих ягод\n15г миндаля\n5г семян чиа',
    '1. Смешайте овсяные хлопья с миндальным молоком и оставьте на 5 минут.\n2. Добавьте мед и перемешайте.\n3. Украсьте свежими ягодами, миндалем и семенами чиа.',
    NOW()
),
(
    'Запеченный лосось с овощами',
    'Нежный лосось с овощами, запеченный в духовке.',
    'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    420,
    '30 мин',
    'Ужины',
    '200г филе лосося\n1 цуккини\n1 болгарский перец\n1 морковь\n2 ст.л. оливкового масла\nСоль, перец и лимонный сок по вкусу',
    '1. Разогрейте духовку до 180°C.\n2. Нарежьте овощи и выложите на противень.\n3. Сбрызните овощи оливковым маслом, посолите и поперчите.\n4. Положите филе лосося сверху, сбрызните лимонным соком.\n5. Запекайте 20-25 минут до готовности.',
    NOW()
);

-- Create recommended_products table
CREATE TABLE IF NOT EXISTS recommended_products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    calories INT NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert sample recommended products
INSERT INTO recommended_products (name, calories, description, category) VALUES
('Киноа', 120, 'Богатый белком и клетчаткой злак, отличная замена рису и макаронам.', 'Злаки'),
('Авокадо', 160, 'Источник полезных жиров, витаминов и минералов.', 'Фрукты'),
('Греческий йогурт', 100, 'Богат белком и пробиотиками, поддерживает здоровье пищеварительной системы.', 'Молочные продукты'),
('Лосось', 208, 'Богат омега-3 жирными кислотами, полезными для сердца и мозга.', 'Рыба'),
('Чиа', 486, 'Богаты омега-3, клетчаткой и антиоксидантами.', 'Семена'),
('Кокосовое молоко', 230, 'Растительная альтернатива молоку, богатая полезными жирами.', 'Напитки'),
('Куриная грудка', 165, 'Нежирный источник белка, важный для роста и восстановления мышц.', 'Мясо'),
('Шпинат', 23, 'Богат железом, витаминами и антиоксидантами.', 'Овощи'),
('Миндаль', 576, 'Богат витамином E, магнием и полезными жирами.', 'Орехи'),
('Черника', 57, 'Богата антиоксидантами, поддерживает здоровье глаз и мозга.', 'Ягоды'); 
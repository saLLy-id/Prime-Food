# Prime Food - Сайт о правильном питании

Prime Food - это современный веб-сайт, посвященный правильному питанию и здоровому образу жизни для девушек. Сайт предлагает рекомендации по питанию, рецепты правильного питания, а также инструменты для управления продуктами и напоминаниями о покупках.

![Prime Food Screenshot](https://via.placeholder.com/800x400?text=Prime+Food+Screenshot)

## Основные функции

- **Рекомендации по питанию**: Полезные советы и рекомендации для поддержания здорового образа жизни.
- **ПП рецепты**: Коллекция рецептов правильного питания с указанием калорийности и времени приготовления.
- **Управление продуктами**: Возможность создавать списки продуктов по категориям:
  - Избранное
  - Рекомендованное
  - Что купить
- **Калорийность продуктов**: Отображение калорийности для каждого продукта.
- **Добавление своих продуктов**: Возможность добавлять собственные продукты с указанием калорийности.
- **Напоминания о покупках**: Функция создания напоминаний о необходимости купить определенные продукты.

## Технологии

- HTML5
- CSS3 (с использованием современных техник, таких как CSS Grid и Flexbox)
- JavaScript (ES6+)
- PHP 7+
- MySQL

## Установка и настройка

### Требования

- PHP 7.0 или выше
- MySQL 5.7 или выше
- Веб-сервер (Apache, Nginx)

### Шаги по установке

1. Клонируйте репозиторий на ваш локальный компьютер или сервер:
   ```
   git clone https://github.com/yourusername/prime-food.git
   ```

2. Создайте базу данных MySQL:
   ```sql
   CREATE DATABASE prime_food;
   ```

3. Импортируйте структуру базы данных из файла `database.sql`:
   ```
   mysql -u username -p prime_food < database.sql
   ```

4. Настройте параметры подключения к базе данных в файле `main.php`:
   ```php
   $host = 'localhost';
   $dbname = 'prime_food';
   $username = 'your_username';
   $password = 'your_password';
   ```

5. Настройте веб-сервер для обработки PHP-файлов и установите корневую директорию на папку проекта.

6. Откройте сайт в браузере и начните использовать его функции.

## Структура базы данных

База данных содержит следующие таблицы:

### users
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- name (VARCHAR)
- email (VARCHAR, UNIQUE)
- password (VARCHAR)
- created_at (DATETIME)

### user_products
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- user_id (INT, FOREIGN KEY)
- category (VARCHAR) - 'favorites', 'recommended', 'shopping'
- name (VARCHAR)
- calories (INT)

### user_reminders
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- user_id (INT, FOREIGN KEY)
- product (VARCHAR)
- reminder_date (DATE)
- reminder_time (TIME)

## Использование

1. **Регистрация/Вход**: Создайте аккаунт или войдите в существующий для сохранения ваших данных.
2. **Просмотр рецептов**: Изучите коллекцию рецептов правильного питания, отфильтрованных по категориям.
3. **Управление продуктами**: Добавляйте продукты в различные категории, указывайте их калорийность.
4. **Создание напоминаний**: Настройте напоминания о покупке продуктов, указав дату и время.

## Лицензия

Этот проект распространяется под лицензией MIT. Подробности смотрите в файле LICENSE.

## Контакты

Если у вас есть вопросы или предложения по улучшению сайта, пожалуйста, свяжитесь с нами по адресу: info@primefood.com 
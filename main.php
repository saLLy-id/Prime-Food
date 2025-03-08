<?php
// Database connection settings
$host = 'localhost';
$dbname = 'prime_food';
$username = 'root';
$password = '';

// Establish database connection
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}

// Start session
session_start();

// Handle AJAX requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = isset($_POST['action']) ? $_POST['action'] : '';
    
    switch ($action) {
        case 'login':
            handleLogin($pdo);
            break;
        case 'register':
            handleRegister($pdo);
            break;
        case 'save_products':
            handleSaveProducts($pdo);
            break;
        case 'save_reminders':
            handleSaveReminders($pdo);
            break;
        case 'get_user_data':
            handleGetUserData($pdo);
            break;
        default:
            echo json_encode(['status' => 'error', 'message' => 'Invalid action']);
    }
    exit;
}

/**
 * Handle user login
 */
function handleLogin($pdo) {
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    
    if (empty($email) || empty($password)) {
        echo json_encode(['status' => 'error', 'message' => 'Пожалуйста, заполните все поля']);
        return;
    }
    
    try {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user && password_verify($password, $user['password'])) {
            // Set session variables
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_name'] = $user['name'];
            
            echo json_encode(['status' => 'success', 'message' => 'Вход выполнен успешно']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Неверный email или пароль']);
        }
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Ошибка базы данных: ' . $e->getMessage()]);
    }
}

/**
 * Handle user registration
 */
function handleRegister($pdo) {
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    
    if (empty($name) || empty($email) || empty($password)) {
        echo json_encode(['status' => 'error', 'message' => 'Пожалуйста, заполните все поля']);
        return;
    }
    
    try {
        // Check if email already exists
        $stmt = $pdo->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->execute([$email]);
        
        if ($stmt->rowCount() > 0) {
            echo json_encode(['status' => 'error', 'message' => 'Этот email уже зарегистрирован']);
            return;
        }
        
        // Hash password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
        // Insert new user
        $stmt = $pdo->prepare("INSERT INTO users (name, email, password, created_at) VALUES (?, ?, ?, NOW())");
        $stmt->execute([$name, $email, $hashedPassword]);
        
        // Set session variables
        $_SESSION['user_id'] = $pdo->lastInsertId();
        $_SESSION['user_name'] = $name;
        
        echo json_encode(['status' => 'success', 'message' => 'Регистрация выполнена успешно']);
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Ошибка базы данных: ' . $e->getMessage()]);
    }
}

/**
 * Save user products to database
 */
function handleSaveProducts($pdo) {
    if (!isLoggedIn()) {
        echo json_encode(['status' => 'error', 'message' => 'Пользователь не авторизован']);
        return;
    }
    
    $userId = $_SESSION['user_id'];
    $products = isset($_POST['products']) ? json_decode($_POST['products'], true) : [];
    
    if (!is_array($products)) {
        echo json_encode(['status' => 'error', 'message' => 'Неверный формат данных']);
        return;
    }
    
    try {
        // Begin transaction
        $pdo->beginTransaction();
        
        // Delete existing products for this user
        $stmt = $pdo->prepare("DELETE FROM user_products WHERE user_id = ?");
        $stmt->execute([$userId]);
        
        // Insert new products
        $stmt = $pdo->prepare("INSERT INTO user_products (user_id, category, name, calories) VALUES (?, ?, ?, ?)");
        
        foreach ($products as $category => $categoryProducts) {
            foreach ($categoryProducts as $product) {
                $stmt->execute([
                    $userId,
                    $category,
                    $product['name'],
                    $product['calories']
                ]);
            }
        }
        
        // Commit transaction
        $pdo->commit();
        
        echo json_encode(['status' => 'success', 'message' => 'Продукты сохранены успешно']);
    } catch (PDOException $e) {
        // Rollback transaction on error
        $pdo->rollBack();
        echo json_encode(['status' => 'error', 'message' => 'Ошибка базы данных: ' . $e->getMessage()]);
    }
}

/**
 * Save user reminders to database
 */
function handleSaveReminders($pdo) {
    if (!isLoggedIn()) {
        echo json_encode(['status' => 'error', 'message' => 'Пользователь не авторизован']);
        return;
    }
    
    $userId = $_SESSION['user_id'];
    $reminders = isset($_POST['reminders']) ? json_decode($_POST['reminders'], true) : [];
    
    if (!is_array($reminders)) {
        echo json_encode(['status' => 'error', 'message' => 'Неверный формат данных']);
        return;
    }
    
    try {
        // Begin transaction
        $pdo->beginTransaction();
        
        // Delete existing reminders for this user
        $stmt = $pdo->prepare("DELETE FROM user_reminders WHERE user_id = ?");
        $stmt->execute([$userId]);
        
        // Insert new reminders
        $stmt = $pdo->prepare("INSERT INTO user_reminders (user_id, product, reminder_date, reminder_time) VALUES (?, ?, ?, ?)");
        
        foreach ($reminders as $reminder) {
            $stmt->execute([
                $userId,
                $reminder['product'],
                $reminder['date'],
                $reminder['time']
            ]);
        }
        
        // Commit transaction
        $pdo->commit();
        
        echo json_encode(['status' => 'success', 'message' => 'Напоминания сохранены успешно']);
    } catch (PDOException $e) {
        // Rollback transaction on error
        $pdo->rollBack();
        echo json_encode(['status' => 'error', 'message' => 'Ошибка базы данных: ' . $e->getMessage()]);
    }
}

/**
 * Get user data (products and reminders)
 */
function handleGetUserData($pdo) {
    if (!isLoggedIn()) {
        echo json_encode(['status' => 'error', 'message' => 'Пользователь не авторизован']);
        return;
    }
    
    $userId = $_SESSION['user_id'];
    
    try {
        // Get user products
        $stmt = $pdo->prepare("SELECT category, name, calories FROM user_products WHERE user_id = ?");
        $stmt->execute([$userId]);
        $productsData = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        $products = [
            'favorites' => [],
            'recommended' => [],
            'shopping' => []
        ];
        
        foreach ($productsData as $product) {
            $category = $product['category'];
            unset($product['category']);
            
            if (isset($products[$category])) {
                $products[$category][] = $product;
            }
        }
        
        // Get user reminders
        $stmt = $pdo->prepare("SELECT id, product, reminder_date as date, reminder_time as time FROM user_reminders WHERE user_id = ?");
        $stmt->execute([$userId]);
        $reminders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode([
            'status' => 'success',
            'data' => [
                'products' => $products,
                'reminders' => $reminders
            ]
        ]);
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Ошибка базы данных: ' . $e->getMessage()]);
    }
}

/**
 * Check if user is logged in
 */
function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

/**
 * Get current user ID
 */
function getCurrentUserId() {
    return isset($_SESSION['user_id']) ? $_SESSION['user_id'] : null;
}

/**
 * Get current user name
 */
function getCurrentUserName() {
    return isset($_SESSION['user_name']) ? $_SESSION['user_name'] : null;
}
?>

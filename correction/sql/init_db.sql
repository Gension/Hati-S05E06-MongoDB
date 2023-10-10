USE todo;

CREATE TABLE IF NOT EXISTS todo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    status VARCHAR(30) DEFAULT 'pending',
    created_at DATETIME,
    updated_at DATETIME
);

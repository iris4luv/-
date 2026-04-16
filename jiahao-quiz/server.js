const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// 初始化数据库
const db = new sqlite3.Database('./quiz_results.db', (err) => {
    if (err) {
        console.error('数据库连接失败:', err.message);
    } else {
        console.log('已连接到 SQLite 数据库');
        initDb();
    }
});

// 初始化数据库表
function initDb() {
    db.run(`CREATE TABLE IF NOT EXISTS quiz_results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        score INTEGER NOT NULL,
        percentage REAL NOT NULL,
        result_level TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
        if (err) {
            console.error('创建表失败:', err.message);
        } else {
            console.log('数据库表初始化成功');
        }
    });
}

// API: 提交测试结果
app.post('/api/submit', (req, res) => {
    const { score, percentage, resultLevel } = req.body;

    if (typeof score !== 'number' || typeof percentage !== 'number' || !resultLevel) {
        return res.status(400).json({ error: '参数不完整' });
    }

    const sql = `INSERT INTO quiz_results (score, percentage, result_level) VALUES (?, ?, ?)`;
    const params = [score, percentage, resultLevel];

    db.run(sql, params, function(err) {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: '保存失败' });
        } else {
            res.json({ 
                success: true, 
                id: this.lastID,
                message: '测试结果已保存' 
            });
        }
    });
});

// API: 获取统计数据
app.get('/api/stats', (req, res) => {
    const sql = `
        SELECT 
            result_level,
            COUNT(*) as count,
            ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM quiz_results), 2) as percentage
        FROM quiz_results
        GROUP BY result_level
        ORDER BY 
            CASE result_level
                WHEN '完全没偏差的正常人' THEN 1
                WHEN '轻微认知偏差' THEN 2
                WHEN '中度嘉豪内核' THEN 3
                WHEN '纯种赛级嘉豪内核' THEN 4
            END
    `;

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: '获取统计数据失败' });
        } else {
            res.json({ success: true, data: rows });
        }
    });
});

// API: 获取所有测试结果
app.get('/api/results', (req, res) => {
    const sql = `SELECT * FROM quiz_results ORDER BY created_at DESC`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).json({ error: '获取结果失败' });
        } else {
            res.json({ success: true, data: rows });
        }
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});

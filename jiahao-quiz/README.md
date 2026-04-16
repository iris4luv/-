# 嘉豪量表 - 测一测你有没有嘉豪式认知偏差

一个基于Node.js和Express的心理测评应用，包含前端测试页面和后台数据统计功能。

## 功能特点

- ✅ 完整的测试流程：欢迎页 → 10道答题页 → 结果页
- ✅ 平滑的页面切换动画
- ✅ 自动提交测试结果到数据库
- ✅ 后台数据统计和可视化
- ✅ 响应式设计，支持移动端

## 技术栈

- **前端**: 原生HTML + CSS + JavaScript
- **后端**: Node.js + Express
- **数据库**: SQLite3

## 安装和运行

### 1. 安装依赖

```bash
cd jiahao-quiz
npm install
```

### 2. 启动服务器

```bash
npm start
```

服务器将在 http://localhost:3000 启动

### 3. 访问页面

- 测试页面: http://localhost:3000
- 后台管理: http://localhost:3000/admin.html

## 部署到生产环境

### 使用 Vercel 部署（推荐）

1. 安装 Vercel CLI
```bash
npm install -g vercel
```

2. 在项目目录运行
```bash
vercel
```

3. 按提示完成部署

### 使用其他云服务

你可以将此项目部署到任何支持Node.js的云服务，如：
- Heroku
- Railway
- Render
- 阿里云
- 腾讯云

## 数据库

项目使用SQLite3数据库，数据文件为 `quiz_results.db`，会自动创建。

### 数据库表结构

```sql
CREATE TABLE quiz_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    score INTEGER NOT NULL,
    percentage REAL NOT NULL,
    result_level TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## API接口

### 提交测试结果

- **URL**: `/api/submit`
- **方法**: POST
- **请求体**:
```json
{
  "score": 15,
  "percentage": 50,
  "resultLevel": "轻微认知偏差"
}
```

### 获取统计数据

- **URL**: `/api/stats`
- **方法**: GET
- **响应**:
```json
{
  "success": true,
  "data": [
    {
      "result_level": "完全没偏差的正常人",
      "count": 10,
      "percentage": 20.00
    }
  ]
}
```

### 获取所有测试结果

- **URL**: `/api/results`
- **方法**: GET
- **响应**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "score": 15,
      "percentage": 50,
      "result_level": "轻微认知偏差",
      "created_at": "2024-01-01 12:00:00"
    }
  ]
}
```

## 注意事项

1. 首次运行会自动创建数据库文件
2. 后台管理页面目前没有访问控制，建议在生产环境中添加身份验证
3. 数据库文件 `quiz_results.db` 包含所有测试数据，请定期备份

## 开发模式

使用nodemon自动重启服务器：

```bash
npm run dev
```

## 许可证

MIT

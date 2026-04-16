# 嘉豪量表 - 部署到线上指南

本指南将手把手教你如何将嘉豪量表部署到线上，让其他人可以访问。

## 方法一：使用 Vercel 部署（推荐，最简单）

### 步骤1：注册 Vercel 账号

1. 访问 https://vercel.com
2. 点击 "Sign Up" 注册账号
3. 可以使用 GitHub、GitLab 或 Bitbucket 账号注册（推荐使用 GitHub）

### 步骤2：安装 Vercel CLI

打开命令行（Windows 按 Win+R，输入 cmd，回车），运行：

```bash
npm install -g vercel
```

### 步骤3：登录 Vercel

在命令行中运行：

```bash
vercel login
```

按照提示选择登录方式（推荐使用 GitHub），完成登录。

### 步骤4：部署项目

1. 在命令行中进入项目目录：
```bash
cd C:/Users/27867/PyCharmMiscProject/jiahao-quiz
```

2. 运行部署命令：
```bash
vercel
```

3. 按照提示操作：
   - Set up and deploy? `Y`
   - Which scope? 选择你的账号
   - Link to existing project? `N`
   - Project name: 输入项目名称（如：jiahao-quiz）
   - In which directory is your code located? 按回车（使用当前目录）
   - Want to modify these settings? `N`

4. 等待部署完成，你会看到一个 URL，例如：https://jiahao-quiz-xxx.vercel.app

### 步骤5：访问你的网站

部署完成后，你可以通过以下 URL 访问：
- 测试页面：https://你的项目名.vercel.app
- 后台管理：https://你的项目名.vercel.app/admin.html

### 步骤6：后续更新

如果你修改了代码，只需再次运行：
```bash
vercel --prod
```

## 方法二：使用 Render 部署（免费，支持数据库）

### 步骤1：注册 Render 账号

1. 访问 https://render.com
2. 点击 "Sign Up" 注册账号
3. 使用 GitHub 账号注册

### 步骤2：将代码推送到 GitHub

1. 在 GitHub 上创建新仓库
2. 将项目代码推送到 GitHub：
```bash
cd C:/Users/27867/PyCharmMiscProject/jiahao-quiz
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/仓库名.git
git push -u origin main
```

### 步骤3：在 Render 上部署

1. 登录 Render 后，点击 "New +"
2. 选择 "Web Service"
3. 连接你的 GitHub 仓库
4. 配置部署设置：
   - Name: jiahao-quiz
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. 点击 "Create Web Service"
6. 等待部署完成

### 步骤4：访问你的网站

部署完成后，Render 会提供一个 URL，你可以通过这个 URL 访问你的网站。

## 方法三：使用 Railway 部署（简单，免费额度）

### 步骤1：注册 Railway 账号

1. 访问 https://railway.app
2. 点击 "Start a New Project"
3. 使用 GitHub 账号注册

### 步骤2：部署项目

1. 点击 "New Project" → "Deploy from GitHub repo"
2. 选择你的 GitHub 仓库
3. Railway 会自动检测 Node.js 项目
4. 点击 "Deploy Now"
5. 等待部署完成

### 步骤3：访问你的网站

部署完成后，Railway 会提供一个 URL，你可以通过这个 URL 访问你的网站。

## 方法四：使用 Heroku 部署（经典，但免费额度有限）

### 步骤1：注册 Heroku 账号

1. 访问 https://signup.heroku.com
2. 填写注册信息
3. 验证邮箱

### 步骤2：安装 Heroku CLI

下载并安装 Heroku CLI：https://devcenter.heroku.com/articles/heroku-cli

### 步骤3：登录 Heroku

在命令行中运行：
```bash
heroku login
```

### 步骤4：创建 Heroku 应用

```bash
cd C:/Users/27867/PyCharmMiscProject/jiahao-quiz
heroku create
```

### 步骤5：部署到 Heroku

```bash
git init
git add .
git commit -m "Initial commit"
heroku git:remote -a 你的应用名
git push heroku master
```

### 步骤6：访问你的网站

部署完成后，你可以通过 Heroku 提供的 URL 访问你的网站。

## 注意事项

1. **数据库持久化**：
   - Vercel 是无状态的，每次部署数据库会重置
   - Render 和 Railway 支持持久化存储
   - Heroku 需要使用 PostgreSQL 等外部数据库

2. **环境变量**：
   - 如果需要配置环境变量，可以在部署平台的设置中添加
   - 例如：`PORT`、`DATABASE_URL` 等

3. **域名**：
   - 大多数平台支持绑定自定义域名
   - 需要在域名服务商处配置 DNS

4. **HTTPS**：
   - 所有推荐的平台都自动提供 HTTPS
   - 无需额外配置

## 推荐选择

- **最简单快速**：Vercel
- **需要数据库持久化**：Render 或 Railway
- **团队协作**：Heroku

选择最适合你的方式，按照步骤操作即可！

# 通过 GitHub 部署到 Vercel（最简单的方法）

不需要安装任何工具，只需要有 GitHub 账号即可！

## 第一步：注册 GitHub 账号（如果没有）

1. 访问 https://github.com
2. 点击右上角的 "Sign up"
3. 填写注册信息
4. 验证邮箱

## 第二步：创建 GitHub 仓库

1. 登录 GitHub 后，点击右上角的 "+" 号
2. 选择 "New repository"
3. 填写仓库信息：
   - Repository name: `jiahao-quiz`
   - Description: `嘉豪量表 - 测一测你有没有嘉豪式认知偏差`
   - 选择 "Public"（公开）或 "Private"（私有）
4. 点击 "Create repository"

## 第三步：上传代码到 GitHub

### 方法A：使用 GitHub 网页上传（最简单，适合小项目）

1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽到上传区域：
   - `package.json`
   - `vercel.json`
   - `api/index.js`
   - `public/index.html`
   - `public/admin.html`
   - `README.md`

3. 在 "Commit changes" 区域填写：
   - 第一行：`Initial commit`
   - 第二行（可选）：`嘉豪量表初始版本`
4. 点击 "Commit changes"

### 方法B：使用 Git 命令行（适合熟悉 Git 的用户）

1. 在项目目录打开命令行
2. 运行以下命令：
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/jiahao-quiz.git
git push -u origin main
```

## 第四步：连接到 Vercel

1. 访问 https://vercel.com
2. 点击 "Sign Up" 或 "Log In"
3. 选择 "Continue with GitHub"（使用 GitHub 登录）
4. 授权 Vercel 访问你的 GitHub 账号

## 第五步：在 Vercel 上部署

1. 登录后，点击 "Add New..." → "Project"
2. 在 "Import Git Repository" 列表中找到 `jiahao-quiz` 仓库
3. 点击 "Import"
4. 配置项目：
   - Project Name: `jiahao-quiz`（可以修改）
   - Framework Preset: `Other`
   - Root Directory: `./`（保持默认）
   - Build Command: 留空
   - Output Directory: `public`
   - Install Command: `npm install`
5. 点击 "Deploy"
6. 等待部署完成（通常需要 1-2 分钟）

## 第六步：访问你的网站

部署完成后，你会看到一个类似这样的 URL：
```
https://jiahao-quiz-xxx.vercel.app
```

- 测试页面：`https://你的域名/`
- 后台管理：`https://你的域名/admin.html`

## 第七步：后续更新

当你修改代码后：

1. 将修改后的文件上传到 GitHub（方法同第三步）
2. Vercel 会自动检测到更新并重新部署
3. 或者手动在 Vercel 控制台点击 "Redeploy"

## 常见问题

### Q: 部署失败怎么办？
A: 检查 Vercel 的部署日志，通常在 "Deployments" 页面可以看到错误信息

### Q: 如何修改域名？
A: 
1. 在 Vercel 项目页面点击 "Settings"
2. 选择 "Domains"
3. 可以添加自定义域名

### Q: 数据会丢失吗？
A: Vercel 的免费版本是无状态的，每次重新部署可能会重置数据库。如果需要持久化存储，建议使用 Render 或 Railway。

### Q: 如何添加环境变量？
A:
1. 在 Vercel 项目页面点击 "Settings"
2. 选择 "Environment Variables"
3. 添加需要的环境变量

## 完成！

现在你的嘉豪量表已经部署到线上了，可以分享给朋友们测试了！🎉

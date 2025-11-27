<div align="center">
  <img alt="logo" width="120" height="120" src="./src/common/assets/images/layouts/logo.png">
  <h1>小犀牛自助洗车</h1>
</div>

## 项目介绍

Rhino Wash Car Vue 是一个基于 Vue3 技术栈开发的现代化洗车管理系统。该系统提供了完整的洗车业务流程管理功能，包括客户管理、订单处理、服务项目管理、员工管理等核心功能模块，旨在帮助洗车店提高运营效率和服务质量。

### 核心功能

- **客户管理**：客户信息录入、查询、编辑和删除
- **订单管理**：创建订单、查询订单历史、订单状态跟踪
- **服务项目管理**：添加、编辑和删除洗车服务项目及价格
- **员工管理**：员工信息管理、权限分配
- **数据统计**：销售数据、客流量等关键指标统计分析
- **系统管理**：用户权限管理、系统参数配置

## 安装环境

### 推荐环境

- **操作系统**：Windows 10/11、macOS、Linux
- **开发工具**：Visual Studio Code 或 AI IDE Cursor、Trae
- **Node.js**：20.19+ 或 22.12+
- **包管理器**：pnpm 10+

### VSCode 推荐插件

在项目根目录的 `.vscode/extensions.json` 文件中已配置了推荐的插件列表，包括：

- Volar - Vue3 支持插件
- TypeScript Vue Plugin (Volar)
- ESLint
- Prettier - 代码格式化
- UnoCSS
- SVG 相关插件

## 安装与运行

### 本地开发

```bash
# 克隆项目
git clone https://github.com/your-username/rhino-wash-car-vue.git

# 进入项目目录
cd rhino-wash-car-vue

# 安装依赖
pnpm i

# 启动开发服务器
pnpm dev
```

### 构建部署

```bash
# 开发环境构建
pnpm build:dev

# 测试环境构建
pnpm build:staging

# 生产环境构建
pnpm build

# 本地预览构建结果
pnpm preview
```

### 代码检查与测试

```bash
# 代码检查与格式化
pnpm lint

# 运行单元测试
pnpm test
```

## 技术栈

### 前端框架与库

- **Vue 3.5.22**：渐进式 JavaScript 框架
- **Vue Router 4.5.1**：Vue.js 官方路由管理器
- **Pinia 3.0.3**：Vue 的状态管理库
- **Element Plus 2.11.4**：基于 Vue 3 的组件库
- **Axios 1.12.2**：HTTP 请求客户端

### 构建工具

- **Vite 7.1.9**：下一代前端构建工具
- **TypeScript 5.9.3**：JavaScript 的超集
- **Sass 1.78.0**：CSS 预处理器
- **UnoCSS 66.5.3**：高性能原子 CSS 引擎

### 开发工具

- **ESLint 9.37.0**：代码质量检查工具
- **Vitest 3.2.4**：单元测试框架
- **Vue Test Utils 2.4.6**：Vue.js 官方测试工具

## 项目结构

```
src/
├── App.vue                 # 应用入口组件
├── main.ts                 # 应用入口文件
├── common/                 # 公共资源和工具
│   ├── apis/               # API 请求
│   ├── assets/             # 静态资源
│   ├── components/         # 公共组件
│   ├── composables/        # 组合式函数
│   ├── constants/          # 常量定义
│   └── utils/              # 工具函数
├── layouts/                # 布局组件
├── pages/                  # 页面组件
│   ├── dashboard/          # 仪表盘
│   ├── login/              # 登录页面
│   ├── error/              # 错误页面
│   └── ...                 # 其他页面
├── router/                 # 路由配置
├── pinia/                  # 状态管理
└── plugins/                # 插件配置
```

## 环境配置

项目支持多环境配置，相关环境文件位于项目根目录：

- `.env`：基础环境变量
- `.env.development`：开发环境变量
- `.env.staging`：测试环境变量
- `.env.production`：生产环境变量

## 提交规范

遵循以下提交信息规范：

- `feat`：新功能
- `fix`：修复 bug
- `perf`：性能优化
- `refactor`：代码重构
- `docs`：文档更新
- `types`：类型定义修改
- `test`：测试相关
- `ci`：持续集成相关
- `revert`：回滚更改
- `chore`：其他维护任务

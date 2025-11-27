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

# 开发指南

## 📋 目录

- [开发环境](#开发环境)
- [开发流程](#开发流程)
- [项目结构](#项目结构)
- [核心配置](#核心配置)
- [编码规范](#编码规范)

---

## 🛠️ 开发环境

### 环境要求

| 工具       | 版本要求   | 说明                       |
| ---------- | ---------- | -------------------------- |
| Node.js    | >= 18.0.0  | 推荐使用 LTS 版本          |
| pnpm       | >= 10.15.1 | 项目使用 pnpm 作为包管理器 |
| TypeScript | 5.9.3      | 静态类型检查               |
| Vue        | 3.5.22     | 前端框架                   |

### 安装 Node.js

前往 [Node.js 官网](https://nodejs.org/) 下载并安装 LTS 版本。

验证安装：

```bash
node -v
npm -v
```

### 安装 pnpm

```bash
npm install -g pnpm
```

验证安装：

```bash
pnpm -v
```

### 编辑器推荐

- **VS Code** (推荐)
  - 安装插件：Vue - Official (Volar)
  - 安装插件：ESLint
  - 安装插件：UnoCSS

### 技术栈

**核心框架**

- Vue 3.5.22 - 渐进式 JavaScript 框架
- Vite 7.1.9 - 下一代前端构建工具
- TypeScript 5.9.3 - 类型安全的 JavaScript

**状态管理与路由**

- Pinia 3.0.3 - Vue 官方状态管理库
- Vue Router 4.5.1 - Vue 官方路由管理器

**UI 组件库**

- Element Plus 2.11.4 - Vue 3 组件库
- UnoCSS 66.5.3 - 即时按需原子化 CSS 引擎
- Vxe Table 4.6.25 - 强大的表格组件

**工具库**

- Axios 1.12.2 - HTTP 客户端
- Day.js 1.11.18 - 日期处理库
- Lodash-es 4.17.21 - 实用工具库

---

## 🚀 开发流程

### 1. 克隆项目

```bash
git clone <repository-url>
cd rhino-wash-car-vue
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发服务器

```bash
pnpm dev
```

开发服务器会在 `http://localhost:3333` 启动，并自动打开浏览器。

### 4. 构建项目

**生产环境构建**

````bash
pnpm build

**预发布环境构建**
```bash
pnpm build:staging
````

### 5. 预览构建结果

```bash
pnpm preview
```

### 6. 代码检查与格式化

```bash
# 运行 ESLint 检查并自动修复
pnpm lint
```

### 7. 运行测试

```bash
# 运行单元测试
pnpm test
```

### 常用命令

| 命令                 | 说明             |
| -------------------- | ---------------- |
| `pnpm dev`           | 启动开发服务器   |
| `pnpm build`         | 生产环境构建     |
| `pnpm build:staging` | 预发布环境构建   |
| `pnpm preview`       | 预览构建结果     |
| `pnpm lint`          | 代码检查和格式化 |
| `pnpm test`          | 运行测试         |

---

## 📁 项目结构

```
rhino-wash-car-vue/
├── doc/                        # 项目文档目录
│   ├── api.md                 # API 接口文档
│   └── development.md         # 开发指南（本文档）
├── public/                     # 静态资源目录（不会被打包处理）
│   ├── app-loading.css        # 应用加载样式
│   └── detect-ie.js           # IE 浏览器检测
├── src/                        # 源代码目录
│   ├── App.vue                # 根组件
│   ├── main.ts                # 应用入口文件
│   ├── common/                # 通用资源目录（别名：@@）
│   │   ├── apis/              # API 接口定义
│   │   │   ├── tables/        # 表格相关接口
│   │   │   └── users/         # 用户相关接口
│   │   ├── assets/            # 静态资源
│   │   │   ├── icons/         # SVG 图标
│   │   │   ├── images/        # 图片资源
│   │   │   └── styles/        # 全局样式
│   │   ├── components/        # 通用组件
│   │   │   ├── Notify/        # 通知组件
│   │   │   ├── Screenfull/    # 全屏组件
│   │   │   ├── SearchMenu/    # 搜索菜单
│   │   │   └── ThemeSwitch/   # 主题切换
│   │   ├── composables/       # 组合式函数（Hooks）
│   │   │   ├── useDevice.ts           # 设备检测
│   │   │   ├── useFetchSelect.ts      # 下拉框数据获取
│   │   │   ├── useFullscreenLoading.ts # 全屏加载
│   │   │   ├── usePagination.ts       # 分页
│   │   │   ├── useTheme.ts            # 主题管理
│   │   │   ├── useWatermark.ts        # 水印
│   │   │   └── ...
│   │   ├── constants/         # 常量定义
│   │   │   ├── app-key.ts     # 应用密钥
│   │   │   └── cache-key.ts   # 缓存键名
│   │   └── utils/             # 工具函数
│   │       ├── css.ts         # CSS 相关工具
│   │       ├── datetime.ts    # 日期时间工具
│   │       ├── permission.ts  # 权限工具
│   │       ├── validate.ts    # 验证工具
│   │       └── cache/         # 缓存工具
│   ├── http/                  # HTTP 请求配置
│   │   └── axios.ts           # Axios 实例配置
│   ├── layouts/               # 布局组件
│   │   ├── index.vue          # 布局入口
│   │   ├── config.ts          # 布局配置
│   │   ├── components/        # 布局子组件
│   │   │   ├── AppMain/       # 主内容区域
│   │   │   ├── Breadcrumb/    # 面包屑导航
│   │   │   ├── Footer/        # 页脚
│   │   │   ├── Hamburger/     # 菜单折叠按钮
│   │   │   ├── Logo/          # Logo 组件
│   │   │   ├── NavigationBar/ # 导航栏
│   │   │   ├── RightPanel/    # 右侧面板
│   │   │   ├── Settings/      # 设置面板
│   │   │   ├── Sidebar/       # 侧边栏菜单
│   │   │   └── TagsView/      # 标签页视图
│   │   ├── composables/       # 布局相关组合式函数
│   │   │   └── useResize.ts   # 响应式布局
│   │   └── modes/             # 布局模式
│   │       ├── LeftMode.vue   # 左侧菜单模式
│   │       ├── LeftTopMode.vue # 左侧顶部菜单模式
│   │       └── TopMode.vue    # 顶部菜单模式
│   ├── pages/                 # 页面组件
│   │   ├── dashboard/         # 仪表盘页面
│   │   ├── demo/              # 示例页面
│   │   │   ├── composable-demo/    # 组合式函数示例
│   │   │   ├── element-plus/       # Element Plus 示例
│   │   │   ├── level2/             # 多级路由示例
│   │   │   ├── permission/         # 权限示例
│   │   │   ├── unocss/             # UnoCSS 示例
│   │   │   └── vxe-table/          # Vxe Table 示例
│   │   ├── error/             # 错误页面
│   │   │   ├── 403.vue        # 无权限页面
│   │   │   └── 404.vue        # 页面不存在
│   │   ├── login/             # 登录页面
│   │   └── redirect/          # 重定向页面
│   ├── pinia/                 # Pinia 状态管理
│   │   ├── index.ts           # Pinia 实例
│   │   └── stores/            # 状态模块
│   │       ├── app.ts         # 应用全局状态
│   │       ├── permission.ts  # 权限状态
│   │       ├── settings.ts    # 设置状态
│   │       ├── tags-view.ts   # 标签页状态
│   │       └── user.ts        # 用户状态
│   ├── plugins/               # Vue 插件
│   │   ├── index.ts           # 插件入口
│   │   ├── element-plus-icons.ts  # Element Plus 图标
│   │   ├── permission-directive.ts # 权限指令
│   │   ├── svg-icon.ts        # SVG 图标组件
│   │   └── vxe-table.ts       # Vxe Table 配置
│   └── router/                # 路由配置
│       ├── index.ts           # 路由实例
│       ├── config.ts          # 路由配置
│       ├── guard.ts           # 路由守卫
│       ├── helper.ts          # 路由辅助函数
│       └── whitelist.ts       # 路由白名单
├── tests/                     # 测试文件
│   ├── demo.test.ts           # 示例测试
│   ├── components/            # 组件测试
│   └── utils/                 # 工具函数测试
├── types/                     # TypeScript 类型定义
│   ├── api.d.ts               # API 类型定义
│   ├── directives.d.ts        # 指令类型定义
│   ├── env.d.ts               # 环境变量类型定义
│   ├── vue-router.d.ts        # 路由类型扩展
│   └── auto/                  # 自动生成的类型文件
│       ├── auto-imports.d.ts  # 自动导入类型
│       ├── components.d.ts    # 组件类型
│       └── svg-component*.d.ts # SVG 组件类型
├── .gitignore                 # Git 忽略配置
├── eslint.config.js           # ESLint 配置
├── index.html                 # HTML 入口
├── package.json               # 项目依赖配置
├── pnpm-lock.yaml             # pnpm 锁文件
├── README.md                  # 项目说明
├── tsconfig.json              # TypeScript 配置
├── uno.config.ts              # UnoCSS 配置
└── vite.config.ts             # Vite 配置
```

### 核心目录说明

#### `/src/common` 目录（别名 `@@`）

存放项目中可复用的通用资源，包括：

- **apis**: API 接口定义和类型
- **assets**: 静态资源（图标、图片、样式）
- **components**: 通用业务组件
- **composables**: 可复用的组合式函数
- **constants**: 全局常量
- **utils**: 工具函数库

#### `/src/pages` 目录

存放所有页面级组件，按功能模块划分：

- 每个页面可以包含自己的子组件、API、样式等
- 页面组件通过路由懒加载，提升首屏加载速度

#### `/src/layouts` 目录

布局系统，支持多种布局模式：

- **LeftMode**: 左侧菜单布局
- **LeftTopMode**: 左侧+顶部混合布局
- **TopMode**: 顶部菜单布局

#### `/src/pinia/stores` 目录

全局状态管理，包含：

- **app**: 应用配置、设备信息、侧边栏状态
- **user**: 用户信息、登录状态、token
- **permission**: 路由权限、动态路由
- **settings**: 系统设置、主题配置
- **tags-view**: 标签页导航

---

## ⚙️ 核心配置

### 路径别名

项目配置了两个路径别名，可以在代码中直接使用：

| 别名 | 实际路径      | 使用场景       |
| ---- | ------------- | -------------- |
| `@`  | `src/`        | 项目源码根目录 |
| `@@` | `src/common/` | 通用资源目录   |

**使用示例**

```typescript
// 导入 API
import { getUserList } from "@@/apis/users"

// 导入组件
import { Notify } from "@@/components/Notify"

// 导入工具函数
import { formatDate } from "@@/utils/datetime"

// 导入页面组件
import DashboardView from "@/pages/dashboard/index.vue"

// 导入状态管理
import { useUserStore } from "@/pinia/stores/user"
```

### 环境变量

项目支持多环境配置，在项目根目录创建对应的环境文件：

- `.env` - 所有环境通用配置
- `.env.development` - 开发环境配置
- `.env.staging` - 预发布环境配置
- `.env.production` - 生产环境配置

**环境变量示例**

```bash
# 应用标题
VITE_APP_TITLE = 'Rhino Wash Car'

# 公共基础路径
VITE_PUBLIC_PATH = '/'

# API 基础地址
VITE_BASE_API = '/rhino-wash-api'
```

**使用环境变量**

```typescript
// 在代码中访问环境变量
const baseApi = import.meta.env.VITE_BASE_API
const appTitle = import.meta.env.VITE_APP_TITLE
```

### 代理配置

开发环境的 API 代理配置在 `vite.config.ts` 中：

```typescript
server: {
  proxy: {
    '/rhino-wash-api': {
      target: 'https://vavlepage.com',
      changeOrigin: true,
      rewrite: (path) => path
    }
  }
}
```

### 自动导入

项目配置了 API 和组件的自动导入，无需手动 import：

**自动导入 API**

- Vue 3 API：`ref`, `reactive`, `computed`, `watch` 等
- Vue Router API：`useRouter`, `useRoute` 等
- Pinia API：`defineStore`, `storeToRefs` 等

**自动导入组件**

- Element Plus 组件按需自动导入
- 全局通用组件自动注册

### SVG 图标

SVG 图标存放在 `src/common/assets/icons/` 目录：

- 普通图标会自动提取颜色
- `preserve-color/` 目录下的图标保留原始颜色

**使用 SVG 图标**

```vue
<template>
  <svg-icon name="dashboard" />
</template>
```

---

## 📝 编码规范

### 命名规范

**文件命名**

- 组件文件：`PascalCase.vue`（如：`UserProfile.vue`）
- 工具函数：`kebab-case.ts`（如：`format-date.ts`）
- 组合式函数：`useCamelCase.ts`（如：`useUserInfo.ts`）

**变量命名**

- 组件名称：`PascalCase`
- 变量/函数：`camelCase`
- 常量：`UPPER_SNAKE_CASE`
- 私有属性：`_privateProperty`

### 组件规范

**组件定义**

```vue
<script setup lang="ts">
import type { FormInstance } from "element-plus"
// 1. 导入依赖
import { computed, ref } from "vue"

// 2. 类型定义
interface Props {
  title?: string
}

interface FormData {
  username: string
  password: string
}

// 3. Props 和 Emits
const props = withDefaults(defineProps<Props>(), {
  title: "默认标题"
})

const emit = defineEmits<{
  submit: [data: FormData]
}>()

// 4. 响应式数据
const formRef = ref<FormInstance>()
const formData = reactive<FormData>({
  username: "",
  password: ""
})

// 5. 计算属性
const isValid = computed(() => {
  return formData.username && formData.password
})

// 6. 方法
function handleSubmit() {
  emit("submit", formData)
}

// 7. 生命周期钩子
onMounted(() => {
  console.log("Component mounted")
})
</script>

<template>
  <div class="component-name">
    <!-- 模板内容 -->
  </div>
</template>

<style scoped lang="scss">
.component-name {
  // 样式
}
</style>
```

### 路由规范

**添加新路由**

1. 在 `src/router/index.ts` 的 `constantRoutes` 或 `dynamicRoutes` 中添加路由配置
2. 路由必须设置唯一的 `name` 属性
3. 使用路由懒加载

```typescript
{
  path: '/user',
  component: Layouts,
  redirect: '/user/profile',
  name: 'User',
  meta: {
    title: '用户管理',
    svgIcon: 'user',
    roles: ['admin'] // 权限控制
  },
  children: [
    {
      path: 'profile',
      component: () => import('@/pages/user/profile/index.vue'),
      name: 'UserProfile',
      meta: {
        title: '用户资料',
        keepAlive: true // 页面缓存
      }
    }
  ]
}
```

### API 请求规范

**API 文件组织**

在 `src/common/apis/` 目录下按模块组织：

```
apis/
├── users/
│   ├── index.ts    # API 请求函数
│   └── type.ts     # 类型定义
└── products/
    ├── index.ts
    └── type.ts
```

**API 定义示例**

```typescript
import type { GetUserListParams, User } from "./type"
// type.ts
// index.ts
import { request } from "@/http/axios"

export interface User {
  id: number
  username: string
  email: string
}

export interface GetUserListParams {
  page: number
  pageSize: number
}

/** 获取用户列表 */
export function getUserList(params: GetUserListParams) {
  return request<User[]>({
    url: "/users",
    method: "get",
    params
  })
}

/** 获取用户详情 */
export function getUserById(id: number) {
  return request<User>({
    url: `/users/${id}`,
    method: "get"
  })
}
```

### 状态管理规范

**创建 Store**

```typescript
import type { User } from "@@/apis/users/type"
// src/pinia/stores/user.ts
import { defineStore } from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore("user", () => {
  // 状态
  const userInfo = ref<User | null>(null)
  const token = ref<string>("")

  // Getters
  const isLogin = computed(() => !!token.value)

  // Actions
  const setToken = (newToken: string) => {
    token.value = newToken
  }

  const setUserInfo = (info: User) => {
    userInfo.value = info
  }

  const logout = () => {
    token.value = ""
    userInfo.value = null
  }

  return {
    userInfo,
    token,
    isLogin,
    setToken,
    setUserInfo,
    logout
  }
}, {
  persist: true // 持久化
})
```

### 样式规范

**使用 SCSS**

```scss
// 嵌套规则
.user-card {
  padding: 20px;
  background: #fff;

  &__header {
    font-size: 18px;
    font-weight: bold;
  }

  &__content {
    margin-top: 10px;
  }

  &:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
}

```

**使用 UnoCSS**

```vue
<template>
  <div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
    <span class="text-lg font-bold text-gray-800">Title</span>
    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Button
    </button>
  </div>
</template>
```

### TypeScript 规范

- 尽可能定义明确的类型，避免使用 `any`
- 使用 `interface` 定义对象类型
- 使用 `type` 定义联合类型或复杂类型
- API 响应数据必须定义类型

### Git 提交规范

使用语义化提交信息：

```bash
# 功能开发
git commit -m "feat: 添加用户管理模块"

# 问题修复
git commit -m "fix: 修复登录失败的问题"

# 文档更新
git commit -m "docs: 更新开发指南"

# 样式调整
git commit -m "style: 调整按钮样式"

# 代码重构
git commit -m "refactor: 重构用户列表组件"

# 性能优化
git commit -m "perf: 优化表格渲染性能"

# 测试相关
git commit -m "test: 添加用户模块单元测试"
```

---

## 📚 更多文档

- [API 接口文档](./api.md)
- [Vue 3 官方文档](https://cn.vuejs.org/)
- [Vite 官方文档](https://cn.vite.dev/)
- [Element Plus 官方文档](https://element-plus.org/)
- [UnoCSS 官方文档](https://unocss.dev/)
- [Pinia 官方文档](https://pinia.vuejs.org/zh/)

---

## ❓ 常见问题

### 启动项目时端口被占用

修改 `vite.config.ts` 中的端口配置：

```typescript
server: {
  port: 3333, // 修改为其他端口
}
```

### 自动导入的 API 报类型错误

重启 TypeScript 服务或重新运行项目，自动生成的类型文件会更新。

### SVG 图标不显示

1. 确认图标文件放在 `src/common/assets/icons/` 目录下
2. 确认图标文件名与使用的 name 属性一致
3. 重启开发服务器

### 接口请求跨域问题

检查 `vite.config.ts` 中的代理配置是否正确，确保 `changeOrigin: true`。

---

**Happy Coding! 🎉**

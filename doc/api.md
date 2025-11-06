# API 接口文档

## 接口名：/rhino-wash-api/captchaImage

### 请求方式： GET

### 功能说明： 获取验证码图片

### 请求参数：

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
| id          | number | 是   | 唯一标识符 | 1001                   |
| name        | string | 是   | 名称       | "洗车服务"             |
| type        | string | 是   | 类型       | "basic"                |
| price       | number | 是   | 价格       | 99.99                  |
| description | string | 否   | 描述信息   | "专业洗车服务"         |
| status      | string | 是   | 状态       | "active"               |
| created_at  | string | 是   | 创建时间   | "2023-12-01T10:00:00Z" |
| updated_at  | string | 是   | 更新时间   | "2023-12-01T10:00:00Z" |

### 响应参数：
| 字段名 | 类型   | 说明       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
| img    | string | 验证码图片 | "/9j/4AAQSkZJRgABAQEASABIAAD..." |
| uuid   | string | 唯一标识符 | "123e4567-e89b-12d3-a            |

### 响应示例
{
  "code": 200,
  "msg": "success",
  "data": {
    "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    "expire_at": "2023-12-01T11:10:00Z"
  }
}


## 接口名：/rhino-wash-api/getRouters

### 请求方式： GET

### 功能说明： 获取路由

### 请求参数：


### 响应参数：

| 字段名 | 类型   | 说明       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
| img    | string | 验证码图片 | "/9j/4AAQSkZJRgABAQEASABIAAD..." |
| uuid   | string | 唯一标识符 | "123e4567-e89b-12d3-a            |

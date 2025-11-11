# 小犀牛自助洗车API 接口文档

## 1. 引言

-   **文档版本**: v1.0
-   **基础 URL**: `https://vavlepage.com/rhino-wash-api`
-   **认证方式**: Bearer Token (JWT)

## 2. 获取验证码
 - **接口名**：`/captchaImage`
 - **请求方式**： GET
 - **接口描述**： 获取验证码图片
 - **请求参数**：无


#### 2.1 响应参数：
| 字段名 | 类型   | 说明       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
| img    | string | 验证码图片 | "/9j/4AAQSkZJRgABAQEASABIAAD..." |
|captchaEnabled| boolean| 验证码启用 |true |
| uuid   | string | 唯一标识符 | "123e4567-e89b-12d3-a            |



## 3. 系统用户登录
-  **接口名**:`/login`
-  **请求方式**: POST
-  **Content-Type**: application/json
-  **接口描述**: 用户通过账号+密码登录，获取访问Token

#### 3.1 请求参数 (Body)
| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
| username    | string | 是   | 用户名     |  "admin"             |
| password    | string | 是   | 密码       | "admin"              |
| code        | string | 是   | 验证码     | "123"                |
| uuid        | string | 是   | 唯一标识   | "b1a53c1"            |


#### 3.2 响应参数：

| 字段名 | 类型   | 说明       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 验证码图片 | "操作成功" |
| code   | string | 唯一标识符 | 200                              |
| token  | string | 唯一标识符 | eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOi  |


## 4. 获取菜单路由
- **接口名**：`/getRouters`
- **请求方式**： GET
- **接口描述**： 获取后台左侧菜单数据
- **请求参数**：无

#### 4.1请求头 
| 参数名 | 类型   | 是否必填       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
| Authorization     | string | 是 | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...	 |


#### 4.2响应参数：

| 字段名 | 类型   | 说明       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 验证码图片 | "操作成功"                        |
| code   | string | 状态码     | 200                              |
| data   | json   | 菜单数据       | [{"name": "System"}]         |
| name   | string    | 路由名称       |System             |
| path   | string    | URL 路径       |/system             |
| hidden   | boolean    | 是否隐藏菜单       |false             |
| redirect   | string   | 路由重定向       |noRedirect             |
| component   | string  | 视图组件       |Layout             |
| alwaysShow   | boolean| 是否总是显示根菜单       |true   |
| meta   | Object| 元信息       |Object             |
| meta.title   | string| 菜单标题       |系统管理             |
| meta.icon   | string| 菜单图标       |system             |
| meta.noCache   | boolean| 是否缓存页面       |false   |
| meta.link   | string| 外部链接       |null|
| children   | Array| 子菜单列表       |Array|
| children.name   | string| 子路由的唯一名称       |User|
| children.path   | string| 子路由的路径       |User|
| children.hidden   | boolean| 是否在父菜单的下拉列表中隐藏此子菜单       |false|
| children.component   | string| 子路由对应的页面组件路径       |system/role/index|
| children.meta   | Object| 子菜单的元信息      |Object|
| children.meta.title   | string| 子菜单的显示标题      |角色管理|
| children.meta.icon   | string|子菜单的图标       |peoples             |
| children.meta.noCache   | boolean| 是否缓存页面       |false   |
| children.meta.link   | string| 外部链接       |null|



## 5. 获取用户信息
- **接口名**：`/getInfo`
- **请求方式**： GET
- **接口描述**： 获取用户信息
- **请求参数**：无
#### 5.1请求头 
| 参数名 | 类型   | 是否必填       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
| Authorization     | string | 是 | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...	 |

#### 5.2 响应参数：

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 验证码图片 | "操作成功"                        |
| code   | string | 状态码     | 200                              |
| sysMerchants   | JSON | 商家对象     | {}                     |
| sysMerchants.id   | int | 商家id     | 1                     |
| sysMerchants.merchantName   | String | 商家名称     | 小犀牛    |
| sysMerchants.description   | String | 商家描述     | 打造自助洗车 |
| sysMerchants.province   | String | 商家所属省份     | 江苏 |
| sysMerchants.city   | String | 商家所属市     | 苏州 |
| sysMerchants.district   | String | 商家所区     | 吴中区 |
| sysMerchants.address   | String | 商家详细地址     |郭新东路108号 |
| sysMerchants.bankName   | String | 商家银行     |中国银行 |
| sysMerchants.bankNum   | String | 商家银行账号     |3202626512510236257 |
| sysMerchants.totalRevenue   | decimal| 商家总收益     |100|
| sysMerchants.withdraw_money   | decimal| 商家可提现     |100|
| sysMerchants.servicePhone   | String | 商家客电话     |15998998000|
| sysMerchants.createTime   | date| 创建时间     |2024-06-29T16:11:14.000+08:00|
| sysMerchants.delFlag   | int| 删除标志：1正常0删除     |1|
| sysMerchants.state   | int| 状态：1正常运营0停运     |1|
|permissions   | array |用户权限     |*:*:*|
|roles   | array |用户角色     |admin|
|isDefaultModifyPwd   | boolean|检查初始密码是否提醒修改|false|
|isPasswordExpired   | boolean|检查密码是否过期     |false|
|user| JSON  |用户对象     |{}|
|user.createBy| String |创建者     |admin|
|user.createTime| date|创建时间     |2025-11-06 21:25:57|
|user.updateBy| String |修改者     |admin|
|user.updateTime| date|修改时间     |2025-11-06 21:25:57|
|user.remark| String |备注     |备注信息|
|user.userId| int |用户id     |1|
|user.deptId| int |部门id     |101|
|user.merchantId| int |商家id     |1|
|user.userName| String |用户名     |admin|
|user.nickName| String |昵称     |小犀牛|
|user.email| String |邮箱     |ry@163.com|
|user.phonenumber| String |手机号码     |15000000000|
|user.sex| String|性别     |（0男 1女 2未知|
|user.avatar| String|头像地址     |null|
|user.password| String|密码     |null|
|user.status| String|账号状态     |账号状态（1正常 0停用）|
|user.delFlag| String|删除标志     |账号状态（1正常 0停用）|
|user.loginIp| String|最后登录IP     |127.0.0.1|
|user.loginDate| String|最后登录时间    |2025-11-08T13:10:46.000+08:00|
|dept| JSON|部门对象    |{}|
|dept.createBy| String|创建者    |admin|
|dept.createTime| date|创建时间    |2025-11-06 21:25:57|
|dept.updateBy| String|修改者   |admin|
|dept.updateTime| date|修改时间   |2025-11-06 21:25:57|
|dept.remark| String|备注   |null|
|dept.deptId| int |部门id   |1|
|dept.parentId| int |部门父级id   |1|
|dept.ancestors| String|祖级列表   |1|
|dept.deptName| String|部门名称   |深圳总公司|
|dept.orderNum| int |显示顺序   |1|
|dept.leader| String|负责人   |admin|
|dept.phone| String|联系电话   |1800000000|
|dept.email| String|邮箱   |123@qq.com|
|dept.status| int |部门状态（1正常 0停用）|1|
|dept.delFlag| int |删除标志（1代表存在 0代表删除）|1|
|dept.parentName| String|父级名称|1|
|dept.children| array|子级数据| [] |
|roles| json|角色对象| {} |
|roles.createBy| String|创建者| admin |
|roles.createTime| date|创建时间| 2025-11-06 21:25:57|
|roles.updateBy| String|修改者|admin |
|roles.updateTime| date|修改时间| 2025-11-06 21:25:57|
|roles.remark| String|备注|null |
|roles.roleId| int |角色id|1|
|roles.roleName| String|角色名称|超级管理员|
|roles.roleKey| String|角色权限字符串|admin|
|roles.roleSort| String|显示顺序|1|
|roles.dataScope| String|数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限|1|
|roles.menuCheckStrictly| int|菜单树选择项是否关联显示|false|
|roles.deptCheckStrictly| int|部门树选择项是否关联显示|false|
|roles.status| int |角色状态（1正常 0停用）|1|
|roles.delFlag| int |删除标志（1代表存在 0代表删除）|1|
|roles.flag| int |角色状态（1正常 0停用）|1|
|roleIds| String |多个角色id|null|
|postIds| String |多个岗位id|null|
|roleId| int |岗位id|null|
|admin| boolean|是否管理员|true|

## 6. 获取用户列表
- **接口名**：`/system/user/list`
- **请求方式**： GET
- **接口描述**： 获取用户列表
- **请求参数**：
#### 6.1 Query Params 参数
| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
| pageNum    | string | 是   | 页码     |  "1"             |
| pageSize    | string | 是   | 每页记录数       | "10"              |
| userName    | string | 可选  | 用户名     | "admin"                |
| phonenumber  | string | 可选  | 唯一标识   | "16798990909"            |
| deptId        | string | 可选   | 唯一标识   | "1"            |
| createTime   | string | 可选   | 创建时间范围   | "2020-01-01"            |

#### 6.2 Headers 参数 
| 参数名 | 类型   | 是否必填       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
| Authorization  | string | 是 | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...	 |

#### 6.3 响应参数：
| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 响应值 | "操作成功"                        |
| code   | string | 状态码     | 200                              |
| total   | int | 总数据     | 10                     |
| rows   | array| 列表行数     | [{}]                     |
| rows.createBy| String | 创建者     | 小犀牛    |
| rows.createTime| date| 创建时间    |2025-11-06 21:25:57|
| rowsremark| String |备注   |null|
| rows.userId| int| 用户id     | 1    |
| rows.deptId| int| 部门id     | 1    |
| rows.merchantId| int| 商家     | 1    |
| rows.userName| String | 用户名称     | 小犀牛    |
| rows.nickNamey| String | 昵称     | 小犀牛    |
| rows.email| String | 邮箱     | ry@163.com    |
| rows.phonenumber| String | 手机     |16889009098    |
| rows.sex|  String|性别     |（0男 1女 2未知|
| rows.avatar| String|头像地址     |""|
| rows.status| String|账号状态     |账号状态（1正常 0停用）|
| rows.delFlag| String|删除标志     |账号状态（1正常 0停用）|
| rows.loginIp| String|最后登录IP     |127.0.0.1|
| rows.loginDate| String|最后登录时间    |2025-11-08T13:10:46.000+08:00|
| rows.dept|  JSON |部门数据     |{}|
| rows.dept.deptId|  int|部门id     |1|
| rows.dept.deptName|  int|部门名称     |"深圳科技"|
| rows.dept.leader|  int|部门领导     |"admin"|
| rows.dept.children|  array|子部门     |[]|
| rows.merchant| JSON |商家数据     |{}|
| rows.merchant.id| int|商家id     |1|
| rows.merchant.merchantName| String|商家名称     |"小犀牛"|
| rows.roles|array|角色数组     |[]|
| rows.admin|bollean|是否是管理员     |true|



## 接口通用状态码说明
| 状态码 | 说明    |
| ------ | ------ |
| 200    | 请求成功 |
|401     |未授权（Token 无效或缺失）|
| 500    | 系统错误 |
















# 小犀牛自助洗车API 接口文档

**文档版本**: v1.0

**基础 URL**: `https://vavlepage.com/rhino-wash-api`

**认证方式**: Bearer Token (JWT)

**统一Headers认证参数**

| 参数名 | 类型   | 是否必填       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
| Authorization     | string | 是 | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...|

**接口返回统一状态码说明**

| 状态码 | 说明    |
| ------ | ------ |
| 200    | 请求成功 |
|401     |未授权（Token 无效或缺失）|
| 500    | 系统错误 |


# 验证码接口

## 获取验证码

**接口名**：`/captchaImage`

**请求方式**： GET

**接口描述**：

**请求参数**:

**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
| img    | string | 验证码图片 | "/9j/4AAQSkZJRgABAQEASABIAAD..." |
|captchaEnabled| boolean| 验证码启用 |true |
| uuid   | string | 唯一标识符 | "123e4567-e89b-12d3-a            |


# 登录接口

## 系统用户登录

**接口名**:`/login`

**请求方式**: POST

**请求数据类型**:`body application/json`

**接口描述**: 用户通过账号+密码登录，获取访问Token

**请求参数**:

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
| username    | string | 是   | 用户名     |  "admin"             |
| password    | string | 是   | 密码       | "admin"              |
| code        | string | 是   | 验证码     | "123"                |
| uuid        | string | 是   | 唯一标识   | "b1a53c1"            |

**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 验证码图片 | "操作成功" |
| code   | string | 唯一标识符 | 200                              |
| token  | string | 唯一标识符 | eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOi  |

# 菜单路由接口

## 获取菜单路由列表

**接口名**：`/getRouters`

**请求方式**： GET

**请求数据类型**:`body application/json`

**接口描述**： 获取后台左侧菜单数据

**请求参数**:

**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                           |
| ------ | ------ | ---------- | -------------------------------- |
|msg    | string | 验证码图片 | "操作成功"                        |
|code   | string | 状态码     | 200                              |
|data   | json   | 菜单数据       | {}         |
|&emsp;&emsp;name   | string    | 路由名称       |System             |
|&emsp;&emsp;path   | string    | URL 路径       |/system             |
|&emsp;&emsp;hidden   | boolean    | 是否隐藏菜单       |false             |
|&emsp;&emsp;redirect   | string   | 路由重定向       |noRedirect             |
|&emsp;&emsp;component   | string  | 视图组件       |Layout             |
|&emsp;&emsp;alwaysShow   | boolean| 是否总是显示根菜单       |true   |
|meta   | Object| 元信息       |Object             |
|&emsp;&emsp;title   | string| 菜单标题       |系统管理             |
|&emsp;&emsp;icon   | string| 菜单图标       |system             |
|&emsp;&emsp;noCache   | boolean| 是否缓存页面       |false   |
|&emsp;&emsp;link   | string| 外部链接       |null|
|children   | Array| 子菜单列表       |Array|
|&emsp;&emsp;name   | string| 子路由的唯一名称       |User|
|&emsp;&emsp;path   | string| 子路由的路径       |User|
|&emsp;&emsp;hidden   | boolean| 是否在父菜单的下拉列表中隐藏此子菜单       |false|
|&emsp;&emsp;component   | string| 子路由对应的页面组件路径       |system/role/index|
|&emsp;&emsp;meta   | Object| 子菜单的元信息      |Object|
|&emsp;&emsp;meta.title   | string| 子菜单的显示标题      |角色管理|
|&emsp;&emsp;meta.icon   | string|子菜单的图标       |peoples             |
|&emsp;&emsp;meta.noCache   | boolean| 是否缓存页面       |false   |
|&emsp;&emsp;meta.link   | string| 外部链接       |null|


# 用户接口

## 获取用户信息

**接口名**：`/getInfo`

**请求方式**： GET

**接口描述**： 获取用户信息

**请求参数**

**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
|msg    | string | 验证码图片 | "操作成功"                        |
|code   | string | 状态码     | 200                              |
|sysMerchants   | JSON | 商家对象     | {}                     |
|&emsp;&emsp;id   | int | 商家id     | 1                     |
|&emsp;&emsp;merchantName   | String | 商家名称     | 小犀牛    |
|&emsp;&emsp;description   | String | 商家描述     | 打造自助洗车 |
|&emsp;&emsp;province   | String | 商家所属省份     | 江苏 |
|&emsp;&emsp;city   | String | 商家所属市     | 苏州 |
|&emsp;&emsp;district   | String | 商家所区     | 吴中区 |
|&emsp;&emsp;address   | String | 商家详细地址     |郭新东路108号 |
|&emsp;&emsp;bankName   | String | 商家银行     |中国银行 |
|&emsp;&emsp;bankNum   | String | 商家银行账号     |3202626512510236257 |
|&emsp;&emsp;totalRevenue   | decimal| 商家总收益     |100|
|&emsp;&emsp;withdraw_money   | decimal| 商家可提现     |100|
|&emsp;&emsp;servicePhone   | String | 商家客电话     |15998998000|
|&emsp;&emsp;createTime   | date| 创建时间     |2024-06-29|
|&emsp;&emsp;delFlag   | int| 删除标志：1正常0删除     |1|
|&emsp;&emsp;state   | int| 状态：1正常运营0停运     |1|
|permissions   | array |用户权限     |*:*:*|
|roles   | array |用户角色     |admin|
|isDefaultModifyPwd   | boolean|检查初始密码是否提醒修改|false|
|isPasswordExpired   | boolean|检查密码是否过期     |false|
|user| JSON  |用户对象     |{}|
|&emsp;&emsp;createBy| String |创建者     |admin|
|&emsp;&emsp;createTime| date|创建时间     |2025-11-06 21:25:57|
|&emsp;&emsp;updateBy| String |修改者     |admin|
|&emsp;&emsp;updateTime| date|修改时间     |2025-11-06 21:25:57|
|&emsp;&emsp;remark| String |备注     |备注信息|
|&emsp;&emsp;userId| int |用户id     |1|
|&emsp;&emsp;.deptId| int |部门id     |101|
|&emsp;&emsp;merchantId| int |商家id     |1|
|&emsp;&emsp;userName| String |用户名     |admin|
|&emsp;&emsp;nickName| String |昵称     |小犀牛|
|&emsp;&emsp;email| String |邮箱     |ry@163.com|
|&emsp;&emsp;phonenumber| String |手机号码     |15000000000|
|&emsp;&emsp;sex| String|性别     |（0男 1女 2未知|
|&emsp;&emsp;avatar| String|头像地址     |null|
|&emsp;&emsp;password| String|密码     |null|
|&emsp;&emsp;status| String|账号状态     |账号状态（1正常 0停用）|
|&emsp;&emsp;delFlag| String|删除标志     |账号状态（1正常 0停用）|
|&emsp;&emsp;loginIp| String|最后登录IP     |127.0.0.1|
|&emsp;&emsp;loginDate| String|最后登录时间    |2025-11-08|
|dept| JSON|部门对象    |{}|
|&emsp;&emsp;createBy| String|创建者    |admin|
|&emsp;&emsp;createTime| date|创建时间    |2025-11-06 21:25:57|
|&emsp;&emsp;updateBy| String|修改者   |admin|
|&emsp;&emsp;updateTime| date|修改时间   |2025-11-06 21:25:57|
|&emsp;&emsp;remark| String|备注   |null|
|&emsp;&emsp;deptId| int |部门id   |1|
|&emsp;&emsp;parentId| int |部门父级id   |1|
|&emsp;&emsp;ancestors| String|祖级列表   |1|
|&emsp;&emsp;deptName| String|部门名称   |深圳总公司|
|&emsp;&emsp;orderNum| int |显示顺序   |1|
|&emsp;&emsp;leader| String|负责人   |admin|
|&emsp;&emsp;phone| String|联系电话   |1800000000|
|&emsp;&emsp;email| String|邮箱   |123@qq.com|
|&emsp;&emsp;status| int |部门状态（1正常 0停用）|1|
|&emsp;&emsp;delFlag| int |删除标志（1代表存在 0代表删除）|1|
|&emsp;&emsp;parentName| String|父级名称|1|
|&emsp;&emsp;children| array|子级数据| [] |
|roles| json|角色对象| {} |
|&emsp;&emsp;createBy| String|创建者| admin |
|&emsp;&emsp;createTime| date|创建时间| 2025-11-06 21:25:57|
|&emsp;&emsp;updateBy| String|修改者|admin |
|&emsp;&emsp;updateTime| date|修改时间| 2025-11-06 21:25:57|
|&emsp;&emsp;remark| String|备注|null |
|&emsp;&emsp;roleId| int |角色id|1|
|&emsp;&emsp;roleName| String|角色名称|超级管理员|
|&emsp;&emsp;roleKey| String|角色权限字符串|admin|
|&emsp;&emsp;roleSort| String|显示顺序|1|
|&emsp;&emsp;dataScope| String|数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限|1|
|&emsp;&emsp;menuCheckStrictly| int|菜单树选择项是否关联显示|false|
|&emsp;&emsp;deptCheckStrictly| int|部门树选择项是否关联显示|false|
|&emsp;&emsp;status| int |角色状态（1正常 0停用）|1|
|&emsp;&emsp;delFlag| int |删除标志（1代表存在 0代表删除）|1|
|&emsp;&emsp;flag| int |角色状态（1正常 0停用）|1|
|roleIds| String |多个角色id|null|
|postIds| String |多个岗位id|null|
|roleId| int |岗位id|null|
|admin| boolean|是否管理员|true|

## 获取用户列表

**接口名**：`/system/user/list`

**请求方式**： GET

**接口描述**： 获取用户列表

**请求参数**： Query Params

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
| merchantId    | int| 是   | 商家id       | 1，0是管理员 |
| pageNum    | int | 是   | 页码     |  "1"             |
| pageSize    | int | 是   | 每页记录数       | "10"              |
| userName    | string | 否  | 用户名     | "admin"                |
| phonenumber  | string | 否  | 手机号码   | "16798990909"            |
| status  | int | 可选  | 用户状态  | 账号状态（1正常 0停用）     |
| deptId        | string | 否   | 部门Id |
| beginTime   | string | 否   | 创建时间范围   | "2020-01-01" |
| endTime   | string | 否   | 创建时间范围   | "2020-01-01" |

**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
|msg    | string | 响应值 | "操作成功"                        |
|code   | string | 状态码     | 200                              |
|total   | int | 总数据     | 10                     |
|rows   | array| 列表行数     | [{}]                     |
|&emsp;&emsp;createBy| String | 创建者     | 小犀牛    |
|&emsp;&emsp;createTime| date| 创建时间    |2025-11-06 21:25:57|
|&emsp;&emsp;remark| String |备注   |null|
|&emsp;&emsp;userId| int| 用户id     | 1    |
|&emsp;&emsp;deptId| int| 部门id     | 1    |
|&emsp;&emsp;merchantId| int| 商家     | 1    |
|&emsp;&emsp;userName| String | 用户名称     | 小犀牛    |
|&emsp;&emsp;nickNamey| String | 昵称     | 小犀牛    |
|&emsp;&emsp;email| String | 邮箱     | ry@163.com    |
|&emsp;&emsp;phonenumber| String | 手机     |16889009098    |
|&emsp;&emsp;sex|  String|性别     |（0男 1女 2未知|
|&emsp;&emsp;avatar| String|头像地址     |""|
|&emsp;&emsp;status| String|账号状态     |账号状态（1正常 0停用）|
|&emsp;&emsp;delFlag| String|删除标志     |（1正常 2删除）|
|&emsp;&emsp;loginIp| String|最后登录IP     |127.0.0.1|
|&emsp;&emsp;loginDate| String|最后登录时间    |2025-11-08|
|&emsp;&emsp;dept|  JSON |部门数据     |{}|
|&emsp;&emsp;dept.deptId|  int|部门id     |1|
|&emsp;&emsp;dept.deptName|  int|部门名称     |"深圳科技"|
|&emsp;&emsp;dept.leader|  int|部门领导     |"admin"|
|&emsp;&emsp;dept.children|  array|子部门     |[]|
|&emsp;&emsp;merchant| JSON |商家数据     |{}|
|&emsp;&emsp;merchant.id| int|商家id     |1|
|&emsp;&emsp;merchant.merchantName| String|商家名称     |"小犀牛"|
|&emsp;&emsp;roles|array|角色数组     |[]|
|&emsp;&emsp;admin|bollean|是否是管理员     |true|

## 获取部门树列表

**接口名**：`/system/user/deptTree`

**请求方式**： GET

**接口描述**： 获取部门树列表

**请求参数**：

**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
|msg    | string | 响应值 | "操作成功"                        |
|code   | string | 状态码     | 200                              |
|data   | array | 部门数据     | []                     |
|&emsp;&emsp;id   | int| 部门id     | 1                    |
|&emsp;&emsp;label| String | 部门名称     | 苏州公司    |
|&emsp;&emsp;disabled| boolean| 是否有效    |true|
|&emsp;&emsp;children| array|子部门  |[]|
|&emsp;&emsp;children.id| int|子部门id  |1|
|&emsp;&emsp;children.label| String|子部门名称  |市场部|
|&emsp;&emsp;children.disabled| boolean| 是否有效    |true|


## 新增系统用户

**接口名**：`/system/user`

**请求方式**： POST

**请求数据类型**:`body application/json`

**接口描述**： 新增系统用户

**请求参数**

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
| merchantId    | int| 是   | 商家id       |1， 0是管理员 |
| deptId    | int| 是   | 部门Id     |  1    |
| nickName    | string | 是   |昵称      | "admin"              |
| phonenumber | string | 是  | 手机号码     | "15998009809"                |
| email  | string | 可选  | 邮箱   | "16798990909"            |
| userName  | int | 是  | 用户名称  | "admin"）     |
| password        | string | 是   | 用户密码   | "123456" |
| sex   | string | 是   | 性别  |（0男 1女 2未知） |
| status   | int| 是   | 用户状态  | 账号状态（1正常 0停用） |
| postIds   | array| 是   | 岗位  | [1] |
| roleIds   | array | 是   | 角色   | [2] |
| remark   | string | 可选   | 备注   | "" |

## 修改系统用户

**接口名**：`/system/user`

**请求方式**： PUT

**请求数据类型**:`body application/json`

**接口描述**：修改系统用户

**请求参数**

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
|userId    | int| 是   | 系统用户Id     |  2    |
|merchantId    | int| 是   | 商家id       |1， 0是管理员|
|deptId    | int| 是   | 部门Id     |  1    |
|nickName    | string | 是   |昵称   | "admin"              |
|phonenumber | string | 是  | 手机号码     | "15998009809"                |
|email  | string | 可选  | 邮箱   | "16798990909"            |
|sex   | string | 是   | 性别  |（0男 1女 2未知） |
|status   | int| 是   | 用户状态  | 账号状态（1正常 0停用） |
|postIds   | array| 是   | 岗位  | [1] |
|roleIds   | array | 是   | 角色   | [2] |
|remark   | string | 可选   | 备注   | "" |

**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 响应值 | "操作成功"                        |
| code   | string | 状态码     | 200                              |


## 删除系统用户

**接口名**：`/system/user/{userIds}`

**请求方式**： DELETE

**请求数据类型**:

**接口描述**：删除系统用户

**请求参数**

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
| userIds    | Long| 必填  | 系统用户id       |1，2，3 可单独或者批量删除 |

**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 响应值 | "操作成功"                        |
| code   | string | 状态码     | 200                              |


## 修改用户状态

**接口名**：`/system/user/changeStatus`

**请求方式**： PUT

**请求数据类型**:`body application/json`

**接口描述**：用户状态修改

**请求参数**

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
|userId    | int| 是   | 系统用户Id     |  2    |
|status    | int| 是   | 系统用户状态       |1是正常 0 是停用|

**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 响应值 | "操作成功"                        |
| code   | string | 状态码     | 200                              |



## 用户密码重置

**接口名**：`/system/user/resetPwd`

**请求方式**： PUT

**请求数据类型**:`body application/json`

**接口描述**：用户密码重置

**请求参数**

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
|userId    | int| 是   | 系统用户Id     |  2    |
|password    | String| 是   | 新密码       |123456|


**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 响应值 | "操作成功"                        |
| code   | string | 状态码     | 200                              |


## 查询用户详细

**接口名**：`/system/user/{userId}`

**请求方式**： GET

**接口描述**： 根据用户编号获取详细信息

**请求参数**:  Query Params

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
| userId    | int| 否   | 系统用户id       |1              |


**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 响应值 | "操作成功"                        |
| code   | string | 状态码     | 200                              |
| roleIds   | array |角色数组     | [1]                     |
| data   | json|个人信息数据     | {}                    |
| data.createBy| String | 创建者     | 小犀牛    |
| data.createTime| date| 创建时间    |2025-11-06 21:25:57|
| data.remark| String |备注   |null|
| data.userId| int| 用户id     | 1    |
| data.deptId| int| 部门id     | 1    |
| data.merchantId| int| 商家     | 1    |
| data.userName| String | 用户名称     | 小犀牛    |
| data.nickNamey| String | 昵称     | 小犀牛    |
| data.email| String | 邮箱     | ry@163.com    |
| data.phonenumber| String | 手机     |16889009098    |
| data.sex|  String|性别     |（0男 1女 2未知|
| data.avatar| String|头像地址     |""|
| data.status| String|账号状态     |账号状态（1正常 0停用）|
| data.delFlag| String|删除标志     |账号状态（1正常 0停用）|
| data.loginIp| String|最后登录IP     |127.0.0.1|
| data.loginDate| String|最后登录时间    |2025-11-08T13:10:46.000+08:00|
| data.pwdUpdateDate| String|最后密码修改时间    |2025-11-08|
| data.dept.deptId| int |部门id   |1|
| data.dept.parentId| int |部门父级id   |1|
| data.dept.ancestors| String|祖级列表   |1|
| data.dept.deptName| String|部门名称   |深圳总公司|
| data.dept.orderNum| int |显示顺序   |1|
| data.dept.leader| String|负责人   |admin|
| data.dept.status| int |部门状态（1正常 0停用）|1|
| data.dept.children| array|子级数据| [] |
| data.roles.roles| array|角色数据| [] |
| data.roles.roleId| int |角色id|1|
| data.roles.roleName| String|角色名称|超级管理员|
| data.roles.roleKey| String|角色权限字符串|admin|
| data.roles.roleSort| String|显示顺序|1|
| data.roles.dataScope| String|数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限|1|
| data.roles.menuCheckStrictly| int|菜单树选择项是否关联显示|false|
| data.roles.deptCheckStrictly| int|部门树选择项是否关联显示|false|
| data.roles.status| int |角色状态（1正常 0停用）|1|
| data.roles.flag| int |角色状态（1正常 0停用）|1|
| data.roles.admin| boolean |是否为管理员（true是 flase否）|true|
| data.admin| boolean |是否为管理员（true是 flase否）|true|
| postIds| array|岗位数据| [1] |
| roles| array|角色数据| [] |
| rows.createTime| date| 创建时间    |2025-11-06 21:25:57|
| roles.remark| String|备注|null |
| roles.roleId| int |角色id|1|
| roles.roleName| String|角色名称|超级管理员|
| roles.roleKey| String|角色权限字符串|admin|
| oles.roleSort| String|显示顺序|1|
| roles.dataScope| String|数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限|1|
| roles.menuCheckStrictly| int|菜单树选择项是否关联显示|false|
| roles.deptCheckStrictly| int|部门树选择项是否关联显示|false|
| roles.status| int |角色状态（1正常 0停用）|1|
| roles.admin| boolean |是否为管理员（true是 flase否）|true|
| merchants| array|商家数据| [] |
| merchants.id| int |商家id|1|
| merchants.merchantName| String|商家名称|犀牛商家|
| posts| array|岗位数据| [] |
| posts.createBy| String|创建人| admin |
| posts.createTime| date| 创建时间    |2025-11-06 21:25:57|
| posts.postId| int|岗位id|1|
| posts.postCode| String|岗位编号|001|
| posts.postName| String|岗位名称|技术开发|
| posts.postSort| int|显示顺序|1|


## 查询角色授权

**接口名**：`/system/user/authRole/{userId}`

**请求方式**： GET

**接口描述**： 根据用户编号获取授权角色

**请求参数**:  Query Params

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
| userId    | int| 是   | 系统用户id       |1              |


**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 响应值 | "操作成功"                        |
| code   | string | 状态码     | 200                              |
| roles   | array |角色数组     | []                     |
|&emsp;&emsp;roleId| int |角色id|1|
|&emsp;&emsp;roleName| String|角色名称|超级管理员|
|&emsp;&emsp;roleKey| String|角色权限字符串|admin|
|&emsp;&emsp;roleSort| String|显示顺序|1|
|&emsp;&emsp;dataScope| String|数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限|1|
|&emsp;&emsp;menuCheckStrictly| int|菜单树选择项是否关联显示|false|
|&emsp;&emsp;deptCheckStrictly| int|部门树选择项是否关联显示|false|
|&emsp;&emsp;status| int |角色状态（1正常 0停用）|1|
|&emsp;&emsp;flag| int |角色状态（1正常 0停用）|1|
|&emsp;&emsp;admin| boolean |是否为管理员（true是 flase否）|true|
| user   | array |用户数组     | []                     |
| &emsp;&emsp;createBy| String | 创建者     | 小犀牛    |
| &emsp;&emsp;createTime| date| 创建时间    |2025-11-06 21:25:57|
| &emsp;&emsp;remark| String |备注   |null|
| &emsp;&emsp;userId| int| 用户id     | 1    |
| &emsp;&emsp;deptId| int| 部门id     | 1    |
| &emsp;&emsp;merchantId| int| 商家     | 1    |
| &emsp;&emsp;userName| String | 用户名称     | 小犀牛    |
| &emsp;&emsp;nickNamey| String | 昵称     | 小犀牛    |
| &emsp;&emsp;email| String | 邮箱     | ry@163.com    |
| &emsp;&emsp;phonenumber| String | 手机     |16889009098    |
| &emsp;&emsp;sex|  String|性别     |（0男 1女 2未知|
| &emsp;&emsp;avatar| String|头像地址     |""|
| &emsp;&emsp;status| String|账号状态     |账号状态（1正常 0停用）|
| &emsp;&emsp;delFlag| String|删除标志     |账号状态（1正常 0停用）|
| &emsp;&emsp;loginIp| String|最后登录IP     |127.0.0.1|
| &emsp;&emsp;loginDate| String|最后登录时间    |2025-11-08T13:10:46.000+08:00|
| &emsp;&emsp;pwdUpdateDate| String|最后密码修改时间    |2025-11-08|
| &emsp;&emsp;dept| json|部门数据对象   |{}|
| &emsp;&emsp;&emsp;&emsp;deptId| int |部门id   |1|
| &emsp;&emsp;&emsp;&emsp;parentId| int |部门父级id   |1|
| &emsp;&emsp;&emsp;&emsp;ancestors| String|祖级列表   |1|
| &emsp;&emsp;&emsp;&emsp;deptName| String|部门名称   |深圳总公司|
| &emsp;&emsp;&emsp;&emsp;orderNum| int |显示顺序   |1|
| &emsp;&emsp;&emsp;&emsp;leader| String|负责人   |admin|
| &emsp;&emsp;&emsp;&emsp;status| int |部门状态（1正常 0停用）|1|
| &emsp;&emsp;&emsp;&emsp;children| array|子级数据| [] |
| &emsp;&emsp;roles| array|角色数据| [] |
| &emsp;&emsp;&emsp;&emsp;roleId| int |角色id|1|
| &emsp;&emsp;&emsp;&emsp;roleName| String|角色名称|超级管理员|
| &emsp;&emsp;&emsp;&emsp;roleKey| String|角色权限字符串|admin|
| &emsp;&emsp;&emsp;&emsp;roleSort| String|显示顺序|1|
| &emsp;&emsp;&emsp;&emsp;dataScope| String|数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限|1|
| &emsp;&emsp;&emsp;&emsp;menuCheckStrictly| int|菜单树选择项是否关联显示|false|
| &emsp;&emsp;&emsp;&emsp;deptCheckStrictly| int|部门树选择项是否关联显示|false|
| &emsp;&emsp;&emsp;&emsp;status| int |角色状态（1正常 0停用）|1|
| &emsp;&emsp;&emsp;&emsp;flag| int |角色状态（1正常 0停用）|1|
| &emsp;&emsp;&emsp;&emsp;admin| boolean |是否为管理员（true是 flase否）|true|
| &emsp;&emsp;admin| boolean |是否为管理员（true是 flase否）|true|


## 保存授权角色

**接口名**：`/system/user/authRole`

**请求方式**： PUT

**请求数据类型**:`body application/json`

**接口描述**：用户授权角色

**请求参数**

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
|userId    | int| 是   | 系统用户Id     |  2    |
|roleIds    | String| 是   | 角色id       |"1,2,3" |


**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
| msg    | string | 响应值 | "操作成功"                        |
| code   | string | 状态码     | 200                              |



## 用户信息导出

**接口名**：`/system/user/export`

**请求方式**： POST

**请求数据类型**:`body application/json`

**接口描述**：用户信息导出

**请求参数**

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
|deptId    | int| 是   | 部门id     |  2    |
|merchantId    |int| 是   | 商家id      |1|
|userName    |String| 否   | 用户名      |admin|
|phonenumber    |String| 否   | 手机号  |15789009098|
|status    |int| 否   | 状态      |1|
|beginTime    |datetime| 否   | 创建时间      |2025-11-01|
|endTime    |datetime| 否   | 创建时间      |2025-11-01|

# 角色接口

## 获取角色列表

**接口名**：`/system/role/list`

**请求方式**： GET

**接口描述**： 获取用户列表

**请求参数**： Query Params

| 字段名      | 类型   | 必填 | 说明       | 示例值                 |
| ----------- | ------ | ---- | ---------- | ---------------------- |
| pageNum    | int| 是   | 页码     |  "1"             |
| pageSize    | int | 是   | 每页记录数       | "10"              |
| roleName    | string | 否  | 角色名     | "admin"                |
| roleKey  | string | 否 | 角色权限字符串   | "common"            |
| status  | int | 否  | 角色状态  | 状态（1正常 0停用）     |
| beginTime   | string | 否   | 创建时间范围   | "2020-01-01" |
| endTime   | string | 否   | 创建时间范围   | "2020-01-01" |

**响应参数**:

| 字段名 | 类型   | 说明       | 示例值                            |
| ------ | ------ | ---------- | -------------------------------- |
|msg    | string | 响应值 | "操作成功"                        |
|code   | string | 状态码     | 200                              |
|total   | int | 总数据     | 10                     |
|rows   | array| 列表行数     | [{}]                     |
|&emsp;&emsp;createTime| date| 创建时间    |2025-11-06 21:25:57|
|&emsp;&emsp;remark| String |备注   |超级管理员|
|&emsp;&emsp;roleId| int| 角色id     | 1    |
|&emsp;&emsp;roleName| String | 角色名称     | 小犀牛    |
|&emsp;&emsp;roleKey| String | 角色权限字符串     |common    |
|&emsp;&emsp;roleSort| int |显示顺序     | 1    |
|&emsp;&emsp;dataScope| int | 1     |数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限   |
|&emsp;&emsp;menuCheckStrictly|  int|1     |（菜单树选择项是否关联显示|
|&emsp;&emsp;deptCheckStrictly| int|1     |部门树选择项是否关联显示|
|&emsp;&emsp;status| String|角色状态     |角色状态（1正常 0停用）|
|&emsp;&emsp;delFlag| String|删除标志     |（1正常 2删除）|
























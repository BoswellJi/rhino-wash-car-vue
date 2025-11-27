<script lang="ts" setup>
import type { FormRules } from "element-plus"

import type { LoginRequestData } from "./apis/index"
import ThemeSwitch from "@@/components/ThemeSwitch/index.vue"
import { Key, Loading, Lock, Picture, User } from "@element-plus/icons-vue"
import { setPassword, setUsername } from "@/common/utils/cache/cookies"
import { useSettingsStore } from "@/pinia/stores/settings"
import { useUserStore } from "@/pinia/stores/user"
import { getCaptchaApi, loginApi } from "./apis"
import Owl from "./components/Owl.vue"

import { useFocus } from "./composables/useFocus"

const route = useRoute()

const router = useRouter()

const userStore = useUserStore()

const settingsStore = useSettingsStore()

const { isFocus, handleBlur, handleFocus } = useFocus()

/** 登录表单元素的引用 */
const loginFormRef = useTemplateRef("loginFormRef")

/** 登录按钮 Loading */
const loading = ref(false)

/** 验证码图片 URL */
const codeUrl = ref("")

/** 获取uuid */
const getuuid = ref("")

/** 登录表单数据 */
const loginFormData: LoginRequestData = reactive({
  username: "",
  password: "",
  code: "",
  uuid: "",
  rememberMe: false
})

/** 登录表单校验规则 */
const loginFormRules: FormRules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" }
  ],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
}

/** 登录 */
function handleLogin() {
  loginFormRef.value?.validate((valid: boolean) => {
    if (!valid) {
      // ElMessage.error("表单校验不通过")
      return
    }
    loading.value = true
    if (loginFormData.rememberMe) {
      setUsername(loginFormData.username)
      setPassword(loginFormData.password)
      // Cookies.set("password", encrypt(loginForm.value.password), { expires: 30 })
      // Cookies.set("rememberMe", loginForm.value.rememberMe, { expires: 30 })
    } else {
      // 否则移除
      // Cookies.remove("username")
      // Cookies.remove("password")
      // Cookies.remove("rememberMe")
    }

    loginApi(loginFormData).then((res) => {
      if (res.code === 500) {
        ElMessage.error(res.msg)
        createCode()
        return
      }

      userStore.setToken(res.token)
      router.push(route.query.redirect ? decodeURIComponent(route.query.redirect as string) : "/")
    }).catch((error) => {
      console.log("2")
      console.log(error)

      const errorMsg = error.response?.msg || error.message || "登录失败，请重试"
      ElMessage.error(errorMsg)

      createCode()
      loginFormData.password = ""
    }).finally(() => {
      loading.value = false
    })
  })
}

// 关键：监听 getuuid 变化，自动同步到 loginFormData.uuid
watch(() => getuuid.value, // 监听 getuuid 的值变化
  (newUuid) => {
    loginFormData.uuid = newUuid // 实时同步到表单
  }, { immediate: true } // 初始值也同步
)

/** 创建验证码 */
function createCode() {
  // 清空已输入的验证码
  loginFormData.code = ""
  // 清空验证图片
  codeUrl.value = ""
  getuuid.value = ""
  // 获取验证码图片
  getCaptchaApi().then((res) => {
    if (res.code !== 200) {
      ElMessage.error("获取验证码失败")
    } else {
      codeUrl.value = `data:image/jpg;base64,${res.img}`
      getuuid.value = res.uuid
    }
  })
}

// 初始化验证码
createCode()
</script>

<template>
  <div class="login-container">
    <ThemeSwitch v-if="settingsStore.showThemeSwitch" class="theme-switch" />
    <Owl :close-eyes="isFocus" />
    <div class="login-card">
      <div class="title">
        <img src="@@/assets/images/layouts/logo-text-2.png">
      </div>
      <div class="content">
        <el-form ref="loginFormRef" :model="loginFormData" :rules="loginFormRules" @keyup.enter="handleLogin">
          <el-form-item prop="username">
            <el-input
              v-model.trim="loginFormData.username"
              placeholder="用户名"
              type="text"
              tabindex="1"
              :prefix-icon="User"
              size="large"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model.trim="loginFormData.password"
              placeholder="密码"
              type="password"
              tabindex="2"
              :prefix-icon="Lock"
              size="large"
              show-password
              @blur="handleBlur"
              @focus="handleFocus"
            />
          </el-form-item>
          <el-form-item prop="code">
            <el-input
              v-model.trim="loginFormData.code"
              placeholder="验证码"
              type="text"
              tabindex="3"
              :prefix-icon="Key"
              maxlength="7"
              size="large"
              @blur="handleBlur"
              @focus="handleFocus"
            >
              <template #append>
                <el-image :src="codeUrl" draggable="false" @click="createCode">
                  <template #placeholder>
                    <el-icon>
                      <Picture />
                    </el-icon>
                  </template>
                  <template #error>
                    <el-icon>
                      <Loading />
                    </el-icon>
                  </template>
                </el-image>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="uuid">
            <el-input
              v-model.trim="loginFormData.uuid"
              placeholder="uuid"
              type="hidden"
              tabindex="2"
            />
          </el-form-item>
          <el-button :loading="loading" type="primary" size="large" @click.prevent="handleLogin">
            登 录
          </el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  .theme-switch {
    position: fixed;
    top: 5%;
    right: 5%;
    cursor: pointer;
  }
  .login-card {
    width: 480px;
    max-width: 90%;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: var(--el-bg-color);
    overflow: hidden;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      img {
        height: 100%;
      }
    }
    .content {
      padding: 20px 50px 50px 50px;
      :deep(.el-input-group__append) {
        padding: 0;
        overflow: hidden;
        .el-image {
          width: 100px;
          height: 40px;
          border-left: 0px;
          user-select: none;
          cursor: pointer;
          text-align: center;
        }
      }
      .el-button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}
</style>

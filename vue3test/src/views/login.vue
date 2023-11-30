<template>
  <div class="login">
    <div class="login-right">
      <h1>{{userStore.text}}</h1>
      <h1>{{user.name}}</h1>
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <!-- <el-form-item label="Approved by">
          <el-input v-model="form.text" placeholder="Approved by" clearable />
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts">

import { reactive } from 'vue'
import { useUser } from '@/store/index'
import { userInject } from '@/store/user'

const userStore = useUser();
const { user,login } = userInject();

const form = reactive({
  text: userStore.text,
  region: '',
  date: '',
})

const onSubmit = () => {
  login('789');
  console.log(form)
}
</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    position: fixed;
    top: 15px;
    left: 15px;
  }

  .login-row {
    width: 1300px;
    display: flex;
    align-items: center;
  }
}

.login-left-hello {
  color: #fff;

  h1 {
    font-size: 3em;
    width: 900px;
  }
}

.login-right {
  width: 400px;
  background: #fff;
  box-shadow: 0 4px 10px #3856ae;
  min-height: 450px;
  border-radius: 3px;
  padding: 45px;
  box-sizing: border-box;
  overflow: visible;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  color: #1677ff;
  text-align: center;

  h1 {
    margin-bottom: 40px;
  }

  .ant-form-item {
    margin-bottom: 30px;
  }

  .ant-input {
    line-height: 30px;
  }

  .ant-form-item-explain-error {
    text-align: left;
  }

  .login-right-remember {
    text-align: left;
  }

  .login-right-login {
    display: block;
    width: 100%;
    height: 45px;
  }
}

.new_login {
  width: 500px;

  p {
    width: 100%;
    font-size: 20px;
  }
}
</style>
  
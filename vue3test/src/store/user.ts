import { reactive, provide, readonly, inject } from 'vue'

// 用户全局变量命名
const UserSymbol = 'USER'
// 用户全局变量（建立为响应式变量）
const user = reactive({ name: '333', authKeys: [] })
// 用户变量修改方法
const login = (loginInfo:any) => { user.name = loginInfo }

// 用户全局数据提供方法
const userProvide = () => {
    // 提供一个只读的变量和修改方法
    provide(UserSymbol, { user: readonly(user), login })
}

// 用户全局数据注入方法
export const userInject = ():any => {
    return inject(UserSymbol)
}

export const contextProvider = () => {
    userProvide()
}
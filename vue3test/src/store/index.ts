import { defineStore } from "pinia";

export const useUser = defineStore("userData",{
    state: () => {
        return ({
            text:'user-store-data'
        })
    }
})
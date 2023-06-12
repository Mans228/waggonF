// store/user.js
import { defineStore } from 'pinia';
import {ref} from "vue";

export const useUserStore = defineStore('user', {
    state: () => ({
        email: "",
    }),
    actions: {
        setEmail(email) {
            this.email = email;
        },
    },
    getters: {
        getEmail() {
            return this.email;
        },
    },
});

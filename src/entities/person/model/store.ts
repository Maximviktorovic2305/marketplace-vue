import avatarIMG from '@/assets/avatar.png'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { type Person } from './types'

export const usePersonStore = defineStore('person', () => {
  const isAuth = ref<boolean>(true)
  const person = reactive<Person>({
    name: 'Vincent Vega',
    avatar: avatarIMG
  })

  const setIsAuth = (value: boolean) => (isAuth.value = value)

  return { isAuth, person, setIsAuth }
})

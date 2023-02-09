import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'

export default defineStore(
  'setting',
  () => {
    const socksPort = ref(1086)

    const restoreSetting = () => {
      socksPort.value = 1086
    }
    return { socksPort, restoreSetting }
  },
  { persist: true }
)

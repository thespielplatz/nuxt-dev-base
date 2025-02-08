import { defineNuxtPlugin } from '#imports'

const exists = (key: string): boolean => {
  return localStorage.getItem(key) != null
}
const getItem = (key: string): string | null => {
  return localStorage.getItem(key)
}
const setItem = (key: string, value: string): void => {
  localStorage.setItem(key, value)
}
const removeItem = (key: string): void => {
  localStorage.removeItem(key)
}

const create = (prefix?: string) => {
  const usedPrefix = prefix ? `${prefix}-` : ''
  return {
    exists(key: string): boolean {
      return exists(`${usedPrefix}${key}`)
    },
    getItem(key: string): string | null {
      return getItem(`${usedPrefix}${key}`)
    },
    setItem(key: string, value: string): void {
      setItem(`${usedPrefix}${key}`, value)
    },
    removeItem(key: string): void {
      removeItem(`${usedPrefix}${key}`)
    },
  }
}

const localStoragePlugin = {
  ...create(),
  create,
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      localStorage: localStoragePlugin,
    },
  }
})

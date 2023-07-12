import { writable } from 'svelte/store'

export const tasks = writable(new Map())
export const completed = writable(new Set())
export const show = writable('all')

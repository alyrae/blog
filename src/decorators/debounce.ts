import {createDecorator} from 'vue-class-component'

export default function Debounce(time: number = 0) {
  return createDecorator((options, key) => {
    let timer: number | null = null
    const origin = options.methods[key]
    options.methods[key] = function wrapper(...args) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      timer = setTimeout(() => {
        origin.call(this, ...args)
      }, time)
    }
  })
}

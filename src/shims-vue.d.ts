// import xxx from 'xx.vue' 为了支持vue 相关文件的
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

<script setup>
import useStreamline from './composables/useStreamline.js'
import { onMounted, ref, toRefs } from 'vue'

const {loading, service:paybillService, getActionUrl,props,confirmAction} = useStreamline('mpesa/paybill',true)


const foundPaybill = ref(null)

onMounted(()=>{
  // paybillService.getPaybill(32).then(res=>{
  //   foundPaybill.value = res
  // })
})
const findPaybill = async ()=>{
  // const res = confirmAction('Are you sure?')
  // res.getPaybill(32).then(res=>{
  //   foundPaybill.value = res
  // })
  foundPaybill.value =  await  paybillService.confirm().getPaybill(32)
      .catch(err=>{
    console.log(err)
  })
}
const refresh = ()=>{
  paybillService.refresh()
}
</script>

<template>
  <div>
    <hr/>
    <h3>Destructed: {{ testKey }}</h3>
    <h3>Original: {{ props.testKey }}</h3>
    <h3>Original: {{ props.testKey }}</h3>
    <h3>Original: {{ props.testKey }}</h3>
    <h3>Original: {{ props.testKey }}</h3>
    <h3 class="text-success" >Loading : {{ loading }}</h3>
    <h1 @click="findPaybill">Get Paybill</h1>
    <h1 @click="refresh">Refresh</h1>
    {{ foundPaybill }}
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

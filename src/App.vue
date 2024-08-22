<script setup>
import useStreamline from './composables/useStreamline.js'

const {loading, service:paybillService} = useStreamline('mpesa/paybill',28)


const tryDelete = (id)=>{
  paybillService.deletePaybill(id).then(res=>{
    reload.value++
    shRepo.showToast('Paybill deleted')
  }).catch(err=>{
    console.log(err)
  })

}
</script>

<template>
  <div>
    {{ paybillService.paybill }}
    <h1 @click="tryDelete(1)">Streamline Framework</h1>
    {{ paybillService.getActionUrl('addPaybill') }}
<h3 class="text-success" v-if="loading">Loading...</h3>
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

<script>
import { store } from '../assets/data/store'
export default {
    name:'FilterComponent',
    data() {
        return {
            store
        }
    },
}
</script>


<template>
      <select class="form-select" v-model="store.archetype">
            <option value="">Seleziona Filter</option>
            <option v-for="item in store.type" :value="item">{{ item }}</option>
        </select>
</template>


<style>

</style>
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
      <select @change="$emit('modifyArchetype')" class="form-select" v-model="store.archetype">
            <option value="">Seleziona Filter</option>
            <option v-for="item in store.archetypes" :value="item.archetype_name">{{item.archetype_name}}</option>
        </select>
</template>


<style>

</style>
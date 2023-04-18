<script>
import ItemCard from './ItemCard.vue'
import { store } from '../assets/data/store'
import axios from 'axios'
export default {
    name: 'CardsList',
    components: {
        ItemCard
    },
    data() {
        return {
            store
        }
    },

}


</script>


<template>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5">
        <ItemCard :card="card" v-for="card in store.cards" v-if="!store.loading"></ItemCard>
        <div class="loaded" v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>



<style></style>
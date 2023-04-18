<script>
import { store } from '../assets/data/store'
import axios from 'axios'
import CardsNumber from '../components/CardsNumber.vue'
import CardsList from './CardsList.vue';
import FilterComponent from "./FilterComponent.vue"
export default {
    name: "AppMain",
    data() {
        return {
            store
        };
    },
    components: {
        CardsList,
        CardsNumber,
        FilterComponent

    },
    methods: {
     calApi() {
        if(store.archetype == "") {
            store.loading = true;
        axios
        .get(`${store.API_URL}?num=50&offset=0`)
        .then(response => {
          console.log(response.data.data);
          store.cards= response.data.data;
          store.loading = false
        })
        .catch(err => {
          console.error(err.message)
        })
        } else {
        axios
        .get(`${store.API_URL}?archetype=${store.archetype}`)
        .then(response => {
            store.loading = true;
          console.log(response.data.data);
          store.cards= response.data.data;
          store.loading = false
        })
        .catch(err => {
          console.error(err.message)
        })
        }
    },
    calArchetypesApi() {
        axios
        .get(store.archetypesUrl)
        .then(response => {
          console.log(response.data);
          store.archetypes= response.data;
          store.loading = false
        })
        .catch(err => {
          console.error(err.message)
        })
    }
    },
    mounted() {
        this.calApi()
        this.calArchetypesApi()
    }
}
</script>

<template>
    <main>
        <FilterComponent @modifyArchetype="calApi()" v-if="store.cards != []" :cards="store.cards"></FilterComponent>
        <div class="container">
            <CardsNumber></CardsNumber>
            <CardsList></CardsList>

        </div>
    </main>
</template>

<style></style>
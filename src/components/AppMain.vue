<script>
import { store } from '../assets/data/store'
import CardsNumber from '../components/CardsNumber.vue'
import CardsList from './CardsList.vue';
import FilterComponent from "../components/FilterComponet.vue"
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

    }
}
</script>

<template>
    <main>
        <FilterComponent v-if="store.cards != []" :cards="store.cards"></FilterComponent>
        <div class="container">
            <CardsNumber></CardsNumber>
            <CardsList></CardsList>

        </div>
    </main>
</template>

<style></style>
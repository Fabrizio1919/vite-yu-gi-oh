<script>
import { store } from '../assets/data/store'
import CardsNumber from '../components/CardsNumber.vue'
import CardsList from './CardsList.vue';
export default {
    name: "AppMain",
    data() {
        return {
            store
        };
    },
    components: {
        CardsList,
        CardsNumber
    }
}
</script>

<template>
    <main>
        <select class="form-select" aria-label="Default select example">
            <option selected>Alien</option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
        </select>
        <div class="container">
            <CardsNumber></CardsNumber>
            <CardsList></CardsList>

        </div>
    </main>
</template>

<style></style>
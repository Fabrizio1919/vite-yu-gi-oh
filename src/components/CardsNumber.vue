<script>
import {store} from '../assets/data/store'
export default {
    name:'CardsNumber',
    data() {
        return {
            store
        }
    },
}

</script>


<template>
    <div class="found">
        <h5 v-if="store.cards"> Found {{ store.cards.length }} cards</h5>
    </div>
</template>


<style></style>
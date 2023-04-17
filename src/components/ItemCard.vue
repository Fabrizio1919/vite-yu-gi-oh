<script>
export default {
    name:'ItemCard',
    props: {
        card: Object,
    },
}


</script>

<template>
    <div class="col colTotal">
            <div class="itemcard">
                <img class="imgCards" :src="card.card_images[0].image_url">
                <div class="textCard">
                    <h6>{{ card.name }}</h6>
                    <p>{{ card.archetype }}</p>
                </div>
            </div>
        </div>
</template>


<style>

</style>
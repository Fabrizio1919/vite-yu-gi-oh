import { reactive } from 'vue'

export const store = reactive({
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cards: null,
    loading: true ,
    archetypes:null,
    archetype:'',
    archetypesUrl:'https://db.ygoprodeck.com/api/v7/archetypes.php'
})
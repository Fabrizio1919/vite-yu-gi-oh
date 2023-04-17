import { reactive } from 'vue'

export const store = reactive({
    API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    cards: null,
    loading: true 
})
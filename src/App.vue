<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"
import axios from 'axios'
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      API_URL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=15',
      cards: [],

    }
  },
  methods: {
    calApi(url) {
      axios
        .get(url)
        .then(response => {

          this.saluto = "Ciao";

          console.log(response.data.data);
          this.cards = response.data.data;
        })
        .catch(err => {
          console.error(err.message)
        })
    }
  },
  mounted() {
    this.calApi(this.API_URL)
  }

}

</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <select class="form-select" aria-label="Default select example">
      <option selected>Alien</option>
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
    </select>
    <div class="container">
      <div class="found">
        <h5>Found card</h5>
      </div>
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5">
        <div class="col colTotal" v-for="card in cards">
          <div class="cards">
            <img class="imgCards" :src="card.card_images[0].image_url">
            <div class="textCard">
              <h6>{{ card.name }}</h6>
            </div>
          </div>
        </div>

      </div>
    </div>

  </main>

  <footer>

  </footer>
</template>

<style></style>

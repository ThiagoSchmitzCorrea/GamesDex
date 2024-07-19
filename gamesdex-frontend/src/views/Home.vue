<template>
  <div>
    <Header />
    <div>
      <h1>Jogos</h1>
      <div v-for="game in games" :key="game.id" id="jogos">
        <h2>{{ game.name }}</h2>
        <p>{{ game.description }}</p>
        <p>Desenvolvedor: {{ game.developer }}</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      games: []
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/v1/games')
      .then(response => {
        this.games = response.data;
      })
      .catch(error => {
        console.error("There was an error fetching the games:", error);
      });
  }
};
</script>

<style>
  #jogos {
    border: 1px solid black;
    min-height: 75px;
  }

  h1 {
    min-height: 100px;
  }
</style>

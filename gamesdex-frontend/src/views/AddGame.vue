<template>
    <div>
        <Header />
        <div id="main">
            <h1>Novo Jogos</h1>
            <form @submit.prevent="submitForm">
                <div>
                    <label for="name">Nome:</label>
                    <input type="text" v-model="game.name" id="name" required>
                </div>
                <div>
                    <label fro="description">Descrição:</label>
                    <textarea v-model="game.description" id="description" required></textarea>
                </div>
                <div>
                    <label for="developer">Desenvolvedor:</label>
                    <input type="text" v-model="game.developer" id="developer" required>
                </div>
                <button type="submit">Adicionar Jogo</button>
            </form>
        </div>
        <Footer />
    </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'AddGame',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            game: {
            name: '',
            description: '',
            developer: ''
            }
        };
    },
    methods: {
        submitForm() {
            axios.post('http://localhost:3000/api/v1/games', this.game)
            .then(response => {
                this.$router.push('/');
            })
            .catch(error => {
                console.error(error);
            });
        }
    }
};
</script>

<style>
    #main {
        min-height: 500px;
    }
</style>
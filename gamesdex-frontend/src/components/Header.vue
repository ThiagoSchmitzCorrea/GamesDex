<template>
    <header>
        <nav>
            <router-link to="/">Jogos</router-link> | 
            <router-link to="/add">Adicionar Jogos</router-link>
        </nav>
    </header>
</template>

<style>
    nav {
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
    }

    * {
        font-family: Helvetica;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
</style>

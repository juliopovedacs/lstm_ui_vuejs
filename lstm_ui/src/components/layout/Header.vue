<template>
    <header class="header">
        <h1>LSTM UI</h1>
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact-us">Contact us</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header {
        background: rgb(30, 126, 216);
        color: #fff;
        text-align: center;
        padding: 20px;
    }

    .header a {
        color: #fff;
        padding-right: 5px;
        text-decoration: none;
    }
    
    #nav a.router-link-exact-active {
        color: rgb(219, 13, 13)
    }

    #nav a {
        margin-right: 10px;
    }
</style>
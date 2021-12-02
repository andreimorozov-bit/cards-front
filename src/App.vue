<template>
  <div id="nav">
    <router-link to="/about">About</router-link>
    <router-link to="/cards">CardList</router-link>
    <router-link to="/cards/create">Create Cards</router-link>
    <router-link to="/products">Products</router-link>
    <router-link to="/products/create">Create Product</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0.5rem;
}

#nav a.router-link-exact-active {
  color: #2c3e90;
}
</style>

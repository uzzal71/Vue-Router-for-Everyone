<template>
    <nav id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/brazil">Brazil</router-link>
        <router-link to="/panama">Panama</router-link>
        <router-link to="/hawaii">Hawaii</router-link>
        <router-link to="/jamaica">Jamaica</router-link>
    </nav>
</template>

<script>
import store from '@/store';

export default {
  data() {
    return {
      destinations: store.destinations
    }
  }
}
</script>

<style scoped>
#nav {
    padding: 30px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid grey;
  z-index: 1;
}
#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}
#nav a.menu-active-class {
  color: #ab26ab;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}
</style>
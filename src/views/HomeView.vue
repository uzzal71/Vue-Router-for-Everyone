<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import store from '@/store';

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      destinations: store.destinations
    }
  }
};
</script>

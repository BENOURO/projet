<template>
  <div id="app">
   <!--<nav>
    <router-link to="/Home">Home</router-link> |
    <router-link to="/About">About</router-link>
  </nav> -->
    <router-view/>

  </div>
</template>

<style lang="scss">

#app {
 // background-image: url(../src/assets/images/back.png);
 // background-size: contain;
 // margin-top: 0;
 // display: block;
 // margin-left: auto;
// margin-right: auto;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

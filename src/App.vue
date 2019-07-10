<template>
  <div id="app">
    <div class="container-fluid">
      <transition name="route-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</div>
</template>

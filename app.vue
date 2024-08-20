<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
  @import url("~/assets/css/base.css");
  @import url("primeicons/primeicons.css");
  @import url("https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap");

  body {
    font-family: "Epilogue", sans-serif;
  }

  .page-enter-active,
  .page-leave-active {
    transition: all 4s;
  }

  .page-enter-from,
  .page-leave-to {
    filter: grayscale(1);
  }
</style>

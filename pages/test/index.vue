<template>
  <div>
    {{ $t("welcome") }}
    <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    <NuxtLink :to="switchLocalePath('fr')">Français</NuxtLink>
  </div>
</template>

<script></script>

<style></style>

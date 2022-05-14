<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Beth Store
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#"> Inicio </b-navbar-item>
      <b-navbar-item href="#"> Produtos </b-navbar-item>
      <b-navbar-item href="categories"> Categorias </b-navbar-item>
    </template>
  </b-navbar>
</template>

<template>
  <ul :class="{ 'content-wrapper': true, subcategory }">
    <li
      class="content-wrapper--item"
      v-for="(category, i) in stories"
      :key="i"
    >
      <a @click="goToSection(category, playerId)">{{ category.pos.replace(/^[\.]/, '') }} - {{ category.name }}</a>
      <ficha-table-content
        :stories="category.children"
        :subcategory="true"
        :playerId="playerId"
      />
    </li>
  </ul>
</template>

<script>
import goTo from 'vuetify/es5/services/goto'
export default {
  props: {
    stories: Array,
    subcategory: Boolean,
    playerId: Number
  },

  methods: {
    goToSection(category, playerId) {
      const el = document.getElementById(`category-header-${category.pos}-${playerId}`)

      if (el != null) {
        goTo(el.offsetTop + el.offsetHeight)
      }
    }
  }
}
</script>

<style>
.content-wrapper {
  list-style-type: none;
  padding: 20px;
}
.content-wrapper a {
  color: rgba(255, 255, 255, 0.87);
  text-decoration: underline;
}
.content-wrapper.subcategory {
  padding-top: 5px !important;
  padding-bottom: 0px !important;
}
</style>
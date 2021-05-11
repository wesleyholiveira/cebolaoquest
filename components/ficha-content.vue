<template>
  <div style="margin-top: 20px">
    <section v-for="(story, i) in stories" :key="i" class="ficha-content">
      category-header-{{story.pos}}-{{playerId}}
      <h2 v-if="!subcategory" :id="`category-header-${story.pos}-${playerId}`">{{ story.name }}</h2>
      <h3 v-if="subcategory" :id="`category-header-${story.pos}-${playerId}`">{{ story.name }}</h3>
      <v-divider v-if="!subcategory"></v-divider>
      <p v-html="story.content" class="ficha-content--text"></p>
      <ficha-content :stories="story.children" :subcategory="true" :playerId="playerId" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    stories: Array,
    subcategory: Boolean,
    playerId: Number
  },
}
</script>

<style>
.ficha-content {
}
.ficha-content .ficha-content--text a {
  color: #fff !important;
  font-weight: bold !important;
}
.ficha-content .ficha-content--text img {
  max-height: 170px;
}
</style>
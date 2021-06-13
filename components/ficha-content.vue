<template>
  <div class="ficha-content">
    <section
      v-for="(story, i) in stories"
      :key="i"
      :id="genererateIDAttribute(story, playerId)"
    >
      <h3 class="ficha-content--header">
        {{ story.name }}
      </h3>
      <v-divider v-if="!subcategory"></v-divider>
      <p
        v-if="
          story.content &&
          story.content.length > 0 &&
          story.content != '<p></p>'
        "
        v-html="story.content"
        class="ficha-content--text"
      />
      <ficha-content
        :stories="story.children"
        :subcategory="true"
        :playerId="playerId"
      />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    stories: Array,
    subcategory: Boolean,
    playerId: Number,
  },

  methods: {
    genererateIDAttribute(story, playerId) {
      return `category-header-${story.pos}-${playerId}`
    },
  },
}
</script>

<style>
.ficha-content {
  width: 100%;
}
.ficha-content .ficha-content--header {
}
.ficha-content .ficha-content--text a {
  color: #fff !important;
  font-weight: bold !important;
}
.ficha-content .ficha-content--text img {
  max-height: 170px;
}
</style>
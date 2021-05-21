<template>
  <div>
    <error
      :error="data"
      v-if="data.statusMessage && data.statusMessage == 'error'"
    />
    <ficha-profile :player="data" v-if="!data.statusMessage" />
  </div>
</template>

<script>
import error from '~/layouts/error.vue'
export default {
  components: { error },
  auth: false,

  data: () => ({
    data: {},
  }),

  async fetch() {
    try {
      const { playerId } = this.$route.params

      if (playerId) {
        const url = `/api/player/${playerId}`

        const { data } = await this.$axios.get(url)
        this.data = data
      }
    } catch (err) {
      this.data.message = 'Usuário não encontrado'
      this.data.statusCode = 404
      this.data.statusMessage = 'error'
    }
  },
}
</script>

<style>
.infos {
  border-color: #212020 !important;
}
.infos--item--link {
  text-decoration: underline;
  color: #fff !important;
}
.profile-group .v-list-group__header {
  background-color: #212020 !important;
}
.profile-group.np .v-list-group__header {
  background-color: #690603 !important;
}
</style>
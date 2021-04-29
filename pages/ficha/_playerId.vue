<template>
  <ficha
    :data="data"
  />
</template>

<script>
export default {
  data: () => ({
    data: {
      id: null,
      name: '',
      principle: '',
      alignment: '',
      currentClass: '',
      level: 1,
      exp: 0,
      funds: 0,
      meritPoints: 4,
      statusPoints: 1,
      proficiencyPoints: 1,
      parameters: {},
      valorPoints: [],
      noblePhantasms: [],
      extraInfos: {
        stories: [
          {
            category: '',
            content: '',
            subcategory: false,
            children: [],
          },
        ],
        referenceImages: []
      }
    },
  }),
  async fetch() {
    const { playerId } = this.$route.params
    const { id, token } = this.$auth.user

    const url = `/api/player/${playerId}/user/${id}`
    const { data } = await this.$axios.get(url, {
      headers: {
        Authorization: token
      }
    })
    
    if (data) {
      
      this.data = {
        ...data.user
      }
    }
  },
  fetchOnServer: false,
}
</script>
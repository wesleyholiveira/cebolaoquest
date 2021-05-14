<template>
  <ficha :data="data" />
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
      parameters: [],
      valorPoints: [],
      noblePhantasms: [],
      extraInfos: {
        species: '',
        addressSelfAs: '',
        likes: '',
        dislikes: '',
        abstract: '',
        talents: '',
        locality: '',
        stories: [
          {
            category: '',
            content: '',
            subcategory: false,
            children: [],
          },
        ],
        referenceImages: [],
      },
    },
  }),
  async fetch() {
    const { playerId } = this.$route.params
    const { id, token } = this.$auth.user

    if (id && token) {
      const url = `/api/player/${playerId}/user/${id}`
      const { data } = await this.$axios.get(url, {
        headers: {
          Authorization: token,
        },
      })
  
      const user = data.user
      let referenceImages = []
      
      if (user.extraInfos.referenceImages) {
        referenceImages = user.extraInfos.referenceImages.map((img) => {
          const file = new File(
            [
              new Blob([''], {
                type: 'text/plain',
              }),
            ],
            img.img,
            {
              type: 'application/octet-binary',
            }
          )
    
          return file
        })
      }
  
      if (data) {
        this.data = {
          ...user,
          extraInfos: {
            ...user.extraInfos,
            referenceImages,
          },
          id: playerId,
        }
      }
    }
  },
  fetchOnServer: false
}
</script>
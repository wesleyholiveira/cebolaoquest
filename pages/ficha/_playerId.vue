<template>
  <div>
    <error
      :error="data"
      v-if="data.statusMessage && data.statusMessage == 'error'"
    />
    <ficha :data="data" />
  </div>
</template>

<script>
import error from '~/layouts/error.vue'
export default {
  components: { error },
  data: () => ({
    data: {
      id: null,
      name: '',
      principle: '',
      alignment: '',
      currentClass: '',
      loading: true,
      level: 1,
      exp: 0,
      funds: 0,
      meritPoints: 0,
      statusPoints: 0,
      proficiencyPoints: 0,
      parameters: [],
      valorPoints: [0],
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
    try {
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
            ...this.data,
            ...user,
            extraInfos: {
              ...user.extraInfos,
              referenceImages,
            },
            id: playerId,
            loading: false
          }
        }
      }
    } catch (err) {
      this.data = {
        ...this.data,
        message: 'Usuário não encontrado',
        statusCode: 404,
        statusMessage: 'error',
        loading: false
      }
    }
  },
}
</script>
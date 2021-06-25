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

  head() {
    const { name } = this.data
    const { abstract } = this.data.extraInfos

    const title = `Cebolão Quest - ${name}`
    const description =
      abstract && abstract.length > 0
        ? abstract
        : 'Usuário não forneceu um resumo sobre a sua ficha.'
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
      ],
    }
  },

  mounted() {
    let referenceImages = []
    if (this.data.extraInfos.referenceImages) {
      referenceImages = this.data.extraInfos.referenceImages.map((img) => {
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

    this.data.extraInfos.referenceImages = referenceImages
  },

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
      maxHp: 90,
      maxSp: 90,
      hp: 0,
      sp: 0,
      parameters: [],
      valorPoints: [0],
      noblePhantasms: [],
      secretOrigins: {
        content: {
          origins: [],
          category: {}
        }
      },
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
        const { data } = await this.$axios.get(url)
        
        const user = data.user
        if (data) {
          this.data = {
            ...this.data,
            ...user,
            extraInfos: {
              ...user.extraInfos,
            },
            id: playerId,
            loading: false,
          }
        }
      }
    } catch (err) {
      console.log(err)
      this.data = {
        ...this.data,
        message: 'Usuário não encontrado',
        statusCode: 404,
        statusMessage: 'error',
        loading: false,
      }
    }
  },
}
</script>
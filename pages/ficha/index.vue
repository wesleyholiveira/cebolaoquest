<template>
  <ficha :data="data" :editable="false" />
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
      proficiencyPoints: 0,
      maxHp: 90,
      maxSp: 90,
      hp: 90,
      sp: 90,
      parameters: [
        {
          id: null,
          name: 'STR',
          rank: 'D',
          value: 6,
          player_id: null,
        },
        {
          id: null,
          name: 'AGI',
          rank: 'D',
          value: 6,
          player_id: null,
        },
        {
          id: null,
          name: 'END',
          rank: 'D',
          value: 6,
          player_id: null,
        },
        {
          id: null,
          name: 'LUK',
          rank: 'D',
          value: 6,
          player_id: null,
        },
        {
          id: null,
          name: 'NP',
          rank: 'D',
          value: 6,
          player_id: null,
        },
        {
          id: null,
          name: 'MAN',
          rank: 'D',
          value: 6,
          player_id: null,
        },
      ],
      valorPoints: [],
      stratagems: [],
      noblePhantasms: [],
      specialTechniques: [],
      martialSkills: [],
      negativeTraits: [],
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
            id: null,
            name: '',
            content: '',
            subcategory: false,
            children: [],
          },
        ],
        referenceImages: [],
      },
    },
  }),
}
</script>
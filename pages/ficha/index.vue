<template>
  <ficha
    :data="data"
    :editable="false"
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
      parameters: [{
        id: null,
        name: 'STR',
        rank: 'D',
        player_id: null,
      }, {
        id: null,
        name: 'AGI',
        rank: 'D',
        player_id: null,
      }, {
        id: null,
        name: 'END',
        rank: 'D',
        player_id: null,
      }, {
        id: null,
        name: 'LUK',
        rank: 'D',
        player_id: null,
      }, {
        id: null,
        name: 'NP',
        rank: 'D',
        player_id: null,
      }, {
        id: null,
        name: 'LUK',
        rank: 'D',
        player_id: null,
      }],
      valorPoints: [],
      stratagems: [],
      noblePhantasms: [],
      specialTechniques: [],
      martialSkills: [],
      negativeTraits: [],
      extraInfos: {
        stories: [
          {
            id: null,
            name: '',
            content: '',
            subcategory: false,
            children: [],
          },
        ],
        referenceImages: []
      }
    },
  })
}
</script>
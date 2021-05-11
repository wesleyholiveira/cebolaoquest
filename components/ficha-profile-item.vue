<template>
  <div :class="{ group: group && inline }" v-if="label && (value || effect)">
    
    <div :class="{ 'infos--item': true, 'add-margin': group, inline }">
      <span :class="{ 'infos--item--label': true, inline }">
        <strong>{{ label }}</strong>
      </span>
      <span :class="{ 'infos--item--value': true, inline }">{{ value }}</span>
      <v-tooltip
        v-if="effect !== undefined && effect.length <= 200"
        max-width="400"
        color="cyan darken-1"
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <a
            class="infos--item--link"
            v-bind="attrs"
            v-on="on"
            v-if="effect"
            @click="sendToProfileGroup()"
          >
            Efeito (?)
          </a>
        </template>
        <span>{{ effect }}</span>
      </v-tooltip>
      <a
        class="infos--item--link"
        v-if="effect && effect.length > 200"
        @click="sendToProfileGroup()"
      >
        Efeito (?)
      </a>
    </div>
    <slot name="divider">
      <v-divider class="infos--divider" v-if="!inline"></v-divider>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: String,
    effect: String,
    inline: {
      type: Boolean,
      required: false,
    },
    group: {
      type: Boolean,
      required: false,
    },
  },

  methods: {
    sendToProfileGroup() {
      const { label, effect } = this
      this.$emit('updateProfileGroup', {
        label,
        effect
      })
    }
  }
}
</script>

<style scoped>
.add-margin {
  margin-left: 15px;
}
.infos--item {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.infos--item.inline {
  width: 120px;
  justify-content: center;
}
.infos--item .infos--item--label {
  width: 150px;
}
.infos--item .infos--item--label,
.infos--item .infos--item--value {
  word-wrap: break-word;
  display: inline-block;
}
.infos--item .infos--item--label.inline {
  width: auto;
}
.infos--item .infos--item--value {
  /* max-width: 170px; */
  padding-left: 15px;
}
.infos--item--link {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.75);
}
.infos--divider {
  margin-top: 10px;
  margin-bottom: 10px;
}
.group {
  display: inline-flex;
}
.group .infos--item.inline {
  width: 80px;
}
.group .infos--item .infos--item--label.inline {
  width: 40px;
}
.group .infos--item .infos--item--value.inline {
  width: 40px;
}
</style>

<style>
.profile-group
  .v-list-group
  .v-list-group__header
  .v-list-item__icon.v-list-group__header__append-icon {
  margin-left: 0 !important;
}
</style>
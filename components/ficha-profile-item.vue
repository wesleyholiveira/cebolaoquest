<template>
  <div :class="{ group: group && inline }">
    <v-dialog v-model="dialog" max-width="650">
      <v-card>
        <v-card-title class="headline">
          {{ label }}
        </v-card-title>
        <v-card-text style="max-height: 450px; overflow-y: auto">
          {{ effect }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false"> Sair </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div :class="{ 'infos--item': true, 'add-padding': group, inline }">
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
            v-if="effect != undefined"
            @click="dialog = true"
          >
            Efeito (?)
          </a>
        </template>
        <span>{{ effect }}</span>
      </v-tooltip>
      <a
        class="infos--item--link"
        v-if="effect != undefined && effect.length > 200"
        @click="dialog = true"
        >Efeito (?)</a
      >
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
  data: () => ({
    dialog: false,
  }),
}
</script>

<style scoped>
.add-padding {
  margin-left: 15px;
}
.infos--item {
}
.infos--item.inline {
  width: 80px;
}
.infos--item .infos--item--label {
  width: 120px;
  word-wrap: break-word;
  word-break: break-all;
  display: inline-block;
}
.infos--item .infos--item--label.inline {
  width: auto;
}
.infos--item--link {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.75);
}
/* .infos--item .infos--item--value.inline {
  margin-right: 15px;
} */
.infos--divider {
  margin-top: 10px;
  margin-bottom: 10px;
}
.group {
  display: inline-block;
}
.group .infos--item.inline {
  width: 80px;
}
.group .infos--item .infos--item--label.inline {
  width: 50px;
}
</style>

<style>
.profile-group .v-list-group .v-list-group__header .v-list-item__icon.v-list-group__header__append-icon {
  margin-left: 0 !important;
}
</style>
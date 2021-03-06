<template>
  <div
    v-if="items && items.length > 0"
    :class="{
      'profile-group': true,
      'remove-margin': group,
      'group-inline': group && inline,
      np: noblePhantasm,
      inline,
    }"
  >
    <v-list-group no-action v-if="group" v-model="profileGroup">
      <template v-slot:activator>
        <v-list-item-title class="text-center">{{
          groupTitle
        }}</v-list-item-title>
      </template>
      <v-list style="background-color: transparent; margin-top: 5px">
        <div
          v-for="(item, i) in items"
          :key="i"
          :class="{ 'inline-flex': inline }"
        >
          <slot name="noble-phantasm" v-bind:item="item"></slot>
          <ficha-profile-item
            :label="item.label"
            :value="item.value"
            :effect="item.effect"
            :inline="inline"
            :group="group"
            v-on:updateProfileGroup="skills = $event"
          >
            <template v-slot:item="itemProps">
              <slot name="item" v-bind="itemProps"></slot>
            </template>
            <template v-slot:divider v-if="i == items.length - 1">
              <span></span>
            </template>
          </ficha-profile-item>
        </div>
      </v-list>
    </v-list-group>
    <template v-if="!group">
      <ficha-profile-item
        v-for="(item, i) in items"
        :label="item.label"
        :value="item.value"
        :effect="item.effect"
        :key="i"
        :inline="inline"
      >
        <template v-slot:divider v-if="i == items.length - 1">
          <span></span>
        </template>
      </ficha-profile-item>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    noblePhantasm: Boolean,
    group: {
      type: Boolean,
      required: false,
      default: false,
    },
    groupTitle: String,
    inline: {
      type: Boolean,
      required: false,
      default: false,
    },
    items: Array,
  },

  data: (instance) => ({
    profileGroup: instance.active,
    skills: {},
  }),

  watch: {
    skills(obj) {
      this.$emit('updateProfile', obj)
    },
  },
}
</script>

<style scoped>
.inline-flex {
  width: auto;
  display: inline-flex;
}
.remove-margin {
  margin: 0 !important;
}
.profile-group {
  margin: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
}
.group-inline {
  width: 100%;
  display: block;
}
.profile-group.inline {
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
}
.divider-inline {
  width: 100%;
  display: block;
}
</style>

<style>
.profile-group .v-list-group__header {
  background-color: #006064;
}
.profile-group.np .v-list-group__header {
  background-color: #03566b;
}
.profile-group .v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
  width: 100%;
  color: #fff;
  left: 0;
  position: absolute;
}
.profile-group
  .v-list-group
  .v-list-group__header
  .v-list-item__icon.v-list-group__header__append-icon {
  min-width: auto;
  right: 12px;
  position: absolute;
}
</style>
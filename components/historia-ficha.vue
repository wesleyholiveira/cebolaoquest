<template>
    <v-fade-transition>
        <v-row :class="classCss" style="position: relative;clear: right">
            <v-col cols="12">
                <v-text-field v-model="extraInfos.name" label="Categoria" class="noPaddingTop" />
                <tiptap-vuetify v-model="extraInfos.content" :extensions="extensions" min-height="250" placeholder="Digite o conteúdo dessa categoria" />
                <v-switch
                    v-model="extraInfos.subcategory"
                    label="Subcategoria"
                    @change="handleChildren($event)"
                ></v-switch>
                <div class="pr-2" style="float: right">
                    <v-btn
                        v-if="stories.length > 1"
                        title="Remover História"
                        :color="removeColor"
                        @click="removeStory()"
                    >
                        <v-icon>mdi-minus-circle</v-icon>
                    </v-btn>
                    <v-btn
                        title="Adicionar História"
                        :color="addColor"
                        @click="addStory()"
                    >
                        <v-icon>mdi-plus-circle</v-icon>
                    </v-btn>
                </div>
                <historia-ficha
                    v-for="(children, i) in extraInfos.children"
                    :key="i"
                    :extraInfos="children"
                    :stories="extraInfos.children"
                    :absolute="false"
                    addColor="purple darken-1"
                    removeColor="cyan darken-1"
                    classCss="ml-4"
                />
            </v-col>
        </v-row>
    </v-fade-transition>
</template>

<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image
} from 'tiptap-vuetify'
export default {
    components: { TiptapVuetify },

    props: {
        extraInfos: Object,
        stories: Object | Array,
        classCss: String,
        absolute: Boolean,
        addColor: {
            type: String,
            default: 'green darken-1'
        },
        removeColor: {
            type: String,
            default: 'red darken-1'
        }
    },

    data: () => ({
        extensions: [
            History,
            Blockquote,
            Link,
            Underline,
            Strike,
            Italic,
            ListItem,
            BulletList,
            OrderedList,
            [Heading, {
                options: {
                    levels: [1, 2, 3]
                }
            }],
            Bold,
            Code,
            HorizontalRule,
            Paragraph,
            HardBreak,
            Image,
        ],
    }),

    methods: {
        handleChildren(event) {
            const extraInfos = this.extraInfos
            if (event) {
                extraInfos.children.push({
                    name: '',
                    content: '',
                    subcategory: false,
                    children: []
                })
            } else {
                extraInfos.children = []
            }
        },

        addStory() {
            let stories = this.stories

            stories.push({
                name: '',
                content: '',
                subcategory: false,
                children: []
            })

            this.$emit('updateStories', stories)
        },

        removeStory() {
            const stories = this.stories
            if (stories.length > 0) {
                stories.pop()
                this.$emit('updateStories', stories)
            }
        },
    }
}
</script>

<style>
.noPaddingTop {
  padding-top: 0;
}
.noPaddingBottom {
  padding-bottom: 0;
}
</style>
<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" lg="9" md="8" sm="12">
        EMIYA (エミヤ?), Class Name Archer (アーチャー, Āchā?), is the
        Archer-class Servant of Rin Tohsaka in the Fifth Holy Grail War of
        Fate/stay night. He is one of the Servants of Ritsuka Fujimaru of the
        Grand Orders conflicts of Fate/Grand Order.
      </v-col>
      <v-col cols="12" lg="3" md="4" sm="12">
        <div class="infos">
          <h3 class="headline">EMIYA</h3>
          <v-row justify="center">
            <v-col>
              <v-carousel hide-delimiters class="carousel">
                <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                ></v-carousel-item>
              </v-carousel>
            </v-col>
            <v-col cols="12" style="margin: 0; padding: 0">
              <ficha-profile-group
                :items="characterItems"
                inline
              ></ficha-profile-group>
              <ficha-profile-group
                :items="profileItems"
                group
                active
                group-title="Ficha"
              ></ficha-profile-group>
              <ficha-profile-group
                :items="parametersItems"
                group-title="Parâmetros"
                group
                inline
              ></ficha-profile-group>
              <ficha-profile-group
                :items="stratagemsItems"
                group-title="Estratagemas"
                group
              ></ficha-profile-group>
              <ficha-profile-group
                :items="stratagemsItems"
                group-title="Características Negativas"
                group
              ></ficha-profile-group>
              <ficha-profile-group
                :items="stratagemsItems"
                group-title="Habilidades Marciais"
                group
              ></ficha-profile-group>
              <ficha-profile-group
                :items="stratagemsItems"
                group-title="Técnicas Especiais"
                group
              ></ficha-profile-group>
              <ficha-profile-group
                :items="extraInfoItems"
                group-title="Informações Adicionais"
                group
              ></ficha-profile-group>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      profileItems: [
        {
          label: 'Nome:',
          value: 'Teste',
        },
        {
          label: 'Classe:',
          value: 'Archer',
        },
        {
          label: 'Personalidade:',
          value: 'Bom',
        },
        {
          label: 'Princípio:',
          value: 'Leal',
        },
      ],
      characterItems: [
        {
          label: 'Level:',
          value: '0',
        },
        {
          label: 'EXP:',
          value: '0',
        },
        {
          label: 'Fundos:',
          value: '0',
        },
      ],
      parametersItems: [
        {
          label: 'STR',
          value: 'D'
        },
        {
          label: 'AGI',
          value: 'D'
        },
        {
          label: 'END',
          value: 'D'
        },
        {
          label: 'LUK',
          value: 'D'
        },
        {
          label: 'MAN',
          value: 'D'
        },
        {
          label: 'NP',
          value: 'D'
        },
      ],
      stratagemsItems: [
        {
          label: 'Teste',
          effect: `e is not a proper Heroic Spirit in the sense of other heroes.[3] He is an alternate version of Shirou Emiya from an alternate timeline of Fate/stay night where he made a contract with the World (Alaya) and became the Heroic Spirit EMIYA. He acts as a Counter Guardian for the world as payment for the contract. He is summoned because he still has the jewel pendant that Rin used to save his life after Lancer stabbed his heart. The jewel he owns is the actual catalyst used for his summoning rather than the one that Rin still has at the time of his summoning. After the end of each of the three routes in Fate/stay night, the possibility for Shirou to become Archer still exists, but the chance of it happening is close to zero.[9]

The beginning conditions for Archer's Holy Grail War were mostly the same as that of the Fate/stay night universe, but it could be said that "something was missing." The following events of the war happened in a similar manner to the Fate scenario, having summoned Saber and continued fighting together with her until the end, but while he understood her, he didn't "save Saber's heart." After they destroyed the Grail and parted, he went on to cooperate with Rin and headed to London.[10] He eventually went on to work as a freelance magus to pursue his dream of becoming a hero of Justice. He stubbornly trained himself while pursuing his dream of saving mankind, but later fell into despair upon realizing that his abilities were insufficient in fulfilling his goal. Sometime in his twenties, he obtained his signature red overcoat, possibly as a gift from Ciel of the Church.[11] He at some point encountered and fought beings similar to Angra Mainyu, but he was forced to retreat when he was unable to act against them. He later gained some understanding of such beings as targets of the Counter Force upon entering the Throne of Heroes.[12]


Shirou Emiya making a contract with the World in the anime

He had to make a life changing decision. Confronted by a calamity which had the potential of killing one hundred people before him, he decided to "make a contract" with the World to become a hero capable of producing miracles and become a Heroic Spirit after his death.[13] He believed he could save both the lives of the dying people before him and save even more as a hero after his death. Although he desperately fought to end a war, he was in turn branded as the mastermind behind that war and subsequently executed because of the betrayal of his allies. Although he died of betrayal, he did not hate mankind. However, the "World" ironically gave him the duty as a Heroic Spirit "to slaughter all humans at a particular location when mankind is at the threshold of complete self destruction", a "Counter Guardian".[3]

His belief that he would continue to save many people as a Heroic Spirit did happen, but it was through being made to clean up after human actions and forced to take many lives to save humanity as a whole, instead of "saving everyone" - protecting humans without having to cause deaths of humans as he would have liked to. After seeing human self-destruction and forced to oppose his own ideals countless times, he began to deny himself and his ideal. Even knowing that the Throne of Heroes was isolated from time and space, Archer desperately came to believe that his only hope of release was to have himself summoned into an era where Shirou Emiya exists and kill his past self, hoping that the double paradox created by Shirou Emiya being killed before having a chance to make the contract with Alaya and that the killing was done by a Shirou Emiya who successfully made the contract with the world would create a time paradox great enough in magnitude that could potentially erase his existence as a Counter Guardian.`
        },
        {
          label: 'Teste2',
          effect: 'Comer o c* de quem tá lendo'
        },
        {
          label: 'Teste3',
          effect: 'Vamo nessa!'
        },
        {
          label: 'Teste4',
          effect: 'Ganhar o torneio'
        }
      ],
      extraInfoItems: [
        {
          label: 'Espécie:',
          value: 'Humano'
        },
        {
          label: 'Sexo:',
          value: 'Masculino'
        },
        {
          label: 'Altura:',
          value: '1,87 m'
        },
        {
          label: 'Peso:',
          value: '79 kg'
        },
        {
          label: 'Local de origem:',
          value: 'Jaboticabal'
        },
        {
          label: 'Idade:',
          value: '30 anos'
        },
        {
          label: 'Tipo sanguíneo:',
          value: 'A+'
        },
        {
          label: 'Data de nascimento:',
          value: '1993-01-17'
        },
        {
          label: 'Autodenominação:',
          value: 'The best detective of the worldasdasddsad'
        },
        {
          label: 'Talentos:',
          value: 'Nenhum'
        }
      ]
    }
  },
}
</script>

<style scoped>
.infos {
  padding: 10px;
  border: 4px solid #006064;
}
hr {
  margin-top: 10px;
  margin-bottom: 10px;
}
.carousel {
  margin-top: 15px;
}
</style>
<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Bem vindo ao SCQ (Sistema Cebolão Quest)
        </v-card-title>
        <v-card-text>
          <p>
            Este sistema tem como objetivo adaptar de forma fiel o RPG criado
            pelo grande Cebolão (Rafael)
          </p>
          <v-virtual-scroll height="450" item-height="30" :items="items">
            <template v-slot:default="{ item }">
              <v-list-item :key="item">
                <v-list-item-action-text class="my-text">{{item}}</v-list-item-action-text>
              </v-list-item>
            </template>
          </v-virtual-scroll>
          <div class="text-xs-right">
            <em><small>&mdash; Wesley Oliveira</small></em>
          </div>
          <hr class="my-3" />
          <a
            href="https://discord.gg/n4zS2JtDum"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cebolão Discord
          </a>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  auth: true,
  data: () => ({
    items: [
      'Adicionado verificação de existência dos campos "height" e "cat.children" nas rotas que recebem os dados completos do jogador',
      'Ajustado a forma como o caminho da pasta de upload é resolvido (api)',
      'Ajustado upload de arquivos pois a função rename não permite mover entre diferentes pontos de montagem (api)',
      'Reconfigurado propriedade white-space da tag PRE para quebrar linha quando o limite de comprimento do componente é atingido (chat)',
      'Removido evento de keypress pois está depreciado nas versões mobiles dos navegadores (chat)',
      'Adicionado funcionalidade que envia mensagem a todos os usuários conectados (chat)',
      'Adicionado condição que oculta a mensagem de que o usuário está digitando para si próprio (chat)',
      'Adicionado funcionalidade que verifica se o usuário está digitando para os demais conectados no socket (chat)',
      'Adicionado página de chat',
      'Adicionado variáveis de ambiente para obter a URL do projeto e DNS',
      'Adicionado variáveis de ambiente para conexão com banco de dados',
      'Adicionado nuxt-socket-io',
      'Adicionado página pública para visualização do perfil de cada usuário',
      'Adicionado botão para compartilhar a URL do perfil',
      'Adicionado "Fantasmas Nobres" nas informações do perfil',
      'Corrigido bug de mérito infinito',
      'Reordenado informações sobre o personagem em dispositivos móveis',
      'Removido posicionamento central do carousel',
      'Adicionado scroll direto à seção selecionada',
      'Criado componente de exibição de conteúdo das categorias (Listagem)',
      'Criado componente de tabela de conteúdo (Listagem)',
      'Corrigido bug no painel expansível que impedia de um painel ficar aberto e o outro fechado',
      'Adicionado binding na listagem com todos os campos da ficha',
      'Corrigido bug no parâmetro negativo que não permitia a edição do atributo',
      'Adicionado rota no server-middleware para obter os arquivos de upload',
      'Adicionado cache nas requisições de listagens',
      'Componente dialog movido do "ficha-profile-item" para o componenter mais externo. Isto evitará renderização massiva do componente',
      'Corrigido bug de inserção e na visualização dos Golpes Especiais',
      'Corrigido bug que deixava os méritos negativos na edição',
      'Corrigido bug que inseria os efeitos para cada NP criado',
      'Corrigido botão de "-" no módulo de edição',
      'Corrigido botão de reset dos parâmetros',
      'Adicionado botão e funcionalidade de logout',
      'Corrigido edição das categorias',
      'Corrigido cálculo da somatória dos pontos gastos (API)',
      'Adicionado sistema de listagem de fichas',
      'Adicionado sistema de edição de fichas',
      'Adicionado sistema de exclusão de fichas',
      'Corrigido bug ao adicionar fantasma nobre',
      'Adicionado feature para decrementar os pontos (Méritos, Proficiência, Valors e Parâmetros) quando o componente Ficha (Edição) é carregado',
      'Correção no componente de fantasma nobre (Edição)',
      'Corrigido bug que impedia alteração de parâmetros (Edição)',
      'Corrigido bug que impedia a pessoa desselecionar uma opção e persistir no banco a opção desselecionada',
      'Corrigido evento de click no botão de exclusão (Listagem)',
      'Corrigido bug no login, onde o USERID e o TOKEN não eram retornados do endpoint',
      'Corrigido problema de upload de fotos na edição',
      'Corrigido bug envolvendo a sobrecarga de Valors',
    ],
  }),
}
</script>

<style>
</style>
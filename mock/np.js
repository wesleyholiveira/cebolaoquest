export default {
  valorSkills: 
    [
      {
        name: 'Lágrimas de Caitha',
        valors: 3,
        effect: `Seu Fantasma Nobre está diretamente atrelado a sua saúde física. 
        Sentindo que sua vida está arriscada, e seus ferimentos se agravando, a benção se manifesta 
        e um poder incrível surge.<br /><br />
        Quando seus Pontos de Vida forem <strong>reduzidos</strong> a uma quantia que seja 
        <strong>igual ou inferior a 50%</strong>, por um ataque de um adversário e <strong>somente</strong> 
        em uma situação de <strong>combate</strong>, adicione <strong>+20</strong> ao 
        seu <strong>Valor Inicial</strong> para qualquer <i>Manobra Ofensiva</i> ou <i>Manobra Evasiva</i> 
        enquanto estiver equipado com esse Fantasma Nobre.
        `
      },
      {
        name: 'Ouroboros',
        valors: 3,
        effect: `Seu Fantasma Nobre consegue ignorar as leis da física e distorcer o tempo, 
        por segundos o suficiente para que você aplique <strong>dois</strong> golpes contra um inimigo, 
        em um clarão de movimentos quase impossíveis de se ver.<br /><br /> 
        O Fantasma Nobre equipado com essa habilidade pode realizar dois ataques normais durante o seu turno. 
        O ataque extra <strong>NÃO</strong> pode ser realizado se caso o dano do primeiro golpe for 
        reduzido a 0 por uma <i>Manobra Defensiva "Aparar"/"Bloquear"</i> do alvo.<br /><br />
        <i>Uma arma equipada na sua mão não hábil não pode realizar um ataque extra, também</i>.     
        `
      },
      {
        name: 'Marca dos Ancestrais',
        valors: 2,
        effect: `Seu Noble Phantasm foi agraciado com o poder dos deuses antigos, 
        tornando-o uma arma poderosa no combate às forças Eldritch que venham tentar invadir 
        nosso plano de existência.<br /><br /> 
        Inimigos que possuam a <strong>característica</strong> de serem <strong>Eldritch</strong> 
        recebem o <strong>dobro</strong> de dano após eles rolarem suas 
        <i>Manobras Evasivas</i> para se defenderem das suas <i>Manobras Ofensivas</i>.<br /><br />
        <i>Esse Fantasma Nobre não pode possuir as Habilidades de Valor: 
        "Vingadora Sagrada", "Matadora de Dragões", "Finda-Deus" e "Nemesis"</i>.
        `
      },
      {
        name: 'Finda-Deus',
        valors: 2,
        effect: `Seu Noble Phantasm foi projetado com o intuito de alcançar a maior de 
        todas as proezas: matar um deus. Seja através de feitiços profanos, mecanismos tecnológicos 
        que destroem o mistério ou a capacidade de despertar uma técnica especial em seu usuário, 
        essa arma conseguirá derrubar uma divindade.<br /><br />
        Inimigos que possuam <strong>algum</strong> nível de <strong>divindade</strong> recebem 
        o <strong>dobro</strong> de dano após eles rolarem suas <i>Manobras Evasivas</i> 
        para se defenderem das suas <i>Manobras Ofensivas</i>.<br /><br /> 
        <i>Esse Fantasma Nobre não pode possuir as Habilidades de Valor: 
        "Vingadora Sagrada", "Matadora de Dragões", "Nemesis" e "Marca dos Ancestrais"</i>.
        `
      },
      {
        name: 'Nemesis',
        valors: 2,
        effect: `Seu Noble Phantasm é uma arma conhecida por caçar e derrotar as mais
         terríveis feras da natureza. Não há besta furiosa capaz de resistir a sua arma.<br /><br />
        Inimigos que possuam a <strong>característica</strong> de serem Feras recebem o 
        <strong>dobro</strong> de dano após eles rolarem suas <i>Manobras Evasivas</i> para se defenderem das 
        suas <i>Manobras Ofensivas</i>.<br /><br /> 
        <i>Esse Fantasma Nobre não pode possuir as Habilidades de Valor: 
        "Vingadora Sagrada", "Matadora de Dragões", "Finda-Deus" e "Marca dos Ancestrais"</i>.`
      },
      {
        name: 'Vingadora Sagrada',
        valors: 2,
        effect: `Seu Fantasma Nobre é uma arma usada contra criaturas das trevas. 
        Demônios e Mortos-Vivos caem perante a pureza sagrada do bem da sua lâmina.<br /><br /> 
        Inimigos que possuam a <strong>característica</strong> de serem <strong>Mortos-Vivos</strong> 
        ou <strong>Demônios</strong> recebem o <strong>dobro</strong> de dano após eles rolarem suas 
        <i>Manobras Evasivas</i> para se defenderem das suas <i>Manobras Ofensivas</i>.<br /><br />
        <i>Esse Fantasma Nobre não pode possuir as Habilidades de Valor: 
        "Matadora de Dragões", "Nemesis", "Finda-Deus" e "Marca dos Ancestrais"</i>.
        `
      },
      {
        name: 'Matador de Dragões',
        valors: 2,
        effect: `Seu Noble Phantasm foi construído com o intuito de combater e matar os mais poderosos 
        de todos os Phantasmals: Dragões. 
        Inimigos que possuam a <strong>característica</strong> de serem <strong>Dragões</strong> recebem o 
        <strong>dobro</strong> de dano após eles rolarem suas <i>Manobras Evasivas</i> para se defenderem 
        das suas <i>Manobras Ofensivas</strong>.<br /><br />
        <i>Esse Fantasma Nobre não pode possuir as Habilidades de Valor: 
        "Vingadora Sagrada", "Nemesis", "Finda-Deus" e "Marca dos Ancestrais"</i>.`
      },
      {
        name: 'Elemental',
        valors: 2,
        effect: `Seu Fantasma Nobre está encantado magicamente com um elemento dos círculos herméticos; 
        uma espada de fogo, uma lança de relâmpagos ou uma adaga gélida.<br /><br />
        Quando usa esse artefato para golpear um inimigo, seu golpe carrega também o efeito daquele elemento.<br /><br /> 
        Escolha entre <strong>Fogo, Gelo ou Eletricidade</strong> quando adquirir essa Habilidade de Valor;
        todas as suas <i>Manobras Ofensivas</i> passam agora a serem consideradas causando dano 
        por esse Elemento.<br /><br /> 
        Inimigos que tenham fraqueza a esse elemento recebem o <strong>dobro</strong> de dano após 
        eles rolarem suas <i>Manobras Evasivas</i> para se defenderem das suas <i>Manobras Ofensivas</i>.
        `
      },
      {
        name: 'Mordida Venenosa',
        valors: 1,
        effect: `Seu Fantasma Nobre é naturalmente capaz de infectar os ferimentos que causa 
        com um veneno mortal; talvez tenha sido construído com os restos de um terrível monstro, 
        é encantado somente para essa finalidade ou detém uma horrenda maldição…<br /><br />
        Quando <strong>causar</strong> dano através de um <strong>Golpe Crítico</strong> usando 
        esse Fantasma Nobre, o alvo irá sofrer a condição negativa: <i>"Envenenado"</i>, sem chance de resistir.<br /><br /> 
        <i>O veneno irá causar dano ao alvo todo o início de seu turno da seguinte forma: 
        <strong>6-8-12-20-40</strong>; não aumentando após isso.</i>
        `
      },
      {
        name: 'Sonata Lunar',
        valors: 2,
        effect: `A lâmina de seu Fantasma Nobre foi forjada com propriedades misteriosas 
        e mágicas, fazendo ela deixar de possuir qualquer natureza mundana e se tornar puramente etérea. 
        Devido a essa mudança, seus ataques passam a se fortalecer do seu poder mágico ao 
        invés de sua força física.<br /><br />
        Substitua o Parâmetro <strong>Força</strong> pelo Parâmetro <strong>Mana</strong>, 
        para qualquer <i>Manobra Ofensiva</i> que envolva esse Fantasma Nobre.                
        `
      },
      {
        name: 'Galvanismo',
        valors: 2,
        effect: `Seu Fantasma Nobre possui formas mágicas ou mecânicas de gerar energia quando 
        usado para atacar.<br /><br />
        Quando <strong>causar</strong> dano usando esse Fantasma Nobre, 
        <strong>regenere</strong> Pontos de Energia na <strong>mesma</strong> quantidade do dano causado.        
        `
      },
      {
        name: 'Vampírica',
        valors: 2,
        effect: `Seu Fantasma Nobre é uma arma amaldiçoada com o poder aterrorizante de 
        se alimentar do sangue dos ferimentos que causa. Você aprendeu a se fortalecer da energia vital 
        que ele rouba, e curar os seus ferimentos com ela.<br /><br />
        Quando <strong>causar</strong> dano usando esse Fantasma Nobre, <strong>regenere</strong> Pontos de Vida 
        na <strong>mesma</strong> quantidade do dano causado.
        `
      },
      {
        name: 'Xadrez com a Morte',
        valors: 1,
        effect: `Seu Fantasma Nobre é uma arma incomum, imprevisível, não vista normalmente 
        em um campo de batalha, ou você a empunha de formas particularmente diferentes do normal. 
        Isso faz com que os alvos não sejam capazes de prever a maioria dos  seus ataques e acabam 
        sendo surpreendidos.<br /><br />
        Todas as suas <i>Manobras Ofensivas</i> que podem causar uma <strong>Rolagem Crítica</strong>, 
        também causam uma Rolagem Crítica quando você rolar um resultado <strong>4</strong> em um dos seus dados.<br /><br /> 
        <i>Se um dado correspondente ao Rank S for rolado, o número passa a ser 13.</i>
        `
      },
      {
        name: 'Minimum Maximum',
        valors: 1,
        effect: `Seu Fantasma Nobre é encantado com magias que trazem boa sorte; mesmo 
        quando ele parece ter falhado, algo incrível acontece e ele 
        encontra uma maneira de atingir o alvo.<br /><br />
        Sempre que você rolar uma rolagem <strong>mínima</strong> usando o Fantasma Nobre que possua 
        essa habilidade, <strong>multiplique</strong> o valor da rolagem por <strong>10</strong>.         
        `
      },
      {
        name: 'Apagador de Fantasmas',
        valors: 1,
        effect: `Seu Fantasma Nobre consegue alcançar e ferir seus inimigos mesmo que eles sejam 
        habilidosos o suficiente para cruzar lâminas com você.<br /><br />
        Quando atacar um alvo, cause dano <strong>direto aos pontos de vida</strong> dele se caso ele usar 
        a <i>Manobra Evasiva "Aparar"</i>.<br /><br /> 
        <i>Você não pode possuir as Habilidades de Valor: "Destruidor de Falanges" e "Revelador de Ilusões" 
        nesse Fantasma Nobre.</i>
        `
      },
      {
        name: 'Revelador de Ilusões',
        valors: 1,
        effect: `Seu Fantasma Nobre tem a capacidade de alcançar seus alvos, não importa o 
        quão rápidos eles são ou que tipo de traquinagens para escapar de seus golpes estejam usando.<br /><br />
        Quando atacar um alvo, cause dano <strong>direto aos pontos de vida</strong> 
        dele se caso ele usar a <i>Manobra Evasiva "Esquivar"</i>.<br /><br /> 
        <i>Você não pode possuir as Habilidades de Valor: "Apagador de Fantasmas" e "Destruidor de Falanges" 
        nesse Fantasma Nobre.</i>
        `
      },
      {
        name: 'Destruidor de Falanges',
        valors: 1,
        effect: `Seu Fantasma Nobre possui a habilidade de ultrapassar escudos e atingir 
        os alvos mesmo através das barreiras de aço que eles estão usando para se defender.<br /><br />
        Quando atacar um alvo, cause dano <strong>direto aos pontos de vida</strong> dele se caso ele usar 
        a <i>Manobra Evasiva "Bloquear"</i>.<br /><br />
        <i>Você não pode possuir as Habilidades de 
        Valor: "Apagador de Fantasmas" e "Revelador de Ilusões" nesse Fantasma Nobre.</i>                  
        `
      },
    ].sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }

      return -1;
    }),
    type: [
      {
        name: 'Espada',
        valorSkills: [
          {
            name: 'Caminho Radiante',
            valors: 2,
            effect: `Sua espada é a extensão do seu corpo e dos seus feitos. E junto com ela, 
            você desenvolveu ou foi abençoado com um golpe decisivo. Tal é sua intimidade com sua lâmina, 
            que quando a técnica de vocês é disparada, vocês se tornam incomparáveis, quebrando até 
            os limites de outras lendas.<br /><br /> 
            Aumente o seu <strong>Valor Inicial</strong> em <strong>+10</strong> quando você 
            usar uma Técnica Especial usando esse Fantasma Nobre.        
            `
          },
          {
            name: 'Saque Mortal',
            valors: 2,
            effect: `Sua espada é particularmente poderosa quando usada para atacar um inimigo 
            enquanto ela está na bainha ou em uma posição de descanso. 
            Muitas vezes, o primeiro golpe é tudo que você precisa para decidir o combate.<br /><br /> 
            Seu primeiro ataque normal em um combate causa dano <strong>direto</strong> aos <strong>Pontos de Vida</strong> 
            de um alvo que possa ser atacado por você.<br /><br />
            Você pode usar a <i>manobra "Checkmate"</i> para guardar esse Fantasma Nobre, 
            e assim, poder ganhar esse bônus novamente no seu próximo ataque normal.
            `
          },
          {
            name: 'Coração do Combate',
            valors: 2,
            effect: `Sua espada incorpora o conceito de si mesma ainda mais profundamente que o normal; 
            uma arma feita para determinar uma batalha diretamente, sem truques ou estratégias complexas.<br /><br />
            Uma vez que ela esteja engajada em um confronto contra inimigos, mano-a-mano, sua lâmina se sentirá ainda mais afiada.<br />
            Sempre que você atacar normalmente, contra um inimigo que tenha atacado você com um ataque corpo a corpo, ou que tenha sido
            atacado por você anteriormente usando esse Fantasma Nobre, <strong>some o Valor Inicial</strong>
            de ambos os seus Parâmetros de ataque.
            `
          },
          {
            name: 'Ápice Marnial',
            valors: 3,
            effect: `Sua espada foi escolhida para ser seu armamento, sendo você um guerreiro de grande técnica.
             Ela se ajusta tão perfeitamente ao seu estilo de luta que vocês foram um passo além; 
             e esse estilo de luta juntamente com ela se tornou ainda mais versátil e incrível.<br /><br />
             Se você possuir uma <strong>Habilidade Marcial</strong>, enquanto estiver usando esse Fantasma Nobre, 
             você irá adquirir vantagens especiais dependendo de qual Habilidade Marcial possuir.<br /> 
             <strong>ZWEIHANDER</strong> - Você pode executar um ataque extra por turno; 
             se um desses ataques for um <i>Ataque Crítico</i>, 
             o adversário não pode rolar nenhuma <i>Manobra Evasiva</i>.<br />
             <strong>AMBIDESTRIA</strong> - Cada novo ataque normal contra um 
             mesmo alvo <strong>aumenta</strong> em <strong>+10</strong> o seu Valor Inicial; Se você eliminar um inimigo, 
             mas ainda tiver ataques restantes, você pode executar uma <i>Manobra de Movimento</i>, imediatamente, 
             e continuar os ataques contra um próximo alvo.<br />
             <strong>DUELISTA</strong> - Sua <i>Manobra Evasiva "Aparar"</i> pode agora provocar uma 
             <strong>Rolagem Crítica</strong>; Se um inimigo entrar no alcance de sua arma com uma 
             <i>Manobra de Movimento</i>, você pode executar um ataque normal contra esse inimigo. `
          },
          {
            name: 'Espada & Escudo',
            valors: 1,
            effect: `Sua espada possui uma lâmina larga o suficiente, 
            uma bainha resistente, ou você simplesmente aprendeu a usar ela dessa forma; 
            com ela em punho, você não precisa de um escudo.<br /><br /> 
            Você pode executar a <i>Manobra Evasiva "Bloquear"</i> usando esse 
            Fantasma Nobre; porém, <strong>deve</strong> substituir o Parâmetro <strong>Força</strong> 
            por <strong>Fantasma Nobre</strong>. `
          },
          {
            name: 'Brilho Perfeito',
            valors: 1,
            effect: `Sua espada é um conduíte de energias mágicas. 
            Uma vez que ela é estimulada pelo poder de uma técnica especial, ela irá continuar 
            por mais alguns momentos com seu poder amplificado, certificando-se de finalizar o combate. 
            Aumente o seu <strong>Valor Inicial</strong> em <strong>+10</strong> 
            para seu próximo ataque normal se no turno anterior você usou uma Técnica Especial 
            com esse Fantasma Nobre.`
          },
        ].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
    
          return -1;
        })
      },
      {
        name: 'Lança',
        valorSkills: [
          {
            name: 'Montante Adelante',
            valors: 2,
            effect: `Sua lança é perfeita para atropelar seus inimigos, 
            e perfurar eles com uma feroz carga.<br /><br />
            Se você executar uma <i>Manobra de Deslocamento</i> esse turno, 
            some ambos os seus Parâmetros de <strong>Ataque</strong> ao seu <strong>Valor Inicial</strong> 
            no seu próximo ataque normal. 
            `
          },
          {
            name: 'Espiral Gaélica',
            valors: 2,
            effect: `Sua lança é particularmente mortal ao ser usada com movimentos em cadeia. 
            Desviar ou evitar um golpe de um inimigo e imediatamente golpear a guarda aberta 
            aumenta o poder dos seus golpes.<br /><br /> 
            Se durante a última rodada você utilizou o recurso Burst of Speed para reduzir o dano de uma Manobra Ofensiva de um inimigo, aumente o Valor Inicial da sua próxima Manobra Ofensiva em +10.
            `
          },
          {
            name: 'Vento Bravo',
            valors: 1,
            effect: `Sua lança libera uma grande quantidade de poder assim que um confronto tem início, 
            como uma furiosa tempestade.<br /><br />
            Se você for o primeiro a agir em um combate, <strong>aumente o Valor Inicial</strong> 
            da sua próxima <i>Manobra Ofensiva</i> em <strong>+10</strong>, 
            apenas durante a primeira rodada de um combate.
            `
          },
          {
            name: 'Impulso Signo',
            valors: 1,
            effect: `Sua lança é particularmente móvel e fácil de usar, 
            e você consegue dirigir os ataques dela de forma ainda mais certeira que o normal.<br /> 
            Se um inimigo conseguir zerar o dano de uma rolagem de um 
            ataque normal usando uma <i>Manobra Evasiva</i>, você pode, <strong>uma vez por rodada</strong>, 
            atacar ele novamente. Nesse caso,
            a sua rolagem de ataque passa a ser de <strong>Agilidade + Fantasma Nobre</strong>.
            `
          },
          {
            name: 'Predador',
            valors: 1,
            effect: `Sua lança é como os dentes de um animal feroz; 
            se a presa está encurralada, esse será o fim.<br /><br />
            Se você atacar normalmente um inimigo que esteja sob <strong>cobertura</strong>, 
            ele não poderá rolar nenhuma <i>Manobra Evasiva</i> para evitar o seu dano. 
            `
          },
        ].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
    
          return -1;
        })
      },
      {
        name: 'Faca',
        valorSkills: [
          {
            name: 'Alta Frequência',
            valors: 1,
            effect: `Sua faca sobrecarrega com poder, se aquece a temperaturas altíssimas 
            ou vibra a velocidades amedrontadoras no momento em que você a preenche com sua energia; 
            este efeito perdura por mais alguns minutos, e faz com que o seu próximo 
            ataque carregue uma pequena parcela daquele poder.<br /><br />
            <i><strong>Aumente</strong> seu Valor Inicial em <strong>+10</strong> 
            na sua próxima <i>Manobra Ofensiva</i> se você usou um <strong>Burst of Power</strong> 
            no seu turno anterior, mas apenas se você não está ativando o recurso novamente.</i>             
            `
          },
          {
            name: 'Fio da Navalha',
            valors: 3,
            effect: `Seu Noble Phantasm é simplesmente mortal; atingir um ponto fraco ou aplicar um golpe certeiro 
            em um adversário resultará em um ferimento decisivo.<br /><br />
            <strong:Dobre</strong> o seu multiplicador de <strong>dano crítico</strong> 
            referente ao seu Rank no seu Parâmetro <strong>Sorte</strong>.<br /><br />
            <i>Essa habilidade apenas é aplicada por um golpe crítico natural e não é considerada 
            por um crítico forçado usando <strong>Burst of Power</strong>.</i>        
            `
          },
          {
            name: 'Perfeita para o Combate',
            valors: 2,
            effect: `Sua faca já esteve ao seu lado em inúmeras situações e através dos mais variados 
            campos de batalha, e nunca lhe decepcionou; muito mais que uma pequena lâmina, 
            ela é na sua opinião, tudo que você precisa para vencer uma luta.<br /><br />
            Quando executar uma <i>Manobra Ofensiva</i> usando esse Fantasma Nobre, 
            você deve rolar <strong>2 dados</strong> equivalente aos seus valores de ataque ao invés de 1.         
            `
          },
          {
            name: 'Brutalidade',
            valors: 1,
            effect: `Sua faca está disfarçada como meramente uma arma secundária, quando na verdade, 
            você está apenas esperando para que a vítima apresente o momento perfeito para ela se revelar 
            como seu trunfo. Nesse caso, você afioou seus reflexos para fechar qualquer chance de fuga de um 
            inimigo enquanto estão lutando.<br /><br /> 
            Para que essa Habilidade de Valor possa ser usada, sua faca <strong>NÃO</strong> 
            pode ser um dos seus Fantasmas Nobres <strong>ativos</strong>; 
            Se um inimigo usar a <i>Manobra Evasiva "Esquivar"</i> contra uma das suas <i>Manobras Ofensivas</i>, 
            você pode, imediatamente após o dano final ser calculado, aplicar um ataque normal usando essa faca, 
            e causar dano <strong>direto aos Pontos de Vida</strong> desse inimigo.<br /><br />
            <strong>Você só pode usar essa habilidade uma vez por inimigo.</strong>
            `
          },
          {
            name: 'Fatalidade',
            valors: 1,
            effect: `Sua faca está disfarçada como meramente uma arma secundária, quando na verdade, 
            você está apenas esperando para que a vítima apresente o momento perfeito para 
            ela se revelar como seu trunfo. Nesse caso, ela é especialmente preparada para vir 
            quando o inimigo forma uma guarda usando a arma dele…<br /><br /> 
            Para que essa Habilidade de Valor possa ser usada, sua faca <strong>NÃO</strong> 
            pode ser um dos seus Fantasmas Nobres <strong>ativos</strong>; 
            Se um inimigo usar a <i>Manobra Evasiva "Aparar"</i> contra uma das suas <i>Manobras Ofensivas</i>, 
            você pode, imediatamente após o dano final ser calculado, aplicar um ataque normal usando essa faca, 
            e causar dano <strong>direto aos Pontos de Vida</strong> desse inimigo.<br /><br />
            <strong>Você só pode usar essa habilidade uma vez por inimigo.</strong> 
            `
          },
          {
            name: 'Dama Sorte',
            valors: 2,
            effect: `Sua faca é um amuleto de grande poder, com a única função de tentar reunir 
            toda a sorte do mundo ao seu favor. Você não encontra dificuldades em conseguir 
            enterrar a lâmina dela em pontos fracos das suas vítimas.<br /><br /> 
            Enquanto estiver equipado com esse Fantasma Nobre, o <strong>Valor Inicial</strong> 
            para todas as suas rolagens de <i>Manobras Ofensivas</i> passam agora a usar o seu Parâmetro <strong>Sorte</strong>. 
            `
          },
        ].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
    
          return -1;
        })
      },
      {
        name: 'Machado',
        valorSkills: [
          {
            name: 'Força Pura',
            valors: 1,
            effect: `Seu machado é feito de forma mais rude e crua, porém, 
            um golpe dele entrega um peso ainda mais esmagador do que o normal.<br /><br /> 
            Quando conseguir uma rolagem máxima ao executar uma <i>Manobra Ofensiva</i>, 
            Você pode <strong>NÃO</strong> causar um <strong>Ataque Crítico</strong>, 
            mas no lugar, fazer esse ataque ser direto nos <strong>pontos de vida</strong> desse inimigo.
            `
          },
          {
            name: 'Juggernaut',
            valors: 2,
            effect: `Seu machado instiga em você um senso de imparável poder; enquanto o empunha, 
            e sua vitalidade está no topo, você luta como se não pudesse ser detido.<br /><br />
            Se os seus <strong>Pontos de Vida</strong> estão no <strong>máximo</strong>, 
            você pode rolar o <strong>dobro</strong> de dados que você rolaria normalmente 
            para executar qualquer <i>Manobra Evasiva</i>, desde que esteja equipado com esse Fantasma Nobre. 
            `
          },
          {
            name: 'Impulso Alfa',
            valors: 2,
            effect: `Seu machado é particularmente efetivo quando usado para atingir 
            pontos chaves de um oponente que tenha atacado você, 
            mas atingido nada além do ar; Costas expostas, pescoços desprotegidos, costelas sem proteção… 
            Se a oportunidade surgir, seu machado fará o trabalho.<br /><br />
            Quando você usar a <i>Manobra Evasiva "Esquivar"</i> para defender uma <strong>Manobra Ofensiva</strong> 
            de um inimigo, e reduzir o dano dessa a zero, no seu próximo turno você pode aplicar 
            <strong>+1 ataque normal</strong> contra esse inimigo, e adicionar o Valor Inicial do seu 
            Parâmetro <strong>Agilidade</strong> a todas as suas rolagens durante aquele turno. 
            `
          },
          {
            name: 'Poder Ômega',
            valors: 2,
            effect: `Seu machado te possibilita empregar uma técnica de deflexão de 
            golpes particularmente devastadora; quando essa arma colide contra a arma do adversário, 
            muitas vezes, a guarda do adversário ficará completamente exposta.<br /><br />
            Quando você usar a <i>Manobra Evasiva "Aparar"</i> para defender uma <strong>Manobra Ofensiva</strong> 
            de um inimigo, e reduzir o dano dessa a zero, no seu próximo turno você pode aplicar 
            <strong>+1 ataque normal</strong> contra esse inimigo, e adicionar o Valor Inicial do seu 
            Parâmetro <strong>Resiliência</strong> a todas as suas rolagens durante aquele turno.           
            `
          },
          {
            name: 'Efeito em Massa',
            valors: 3,
            effect: `Seu machado é um símbolo de força e pureza em combate; 
            não há finesse com ele, apenas uma dolorosa verdade feita de ferro e sangue jorrando.<br />
            Seu Valor Inicial, para qualquer <i>Manobra Ofensiva</i>, sempre é considerado Força.<br /> 
            Quando atacar normalmente usando esse Fantasma Nobre, 
            ao invés de rolar dois Parâmetros de <strong>ataque</strong>, 
            role <strong>1 dado</strong> para cada rank em <strong>Força</strong> que possuir, 
            sendo que esses dados são equivalentes ao Rank atual.        
            `
          },
        ].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
    
          return -1;
        })
      },
      {
        name: 'Arco',
        valorSkills: [
          {
            name: 'Orgulho de Vanadis',
            valors: 2,
            effect: `Seu arco é particularmente bom quando usado as distâncias mais impossíveis. 
            Aliado a seus olhos treinados a ponto da perfeição, se você avista um alvo, mesmo a quilômetros, 
            sua flecha não só o alcançará, mas será ainda mais mortífera.<br /><br />
            Se você atacar um inimigo que esteja a, no mínimo, <strong>12m</strong> da sua posição atual, 
            aumente seu Valor Inicial em <strong>+10</strong> para qualquer <i>Manobra Ofensiva</i> 
            que você executar contra ele.
            `
          },
          {
            name: 'Flechas Deedlit',
            valors: 2,
            effect: `Com seu arco, sorte não é um fator; se um ponto fraco for perfurado 
            por uma flecha disparada por ele, o estrago extra é um mérito da sua incrível mira.<br /><br /> 
            Quando conseguir um <strong>Ataque Crítico</strong> em uma <i>Manobra Ofensiva</i> 
            usando esse Fantasma Nobre, use o seu Parâmetro <strong>Fantasma Nobre</strong> como se fosse o 
            seu Parâmetro <strong>Sorte</strong>. 
            `
          },
        ].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
    
          return -1;
        })
      },
      {
        name: 'Arma de Fogo',
        valorSkills: [
          {
            name: 'Vigilância',
            valors: 2,
            effect: `Seu firearm está sempre a postos para alvejar os inimigos 
            que cometem a loucura de tentar chegar até você. Ele é confortável de manter na posição, 
            ou é fácil de disparar de forma surpresa e inesperada.<br /><br /> 
            Você pode usar esse Fantasma Nobre para atacar um inimigo 
            que se aproxime de você; assim que ele chegar <strong>a menos de 3m</strong>, 
            você pode realizar um ataque normal contra esse inimigo.<br /><br />
            Você pode utilizar essa habilidade <strong>1 vez por rodada</strong>.<br /><br />
            Essa habilidade só pode ser ativada se o inimigo <strong>se aproximar</strong>; 
            ela não pode ser usada para outras situações. 
            `
          },
          {
            name: 'Dragunov',
            valors: 2,
            effect: `Seu firearm é desenhado para segurar posições importantes e 
            conter o avanço do adversário, ou para que você encontre o ponto perfeito no campo de batalha 
            e faça chover chumbo derretido na direção deles, enquanto são alvejados, às vezes, 
            sem saber da onde os tiros vêm.<br /><br />
            Desde que você esteja sob o efeito de <strong>cobertura</strong>, adicione na rolagem 
            de <strong>qualquer</strong> <i>Manobra Ofensiva</i> que fizer usando esse Fantasma Nobre 
            um dado no valor do seu Parâmetro <strong>Resiliência</strong>.
            Adicione também seu Parâmetro <strong>Resiliência</strong> ao Valor Inicial de todos os seus ataques.               
            `
          },
          {
            name: 'Sidearm',
            valors: 1,
            effect: `Seu firearm é compacto e possui um modelo desenhado para ser usado com apenas uma mão; 
            geralmente ele é uma pistola, revólver ou submetralhadora. Isso traz a ele algumas pequenas vantagens 
            interessantes, mas não diminui o poder dele; afinal, ele ainda é o tesouro divino de um Servant.<br /><br /> 
            Esse Fantasma Nobre ocupa apenas <strong>uma</strong> das suas mãos, deixando sua outra mão livre.<br />
            Você pode usar o recurso <strong>Checkmate</strong> como uma <i>Manobra de Reação</i> 
            para guardar ou sacar esse Fantasma Nobre.       
            `
          },
          {
            name: 'Duraframe',
            valors: 1,
            effect: `Seu firearm é surpreendentemente resistente ao impacto, 
            e suporta quantidades cômicas de punição. Ele facilmente pode ser usado 
            para aparar golpes vindos em sua direção de inimigos que lhe surpreenderam 
            ou passaram por suas coberturas.<br /><br /> 
            Você pode usar esse Fantasma Nobre para realizar a <i>Manobra Evasiva "Aparar"</i> normalmente.
            `
          },
          {
            name: 'Fogo Móvel',
            valors: 2,
            effect: `Sua arma tem uma função automática, ou você tem uma 
            técnica particularmente veloz para dispará-la. 
            Quando você se move, se tiver visão do inimigo, você pode acelerar o 
            processo de alvejá-lo com um momentum.<br />
            Quando executar uma <i>Manobra de Movimento</i>, você pode escolher <strong>1 inimigo</strong> 
            que esteja no seu campo de visão e aplicar um ataque normal nele, enquanto se move.<br /><br /> 
            Use seu Parâmetro <strong>Agilidade</strong> no lugar de <strong>Mana</strong> para efetuar esse ataque.
            `
          },
          {
            name: 'Queima Roupa',
            valors: 2,
            effect: `Sua firearm, embora não necessariamente seja feita para isso, 
            tem o coice do cavalo de seis pernas de Odin; Se um inimigo for atingido 
            por ele a uma distância curta, é muito possível que receberá um estrago ainda maior do que se mantivesse distância. 
            Se você usar esse Fantasma Nobre para atacar normalmente um inimigo que esteja a distância de ataque de uma arma corpo-a-corpo, adicione +10 ao seu Valor Inicial para esse ataque. 
            Um inimigo que receba dano desse ataque não pode executar uma Manobra de Movimento no próximo turno dele. 
            Essa habilidade não afeta o mesmo oponente mais de uma vez.        
            `
          },
        ].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
    
          return -1;
        })
      },
      {
        name: 'Cajados',
        valorSkills: [
          {
            name: 'Emanações de Esmeralda',
            valors: 3,
            effect: `Seu cajado é decorado com maravilhosas gemas verdes, ou possui uma única, pedra viridiana 
            que faz uma pequena brisa estar ao seu redor o tempo inteiro com sua aura mágica incrivel. 
            Essas esmeraldas  estão profundamente atunadas ao <strong>Elemento Eletricidade</strong> e irão 
            grandemente potencializar o poder dos Feitiços desse elemento, quando são conjurados através 
            desse cajado.<br /><br />
            Sempre que lançar um Feitiço do <strong>Elemento Eletricidade</strong>, que seja capaz de causar dano, 
            gaste apenas <strong>metade</strong> dos <strong>Pontos de Energia</strong> necessários para lançar o 
            Feitiço escolhido.<br /><br />
            Adicione também ao <strong>Valor Inicial</strong>, o Valor Inicial do seu Parâmetro <strong>Sorte</strong>.        
            `
          },
          {
            name: 'Sonhos de Safira',
            valors: 3,
            effect: `Seu cajado é decorado com lindas gemas azuis, ou talvez possua uma única pedra cerúlea, 
            que brilha com uma gentil luz da cor do céu ou do mar. Essas safiras estão profundamente 
            atunadas ao Elemento Gelo e irão grandemente potencializar o poder dos Feitiços desse elemento, 
            quando são conjurados através desse cajado.<br /><br />
            Sempre que lançar um Feitiço do <strong>Elemento Gelo</strong>, que seja capaz de causar dano, 
            gaste apenas <strong>metade</strong> dos <strong>Pontos de Energia</strong> necessários 
            para lançar o Feitiço escolhido.<br /><br />
            Adicione também ao <strong>Valor Inicial</strong>, o Valor Inicial do seu Parâmetro 
            <strong>Resiliência</strong>.
            `
          },
          {
            name: 'Rugidos do Rubí',
            valors: 3,
            effect: `Seu cajado é decorado com belíssimas gemas vermelhas, ou talvez possua uma única, 
            poderosa pedra carmesim na ponta. Esses rubis estão profundamente atunados ao 
            Elemento Fogo, e irão grandemente potencializar o poder dos Feitiços desse elemento, 
            quando são conjurados através desse cajado.<br /><br />
            Sempre que lançar um Feitiço do <strong>Elemento Fogo</strong>, que seja capaz de causar dano, 
            gaste apenas <strong>metade</strong> dos <strong>Pontos de Energia</strong> necessários para lançar 
            o Feitiço escolhido.<br /><br />
            Adicione também ao <strong>Valor Inicial</strong>, o Valor Inicial do seu <strong>Parâmetro Força</strong>. 
            `
          },
          {
            name: 'Fetish',
            valors: 2,
            effect: `Seu cajado é um objetivo de propriedades tenebrosas, malignas e nocivas. 
            Você pode oferecer tal construto como um sacrifício para aumentar as maldições 
            contidas nele e jogá-las sobre seus inimigos.<br /><br />
            Durante um combate, como <strong>ação livre</strong>, você pode <i>"quebrar"</i> esse Fantasma Nobre, 
            guardando ele em seu arsenal espiritual, mas não podendo usar ele até o fim desse combate.<br /><br /> 
            Um alvo <strong>escolhido</strong> deve rolar um teste de <strong>STR+NP</strong>, 
            contra um teste de <strong>MAN+NP</strong> seu. Caso você o <strong>ultrapasse</strong>, 
            o alvo agora passa a possuir <strong>Fraquezas contra Fogo, Raio, Gelo e Veneno</strong>, 
            fica incapaz de resistir a <strong>Feitiços de Maldição</strong> que causem 
            efeitos físicos ou psicológicos e perde qualquer efeitos positivos que possua, 
            além de não poder ser afetado por nenhum.<br /> 
            <i>Esse efeito só pode ser removido se caso o conjurador for incapacitado.</i>    
            `
          },
          {
            name: 'Adrenalina Espiritual',
            valors: 2,
            effect: `Através dos anos você acumulou grandes quantidades de Mana em seu cajado, 
            e preparou ele para servir como uma boa forma de recuperar suas energias místicas 
            durante um combate longo.<br /><br />
            Durante um combate, como <strong>ação livre</strong>, você pode gastar uma carga de 
            qualquer um dos seus recursos de batalha <i>(Burst of Power, Burst of Speed, Checkmate)</i>, 
            e regenerar <strong>40 Pontos de Energia</strong> para cada Rank no seu Parâmetro <strong>Fantasma Nobre</strong>, 
            imediatamente.
            `
          },
          {
            name: 'Truque de Mãos',
            valors: 1,
            effect: `Seu cajado tem uma surpresa esperando um inimigo que ataque você e não consiga atingi-lo.<br /><br />  
            Quando realizar uma <i>Manobra Evisa "Aparar"/"Bloquear"</i>, usando esse Fantasma Nobre 
            e reduzir o dano a <strong>0 com sucesso</strong>, 
            você pode atingir esse inimigo com uma magia qualquer como um Contra-Ataque. 
            A magia que você escolher não gasta nenhum ponto de Energia, mas deve pertencer a um <strong>Elemento</strong> 
            que você controla e não pode ser de um <strong>Rank maior</strong> que o seu Parâmetro 
            <strong>Fantasma Nobre</strong>.
            `
          },
          {
            name: 'Pérola da Pureza',
            valors: 1,
            effect: `Seu cajado é um objeto sagrado ou capaz de facilmente se atunar a forças divinas. 
            Quando um efeito de fechar feridas é conjurado através dele, ele é magnificado.<br /><br />
            Sempre que você lançar um <strong>Feitiço</strong> que tem como efeito curar Pontos de Vida, 
            role o <strong>dobro</strong> de dados que o efeito descreve.
            `
          },
          {
            name: 'Vanguarda Arcana',
            valors: 1,
            effect: `Seu cajado consegue gerar um campo de força mágico à sua frente. 
            Esse campo não é terrivelmente poderoso, mas pode ser um salva vidas 
            para um conjurador que se vê encurralado por um adversário.<br /><br />
            Enquanto estiver equipado com esse Fantasma Nobre, você pode usar a <i>Manobra Evasiva "Bloquear"</i>.<br /> 
            Nesse caso utilize seu Parâmetro <strong>Mana</strong> no lugar do seu Parâmetro <strong>Resiliência</strong>.   
            `
          },
          {
            name: 'Brasão Menor',
            valors: 1,
            effect: `Seu cajado é atunado a um elemento da natureza de forma profunda. 
            Ele é um receptáculo para os feitiços dessa linha, e enquanto você o empunha, 
            esse elemento está sob seu controle.<br /><br /> 
            Enquanto estiver equipado com esse Fantasma Nobre você pode conjurar feitiços 
            de um Elemento que escolher. O Elemento escolhido deve ser especificado quando essa 
            Habilidade de Valor é escolhida, e marcado nas especificações desse Fantasma Nobre.   
            `
          },
        ].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
    
          return -1;
        })
      },
      {
        name: 'Escudos',
        valorSkills: [
          {
            name: 'Ave Maria!',
            valors: 2,
            effect: `Seu Escudo é capaz de reagir ao perigo e saltar do seu arsenal espiritual 
            para te proteger com um comando de voz, na mesma hora.<br /><br />
            Você pode usar a <i>Manobra Evasiva "Bloquear"</i> como uma <i>Manobra de Reação</i> e equipar 
            um Fantasma Nobre "Escudo" que você possua, mas não está invocado naquela hora, imediatamente.<br /><br /> 
            O escudo irá passar a ser considerado como estando equipado na sua mão não hábil, 
            para todos os outros efeitos. 
            Se você possuir uma arma equipada na sua mão não hábil, ela será substituída pelo seu escudo.           
            `
          },
          {
            name: 'Decorações de Obsidiana',
            valors: 2,
            effect: `Seu escudo possui ou é totalmente fabricado por materiais especiais que são 
            capazes de anular ou reduzir grandemente o dano causado por Feitiços ofensivos.<br /><br />
            Quando esse Fantasma Nobre for usado para <strong>Bloquear</strong> um Feitiço que cause dano, 
            <strong>aumente o Valor Inicial</strong> dessa Manobra em <strong>+20</strong>.                          
            `
          },
          {
            name: 'Barricada',
            valors: 2,
            effect: `Seu escudo é projetado para especialmente lidar com flechas, tiros e disparos. 
            Protegido por ele, você é capaz de atravessar um campo de batalha inteiro sem ser sequer alvejado 
            uma vez.<br /><br /> 
            Enquanto estiver equipado com esse Fantasma Nobre, você é considerado estar sob o efeito de cobertura.                 
            `
          },
          {
            name: 'Coração Valoroso',
            valors: 1,
            effect: `Você aprendeu a empregar uma feroz técnica de arma e escudo que se faz valer de 
            movimentos vigorosos para afastar inimigos, intercalando entre ambas e potencializando as manobras.<br /><br /> 
            Aumente seu <strong>Valor Inicial</strong> em <strong>+10</strong> para a 
            <i>Manobra Evasiva "Bloquear"</i>, se durante essa rodada você usou a <i>Manobra Evasiva "Aparar"</i> 
            para defender um ataque de um inimigo.         
            `
          },
          {
            name: 'Panacea',
            valors: 1,
            effect: `Seu escudo é decorado com símbolos especiais ou feito com materiais raros 
            que tem a capacidade de impedir que seu corpo seja afetado por toxinas, 
            mesmo quando armas envenenadas ou maldições atingem seu corpo.<br /><br />
            Enquanto você estiver equipado com esse escudo, você não pode sofrer a condição negativa: "Envenenado".<br /><br />
            Você ainda <strong>recebe</strong> danos que possuem o elemento <strong>Veneno</strong>, 
            mas nenhum dos seus efeitos de dano adicional.        
            `
          },
          {
            name: 'Préludio',
            valors: 1,
            effect: `Seu escudo é decorado com símbolos especiais ou feito com materiais raros que 
            tem a capacidade de impedir que seu corpo seja afetado por toxinas, mesmo quando armas envenenadas 
            ou maldições atingem seu corpo.<br /><br />
            Enquanto você estiver equipado com esse escudo, você <strong>NÃO</strong> pode sofrer 
            a condição negativa <strong>"Envenenado"</strong>. Você ainda recebe danos que possuem o 
            elemento Veneno, mas nenhum dos seus efeitos de dano adicional. 
            `
          },
        ].sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
    
          return -1;
        })
      }
    ]
  }
export default [
    {
        name: 'Fraqueza aos Elementos',
        merits: 2,
        effect: `Você, por alguma razão, é facilmente ferido por um dos elementos mágicos. 
        Pode ter sido executado na fogueira, eletrocutado em um laboratório, caiu numa planície gelada ou foi envenenado por um conselheiro que acreditava ser confiável;
        não importa: ser atingido por esse elemento, de qualquer fonte, será <strong>devastador</strong> para seus Pontos de Vida.<br /><br />
        
        Escolha um elemento mágico: "Fogo", "Eletricidade", "Gelo" ou "Veneno".<br />
        Sempre que for atingido por uma <strong>"Manobra Ofensiva"</strong> que possua essa propriedade elemental,
        ou por um <strong>"Feitiço Ofensivo"</strong> que pertence a tal elemento: Você não rola nenhuma <i>"Manobra Evasiva"</i> para se defender desse ataque, e todo o dano que receber é <strong>dobrado</strong>. 
        `
    },
    {
        name: 'Ponto Fraco',
        merits: 2,
        effect: `Seu conto é conhecido por uma certa passagem: Sua vida foi findada quando foi atingido em uma certa parte do seu corpo.<br />  
        Talvez sua invencibilidade não o protegia ali, sua poderosa armadura possuía uma falha nesse ponto ou sua técnica de luta deixava esse lugar exposto a um contra-ataque;
        de qualquer forma, você carregou tal fraqueza junto com você para essa encarnação.<br />
        Um inimigo observador pode encontrar esse espaço quando o enfrenta em combate, ou mesmo te observando lutar de longe, e identificando ele, ganhará uma grande vantagem sobre você.<br /><br />
        
        Durante uma situação de combate, há duas maneiras de um inimigo sapiente descobrir o seu ponto fraco: Se ele ou um aliado inimigo rolar um golpe crítico contra você,
        ou se você rolar um resultado: <strong>"1"</strong> em qualquer uma de suas rolagens.<br />
        Se caso um desses cenários ocorrerem, você <strong>deve</strong> rolar um <strong>1d20</strong>; se obter um resultado <strong>menor que 11</strong>, você tem seu ponto fraco descoberto.<br /><br />
        
        Enquanto luta com seu ponto fraco exposto, suas <i>"Manobras Evasivas"</i> não podem mais causar uma <strong>"Rolagem Crítica"</strong>.<br />
        Inimigos que atacam você passam a ter <strong>50% de chance de atingi-lo criticamente</strong>; metade dos valores de qualquer Manobra Ofensiva que eles executarem contra você provocam uma "Rolagem Crítica".<br />
        Quando você é atingido criticamente, trate o parâmetro <strong>"Sorte"</strong> do atacante como se fosse de <strong>rank S</strong>.<br /><br />
        
        <strong><i>Se você, por alguma razão, tiver seu"Nome Verdadeiro" revelado, inimigos ganham conhecimento do seu ponto fraco sem precisar de testes</i></strong>. 
        `
    },
    {
        name: 'Apenas para Matar',
        merits: 2,
        effect: `Devido a sua vida, treinamento ou filosofia, quando você entra em um campo de batalha, você não tem a intenção de sair vivo.<br />
        Será você ou seu adversário, e você não teme finalmente encontrar a morte de um guerreiro que sempre sonhou.<br /><br />
        
        Sempre que entrar em uma situação de combate, você <strong>NÃO</strong> pode regenerar seus Pontos de Vida.
        Nem você, nem seus aliados podem usar técnicas ou itens que curem seus ferimentos, e qualquer um desses efeitos são <strong>negados</strong>.<br /><br />
        
        <strong><i>Você ainda pode se recuperar após os combates</i></strong>.
        `
    },
    {
        name: 'Reator Alter',
        merits: 2,
        effect: `Quando você se materializa, algo de errado ocorreu com a sua invocação,
        ou talvez isso possa ser um reflexo de sua natureza como um glutão em vida; de qualquer maneira, você consome muito mais energia que o normal para se manter ativo.<br />
        <strong>Você precisa constantemente recuperar sua energia</strong>, ou correr o risco de ficar inerte até que o faça.<br /><br />
        
        Realizar qualquer ação durante o combate custa a você <strong>10% dos seus Pontos de Energia máximos</strong>.
        Essas ações incluem: <i>se mover, atacar, usar uma estratagema ou técnica especial</i> e até mesmo usar <strong>manobras evasivas</strong>.<br /><br />
        
        Caso seus Pontos de Energia cheguem a "<strong>0 (zero)</strong>, você <strong>NÃO</strong> pode realizar nenhuma ação, até ter pelo menos, 10% deles regenerados.
        `
    },
    {
        name: 'Poluição Mental',
        merits: 1,
        effect: `O herói é assombrado pelo seu passado.
        Algo que aconteceu durante sua vida é a fonte de uma lembrança persistente, dolorosa e traumatizante, que o marcou tão profundamente que nem mesmo a morte foi capaz de fazer você se perdoar ou esquecer.<br />
        A cicatriz mental é uma rachadura na sua psique, e inimigos podem facilmente explorá-la.<br /><br />
        
        Quando você for alvo de um: "Feitiço", "Técnica Especial" ou "Estratagema" que cause um efeito de natureza <strong>psicológica</strong>,
        você <strong>NÃO</strong> poderá fazer nenhuma rolagem para resistir e receberá o efeito, diretamente.<br /><br />
        
        Se tais efeitos possuírem duração, essa duração é <strong>dobrada</strong>. 
        `
    },
    {
        name: 'Contra-sinergia',
        merits: 1,
        effect: `Você é particularmente ruim quando o assunto é uma certa característica sua.<br />
        É possível que seja fisicamente mais fraco que o normal, não seja muito saudável ou tenha reflexos diminuídos.<br />
        Em qualquer uma dessas situações, você não irá se dar muito bem quando precisar usar essa característica na realização de algum feito.<br /><br />
        
        <strong><i>Você possui o oposto de uma Proficiência. Indique essa fraqueza com um "-" no Parâmetro que deseja dificultar</i></strong>. 
        `
    },
    {
        name: 'Monstro Inocente',
        merits: 2,
        effect: `Esse Espírito Heroico é marcado por histórias de vilania, sadismo e crueldade.<br />
        É possível que todas elas sejam mentirosas, mas agora que retornou, fica difícil que uma parte dessa fama não desperte certos impulsos em você.<br />
        Você se sente compelido a realizar atos considerados covardes.<br /><br />
        
        Durante uma situação de combate, você <strong>NÃO</strong> pode escolher como alvo de uma <i>"Manobra Ofensiva"</i> um alvo que não tenha sido atacado anteriormente por pelo menos <strong>"1 (um)" de seus aliados.<br /><br />
        
        Se você se encontra sozinho contra um, ou um grupo de inimigos, você só irá atacar um inimigo caso seja atacado primeiro, e apenas inimigos que ataquem você.
        `
    },
    {
        name: 'Loucura',
        merits: 3,
        effect: `Para simplificar, você é basicamente, insano.
        Sua mente está sempre nublada com pensamentos discordes, confusos, e muitas vezes você é incapaz de falar ou compreender exatamente o que está acontecendo ao seu redor.
        Mesmo assim, você se esforça para permanecer funcional em um campo de batalha.<br /><br />

        No <strong>começo</strong> de <strong>CADA</strong> um dos seus turnos, você deve, obrigatoriamente, rolar <strong>1d20</strong>. Se tiver um resultado entre <strong>2 e 9</strong>,
        você <strong>NÃO</strong> poderá realizar uma <i>"Manobra de Movimento"</i> durante seu turno.<br />
        Se tiver um resultado entre <strong>10 e 16</strong>, você não poderá realizar uma <i>"Manobra Ofensiva"</i> durante o seu turno.<br />
        Um resultado entre <strong>17 e 20</strong> diz que seu turno <strong>seguirá</strong> normalmente. 
        Se rolar um resultado igual a <strong>"1 (um)"</strong>, <strong>você deve encerrar seu turno imediatamente</strong>.
        `
    }
]
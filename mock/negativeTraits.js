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
        ou se você rolar um resultado: <strong>1 (um)</strong> em qualquer uma de suas rolagens.<br />
        Se caso um desses cenários ocorrerem, você <strong>deve</strong> rolar um <strong>1d20</strong>; se obter um resultado <strong>menor que 11</strong>, você tem seu ponto fraco descoberto.<br /><br />
        
        Enquanto luta com seu ponto fraco exposto, suas <i>"Manobras Evasivas"</i> não podem mais causar uma <strong>"Rolagem Crítica"</strong>.<br />
        Inimigos que atacam você passam a ter <strong>50% de chance de atingi-lo criticamente</strong>; metade dos valores de qualquer Manobra Ofensiva que eles executarem contra você provocam uma "Rolagem Crítica".<br />
        Quando você é atingido criticamente, trate o parâmetro <strong>"Sorte"</strong> do atacante como se fosse de <strong>rank S</strong>.<br /><br />
        
        <strong><i>Se você, por alguma razão, tiver seu "Nome Verdadeiro" revelado, inimigos ganham conhecimento do seu ponto fraco sem precisar de testes</i></strong>. 
        `
    },
    {
        name: 'Vagaroso',
        merits: 1,
        effect: `Você sofre de uma terrível preguiça ou não tem desejo algum de iniciar um 
        combate dando <strong>100% de si mesmo</strong>, por achar que é apenas uma perda de tempo; 
        Afinal, o resultado já foi decidido quando ele começou.<br /> 
        Devido a isso, você não tem pressa nenhuma, e prefere aguardar a movimentação de todos os 
        seus aliados e inimigos antes de ir para cima.<br /><br />
         
        Quando um combate tem início, você não rola sua Iniciativa. Você é imediatamente colocado 
        como o <strong>último</strong> na ordem dos turnos.<br /><br /> 
        
        <strong>Você não pode usar nenhuma Técnica Especial no seu primeiro turno de combate</strong>`
    },
    {
        name: 'Gigaton',
        merits: 2,
        effect: `Você possui um corpo rígido, ou um equipamento pesado demais para sua força física. 
        É difícil para você se mover com fluidez, embora ainda consiga lutar efetivamente na 
        maior parte do tempo.<br />
        Atravessar um campo de batalha nessas condições é desafiador.<br /><br /> 
        
        Seu Deslocamento <strong>NUNCA</strong> pode ser maior que <strong>3 metros</strong> por rodada. 
        Efeitos que aumentam seu Deslocamento, ou que te fazem ignorar distâncias 
        <strong>NÃO</strong> podem ser aplicados em você.<br /><br /> 
        
        Você só pode usar cada uma das suas <i>Manobras Evasivas</i> <strong>uma</strong> vez por rodada. 
        Nenhum efeito que te permita usar elas mais vezes pode ser aplicado em você.  
        `
    },
    {
        name: 'Apenas para Matar',
        merits: 1,
        effect: `Devido a sua vida, treinamento ou filosofia, quando você entra em um campo de batalha, 
        você não tem a intenção de sair vivo.<br />
        Será você ou seu adversário, e você não teme finalmente encontrar a morte de um guerreiro 
        que sempre sonhou.<br /><br />
        
        Sempre que entrar em uma situação de combate, você <strong>NÃO</strong> pode regenerar seus 
        Pontos de Vida. Nem você, nem seus <strong>aliados</strong> podem usar técnicas ou itens 
        que curem <strong>seus</strong> ferimentos, e qualquer um desses efeitos são negados.<br /><br />
        
        <i>Você ainda pode se recuperar após os combates.</i><br />
        Se você possuir a <i>Origem Secreta: "Natureza Demoníaca"</i>, 
        sempre que realizar uma <i>Manobra Ofensiva</i>, você causa a si mesmo <strong>1d20</strong> de dano direto.         
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
        effect: `O herói é assombrado pelo seu passado. Algo que aconteceu durante sua vida 
        é a fonte de uma lembrança persistente, dolorosa e traumatizante, que o marcou 
        tão profundamente que nem mesmo a morte foi capaz de fazer você se perdoar ou esquecer.<br /> 
        A cicatriz mental é uma rachadura na sua psique, e inimigos podem facilmente explorá-la.<br /><br />
        
        Quando você for alvo de um <strong>Feitiço, Técnica Especial ou Estratagema</strong> 
        que cause um efeito de natureza psicológica, você <strong>NÃO</strong> poderá fazer nenhuma rolagem 
        para resistir e receberá o efeito, diretamente.<br /><br />
        
        <i>Se tais efeitos possuírem duração, essa duração é dobrada</i>.<br />
        <i>A Estratagema <stronog>"Corpo Natural"</strong> não tem efeito em você</i>.
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
        name: 'Angra Mainyu',
        merits: 3,
        effect: `Você foi amaldiçoado com o mais terrível de todos os destinos: 
        <i>Tornar-se a raiz de Todos os Males do Mundo</i>.<br />
        As marcas colocadas dentro da sua alma, e às vezes, no seu corpo, desviam toda a 
        misfortuna diretamente para você, e aos poucos, destroem sua saúde e seu psicológico.<br /> 
        Apenas alguém realmente valoroso é capaz de carregar esse estigma para a batalha e perseverar.<br /><br /> 
        
        Sempre que você mesmo, ou um aliado causar dano contra um, ou mais inimigos, 
        você <strong>DEVE</strong> rolar <strong>1d20</strong>, por inimigo atingido; 
        você recebe o resultado rolado como forma de dano.<br />
        <i>Esse dano não pode ser prevenido.</i><br /><br />

        Se o resultado for <strong>igual ou inferior a 3</strong>, 
        ele é multiplicado por <strong>10</strong>. 
        Se ele for igual ou inferior a 9, mas maior que 3, ele deve ser rerolado.
        `
    }
].sort((a, b) => {
    if (a.name > b.name) {
        return 1;
    }

    return -1;
})
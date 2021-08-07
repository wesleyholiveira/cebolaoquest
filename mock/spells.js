export default [
  {
    name: 'Calidez',
    rank: 'D',
    cost: 25,
    effect: `O conjurador manifesta uma chama um pouco maior que aquelas do feitiço Sussurro da Chama, 
    mas de cor dourada. Ela flutua de forma autônoma próxima do conjurador liberando um gentil calor 
    com a capacidade de curar ferimentos dos aliados do conjurador que estão próximos dela.<br />
    O conjurador e todos os aliados a menos de <strong>3m</strong> dele, recuperam <strong>1d10 Pontos de Vida</strong> 
    para cada rank do conjurador em seu parâmetro <strong>Fantasma Nobre</strong>.<br /><br />
    <i>Esse efeito pode ser mantido a partir da próxima rodada, e o conjurador não precisa ocupar uma das mãos com ele. Manter o feitiço exige que o conjurador gaste novamente o preço dos Pontos de Energia, por rodada, que ele deseja manter o efeito</i>.`,
    element: 'Fire'
  },
  {
    name: 'Raio de Calor',
    rank: 'C',
    cost: 20,
    effect: `Um feitiço geralmente conjurado com a ponta dos dedos ou através dos olhos; 
    um fino raio rubro, extremamente quente é disparado contra um alvo, que é perfurado ou entra em combustão.<br />
    Um alvo é atingido com <strong>1d8</strong> de dano para cada rank que o conjurador 
    possuir no parâmetro <strong>Fantasma Nobre</strong>.<br /><br /> 
    <i>Esse feitiço é disparado rapidamente; o alvo não pode rolar as Manobras Evasivas Aparar ou Esquivar para diminuir o dano</i>.`,
    element: 'Fire'
  },
  {
    name: 'Pirocinese',
    rank: 'C',
    cost: 30,
    effect: `O conjurador expele pelas palmas das duas mãos uma labareda de fogo 
    contínua como um lança-chamas. Ser atingido por elas por apenas poucos segundos causa 
    sérias queimaduras devido a seu intenso calor.<br />
    Um alvo é atingido com <strong>1d8</strong> de dano para cada rank no 
    parâmetro <strong>Mana</strong> do conjurador.<br /><br />
    
    <i>Se o alvo receber dano, as chamas irão cobrir seu corpo e queimá-lo ainda mais 
    causando um dano extra, <strong>direto</strong> aos pontos de vida de <strong>1d6</strong> 
    para cada rank que o conjurador possuir no parâmetro <strong>Fantasma Nobre</strong></i>.
    `,
    element: 'Fire'
  },
  {
    name: 'Conflagração',
    rank: 'C',
    cost: 35,
    effect: `O conjurador escolhe <strong>1 inimigo</strong> que esteja em seu campo de visão, 
    fazendo ele violentamente entrar em combustão com apenas um olhar.<br /> 
    As chamas o usam como epicentro para se espalharem por até mais <strong>2 inimigos</strong> 
    que estejam próximos ao primeiro causando <strong>1d12</strong> de dano para 
    cada rank que o conjurador possuir no parâmetro <strong>Fantasma Nobre</strong> no <strong>primeiro</strong> alvo, 
    e <strong>1d6</strong> de dano para cada rank que o conjurador possuir no parâmetro 
    <strong>Fantasma Nobre</strong> em cada um dos outros alvos.<br /><br />
    <i>Nenhum alvo pode reagir com a Manobra Evasiva Esquivar</i>.`,
    element: 'Fire'
  },
  {
    name: 'Bola de Fogo',
    rank: 'B',
    cost: 55,
    effect: `O conjurador produz de seu foco mágico ou palma da mão uma chama contínua que flui de forma 
    serpentina pelo ar. Essa chama persegue os alvos especificados pelo conjurador e os queima.<br />
    Escolha até <strong>3 inimigos</strong> e cause <strong>1d10</strong> de dano para cada rank que 
    o conjurador possuir no parâmetro <strong>Fantasma Nobre</strong>.<br /><br />
    <i>Nenhum alvo pode reagir com a Manobra Evasiva Bloquear ou Aparar</i>.<br />
    <i>O conjurador pode escolher alvos que estejam protegidos por cobertura, já que a chama irá se dobrar e persegui-los</i>.`,
    element: 'Fire'
  },
  {
    name: 'Raio Solar',
    rank: 'B',
    cost: 70,
    effect: `O conjurador consegue atrair um específico raio de calor do sol, ou usa a própria energia 
    para conjurar um, normalmente focalizando sobre um alvo.<br /> 
    A luz forma uma área circular de pelo menos <strong>5 metros</strong> de raio, 
    caindo exatamente sobre um alvo. A temperatura aumenta e em poucos segundos qualquer inimigo sob a luz 
    começa a queimar, dolorosamente.<br /> 
    Cause <strong>1d10</strong> de dano para cada rank que o conjurador possuir 
    no parâmetro <strong>Fantasma Nobre</strong> quando esse Feitiço atinge o alvo.<br /><br />
    
    <i>Se o alvo não se mover para fora do raio de ação dessa magia, na próxima rodada, 
    ele irá automaticamente receber <strong>1d12</strong> de dano para cada rank que o conjurador 
    possuir no parâmetro <strong>Fantasma Nobre</strong>.<br />O efeito acaba após isso</i>.`,
    element: 'Fire'
  },
  {
    name: 'Voo da Fenix',
    rank: 'A',
    cost: 90,
    effect: `O conjurador extrai as propriedades mitológicas do fogo como "aquele que dá a vida", 
    e converte num feitiço de ressuscitação.<br />
    <i>Escolha um aliado que tenha os <strong>Pontos de Vida reduzidos a 0</strong>; 
    ele recupera todos os pontos de vida e imediatamente <strong>ganha</strong> 1 turno.`,
    element: 'Fire'
  },
  {
    name: 'Escudo de Prometheus',
    rank: 'A',
    cost: 100,
    effect: `O conjurador produz com um gesto uma parede circular feita de energia plasmática, 
    brilhante como a superfície de uma estrela. A magia possui tanto calor que ela queima qualquer 
    coisa que se aproxima, até mesmo Fantasmas Nobres ou outros construtos energéticos.<br /><br />

    <i>Esse feitiço pode ser usado somente como uma <strong>Manobra de Reação</strong>; 
    Quando você ou um aliado for alvo de uma <strong>Técnica Especial</strong> ou <strong>Feitiço Ofensivo</strong>, 
    no lugar de rolar uma <strong>Manobra Evasiva</strong>, reduza o dano que seria recebido usando 
    esse Feitiço: Role <strong>Fantasma Nobre + 1d20</strong> para <strong>cada</strong> 
    rank no seu parâmetro <strong>Mana</strong>.<br /> 
    Esse feitiço possui rolagens críticas; nesse caso, seu parâmetro <strong>Sorte</strong> 
    é adicionado ao resultado total</i>.`,
    element: 'Fire'
  },
  {
    name: 'Flecha de Ishtar',
    rank: 'S',
    cost: 120,
    effect: `Um construto é criado na forma de uma coluna de plasma similar a um arpão, 
    flecha ou lança, que possui proporções amedrontadoras. Esse construto é disparado usando a 
    titânica quantidade de energia que foi investida nele, em uma linha reta à frente do conjurador.<br /> 
    Tudo que estiver no caminho do feitiço é incinerado, derretido ou simplesmente é desintegrado.<br /><br />
    
    Esse feitiço pode ser invocado apenas <strong>1 vez</strong> durante um combate.<br />
    Causa <strong>1d12</strong> de dano para cada rank do parâmetro <strong>Fantasma Nobre</strong> 
    do conjurador; alvos que receberem dano tem primeiro os Pontos de Vida reduzidos pela <strong>metade</strong>, 
    e apenas depois recebem o dano que receberam após se defenderem.<br /><br />
    <i>É impossível <strong>"Aparar"</strong> ou se <strong>"Esquivar"</strong> desse Feitiço</i>.`,
    element: 'Fire'
  },
  {
    name: 'Brumas Invisíveis',
    rank: 'D',
    cost: 20,
    effect: `Esse feitiço cobre uma área selecionada com gotículas de água e as transforma em várias 
    pequenas superfícies refletivas. A luz chega nelas e se desvia, tornando um aliado encantado ou 
    objeto virtualmente invisível.<br /><br />

    Um aliado ou o próprio conjurador podem se tornar <strong>invisíveis</strong>.<br /> 
    Enquanto estiver encantado, inimigos que não possuam maneiras de enxergar além da visão normal 
    não podem selecionar o encantado como alvos de qualquer ação ofensiva que selecione apenas um alvo.<br /> 
    <i>Executar uma <strong>Manobra Ofensiva</strong> ou usar <strong>Feitiço</strong> 
    de qualquer tipo irá revelar o encantado novamente</i>.`,
    element: 'Ice'
  },
  {
    name: 'Congelamento Emocional',
    rank: 'D',
    cost: 30,
    effect: `O conjurador converte energia gélida em energia psíquica e com essas mesmas propriedades 
    causa um <strong>choque mental</strong> em <strong>1 alvo</strong>.<br />
    Esse choque o torna letárgico, removendo sua energia e disposição.<br />
    Faça uma rolagem de <strong>Fantasma Nobre + Mana</strong>; o seu alvo deve fazer uma rolagem 
    defensiva de <strong>Força + Resiliência</strong>, com o valor inicial dele 
    sendo <strong>Resiliência</strong>. Se o alvo falhar, ele irá perder qualquer efeito positivo 
    que possuir, incluindo Estratagemas.<br />
    Todas as Estratagemas que ele possuir irão entrar em Recarga, e ele não poderá receber nenhum 
    efeito positivo por <strong>3 rodadas</strong>.<br /><br />
    <i>Esse feitiço é considerado um efeito psicológico</i>.`,
    element: 'Ice'
  },
  {
    name: 'Cone de Granizo',
    rank: 'C',
    cost: 40,
    effect: `O conjurador dispara pela palma da mão uma rajada de vento congelante. 
    O vento carrega consigo diversos pequenos pedaços de gelo que irão perfurar e bater em todos os alvos 
    que o conjurador conseguir atingir.<br /><br />

    <i>Esse feitiço causa <strong>1d8</strong> de dano por rank do parâmetro <strong>Mana</strong> contra 
    todos os alvos que estiverem próximos na frente do conjurador até uma certa distância.<br />
    Esse feitiço não pode ser <strong>Aparado</strong></i>.`,
    element: 'Ice'
  },
  {
    name: 'Congelamento Instantâneo',
    rank: 'C',
    cost: 30,
    effect: `Um alvo que esteja no campo de visão do conjurador é imediatamente coberto por uma 
    camada de gelo, causando uma dor insuportável enquanto o alvo começa a ser congelado de fora para dentro.<br />
    Um alvo é atingido com <strong>1d8</strong> de dano para cada rank no parâmetro 
    <stroong>Fantasma Nobre</strong> do conjurador. Se receber dano, após rolar suas <i>Manobras Evasivas</i>, 
    ele receberá um dano extra, que não pode ser evitado de mais <strong>1d6</strong> de dano para 
    cada rank no parâmetro <strong>Fantasma Nobre</strong> do conjurador.<br /><br />
    <i>Esse Feitiço não pode ser Aparado ou Bloqueado</i>.`,
    element: 'Ice'
  },
  {
    name: 'Chuva de Prata',
    rank: 'C',
    cost: 40,
    effect: `O conjurador pode selecionar um enorme raio ao redor de si, uma área circular de pelo menos 20 metros de raio; 
    ele fará cair uma chuva, densa com Ether, nessa área. O Ether misturado com a refrescante água da chuva 
    gentil irá fazer fechar os ferimentos do conjurador e de todos os seus aliados.<br />
    Todos dentro do raio de efeito do feitiço regeneram <strong>1d12</strong> de Pontos de vida para cada 
    rank no parâmetro <strong>Mana</strong> do conjurador.<br /><br />

    A chuva é mantida por mais uma rodada, não atrapalhando o próximo turno do conjurador e regenerando 
    mais <strong>1d6</strong> de Pontos de vida para cada rank no parâmetro <strong>Mana</strong> do conjurador</i>.`,
    element: 'Ice'
  },
  {
    name: 'Muro de Gelo',
    rank: 'B',
    cost: 35,
    effect: `O conjurador ergue, usando sua própria energia e a água no ar, uma parede feita de gelo, 
    de cor branca azulada. Ela pode alcançar até <strong>8 metros</strong> de altura e <strong>10 metros</strong> 
    de comprimento, e é muito grossa; a resistência dela é semelhante à do concreto.<br />
    O conjurador precisa somente estar vendo a área que ele deseja criar o construto e ele irá surgir, 
    imediatamente, tendo as especificações escolhidas pelo conjurador.<br /><br />

    <i>A muralha pode servir como cobertura contra ataques remotos e irá obstruir a visão de todos 
    os inimigos que estão do outro lado dela</i>.`,
    element: 'Ice'
  },
  {
    name: 'Lança de Gelo',
    rank: 'B',
    cost: 70,
    effect: `Um construto na forma de uma estaca enorme feita de gelo, de cor branca azulada é criada, 
    flutuando próximo ou sobre o conjurador. Ela é atirada como que por telecinese contra um alvo, 
    perfurando-o, e causando uma <i>"explosão"</i> de gelo e frio uma vez que está alojada no inimigo.<br />
    Um alvo é atingido com <strong>1d10</strong> de dano para cada rank no 
    parâmetro <strong>Fantasma Nobre</strong> do conjurador.<br /><br />

    <i>O gelo possui propriedades perfurantes incríveis; um alvo que tenha usado as 
    <strong>Manobras Evasivas: "Aparar"/"Bloquear"</strong> para tentar se defender 
    será atingido criticamente: qualquer resultado <strong>superior<strong> a <strong>6 (seis)</strong> 
    é considerado uma <strong>Rolagem Crítica</strong>; Use as regras padrão para rolagens críticas</i>.`,
    element: 'Ice'
  },
  {
    name: 'Flores de Tundra',
    rank: 'B',
    cost: 65,
    effect: `O conjurador atuna sua mágica com a água na atmosfera do ambiente, e passa a manipulá-la com grande controle. 
    Ele consegue criar estacas de gelo que saíram do chão para cortar e ferir agressores, com puro 
    reflexo reativo.<br />
    Quando usado, esse Feitiço confere uma condição positiva para o conjurador ou um aliado, 
    que se manifesta na forma de uma aura congelante, expelindo uma fraca névoa gélida do corpo do encantado.<br />
    Se um inimigo se mover na direção do encantado para atacar com uma <strong>Manobra Ofensiva: "corpo-a-corpo"</strong>, 
    ele será imediatamente atingido com <strong>1d10</strong> de dano para cada rank no parâmetro 
    <strong>Fantasma Nobre</strong> do conjurador devido a um pontiagudo espinho de gelo que surgirá 
    do chão e o perfurará.<br />
    Sua <strong>Manobra de Movimento</strong> se encerra se caso ele <strong>falhar</strong> em reduzir 
    o dano a 0 com uma <strong>Manobra Evasiva: "Esquivar"</strong>.<br /><br />

    <i>Você pode produzir um número de espinhos <strong>igual</strong> 
    aos seus ranks no seu parâmetro <strong>Mana</strong>.<br />
    Esse Feitiço é considerado um <strong>Feitiço Ofensivo</strong> apesar do efeito</i>.`,
    element: 'Ice'
  },
  {
    name: 'Bola de Neve',
    rank: 'A',
    cost: 100,
    effect: `O conjurador fabrica uma esfera branca, similar a uma bola de neve, de tamanho médio entre 
    as mãos. Embora pareça macia e feita de apenas neve, ela é na verdade um objeto pesado, 
    carregado de mana de gelo.<br />
    O conjurador arremessa a esfera, e ela irá rolar na direção de um inimigo, esmagando ou causando 
    um massivo dano concussivo gélido.<br />
    Cause <strong>1d10</strong> para cada rank que o conjurador possuir 
    no parâmetro <strong>Mana</strong> contra 1 alvo.<br /><br />

    <i>A esfera irá permanecer invocada no campo de batalha, e irá atingir o mesmo alvo, 
    ou um outro alvo escolhido pelo conjurador por <strong>1d12</strong> para cada rank que o 
    conjurador possuir no parâmetro <strong>Fantasma Nobre</strong>, e uma terceira vez na rodada seguinte 
    por <strong>1d20</strong> para cada rank que o conjurador possuir no parâmetro 
    <strong>Fantasma Nobre</strong>, a bola de neve desaparecendo em um estouro de cristais brilhantes</i>.`,
    element: 'Ice'
  },
  {
    name: 'Gotterdammerung',
    rank: 'S',
    cost: 140,
    effect: `Esse feitiço é iniciado com um gesto do conjurador que emite algum som: Um assovio, 
    o bater das palmas, o som de uma bota atingindo o chão…<br />
    No instante seguinte, todo o calor num círculo que ocupa um raio de pelo 
    menos <strong>30 metros</strong> é comprimido e isolado em um único ponto do 
    tamanho da cabeça de um alfinete.<br /><br />
     
    A área ao redor é simplesmente transformada em um deserto gélido de zero absoluto, e o frio supremo do 
    calor sendo violentamente removido do local causa <strong>1d20</strong> de dano para cada 
    rank do parâmetro <strong>Fantasma Nobre</strong> do conjurador; os inimigos tem a opção de se 
    defender fazendo uma rolagem de <strong>Resiliência + Sorte</strong>, com o Valor Inicial sendo 
    <strong>Resiliência</strong>. <strong>Nenhuma</strong> outra <i>Manobra Evasiva</i> 
    pode ser usada como resposta.<br /><br />
     
    Inimigos que recebam dano são cobertos de gelo e não poderão, durante o próximo turno, 
    realizar uma <i>Manobra de Movimento</i> ou <i>Manobras Ofensivas</i>. 
    Se forem alvos de outros ataques, não poderão fazer <i>Manobras Evasivas</i> para se defender.<br /><br />
    
    O calor que foi sugado permanece sob o controle do conjurador como uma pequena esfera de fogo e 
    pode ser lançado contra <strong>1 inimigo</strong> no turno seguinte. Quando liberado, ele 
    irá simplesmente reduzir a cinzas a vítima, atingido pelas chamas que produzem calor similar 
    ao núcleo de um planeta.<br />
    Um alvo recebe <strong>1d20</strong> de dano para cada rank do parâmetro 
    <strong>Mana</strong> do conjurador, por elemento fogo. Assim como a parte principal do Feitiço, 
    o inimigo tem a opção de se defender fazendo uma 
    rolagem de <strong>Resiliência + Sorte</strong>, com o Valor Inicial sendo 
    <strong>Resiliência</strong>. Nenhuma outra <i>Manobra Evasiva<i> pode ser usada como resposta. 
    Caso a explosão seja direcionada contra um alvo congelado, ele tem os <strong>Pontos de Vida reduzidos a 0</strong>.<br /><br />

    <i>Esse feitiço pode ser invocado apenas 1 vez durante um combate</i>.`,
    element: 'Ice'
  },
  {
    name: 'Choque de Medo',
    rank: 'D',
    cost: 25,
    effect: `O conjurador grita ou sopra na direção de um alvo, e o vento da ação se expande com força, 
    jogando esse alvo no chão e causando pequenas faíscas elétricas a surgirem de sua pele.<br />
    O alvo é compelido de um medo e pânico inexplicável enquanto a eletricidade 
    corre dentro de seus neurônios, atrapalhando seus pensamentos.<br />
    Faça uma rolagem de <strong>Fantasma Nobre + Mana</strong>, enquanto o alvo tenta vencer sua 
    rolagem com <strong>Resiliência + Sorte</strong>, com o Valor Inicial sendo <strong>Resiliência</strong>.<br /> 
    Se falhar, o alvo agora está em pânico. Ele não pode realizar <i>Manobras Ofensivas</i> contra você. 
    Essa condição negativa dura um número de rodadas equivalente ao seu parâmetro <strong>Fantasma Nobre</strong>.<br /><br /> 
    
    <i>Esse feitiço é considerado um efeito psicológico</i>.`,
    element: 'Electric'
  },
  {
    name: 'Vento Gentil',
    rank: 'D',
    cost: 20,
    effect: `Usando o conjurador como centro do efeito, uma gentil brisa é 
    soprada em um raio de <strong>5 metros</strong> ao redor dele, carregando propriedades curativas.<br /><br />

    <i>Todos os aliados do conjurador que estiverem na área vão ser purificados de <strong>qualquer</strong> 
    condição negativa não psicológica que possuírem</i>.`,
    element: 'Electric'
  },
  {
    name: 'Descarga Elétrica',
    rank: 'C',
    cost: 30,
    effect: `Faíscas elétricas de cor azul ou verde irão crepitar pelo braço do conjurador, 
    correndo até a mão onde será expelida pela ponta dos dedos na forma de uma corrente elétrica 
    que lembra um pequeno relâmpago.<br />
    O Feitiço causa <strong>1d8</strong> de dano por Rank que o conjurador possui no seu 
    parâmetro <strong>Mana</strong>. Se caso o alvo for pego de surpresa pelo conjurador, o alvo não 
    rola uma <i>Manobra Evasiva</i>.<br /><br />

    <i>Esse Feitiço não pode ser <strong>"Aparado"</strong></i>.`,
    element: 'Electric'
  },
  {
    name: 'Toque de Voltagem',
    rank: 'C',
    cost: 40,
    effect: `O conjurador carrega seu corpo com milhares de volts.<br />
    Eles não machucam o conjurador, mas através de um toque, ele pode descarregar a energia para um alvo.<br />
    Para causar o dano desse feitiço, o mago precisa tocar o alvo, ficando a distância de 
    um golpe <strong>corpo-a-corpo</strong>; estando na distância correta ele pode 
    rolar <strong>1d6</strong> de dano para cada rank de seu parâmetro <strong>Fantasma Nobre</strong>, 
    somado a qualquer modificador que possuir. O alvo deve rolar uma <i>Manobra Evasiva</i> normalmente.<br /><br />
    
    <i>Se o alvo for atingido, ele receberá <strong>1d10</strong> de dano direto para cada rank 
    no parâmetro <strong>Mana</strong> do conjurador</i>.`,
    element: 'Electric'
  },
  {
    name: 'Sobrecarga',
    rank: 'C',
    cost: 50,
    effect: `Esse feitiço envia um pulso elétrico pelo solo para todas as direções em um 
    raio circular de <strong>10 metros</strong>, com o conjurador como epicentro. 
    As emanações elétricas podem ser vistas como pequenos relâmpagos azuis ou amarelos, 
    crepitando pelo chão. Os alvos precisam evitar o solo para escapar do choque.<br />
    Causa <strong>1d8</strong> de dano para cada rank no parâmetro <strong>Fantasma Nobre</strong> 
    do conjurador. A única <i>Manobra Evasiva</i> que pode ser usada para se defender 
    desse Feitiço é: <strong>"Esquivar"</strong>.<br /><br />

    <i>O conjurador pode, no final do seu turno, escolher manter o efeito desse feitiço, 
    gastando novamente o valor de Pontos de Energia; se ele o fizer, 
    todos os alvos que foram pegos no efeito irão receber o dano novamente na próxima rodada e não 
    poderão usar <strong>Manobras de Movimento</strong> durante seus turnos.<br />
    O conjurador pode ativar essa condição <strong>1 vez</strong></i>.`,
    element: 'Electric'
  },
  {
    name: 'Desfibrilador',
    rank: 'C',
    cost: 50,
    effect: `Um choque na voltagem calculada perfeitamente para estimular um coração que tenha parado ou 
    que esteja fraco. Não apenas isso, mas a eletricidade consegue injetar um feitiço de aceleração 
    que fecha feridas abertas em segundos e revigora um aliado.<br /><br />

    <i>Escolha um aliado que tenha os <strong>Pontos de Vida</strong> reduzidos a <strong>0</strong>; 
    ele recupera <strong>50%</strong> dos Pontos de Vida, e não pode ser escolhido como alvo de um ataque 
    até o próximo turno dele</i>.`,
    element: 'Electric'
  },
  {
    name: 'Armadura de Rudra',
    rank: 'B',
    cost: 75,
    effect: `O conjurador se cobre com uma aura sobrecarregada, como se vestisse uma tempestade. 
    Faíscas elétricas estalam ao redor do corpo dele, emanando eletricidade que crepita e se solta 
    em direções aleatórias.<br />
    A energia automaticamente sente o perigo e reage por conta própria, formando correntes elétricas 
    maiores que voam contra qualquer inimigo que ameace o conjurador e os eletrocutam.<br /><br />

    O conjurador pode encantar a <strong>si mesmo</strong> ou um <strong>aliado</strong>. 
    Quando um inimigo escolhe o encantado como alvo de uma <i>Manobra Ofensiva</i> que seja remota, 
    ou com um Feitiço Ofensivo, o inimigo é imediatamente, antes de completar seu ataque, atingido 
    por um potente relâmpago mágico que se solta do encantado e causa <strong>1d10</strong> para cada 
    rank no parâmetro <strong>Fantasma Nobre</strong> do conjurador.<br /><br />

    O inimigo atingido deve imediatamente executar uma <i>Manobra Evasiva: "Bloquear"</i> se puder, ou, 
    rolar <strong>Resiliência + Agilidade</strong>, com o Valor Inicial sendo <strong>Resiliência</strong>. 
    Se não conseguir reduzir o dano a 0, a ação que ele iria executar é cancelada.<br />
    <i>Você pode produzir um número de relâmpagos <strong>igual</strong> aos seus ranks 
    no seu parâmetro <strong>Mana</strong>. Esse Feitiço é considerado um <strong>Feitiço Ofensivo</strong> 
    apesar do efeito</i>.`,
    element: 'Electric'
  },
  {
    name: 'Bobina de Tesla',
    rank: 'B',
    cost: 70,
    effect: `O conjurador faz eletricidade correr pelos braços, até as palmas e acumula a energia 
    entre as mãos. A seguir, ele dispara uma quantidade monstruosa de energia elétrica na direção 
    de um alvo, que surge como se fosse um feixe cercado por uma espiral.<br />
    Um alvo é atingido com <strong>1d10</strong> de dano para cada rank no parâmetro 
    <strong>Fantasma Nobre</strong> do conjurador.<br />
    <i>Esse Feitiço não pode ser <strong>"Aparado"</strong> ou <strong>"Bloqueado"</strong></i>.<br /><br />

    O conjurador pode preparar o Feitiço por <strong>1 turno</strong> fazendo isso o dano aumenta 
    para <strong>1d20</strong> para cada rank no parâmetro <strong>Fantasma Nobre</strong> do conjurador.`,
    element: 'Electric'
  },
  {
    name: 'Corrente de Relâmpagos',
    rank: 'B',
    cost: 90,
    effect: `Esse feitiço possui propriedades similares ao Feitiço Descarga Elétrica, 
    mas as faíscas produzidas são muito mais intensas enquanto o construto se forma.<br />
    Pelas pontas dos dedos de ambas as mãos do conjurador, correntes elétricas são liberadas 
    e em segundos estão sobre um alvo. Esse alvo se torna o epicentro de uma reação em cadeia, 
    em que outras faíscas elétricas irão se soltar e atingir qualquer inimigo <strong>próximo</strong> 
    do primeiro.<br />
    Até <strong>4 alvos</strong>, que estejam no campo de visão do conjurador e próximos uns dos outros 
    são atingidos por <strong>1d12</strong> de dano para cada rank que o conjurador 
    possuir no parâmetro <strong>Fantasma Nobre</strong>.<br />
    O conjurador pode manter o efeito durante a rodada que segue, e cada alvo recebe, 
    no começo do turno dele, mais <strong>1d12</strong> de dano para cada rank que o conjurador 
    possuir no parâmetro Mana, e não pode executar uma <i>Manobra de Movimento</i>, porém, 
    o conjurador precisa gastar a mesma quantia de <strong>Pontos de Energia</strong> para ativar esse efeito.<br /><br />
    
    <i>O Feitiço pode ser encerrado quando o conjurador desejar, ou até que o todos os alvos 
    tenham recebido o efeito secundário deste Feitiço</i>.`,
    element: 'Electric'
  },
  {
    name: 'Desintegrar',
    rank: 'A',
    cost: 80,
    effect: `O conjurador deve se concentrar com um gesto ou um olhar direto para um 
    Feitiço de efeito contínuo que esteja agindo sobre um encantado ou sobre o próprio campo 
    de batalha, e o fulmina com um raio eletrificado de cor verde ou azul; 
    Ele executa um ataque de <strong>Fantasma Nobre + Mana</strong>, e deve superar uma rolagem 
    que é igual a <strong>dois dados</strong> no valor do <strong>Rank do Feitiço</strong> 
    que está tentando destruir, aplicando modificadores como se esse fosse um <strong>Feitiço Ofensivo</strong>.<br /> 
    Se o valor que ele conseguir for <strong>maior</strong> que o valor rolado pelo Feitiço, 
    o efeito é imediatamente removido.<br /><br />

    <i><strong>Desintegrar</strong> pode ser usado contra <strong>Reality Marbles</strong>: 
    Nesse caso, eles são tratados como um Feitiço de <strong>Rank S</strong></i>.`,
    element: 'Electric'
  },
  {
    name: 'Chamar Trovão',
    rank: 'A',
    cost: 100,
    effect: `O conjurador irá fechar os olhos e se concentrar na imagem de uma tempestade, rugindo no céu 
    nublado. Tais nuvens irão se formar sobre o alvo que ele escolher e então, violentamente, 
    um relâmpago irá cair sobre esse alvo.<br />
    Cause <strong>1d12</strong> de dano para cada rank que o conjurador 
    possuir no parâmetro <strong>Fantasma Nobre</strong> contra <strong>1 alvo</strong>.<br /><br />
    
    <i>Esse Feitiço não pode ser <strong>"Aparado"</strong> ou <strong>"Bloqueado"</strong></i>.`,
    element: 'Electric'
  },
  {
    name: 'Tesouro de Indra',
    rank: 'S',
    cost: 140,
    effect: `Esse Feitiço é o conhecimento para invocar Vajra, o indestrutível esmagador de diamante, 
    na forma de uma arma conceitual.<br />
    Ele flutuará no ar, e constantemente irá descarregar relâmpagos e raios divinos sobre os inimigos 
    do conjurador, até que todos tenham sido destruídos.<br />
    A partir da rodada que esse Feitiço é usado, cause <strong>1d20</strong> de dano 
    para cada rank que possuir no parâmetro <strong>Fantasma Nobre</strong> contra um inimigo aleatório 
    que esteja no campo de batalha, em cada um dos seus turnos.<br />
    <i><strong>O Feitiço é autônomo</strong></i>.<br /><br />

    Esse dano encontra inimigos fora do campo de visão do conjurador, ou sob <strong>efeitos de invisibilidade</strong>.
    O Feitiço permanece ativo no campo, até que o 
    conjurador perca a consciência ou até que o combate acabe.<br /><br />

    <i>Esse feitiço pode ser invocado apenas <strong>1 vez</strong> durante um combate</i>.`,
    element: 'Electric'
  },
  {
    name: 'Envenenar',
    rank: 'D',
    cost: 25,
    effect: `A mais simples das maldições; o conjurador irá transformar o ar em uma pequena área que 
    possa ver, geralmente ao redor de um único inimigo, em uma nuvem de veneno. 
    O alvo surpreendido irá respirar a toxina e receber o efeito.<br />
    O conjurador irá atacar um alvo com <strong>1d6</strong> para cada rank que tiver em 
    seu parâmetro <strong>Fantasma Nobre</strong>, obrigando o alvo a rolar 
    <strong>Resiliência + Sorte</strong>, com o Valor Inicial sendo <strong>Resiliência</strong>.<br /><br /> 
    Se o alvo não conseguir superar o resultado, ele será <strong>Envenenado</strong>, 
    e a partir do próximo turno ele receberá uma quantia de dano 
    inevitável no valor de <strong>6-8-12-20-40</strong>; não aumentando após isso.`,
    element: 'Poison'
  },
  {
    name: 'Olhos da Serpente',
    rank: 'D',
    cost: 30,
    effect: `O conjurador irá olhar profundamente nos olhos do alvo, e iniciar o feitiço; 
    subitamente, uma sensação de medo e pânico irá preencher o inimigo, fazendo todos 
    os seus músculos ficarem rígidos.<br />
    O conjurador irá atacar um alvo com <strong>1d6</strong> para cada rank que tiver em seu 
    parâmetro <strong>Fantasma Nobre</strong>, obrigando o alvo a rolar 
    <strong>Resiliência + Sorte</strong>, com o Valor Inicial sendo <strong>Resiliência</strong>.<br />
    Se o alvo não conseguir superar o resultado, ele ficará <strong>Paralizado</strong>.<br /><br />
    
    Enquanto sob esse efeito, ele não pode realizar nenhuma <i>Manobra de Movimento</i> ou <i>Manobra Ofensiva</i>, 
    mas pode realizar <i>Manobras Evasivas</i> que não sejam a manobra <strong>Esquivar</strong>.<br />
    Ele deve repetir a rolagem no começo de cada turno dele, até conseguir superar a rolagem inicial do 
    conjurador, para poder se recuperar.<br /><br />

    <i>Esse é um efeito psicológico</i>.`,
    element: 'Poison'
  },
  {
    name: 'Olhar do Observador',
    rank: 'D',
    cost: 20,
    effect: `Uma luz sinistra, que pode ser das cores verde, laranja ou roxa, irá sair pelos 
    olhos do conjurador como uma lanterna. Assim que ela cai sobre os olhos de um alvo, 
    ele será tomado por um peculiar senso de esquecimento, e letargia mental, como uma exaustão.<br /> 
    Rituais e palavras de comando necessários para a 
    manifestação de magias se tornam particularmente difíceis de realizar.<br />
    O conjurador irá atacar um alvo com <strong>1d6</strong> para cada rank que tiver em 
    seu parâmetro <strong>Fantasma Nobre</strong>, obrigando o alvo a rolar 
    <strong>Resiliência + Sorte</strong>, com o Valor Inicial sendo <strong>Resiliência</strong>.<br /><br />

    Se o alvo não conseguir superar o resultado, ele ficará <strong>Distraído</i>. 
    Enquanto estiver sob esse efeito, ele não poderá usar nenhum tipo de <strong>Feitiço</strong>.<br />
    Ele deve repetir a rolagem no começo de cada turno dele, 
    até conseguir superar a rolagem inicial do conjurador, para poder se recuperar.<br /><br />

    <i>Esse é um efeito psicológico</i>.`,
    element: 'Poison'
  },
  {
    name: 'Dardos de Veneno',
    rank: 'D',
    cost: 20,
    effect: `O conjurador fabrica diversos pequenos espetos ou espinhos, similares a ferrões, 
    que irão flutuar sob a cabeça e com um gesto, eles irão voar contra um alvo e perfura-lo, 
    ao mesmo tempo que injetam um pouco de veneno nele.<br /><br />

    Esse Feitiço causa <strong>1d6</strong> de dano por rank no seu parâmetro <strong>Fantasma Nobre</strong>.<br /> 
    Um alvo que receba dano será <strong>Envenenado</strong> e a partir do próximo turno ele 
    receberá uma quantia de dano inevitável no valor de <strong>6-8-12-20-40</strong>; 
    não aumentando após isso.<br /><br /> 

    <i>O conjurador pode executar esse Feitiço como <strong>ação livre</strong>, desde que exista 
    pelo menos <strong>1 inimigo</strong> em seu campo de visão que esteja sob um efeito de envenenamento</i>.`,
    element: 'Poison'
  },
  {
    name: 'Ninho de Cobras',
    rank: 'C',
    cost: 40,
    effect: `O conjurador secreta das pontas dos dedos uma substância 
    gosmenta esverdeada ou de cor roxa. Os fios de veneno rapidamente se 
    transformam em serpentes, animadas por mágica.<br /><br />
    O conjurador pode comandar essas cobras para executar algumas ações diferentes:
    <ul>
      <li>
        Elas podem procurar e encontrar qualquer inimigo escondido, 
        atacando ele e causando <strong>1d8</strong> por rank de <strong>Mana</strong> do conjurador.<br />
        <i>Esse comando também ignora coberturas</i>.
      </li>
      <li>
        Elas podem permanecer junto do conjurador, e contra-atacar inimigos que 
        se aproximem para atacar ele a <strong>corpo-a-corpo</strong>, causando <strong>1d8</strong> 
        por nível de <strong>Mana</strong> do conjurador.
      </li>
      <li>
        O conjurador pode enviá-las para atacar como uma <i>Manobra de Reação</i> quando um aliado 
        causar dano a um inimigo.<br />
        O dano é de <strong>1d8</strong> por nível de <strong>Mana</strong> do conjurador.
      </li>
    </ul>
    <br />
    Uma serpente por rank do parâmetro <strong>Fantasma Nobre</strong> 
    é invocada quando você conjura esse Feitiço. Cada cobra pode tomar <strong>1 ação</strong>.<br />
    <strong>Qualquer</strong> ataque dessas cobras que cause dano a um inimigo irá 
    causar o efeito do <strong>Feitiço Envenenar</strong>.`,
    element: 'Poison'
  },
  {
    name: 'Sangue Derretidinho',
    rank: 'C',
    cost: 50,
    effect: `Com esse Feitiço o conjurador aprende a usar toxinas e ácidos para liquefazer 
    o próprio corpo, e transformá-lo em uma poça de sangue cáustico ou uma nuvem de gás.<br />
    O líquido ou o gás se movem a uma velocidade muito maior do que qualquer <strong>Espírito Heroico</strong> 
    pode ver ou reagir; em segundos o conjurador irá trocar de lugar, e reformar sua forma física, 
    em um espetáculo muito similar a um simples teletransporte.<br /><br />
    
    O conjurador, porém, pode ficar apenas alguns milésimos de segundos, e deve planejar o local da 
    sua transição: É um teletransporte que funciona apenas para distâncias curtas. 
    Uma vez que ele tenha visualizado o lugar aonde irá se reformar, 
    O conjurador se desmancha, viaja, e imediatamente se reforma no lugar que ele visualizou.<br /><br />
     
    Embora esse feitiço tenha uma distância máxima <strong>igual a visão</strong> do conjurador, 
    podendo chegar a <strong>cinco</strong> quilômetros em campo aberto, 
    mas sempre afetada por obstáculos no caminho, é possível que o conjurador consiga 
    viajar para lugares muito mais distantes usando visão eletrônica, como por 
    exemplo olhar para uma transmissão ao vivo em outro país e executar o feitiço, 
    ou olhar para o feed de uma câmera de segurança em uma sala, e imediatamente se reformar ali dentro.<br /><br />
    
    O conjurador pode levar com ele aliados ou até mesmo inimigos.<br />
    Ele sempre pode carregar um número 
    de criaturas vivas ou objetos que sejam maiores que seu próprio corpo igual ao seu rank no 
    Parâmetro <strong>Fantasma Nobre</strong>.<br /><br />
    
    Se o alvo do Feitiço for um inimigo, ou estiver resistindo ao Feitiço, o conjurador deve 
    rolar <strong>1d8</strong> para cada rank que possuir no Parâmetro 
    <strong>Fantasma Nobre</strong>, enquanto o alvo deve tentar resistir com os Parâmetros 
    <strong>Força + Sorte</strong>, com o Valor Inicial sendo <strong>Resiliência</strong>.<br />
    <i>Se ele falhar, ele será trazido para onde o conjurador desejar</i>.`,
    element: 'Poison'
  },
  {
    name: 'Corona de Infecção',
    rank: 'B',
    cost: 75,
    effect: `O conjurador irá atingir 1 alvo com um fino, brilhante, raio de energia venenosa, 
    geralmente das cores verde, roxa ou laranja, disparado pela ponta de um dedo, 
    mas pode também ser <i>"cuspido"</i> pela boca.<br />
    Esse ataque causa <strong>1d10</strong> para cada rank que possuir no Parâmetro 
    <strong>Fantasma Nobre</strong>, e é muito rápido, não podendo ser <strong>Esquivado</strong>.<br /><br />

    Um inimigo que receba dano é <strong>infectado</strong> por um poderoso <strong>vírus venenoso</strong>, 
    que se espalha para qualquer inimigo aliado que está próximo a ele.<br />
    O veneno causa <strong>12-16-24-40</strong> de dano <strong>direto</strong> durante 
    as <strong>5 rodadas</strong> que leva para chegar a seu ápice de dano.<br /><br />
    
    Os inimigos que <i>"pegam"</i> o vírus não podem resistir, e irão começar a receber o mesmo dano, 
    imediatamente em seus próximos turnos, desde que estejam em um raio 
    de <strong>5 metros</strong> próximos ao paciente zero.`,
    element: 'Poison'
  },
  {
    name: 'Letargia',
    rank: 'B',
    cost: 70,
    effect: `O conjurador lança esse feitiço como uma ilusão psíquica, que ataca diretamente a mente do alvo; 
    o inimigo verá o conjurador expelir correntes fantasmagóricas de algum lugar de seu corpo, 
    embora elas sejam apenas construtos psíquicos e não realmente tem uma presença física.<br />
    As correntes irão tentar se prender ao alvo, e ele deve vencer o conjurador em um 
    teste de <strong>1d10</strong> para cada rank que o conjurador possuir no Parâmetro <strong>Fantasma Nobre</strong>, 
    contra uma rolagem de <strong>Força + Resiliência</strong> dele, com o Valor Inicial sendo <strong>Resiliência</strong>.<br /><br />

    Se falhar no teste, o alvo recebe a condição <strong>Letárgico</strong>; seu corpo sente 
    como se um enorme peso tivesse sido colocado sobre ele, como se a gravidade tivesse sido aumentada…<br />
    Suas <i>Manobras de Movimento</i> ficam <strong>limitadas</strong> a apenas <strong>3 metros</strong>, 
    ele não pode usar a <i>Manobra Evasiva: "Esquivar"</i>.<br /> 
    Sempre que ele realizar uma rolagem, para qualquer finalidade, ele deve escolher apenas um dos 
    dois atributos que seriam rolados normalmente, e nenhuma rolagem pode ser uma <strong>Rolagem Crítica</strong>.<br /><br /> 
     
    <i>Esse Feitiço é considerado um efeito <strong>psicológico</strong>.<br />
    Ele tem uma duração de <strong>1 rodada</strpng> para cada rank que o conjurador 
    possuir no Parâmetro <strong>Mana</strong></i>.`,
    element: 'Poison'
  },
  {
    name: 'Reverter Toxinas',
    rank: 'A',
    cost: 80,
    effect: `O conjurador é capaz de usar sua mágica para converter venenos e maldições em efeitos opostos, 
    enviando uma onda psíquica circular com ele como epicentro, que banha o campo de batalha em um gentil 
    luz branca esverdeada.<br /><br />

    Todos os aliados do conjurador em uma área circular de <strong>20 metros</strong> ao redor do conjurador 
    são curados de qualquer condição física que eles possuírem. Alvos curados 
    tem seus <strong>Pontos de Vida</strong> regenerados completamente.<br />
    Todos os aliados se tornam <strong>imunes</strong> a condição de envenenamento por um número de 
    rodadas <strong>igual</strong> aos ranks do parâmetro <strong>Mana</strong> do conjurador.`,
    element: 'Poison'
  },
  {
    name: 'Choque Anafilatico',
    rank: 'S',
    cost: 125,
    effect: `O conjurador escolhe um alvo que esteja sob os efeitos da condição Envenenado; 
    os olhos dele se acendem com uma maliciosa luz enquanto ele sussurra palavras de poder.<br />
    O alvo escolhido então violentamente explode em uma substância venenosa, quantidades enormes de 
    ácido ou veneno escapando por todos os orifícios de seu corpo, se sobreviver, caso contrário, 
    ele apenas torna-se uma bomba tóxica que desintegra, espalhando seus conteúdos nocivos por toda a parte.<br /><br /> 
    
    Esse Feitiço só pode ser usado em um inimigo que esteja <strong>Envenenado</strong>; 
    Esse alvo recebe <strong>1d20</strong> de dano para cada rank que o conjurador possuir em seu 
    parâmetro <strong>Fantasma Nobre</strong>, e não poderá rolar suas 
    <i>Manobras Evasivas</i> para tentar resistir ao dano, sendo forçado a rolar 
    <strong>Resiliência + Sorte</strong>, com o Valor Inicial sendo 
    <strong>Resiliência</strong> para reduzir o dano.<br />
    Caso receba o dano inicial, ele receberá mais dano baseado no dano do veneno que o está afligindo; 
    sendo esse dano o dano final desse veneno.<br /><br />
    
    Se caso o alvo for destruído por esse feitiço, todos os inimigos que estavam em um 
    raio de <strong>5 metros</strong> próximos à vítima recebem <strong>1d20</strong> de dano para cada rank 
    que o conjurador possuir em seu parâmetro <strong>Mana</strong>, e podem apenas usar sua 
    <i>Manobra Evasiva: "Esquivar"</i> para tentar reduzir o dano.<br /><br />

    Todos que são atingidos pela explosão são <strong>imediatamente Envenenados</strong> recebendo um dano 
    contínuo de <stron>12-16-24-40</strong>, até caírem ou se curarem.<br />
    <i>Esse feitiço pode ser invocado apenas <strong>1 vez</strong> durante um combate</i>.`,
    element: 'Poison'
  },
  {
    name: 'Structural Grasp',
    rank: 'D',
    cost: 0,
    effect: `O Feitiço mais básico desse elemento. Permite ao conjurador 
    entender e perceber diversos detalhes sobre um objeto, mas principalmente, armas.<br />
    Apenas olhando para o objeto, o mago pode saber detalhes como se é ou não mágico, 
    os materiais que o compõem e se foi recentemente usado para um combate.<br />
    Tocar a peça permitirá que ele veja além, ganhando conhecimento sobre encantamentos com exatidão, 
    a quantidade de dano que eles podem causar e, se a peça for um 
    <strong>Fantasma Nobre Armamento Lendário</strong>, ele pode saber <strong>todas</strong> as suas Habilidades de Valor.<br /><br />
    
    Realizando um teste do Parâmetro <strong>Fantasma Nobre</strong>, ele pode adquirir essa 
    <i>"insight"</i> apenas por olhar após o Armamento tenha sido brandido pelo 
    menos <strong>1 vez</strong> no seu campo de visão.`,
    element: 'Sword'
  },
  {
    name: 'Reinforcement',
    rank: 'D',
    cost: 30,
    effect: `Esse Feitiço melhora um equipamento, reforçando ele em um sentido conceitual. 
    O conjurador compreende a maneira como essa peça foi construída, a intenção de seu design 
    e seu propósito como equipamento, e basicamente, faz uma espada <i>"ser mais espada"</i> através de sua magia.<br />
    O conjurador só pode usar esse Feitiço em um <strong>equipamento</strong> que ele puder <strong>tocar</strong>. 
    A partir do momento que ele usa esse Feitiço na peça, ela ganhará condições especiais e certas vantagens.<br /><br />
     
    Armas mundanas agora passam a ser consideradas <strong>Fantasmas Nobres</strong> de qualidade inferior; 
    eles não possuem <strong>Habilidades de Valor</strong>, mas podem ferir Phantasmals e Espíritos Heróicos, 
    note que nenhum Parâmetro é aumentado, mas as armas podem agora ferir tais criaturas.<br /> 
    Armas modernas que possuam muitos mecanismos não podem ser encantadas, mas armas de fogo mais simples, 
    como revólveres e rifles ainda podem se beneficiar desse efeito.<br /><br />
    
    Armas que já tinham um cunho mágico, ou Fantasmas Nobres Armamentos Lendários irão se fortalecer.<br />
    Eles passam agora a receber um bônus na sua chance de executar 
    uma <strong>Rolagem Crítica</strong>, diminuindo em <strong>-1</strong> o resultado necessário para tal.<br />
    <i>Rolagens que obtenham resultados mínimos, ao invés disso, 
    tem essa rolagem <strong>multiplicada</strong> por <strong>10</strong></i>.<br /><br />
    
    Os efeitos em uma arma mundana são permanentes, e permanecem até a peça ser despedaçada. 
    Em armas especiais , eles irão durar um número de rodadas igual aos ranks que o conjurador 
    possuir em seu parâmetro <strong>Mana</strong>.`,
    element: 'Sword'
  },
  {
    name: 'Projection',
    rank: 'C',
    cost: 50,
    effect: `O conjurador materializa uma arma, aparentemente, do nada. Elas geralmente tem a aparência 
    de uma peça idiotamente simples, feita de aço, e não possuem nenhuma decoração.<br />
    A arma projetada é considerada uma arma mágica, e portanto, pode ser usada para atacar e 
    ferir Phantasmals e Espíritos Heroicos, embora não possua nenhuma <strong>Habilidade de Valor</strong>.<br />
    O conjurador pode projetar qualquer arma, seguindo os <strong>Modelos Base de Armamentos Lendarios</strong>.<br /><br />

    Escudos podem ser projetados e usados para realizar a <i>Manobra Evasiva: "Bloquear"</i>, 
    mas armaduras são problemáticas,e o conjurador infelizmente não será capaz de produzi-las.`,
    element: 'Sword'
  },
  {
    name: 'Melding',
    rank: 'C',
    cost: 50,
    effect: `O conjurador irá levantar a mão e com um comando, ativar esse feitiço, se focando em uma 
    arma que está sendo empunhada por um inimigo.<br />
    Ele imediatamente irá afetar a peça em um nível conceitual, revertendo seus componentes a estados mais 
    primordiais.<br />
    
    <ul>
      <li>
        O conjurador deve escolher <strong>1 inimigo</strong> que esteja equipado com algum tipo de armamento.
      </li>
      <li>
        O conjurador irá fazer uma rolagem de <strong>1d8</strong> para cada rank em 
        seu Parâmetro <strong>Fantasma Nobre</strong>.
      </li>
      <li>
        A arma tem uma quantia de durabilidade decidida pelo <strong style="color: red">Narrador</strong> 
        que pode variar grandemente, dependendo da qualidade dela.
      </li>
      <li>
        Uma arma que tenha a <strong>durabilidade</strong> reduzida a <strong>0 (zero)</strong> receberá todos 
        os efeitos desse Feitiço.
      </li>
      <li>
        Uma arma mundana, ou de qualidade mágica inferior, como uma arma projetada ou uma arma encantada 
        com <strong>Reinforcement</strong> não resistirá e será reduzida a ferrugem ou pó, 
        dependendo de seus componentes, e será destruída. 
      </li>
    </ul>
    
    Armas que possuam <strong>propriedades mágicas</strong> mais intensas, ou 
    <strong>Fantasmas Nobres</strong> conseguem resistir 
    melhor aos efeitos desse feitiço; Eles perderão o brilho, e irão parecer opacos e sem vida, 
    suas lâminas e pontas completamente sem corte ou capacidade de perfurar, porém <strong>NÃO</strong> serão reduzidos a pó, 
    e ainda podem continuar sendo usados para combater, embora com suas propriedades completamente seladas.<br />
    <i>Arcos</i> e <i>Armas de Fogo</i> ainda vão conseguir atirar, 
    mas seu poder de fogo estará severamente prejudicado.<br /><br />
    
    Um Fantasma Nobre sob o efeito desse Feitiço perde todos os efeitos de suas <strong>Habilidades de Valor</strong>.<br />
    <i>Ele não pode causar uma <strong>Rolagem Crítica</strong></i>.<br /><br />

    <i><strong>Armaduras</strong> e <strong>Escudos</strong> também podem sofrer os efeitos desse Feitiço</i>.<br />
    Um equipamento sob o efeito de <strong>Melding</strong> permanecerá assim por um número 
    de rodadas <strong>igual</strong> a quantidade de em seu <Parâmetro <strong>Fantasma Nobre</strong>.`,
    element: 'Sword'
  },
  {
    name: 'Swordflesh',
    rank: 'B',
    cost: 75,
    effect: `O conjurador consegue parcialmente transformar carne, ossos e o próprio sangue dele, ou de um aliado, em metal e aço. <br />
    Ferimentos serão fechados com diversas pequenas lâminas funcionando como um <i>"sutura"</i>, 
    impedindo o sangue de escapar e eliminando a dor.<br /><br />

    Devido a maneira como funciona, esse Feitiço, apesar de ser bastante efetivo para <strong>curar</strong> feridas, 
    tem alguns efeitos colaterais.<br /> 
    O conjurador ou um aliado que ele possa tocar irá ganhar um <i>"escudo"</i>, que funciona como um marcador 
    de <i>Pontos de Vida adicional</i>. O encantado não ficará inconsciente enquanto esse 
    escudo tiver <i>Pontos de Vida</i>.<br /> 
    Os <i>Pontos de Vida</i> desse escudo são determinados pelo Rank que o conjurador tenha em seu 
    parâmetro <strong>Fantasma Nobre</strong>, <strong>multiplicado</strong> por </strong>20</strong>.<br /><br />

    Quando o combate terminar, porém, o encantado irá receber todo o dano que havia sido recebido 
    nesse escudo, de uma vez, enquanto o conjurador precisa remover as suturas de espadas e o metal 
    que agora está crescendo na carne dele.<br />
    <i>Esse Feitiço não pode matar o encantado, mas irá reduzir ele 
    a 1 <strong>Ponto de Vida</strong>, e provavelmente forçá-lo a passar por descansos longos para que 
    o corpo se recupere do choque.</i>`,
    element: 'Sword'
  },
  {
    name: 'Steel Mind',
    rank: 'B',
    cost: 60,
    effect: `O conjurador consegue <i>"forjar"</i> sua psique, como se fosse uma espada. Esse feitiço 
    exige uma quantidade extrema de concentração e disciplina, enquanto o conjurador deve se 
    entregar ao <i>"conceito de uma espada"</i>, que deve ser ao mesmo tempo, 
    dura como o aço, mais maleável e capaz de se dobrar para poder resistir a qualquer golpe que aplicar, 
    ou sofrer.<br /><br />

    Um alvo aliado ou o próprio conjurador se tornam <strong>imunes</strong> a efeitos psicológicos</i>.<br />
    Enquanto o conjurador pode manter o efeito por <strong>1 rodada</strong> para cada rank no 
    Parâmetro <strong>Mana</strong> que possuir sem problemas, um alvo aliado precisa se concentrar 
    no efeito do feitiço, fazendo um teste de Parâmetro usando <strong>Fantasma Nobre</strong> <i>todo o começo</i> 
    de seu turno, para manter o efeito pela mesma quantidade de rodadas.`,
    element: 'Sword'
  },
  {
    name: 'Dismantle',
    rank: 'A',
    cost: 90,
    effect: `O conjurador consegue entender não apenas espadas, mas também visualizar os componentes 
    que formam construtos mágicos, e aprende a reduzi-los a seus materiais, basicamente 
    <i>"desmanchando"</i> magias.<br />
    Com um <strong>comando</strong> que pode ser uma <i>palavra</i> ou um <i>gesto</i>, 
    efeitos permanentes que estão no campo de batalha 
    irão desaparecer.<br /><br />

    Role <strong>1d12</strong> para cada rank que você possuir em seu Parâmetro 
    <strong>Fantasma Nobre</strong>.<br />
    O conjurador original do feitiço que você deseja destruir deve rolar <strong>Fantasma Nobre + Sorte</strong>.<br /> 
    Se você superar o resultado, o feitiço que estava em efeito desaparece, 
    e você ganha <i>Pontos de Energia</i> <strong>igual</strong> ao custo de <i>Pontos de Energia</i> dele.<br /><br />
    
    <i>Esse Feitiço <strong>PODE</strong> desmanchar <strong>Reality Marbles</strong></i>.`,
    element: 'Sword'
  },
  {
    name: 'Broken Phantasm',
    rank: 'S',
    cost: 125,
    effect: `A mais poderosa magia do elemento Espada. O conjurador sobrecarrega uma arma mágica, 
    transformando ela em um projétil mortal.<br />
    <i>Lanças</i> e <i>Adagas</i> podem ser <strong>arremessadas</strong>, <i>Espadas</i> podem ser usadas 
    como <strong>flechas</strong> para serem disparadas por um <i>"Arco Projetado"</i>, 
    e <i>Escudos</i> podem voar contra um inimigo.<br />
    Quando o <i>projétil</i> <strong>atinge</strong> o alvo, ele explode em um espetáculo de energia mágica 
    pura que espalha chamas azuis esverdeadas e faíscas de energia para todos os lados.<br />
    Inimigos são consumidos por uma onda de energia que irá despedaçá-los e depois queimá-los.<br /><br />
    
    Para usar esse Feitiço, o conjurador deve usar o <strong>Feitiço: "Projection"</strong> primeiro, 
    ou deverá <strong>sacrificar</strong> um <i>Fantasma Nobre Armamento Lendario</i>, até o fim do combate.<br /> 
    Uma vez que ele tenha a <i>"munição"</i> necessária, ele pode executar um ataque remoto de 
    <strong>1D20</strong> para cada rank em seu Parâmetro <strong>Fantasma Nobre</strong>, 
    contra um alvo, ou escolher uma área circular que esteja em seu campo de visão, de pelo 
    menos <strong>20 metros</strong> de raio.<br /><br />
    
    Se escolher um alvo, esse alvo deve executar uma <i>Manobra Evasiva: "Esquivar"</i>, ou receberá dano 
    de acordo com o primeiro impacto, e em seguida, mais um dano de <strong>1d20</strong> para cada rank 
    no parâmetro Mana do conjurador.<br />
    Alvos que estejam dentro do raio <strong>DEVEM</strong> se <i>Esquivar</i>, recebendo <strong>1d12</strong> 
    de dano para cada rank no parâmetro <strong>Mana</strong> do conjurador.<br /><br />
    
    Se o golpe for direcionado contra a área, todos os inimigos dentro dela <strong>DEVEM</strong> 
    imediatamente se <i>esquivarem</i> de um ataque de <strong>1D20</strong> para cada rank em 
    seu Parâmetro <strong>Fantasma Nobre</strong>.`,
    element: 'Sword'
  },
]
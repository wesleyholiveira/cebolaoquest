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
    e apenas depois recebem o dano que receberam após se defenderem.
    <i>É impossível Aparar ou se Esquivar desse Feitiço</i>.`,
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
    perfurando-o, e causando uma "explosão" de gelo e frio uma vez que está alojada no inimigo.<br />
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
    parâmetro </strong>Mana</strong>. Se caso o alvo for pego de surpresa pelo conjurador, o alvo não 
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
]
import { BookOpen } from "lucide-react";
import { Reveal } from "./ui";

export default function BookReader() {
  return (
    <div className="bg-paper min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-8 text-brick justify-center">
            <BookOpen size={24} />
            <span className="font-display text-sm uppercase tracking-widest font-bold">Leitura Completa</span>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-4 leading-tight">
              Além das Muralhas
            </h1>
            <h2 className="text-xl sm:text-2xl font-serif italic text-ink-2 mb-6">
              O Peso de 25 Anos e o Recomeço
            </h2>
            <p className="text-lg text-ink-3">
              Quando as muralhas caem, a liberdade floresce.
            </p>
          </div>

          <div className="prose prose-lg prose-stone mx-auto text-ink-2 font-serif leading-relaxed">
            
            <div className="bg-cream/30 p-8 rounded-2xl border border-line mb-16 text-center italic">
              <h3 className="font-display text-xl font-bold text-ink not-italic mb-4">Dedicatória</h3>
              <p>
                Aos meus filhos, que foram as raízes que me seguraram durante a tempestade e as flores que me motivaram a reconstruir o jardim. Este livro é para vocês, para que saibam que o amor real é calmo, respeitoso e, acima de tudo, livre.
              </p>
            </div>

            <h3 className="font-display text-2xl font-bold text-ink mt-12 mb-6 text-center">Introdução</h3>
            <p>Há histórias que não nascem para serem guardadas. Elas pedem voz, pedem espaço, pedem luz. Esta é uma dessas histórias.</p>
            <p>Por vinte e cinco anos, vivi atrás de muralhas invisíveis. Não eram feitas de pedra, mas de silêncios, concessões e medos. Cada tijolo foi assentado com a renúncia da minha própria essência, até que um dia percebi que já não sabia quem eu era fora daquele papel que me aprisionava. O abuso mental não deixa marcas na pele, mas corrói a alma. Ele é sorrateiro, infiltra-se nas frestas da confiança e, quando você menos percebe, já não existe fora da sombra do outro.</p>
            <p>Este livro nasceu do estrondo da queda dessas muralhas e do silêncio que se seguiu. É um relato autobiográfico, mas não é apenas sobre dor. É sobre reconstrução. É sobre a coragem de olhar para os escombros e decidir que dali pode nascer um jardim. É sobre a escolha consciente de não permitir que o passado dite o futuro.</p>
            <p>Aqui, você vai caminhar comigo por essa jornada: da anulação à descoberta, da solidão à esperança, do medo à confiança. Vai conhecer os dias em que a liberdade parecia vertigem, os momentos em que um simples “Boa Noite” abriu uma porta para um novo mundo, e os passos que transformaram um encontro em um pacto de vida.</p>
            <p>Este livro é para quem já se sentiu preso(a) em uma relação que sufoca, para quem carrega cicatrizes invisíveis e para quem, mesmo ferido, ainda acredita que é possível amar de novo — e melhor. É também para quem deseja compreender que o amor saudável não é um acaso; é uma construção deliberada, feita de escolhas conscientes e respeito mútuo.</p>
            <p>Se você está aqui, talvez também tenha muralhas para derrubar. Talvez esteja à procura de um recomeço ou apenas de uma palavra que lhe devolva esperança. Que este livro seja essa palavra. Que ele seja a prova de que, além das muralhas, existe vida — e ela pode ser extraordinária.</p>

            <div className="my-16 border-t border-line"></div>

            <h3 className="font-display text-3xl font-bold text-ink mt-12 mb-6">Capítulo 1: Entre Tijolos e Silêncios</h3>
            <p>Aos 45 anos, ao olhar-me no espelho, eu não via apenas o meu reflexo; eu via uma fortificação. Uma construção antiga, sólida e exausta, erguida tijolo por tijolo ao longo de vinte e cinco anos de casamento. No início, eu acreditava piamente que estava a construir um lar, mas a argamassa que usei era feita de renúncias invisíveis e as fundações estavam enterradas em concessões que eu nunca deveria ter assinado.</p>
            <p>O silêncio era a substância mais densa dessa construção. Não era um silêncio de paz, mas um silêncio de vigilância. Era o tipo de mudo que se instala quando aprendemos que as nossas palavras são fósforos acesos num quarto cheio de pólvora. Para manter a estrutura de pé, eu tornei-me uma perita em arquitetura emocional: sabia exatamente que vigas de opinião precisavam de ser serradas e que janelas de desejo precisavam de ser emparedadas para que o ambiente permanecesse "estável".</p>
            <p>Vinte e cinco anos é tempo suficiente para esqueceres o som da tua própria voz quando ela não está a pedir permissão. Quando a última gota de argamassa secou, eu percebi que estava presa dentro de um monumento à minha própria anulação, com medo de que, se eu falasse a verdade, toda a estrutura desabasse sobre mim.</p>

            <h3 className="font-display text-3xl font-bold text-ink mt-12 mb-6">Capítulo 2: Ruínas e Raízes</h3>
            <p>Quando a separação finalmente aconteceu, o estrondo da queda dessa muralha foi ensurdecedor para o meu espírito, mas mudo para o mundo lá fora. De repente, vi-me de pé no meio das ruínas com três corações para proteger: um filho já homem, uma jovem a florescer e a minha pequena de seis anos que ainda procurava no meu olhar a certeza de que o mundo não ia acabar.</p>
            <p>A sensação não era de liberdade imediata; era como olhar para um terreno recém-arado. O solo estava exposto, castanho, revolvido e assustadoramente vasto. Durante aquele primeiro ano, a liberdade parecia uma vertigem. Eu não sabia como caminhar sem as paredes que, embora me sufocassem, eram a minha única referência de direção.</p>
            <p>O meu dia-a-dia era um exercício de equilibrismo. Havia a logística implacável: as mochilas da escola, as reuniões de pais, o apoio ao meu filho mais velho na sua entrada na vida adulta e os dramas delicados da adolescência da minha filha. Eu era o porto seguro deles, a estrutura que não podia vergar, enquanto, por dentro, eu tentava juntar os meus próprios pedaços. Eu tornara-me uma mestre na "defesa invisível". Minhas conversas eram travadas com uma armadura escondida sob as roupas. Eu falava o necessário, sorria o suficiente, mas não deixava ninguém entrar. Sentir significava risco; vulnerabilidade era, na minha mente ferida, um convite para a dor.</p>

            <h3 className="font-display text-3xl font-bold text-ink mt-12 mb-6">Capítulo 3: Quando a Esperança Disse Boa Noite</h3>
            <p>Eu estava pronta para viver essa vida protegida, cercada pelos meus filhos e pelo meu silêncio autoimposto, quando um aplicativo de relacionamento decidiu me apresentar um "Boa Noite" inesperado em uma manhã de outubro de 2025.</p>
            <p>Na noite anterior, 24 de outubro, num momento de insónia ou talvez de uma curiosidade que eu ainda não admitia, tinha deixado um "gosto" na foto de um estranho. Fui dormir logo a seguir, sem expectativas, fechando a aplicação como quem fecha uma porta que não pretende abrir. A surpresa chegou com o café da manhã: uma mensagem dele, enviada nas horas mortas da madrugada, dizendo simplesmente "Boa Noite".</p>
            <p>Respondi com um "Bom Dia" seco e rápido. As minhas palavras não eram rudes, mas eram pesadas; eram o escudo da Maria de 45 anos que trazia no corpo a memória do abuso mental. Eu analisava cada sílaba dele à procura de uma armadilha, de um sinal de controlo ou de uma fenda por onde o passado pudesse entrar. Mas, estranhamente, a minha cautela não o afugentou.</p>
            <p>O Uanderson percebeu o escudo, mas em vez de tentar derrubá-lo à força, ele contornou-o com paciência. Com ele, a conversa começou a fluir de uma forma que eu já não julgava possível. Pela primeira vez em décadas, a sensação de segurança não vinha da distância, mas da proximidade das palavras. No ambiente digital, permiti-me partilhar intimidades e dores, pois o tom das suas respostas era um bálsamo para a alma cansada.</p>

            <h3 className="font-display text-3xl font-bold text-ink mt-12 mb-6">Capítulo 4: O Dia em que o Destino Sorriu</h3>
            <p>A expectativa para o dia 8 de novembro de 2025 era uma mistura sufocante de ansiedade e uma esperança que eu tentava, em vão, silenciar. Era o aniversário de 37 anos do Uanderson. Após semanas de confidências digitais que me tinham feito baixar a guarda, o teste final seria o encontro físico. Eu perguntava-me se a segurança que sentia ao ler as suas mensagens sobreviveria ao peso de estarmos cara a cara.</p>
            <p>Quando o vi, a primeira coisa que me atingiu foi a verdade da sua presença. Ele era exatamente como eu tinha imaginado através das fotos, mas com uma energia vibrante que nenhum ecrã conseguiria transmitir. Havia algo de simbólico no facto de ser o dia dele; era como se o destino estivesse a oferecer-nos um novo marco, um ponto zero para as nossas vidas.</p>
            <p>Não houve o silêncio constrangedor que eu tanto temia. Em vez disso, as nossas conversas tiveram a profundidade que só o toque e o olhar permitem. Falámos abertamente sobre o que nos tinha trazido até ali: o meu passado de renúncias, os 17 anos de casamento dele e a realidade dos nossos filhos. Enquanto celebrávamos os seus 37 anos, eu sentia que estava a receber o meu próprio presente. Naquele sábado, a confirmação foi silenciosa e absoluta: a base que tínhamos construído era real. Eu não estava apenas diante de um parceiro; estava diante de um futuro construído sobre respeito e a promessa de quebrar os padrões do passado.</p>

            <h3 className="font-display text-3xl font-bold text-ink mt-12 mb-6">Capítulo 5: Fios de Confiança, Laços de Amor</h3>
            <p>O aniversário de 37 anos do Uanderson não foi apenas uma celebração de data; foi o ponto de inflexão onde a promessa digital se tornou compromisso real. Nos dias que se seguiram àquele sábado, a frequência de nossas interações aumentou, mas o mais importante foi a mudança na qualidade dessas trocas. Eu, que havia passado anos com a guarda levantada, comecei a abaixá-la conscientemente, fio a fio, como quem tece uma tapeçaria nova sobre um tear que antes só conhecia o vazio.</p>
            <p>A segurança que ele me transmitiu no primeiro encontro se solidificou em cada mensagem de apoio e em cada ligação ao fim do dia. Ele não apenas ouvia minhas histórias de dor e dos padrões que eu precisava desesperadamente quebrar; ele as validava com uma empatia que eu nunca conhecera. Ele entendia que minha defensividade inicial não era um sinal de rejeição, mas um mecanismo de sobrevivência refinado.</p>
            <p>Com o Uanderson, a cumplicidade começou a manifestar-se no apoio mútuo para lidar com as complexidades das nossas histórias passadas. Nossos objetivos, antes fragmentados pelo medo, começaram a convergir. Estávamos reescrevendo o roteiro das nossas vidas. A quebra de padrões já não era uma luta solitária; era uma construção a dois, fundamentada na verdade nua e crua da nossa união.</p>
            
            <h4 className="font-display text-xl font-bold text-ink mt-8 mb-4">A Confirmação da Pequena</h4>
            <p>O relacionamento com Uanderson estava florescendo, mas o verdadeiro teste de que eu estava, de fato, quebrando os padrões de dor e medo do passado, veio de onde eu menos esperava: da minha filha de seis anos.</p>
            <p>Em um dia comum, enquanto eu preparava suas roupas, a deixei sozinha por um instante no banho. Quando voltei, encontrei seus pequenos olhos cheios de lágrimas. Meu coração acelerou, temendo o pior, lembrando-me de todas as preocupações que uma mãe carrega.</p>
            <p>"O que foi, filha?", perguntei, a voz tensa.</p>
            <p>Com a inocência que só as crianças possuem, ela respondeu, limpando o rosto: "Mamãe, estou chorando de alegria porque eu gosto de ver você feliz."</p>
            <p>Aquelas palavras foram como um raio de sol rompendo as nuvens escuras da minha experiência anterior. Era a validação que eu não sabia que precisava. Abraçamo-nos ali mesmo, no vapor do banheiro, e choramos juntas. Não eram lágrimas de tristeza ou medo, mas de uma emoção gostosa e avassaladora: a sensação de estar vencendo. Vencendo o medo de me permitir amar, vencendo a sombra do abuso mental, e provando para mim mesma e para minha filha que a felicidade era, sim, um direito meu. Naquele abraço, senti que Uanderson não era apenas meu parceiro, mas o mastro que me ajudou a trazer essa paz para a minha família.</p>

            <h3 className="font-display text-3xl font-bold text-ink mt-12 mb-6">Capítulo 6: Pontes Sobre o Medo</h3>
            <p>A transição do "eu" para o "nós" passava, obrigatoriamente, pelos corações que eu protegi com tanto afinco durante o meu primeiro ano de isolamento. Apresentar o Uanderson aos meus filhos foi o meu maior teste de vulnerabilidade. Eu temia que as sombras do passado pudessem escurecer a luz desse novo recomeço, mas o que encontrei foi a beleza de uma abordagem paciente.</p>
            <p>O meu filho mais velho, que trazia no olhar a proteção silenciosa de quem testemunhou a minha luta, observava com uma seriedade justa, mantendo-se mais reservado. O foco de Uanderson, porém, voltou-se para as meninas. Ele conversou com a minha filha jovem, com a sua sensibilidade aflorada, e com a minha pequena de seis anos, o termômetro mais puro da minha alma, que esperava apenas por um sinal de que o mundo era um lugar seguro para sorrir.</p>
            <p>O encontro foi um mosaico de descobertas iniciais. Ver a minha filha jovem e a minha pequena interagindo com ele foi como ver as primeiras sementes a brotar no terreno que eu tanto temia ser estéril. Não houve grandes discursos; houve apenas a validação silenciosa de que a nossa família estava a abrir espaço para algo novo, respeitando o ritmo de cada um de nós. A aceitação das meninas foi o selo inicial de que a muralha estava a dar lugar a uma ponte. Estávamos a ensinar-lhes que o amor real é calmo e respeitoso — algo que nunca tiveram do pai.</p>
            
            <h4 className="font-display text-xl font-bold text-ink mt-8 mb-4">A Crise de Transição e a Reparação Necessária</h4>
            <p>A harmonia recém-descoberta foi posta à prova por um fim de semana turbulento com minha filha de 23 anos. Ela estava em um momento de transição, e eu, empolgada com a estabilidade que o Uanderson trazia, cometi um erro clássico: presumi que os limites que eu havia estabelecido mentalmente eram claros para ela também.</p>
            <p>A tensão explodiu quando ela, sentindo-se invadida pela nova dinâmica, ligou para o pai para buscá-la junto com a filha mais nova. Ao tentar conversar, minha frustração transbordou em palavras duras que soaram como um ultimato. "Você está me expulsando de casa!", ela gritou, ferida em seu próprio refúgio. Em um gesto de revolta, ela saiu porta afora, levando apenas o essencial.</p>
            <p>Aquela cena me estilhaçou. Eu não queria perdê-la; queria apenas que ela respeitasse o santuário que eu estava tentando construir. No caos, o Uanderson foi a vento silencioso rompendo as velas do meu mastro. Ele não interferiu na briga, mas sua presença firme ao meu lado me permitiu sentir a dor sem desmoronar. Ele me ensinou, pelo exemplo, que o apoio não é sobre resolver o problema do outro, mas sobre estar lá enquanto o outro ainda encontra sua própria clareza.</p>
            <p>A reconciliação veio com um pedido de desculpas honesto. Eu precisei aprender que quebrar padrões de abuso também significa aprender a comunicar limites com amor, e não com a reatividade do trauma. Sentamos, choramos e redefinimos o nosso pacto. Mostrei a ela que o espaço era de todos, mas que o respeito agora era a nova regra da casa. Reparar essa dinâmica foi o passo final para provar que a nossa ponte era forte o suficiente para suportar as tempestades da mudança.</p>

            <h3 className="font-display text-3xl font-bold text-ink mt-12 mb-6">Capítulo 7: A Voz do Outro Lado da Muralha</h3>
            <h4 className="font-display text-xl font-bold text-ink mt-8 mb-4">Quem é Maria Salles?</h4>
            <p>Para o mundo, Maria Salles pode ser vista através da sua força e da sua trajetória de superação, mas para mim, ela é a personificação da descoberta. Maria é a prova de que a maturidade não endurece o coração se houver coragem para recomeçar. Ela é a clareza que desarma a complicação, a leveza que ensina a respirar e a escolha que eu celebro a cada amanhecer.</p>
            
            <div className="bg-paper p-8 rounded-2xl border border-line shadow-sm my-8">
              <h4 className="font-display text-xl font-bold text-ink mb-4 flex items-center gap-2">
                <span>💌</span> Carta para Maria Salles, Meu Amor
              </h4>
              <p className="italic mb-4">Minha Maria, Melhor Escolha de Todos os Dias,</p>
              <p className="italic mb-4">Lembro-me do dia em que o seu sorriso me encontrou naquele aplicativo. Não tinha a pretensão de encontrar o meu mundo, mas os seus lábios me mostraram o caminho. Foi o começo de tudo.</p>
              <p className="italic mb-4">Você é, para mim, a definição da graça. A forma como você lida com a vida me ensina a respirar mais fundo. Essa leveza é o que eu mais admiro em você. De todas as nossas "primeiras vezes", guardo comigo a mesma sensação indescritível: aquele momento em que senti o seu cheiro e soube que a essência da sua alma estava se entrelaçando à minha.</p>
              <p className="italic mb-4">Meu amor, meu eterno flerte, minha confidente e minha maior alegria, você é o meu lar. Obrigado por ser a escolha certa.</p>
              <p className="italic font-bold">Com todo o amor, Seu Uanderson.</p>
            </div>

            <h3 className="font-display text-3xl font-bold text-ink mt-12 mb-6">Capítulo 8: O Código do Recomeço</h3>
            <p>Com a Maria, aprendi que o amor é uma escolha deliberada. O nosso encontro trouxe uma nova forma de encarar o movimento da própria existência.</p>
            
            <h4 className="font-display text-xl font-bold text-ink mt-8 mb-4">A Visão de Uanderson: Direção e Honra</h4>
            <p>Eu acredito que o valor de um homem se mede pela sua capacidade de prover direção e honrar a estrutura que construiu com a sua parceira. Assumo a responsabilidade de liderar para que a nossa realidade se expanda. Valorizo profundamente a mulher que está ao meu lado; a sua sabedoria e apoio são o que tornam o meu progresso possível. Minha força reside em ser respeitado e impulsionado por ela.</p>
            
            <h4 className="font-display text-xl font-bold text-ink mt-8 mb-4">O PDA em Estado Puro (Perceber, Decidir, Agir)</h4>
            <p>O progresso para um perfil divergente resume-se à qualidade do movimento impresso na realidade.</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Perceber:</strong> É o diagnóstico do agora.</li>
              <li><strong>Decidir:</strong> Basear as escolhas no que é Preciso para o legado.</li>
              <li><strong>Agir:</strong> É o ato de "bancar o preço". É a execução sem desculpas.</li>
            </ul>

            <h4 className="font-display text-xl font-bold text-ink mt-8 mb-4 flex items-center gap-2">
              <span>🛡️</span> A Mesa da Verdade: Alinhamento de Rota
            </h4>
            <p>Este protocolo visa identificar "combinados inconscientes" que possam travar o crescimento do casal. Nunca é sobre o outro; é sobre mim. As crianças são protegidas quando o casal é sólido. Estabelecemos que os problemas dos adultos morrem no casal, garantindo aos filhos o direito de serem apenas crianças.</p>

            <h3 className="font-display text-3xl font-bold text-ink mt-12 mb-6">Capítulo 9: Epílogo – Além das Muralhas</h3>
            <p>Quando olho para trás, vejo não apenas as muralhas que desmoronaram, mas também a mulher que emergiu dos escombros. Por muito tempo, acreditei que a minha história terminaria no silêncio. Mas hoje sei que cada tijolo que caiu abriu espaço para a possibilidade de existir plenamente.</p>
            <p>Este livro não é sobre perfeição. É sobre escolhas. Escolher levantar-se quando tudo parece ruína. Escolher amar quando o coração ainda carrega cicatrizes. O meu recomeço começou com um simples “Boa Noite” numa manhã qualquer. O seu pode começar com a coragem de dizer: “Eu mereço mais.”</p>
            <p>Que este livro seja um farol. Quando atravessar as suas muralhas, descobrirá que do outro lado há paz e há amor. Nunca é tarde para recomeçar. Nunca é tarde para escolher existir.</p>

            <div className="my-16 border-t border-line"></div>

            <h3 className="font-display text-2xl font-bold text-ink mt-12 mb-6 text-center">Sobre a Autora</h3>
            <p className="text-center">Maria Salles é uma mulher que transformou dor em força e silêncio em voz. Após viver 25 anos num relacionamento marcado por abuso emocional, decidiu reconstruir a sua vida e partilhar a sua jornada para inspirar outras pessoas. Mãe dedicada e profissional resiliente, acredita que a verdadeira liberdade começa quando escolhemos existir plenamente.</p>

            <div className="bg-sand/30 p-8 rounded-2xl border border-line mt-12">
              <h3 className="font-display text-lg font-bold text-ink mb-4 text-center">Contracapa (Resumo Editorial)</h3>
              <p className="text-sm">Por vinte e cinco anos, Maria viveu atrás de muralhas invisíveis, erguidas pelo silêncio e pelo abuso emocional. Quando a estrutura finalmente desmoronou, ela descobriu que a liberdade não era um jardim pronto — era um terreno arado, vasto e assustador.</p>
              <p className="text-sm mt-4">Este livro é um relato real e profundo sobre a coragem de reconstruir a própria vida. É sobre a vertigem da separação, a luta para proteger os filhos, e a inesperada esperança que nasceu de um simples “Boa Noite”. Além das Muralhas é um convite para quem deseja acreditar que existe vida — e amor — depois da dor. Nunca é tarde para escolher existir.</p>
            </div>
            
          </div>
        </Reveal>
      </div>
    </div>
  );
}

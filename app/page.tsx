const whatsappUrl =
  "https://wa.me/5585992805311?text=Oi%2C%20Claire!%20Vi%20seu%20site%20e%20queria%20conversar%20sobre%20uma%20ideia.";

const instagramUrl = "https://www.instagram.com/toriclair/";

const serviceLinks = [
  {
    number: "01",
    title: "Arte em parede",
    text: "Pintura artística e projetos criativos pensados para cada ambiente.",
    href: "#ambientes",
    image: "/images/mural-office.webp",
  },
  {
    number: "02",
    title: "Ilustrações e quadros",
    text: "Retratos, aquarelas, telas e artes digitais que guardam histórias.",
    href: "#ilustracoes",
    image: "/images/illustration-christmas.webp",
  },
  {
    number: "03",
    title: "Personalizados",
    text: "Peças pintadas à mão para presentear, celebrar ou dar identidade.",
    href: "#personalizados",
    image: "/images/custom-family-plate.webp",
  },
  {
    number: "04",
    title: "Identidade visual",
    text: "Marcas e materiais visuais criados com conceito, forma e delicadeza.",
    href: "#identidade",
    image: "/images/identity-sign.webp",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Claire — início">
          <span className="brand-mark">C</span>
          <span>
            <strong>Claire</strong>
            <small>arte · arquitetura</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#trabalhos">Trabalhos</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
        </nav>

        <div className="header-links">
          <a
            className="instagram-link"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de Claire — @toriclair"
            title="@toriclair no Instagram"
          >
            <span className="instagram-icon" aria-hidden="true" />
          </a>
          <a className="header-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
            Conversar <Arrow />
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Victoria Claire · arte em parede e criação autoral em Fortaleza</p>
          <h1>
            Paredes que contam
            <br />
            <em>histórias.</em>
          </h1>
          <p className="hero-lead">
            Claire transforma quartos, casas e espaços de trabalho com pinturas criadas
            especialmente para cada ambiente. Também leva seu traço para quadros,
            ilustrações e peças feitas à mão.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#trabalhos">
              Conhecer o trabalho <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Contar uma ideia <Arrow />
            </a>
          </div>
          <div className="handmade-note">
            <span className="spark">✦</span>
            <span>
              <strong>Do primeiro rascunho à última pincelada</strong>
              <small>Cada parede nasce de uma conversa e de um projeto único.</small>
            </span>
          </div>
        </div>

        <div className="hero-art" aria-label="Seleção de trabalhos da artista">
          <div className="hero-blob hero-blob-one" />
          <div className="hero-blob hero-blob-two" />
          <figure className="hero-image hero-image-main">
            <img src="/images/wall-nursery-claire.webp" alt="Claire diante de quarto infantil com pintura personalizada" />
          </figure>
          <figure className="hero-image hero-image-top">
            <img src="/images/wall-forest-squirrel.webp" alt="Esquilo pintado à mão em mural de floresta" />
          </figure>
          <figure className="hero-image hero-image-bottom">
            <img src="/images/wall-rainbow.webp" alt="Arco-íris em tons terrosos pintado na parede" />
          </figure>
          <p className="hero-caption">Pensada para o espaço.<br />Pintada à mão.</p>
        </div>
      </section>

      <section className="service-index section-shell" id="trabalhos">
        <div className="section-intro">
          <p className="eyebrow">O trabalho</p>
          <h2>Do ambiente à lembrança.</h2>
          <p>
            A mesma sensibilidade atravessa suportes diferentes. Escolha por onde quer
            começar — Claire cuida para que a ideia continue sendo sua.
          </p>
        </div>

        <div className="service-grid">
          {serviceLinks.map((service) => (
            <a className="service-card" href={service.href} key={service.title}>
              <div className="service-card-image">
                <img src={service.image} alt="" />
              </div>
              <div className="service-card-copy">
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <strong>
                  Ver trabalhos <Arrow />
                </strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="feature feature-mural" id="ambientes">
        <div className="mural-intro">
          <div className="feature-copy">
            <p className="eyebrow eyebrow-light">01 · principal trabalho</p>
            <h2>Uma parede vazia pode virar o lugar mais lembrado da casa.</h2>
            <p>
              Claire cria o desenho a partir da história, das cores e da arquitetura do
              ambiente. O resultado não é uma estampa aplicada: é uma pintura autoral,
              feita diretamente na parede e pensada para pertencer àquele espaço.
            </p>
            <ul className="tag-list" aria-label="Serviços de arte em parede">
              <li>Quartos infantis</li>
              <li>Casas e apartamentos</li>
              <li>Ambientes comerciais</li>
              <li>Projeto autoral</li>
            </ul>
          </div>

          <div className="mural-gallery">
            <figure className="mural-large">
              <img src="/images/wall-hogwarts.webp" alt="Claire pintando um castelo diretamente na parede" />
              <figcaption>Projeto personalizado · pintura em andamento</figcaption>
            </figure>
            <figure>
              <img src="/images/wall-nursery-said.webp" alt="Quarto de bebê com mural de animais entre nuvens" />
              <figcaption>Quarto do Saíd · arte e enxoval em diálogo</figcaption>
            </figure>
            <figure>
              <img src="/images/mural-meeting.webp" alt="Sala de reunião com pintura botânica" />
              <figcaption>Ambiente de trabalho · composição botânica</figcaption>
            </figure>
          </div>
        </div>

        <div className="mural-detail-heading">
          <div>
            <p className="eyebrow eyebrow-light">Cenários e detalhes</p>
            <h3>Cada projeto começa do zero.</h3>
          </div>
          <p>
            Do cenário inteiro aos pequenos personagens, tudo é desenhado para conversar
            com quem vai viver ali — sem modelos prontos e sem repetir uma história.
          </p>
        </div>

        <div className="mural-detail-grid">
          <figure className="mural-detail-card mural-detail-card-wide">
            <img src="/images/wall-castle-rabbits.webp" alt="Castelo e família de coelhos pintados em quarto infantil" />
            <figcaption>
              <strong>Quarto da Aurora</strong>
              <span>castelo, jardim e personagens exclusivos</span>
            </figcaption>
          </figure>
          <figure className="mural-detail-card">
            <img src="/images/wall-forest-deer.webp" alt="Cervo pintado em mural infantil de floresta" />
            <figcaption>
              <strong>Floresta ilustrada</strong>
              <span>camadas, textura e delicadeza</span>
            </figcaption>
          </figure>
          <figure className="mural-detail-card">
            <img src="/images/wall-forest-fox.webp" alt="Raposa e cogumelos pintados à mão em mural" />
            <figcaption>
              <strong>Detalhes pintados à mão</strong>
              <span>cada canto continua a narrativa</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="feature feature-illustration" id="ilustracoes">
        <div className="feature-copy feature-copy-dark">
          <p className="eyebrow">02 · ilustrações e quadros</p>
          <h2>Uma memória pode virar imagem.</h2>
          <p>
            Um retrato, uma viagem, uma paisagem ou uma cena imaginada. Claire transforma
            referências e lembranças em ilustrações digitais, aquarelas, telas e quadros
            personalizados.
          </p>
          <ul className="tag-list tag-list-dark" aria-label="Serviços de ilustração">
            <li>Retratos personalizados</li>
            <li>Quadros e telas</li>
            <li>Ilustração digital</li>
            <li>Aquarelas</li>
          </ul>
        </div>

        <div className="illustration-gallery">
          <figure className="illustration-main">
            <img src="/images/illustration-framed.webp" alt="Retrato personalizado de casal em quadro" />
            <figcaption>Retrato personalizado</figcaption>
          </figure>
          <figure className="illustration-round">
            <img src="/images/painting-lencois.webp" alt="Aquarela em tela inspirada em uma fotografia de Lençóis" />
          </figure>
          <figure className="illustration-square">
            <img src="/images/illustration-italy.webp" alt="Ilustração digital inspirada em uma viagem à Itália" />
          </figure>
        </div>
      </section>

      <section className="personalized" id="personalizados">
        <div className="personalized-heading section-shell">
          <div>
            <p className="eyebrow">03 · feitos à mão</p>
            <h2>Peças que não saem de prateleira.</h2>
          </div>
          <p>
            Canecas, ecobags, quadros de madeira e kits ganham nome, cor e significado.
            Para presentes, datas especiais ou marcas que querem entregar algo realmente
            pessoal.
          </p>
        </div>

        <div className="personalized-strip" aria-label="Galeria de peças personalizadas">
          <figure className="personalized-card personalized-card-tall">
            <img src="/images/custom-mug.webp" alt="Xícara personalizada e pintada à mão" />
            <figcaption>
              <span>Canecas e louças</span>
              <small>pintura manual</small>
            </figcaption>
          </figure>
          <figure className="personalized-card personalized-card-wide">
            <img src="/images/custom-memory.webp" alt="Quadro de memória com as primeiras marcas de um bebê" />
            <figcaption>
              <span>Quadros de memória</span>
              <small>lembranças transformadas em arte</small>
            </figcaption>
          </figure>
          <figure className="personalized-card">
            <img src="/images/custom-set.webp" alt="Kit personalizado com ecobag, caneca e agenda" />
            <figcaption>
              <span>Kits personalizados</span>
              <small>uma identidade em cada peça</small>
            </figcaption>
          </figure>
          <figure className="personalized-card personalized-card-round">
            <img src="/images/custom-space.webp" alt="Quadro infantil de madeira com tema de astronauta" />
            <figcaption>
              <span>Quadros infantis</span>
              <small>madeira pintada à mão</small>
            </figcaption>
          </figure>
          <figure className="personalized-card personalized-card-wide">
            <img src="/images/custom-ecobag.webp" alt="Ecobag com ilustração pintada à mão" />
            <figcaption>
              <span>Ecobags</span>
              <small>arte sobre tecido</small>
            </figcaption>
          </figure>
          <figure className="personalized-card personalized-card-tall">
            <img src="/images/custom-sea.webp" alt="Quadro infantil de madeira com tema de fundo do mar" />
            <figcaption>
              <span>Quadros temáticos</span>
              <small>nome, cores e história escolhidos para cada criança</small>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="identity-section" id="identidade">
        <div className="identity-copy">
          <p className="eyebrow">04 · identidade e design</p>
          <h2>Uma marca também pode começar no papel.</h2>
          <p>
            Identidades visuais, estampas e materiais gráficos que partem da história,
            do público e da personalidade de cada projeto — do primeiro traço às
            aplicações.
          </p>
          <div className="identity-line">
            <span>Identidade visual</span>
            <span>Estampas</span>
            <span>Artes para produtos</span>
          </div>
        </div>

        <div className="identity-gallery">
          <figure className="identity-item identity-item-main">
            <img src="/images/identity-wedding.webp" alt="Identidade visual criada para casamento" />
            <figcaption>Conceito visual para celebrações</figcaption>
          </figure>
          <figure className="identity-item">
            <img src="/images/identity-shirt.webp" alt="Aplicação de estampa criada para camisetas" />
            <figcaption>Estampa e aplicação</figcaption>
          </figure>
          <figure className="identity-item">
            <img src="/images/identity-atlas.webp" alt="Projeto de identidade visual para marca Atlas" />
            <figcaption>Marca e sistema visual</figcaption>
          </figure>
        </div>
      </section>

      <section className="process section-shell" id="processo">
        <div className="process-heading">
          <p className="eyebrow">Como acontece</p>
          <h2>Uma conversa, um rascunho, uma peça só sua.</h2>
        </div>
        <ol className="process-steps">
          <li>
            <span>01</span>
            <h3>Você conta</h3>
            <p>
              A ideia, a história, as referências e — quando for um ambiente — fotos e
              medidas do espaço.
            </p>
          </li>
          <li>
            <span>02</span>
            <h3>Claire traduz</h3>
            <p>
              Ela organiza o conceito, define o melhor suporte e apresenta caminho,
              prazo e orçamento.
            </p>
          </li>
          <li>
            <span>03</span>
            <h3>Ganha forma</h3>
            <p>
              O projeto é desenvolvido com acompanhamento, cuidado manual e os ajustes
              combinados.
            </p>
          </li>
        </ol>
        <p className="process-note">
          <span>✦</span>
          Pinturas em parede são realizadas em Fortaleza. Projetos criativos para outras
          cidades podem ser desenvolvidos sob consulta.
        </p>
      </section>

      <section className="about" id="sobre">
        <div className="about-portrait">
          <div className="about-shape" />
          <img src="/images/claire.webp" alt="Victoria Claire com as mãos marcadas de tinta" />
          <span>arquiteta<br />+ artista</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Sobre Claire</p>
          <h2>Delicadeza não é detalhe. É parte do processo.</h2>
          <p>
            Victoria Claire é arquiteta, ilustradora e artista. Seu trabalho percorre
            paredes, telas, tecido, madeira e papel, sempre buscando a forma mais sensível
            de contar o que cada pessoa deseja guardar ou transformar.
          </p>
          <p>
            É um fazer próximo e autoral: ouvir antes de desenhar, pensar antes de pintar
            e colocar intenção em cada escolha.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/toriclair/" target="_blank" rel="noreferrer">
              @toriclair <Arrow />
            </a>
            <a href="https://www.instagram.com/artesclaire/" target="_blank" rel="noreferrer">
              @artesclaire <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact-inner">
          <p className="eyebrow eyebrow-light">Vamos criar algo?</p>
          <h2>Tem uma ideia esperando para ganhar cor?</h2>
          <p>
            Conte para Claire o que você imaginou. Pode ser uma parede, uma lembrança,
            uma marca ou um presente que ainda não existe.
          </p>
          <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">
            Contar minha ideia <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#inicio">
          Claire
          <small>arte · arquitetura · design</small>
        </a>
        <div className="footer-location">
          <span>Fortaleza · CE</span>
          <span>Projetos para outras cidades sob consulta</span>
        </div>
        <div className="footer-contact">
          <a href="mailto:vclaire020@gmail.com">vclaire020@gmail.com</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">+55 85 99280-5311</a>
        </div>
        <p>© {new Date().getFullYear()} Victoria Claire</p>
      </footer>
    </main>
  );
}

import ps5Bundle from "./assets/ps5-bundle.jpg";

const purchaseUrl = "https://meli.la/2CfY8vQ";

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const features = [
  {
    number: "01",
    title: "Gráficos em 4K",
    text: "Cidades mais vivas, luzes mais intensas e cada detalhe em altíssima definição.",
  },
  {
    number: "02",
    title: "SSD ultrarrápido",
    text: "Entre na ação em segundos e aproveite transições praticamente instantâneas.",
  },
  {
    number: "03",
    title: "DualSense imersivo",
    text: "Sinta cada curva, impacto e perseguição com resposta tátil avançada.",
  },
];

export default function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="PlayStation 5 - início">
          <span className="brand-mark">P</span>
          <span>PLAY HAS NO LIMITS</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#experiencia">Experiência</a>
          <a href="#conteudo">O que vem</a>
          <a href="#oferta">Oferta</a>
        </nav>
        <a
          className="header-cta"
          href={purchaseUrl}
          target="_blank"
          rel="noreferrer"
        >
          Garantir agora <ArrowUpRight />
        </a>
      </header>

      <section className="hero">
        <div className="sun sun-one" />
        <div className="sun sun-two" />
        <div className="hero-grid" />

        <div className="hero-copy">
          <p className="eyebrow">
            <span />
            A nova geração já começou
          </p>
          <h1>
            A CIDADE
            <br />
            VAI <em>TE CHAMAR.</em>
          </h1>
          <p className="hero-description">
            Prepare-se hoje para viver o mundo aberto mais aguardado de todos
            os tempos. Com o PlayStation 5, cada noite será inesquecível.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={purchaseUrl}
              target="_blank"
              rel="noreferrer"
            >
              Quero meu PS5 <ArrowUpRight />
            </a>
            <a className="text-link" href="#experiencia">
              Descobrir a experiência <span>↓</span>
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatars" aria-hidden="true">
              <span>G</span>
              <span>V</span>
              <span>+</span>
            </div>
            <p>
              <strong>Junte-se à nova geração</strong>
              <br />
              Potência feita para o que vem a seguir
            </p>
          </div>
        </div>

        <div className="product-stage">
          <div className="product-kicker">EDIÇÃO ESPECIAL</div>
          <div className="image-frame">
            <img
              src={ps5Bundle}
              alt="Console PlayStation 5 Slim com jogos Astro Bot e Gran Turismo 7"
            />
            <div className="image-shine" />
          </div>
          <div className="floating-note note-top">
            <span>●</span>
            CONSOLE SLIM
          </div>
          <div className="floating-note note-bottom">
            <strong>1TB</strong>
            <span>SSD de alta velocidade</span>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          SCROLL TO EXPLORE <span>↓</span>
        </div>
      </section>

      <section className="marquee" aria-label="Destaques">
        <div>
          <span>PLAYSTATION 5</span><b>✦</b>
          <span>PRONTO PARA O FUTURO</span><b>✦</b>
          <span>4K ULTRA HD</span><b>✦</b>
          <span>VELOCIDADE ABSURDA</span><b>✦</b>
        </div>
      </section>

      <section className="experience" id="experiencia">
        <div className="section-heading">
          <p className="eyebrow dark"><span /> FEITO PARA O EXTRAORDINÁRIO</p>
          <h2>Não assista ao futuro.<br /><em>Jogue nele.</em></h2>
          <p>
            A potência do PS5 transforma cada sessão em uma experiência
            cinematográfica — rápida, intensa e impossível de esquecer.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-number">{feature.number}</div>
              <div className="feature-icon" aria-hidden="true">
                {feature.number === "01" && <span className="pixel-icon">4K</span>}
                {feature.number === "02" && <span className="speed-icon">≫</span>}
                {feature.number === "03" && <span className="control-icon">✦</span>}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="future" id="conteudo">
        <div className="future-art">
          <div className="future-sun" />
          <div className="palm palm-left">✦</div>
          <div className="future-label">COMING 2026</div>
          <p className="outline-word">VI</p>
        </div>
        <div className="future-copy">
          <p className="eyebrow"><span /> O JOGO MAIS AGUARDADO</p>
          <h2>
            SUA PRÓXIMA
            <br />
            GRANDE <em>HISTÓRIA</em>
            <br />
            COMEÇA AQUI.
          </h2>
          <p>
            Quando as ruas de Vice City ganharem vida, esteja pronto para
            aproveitar cada detalhe. Garanta agora a plataforma feita para essa
            nova era.
          </p>
          <ul>
            <li><Check /> Desempenho de nova geração</li>
            <li><Check /> Imersão com áudio 3D e DualSense</li>
            <li><Check /> Espaço para sua próxima aventura</li>
          </ul>
          <small>GTA VI não está incluso. Jogo vendido separadamente.</small>
        </div>
      </section>

      <section className="offer" id="oferta">
        <div className="offer-copy">
          <p className="eyebrow dark"><span /> SEU CONVITE ESTÁ AQUI</p>
          <h2>Entre no jogo<br /><em>antes de todo mundo.</em></h2>
          <p>
            PlayStation 5 Slim com 1TB, controle DualSense e jogos para você
            começar a jogar assim que abrir a caixa.
          </p>
          <div className="offer-points">
            <span><Check /> Produto original</span>
            <span><Check /> Compra segura</span>
            <span><Check /> Suporte especializado</span>
          </div>
        </div>

        <div className="offer-card">
          <div className="offer-tag">ESTOQUE LIMITADO</div>
          <p>PLAYSTATION 5 SLIM</p>
          <div className="price">
            <span className="old-price">R$ 4.599,90</span>
            <div>
              <strong>R$ 4.369</strong>
              <sup>90</sup>
              <b>5% OFF NO PIX</b>
            </div>
            <p>ou 10x de <strong>R$ 459,99</strong> sem juros</p>
          </div>
          <div className="included">
            <span>Console PS5 Slim</span>
            <span>SSD 1TB</span>
            <span>Controle DualSense</span>
          </div>
          <a
            className="button button-primary full"
            href={purchaseUrl}
            target="_blank"
            rel="noreferrer"
          >
            Comprar no Mercado Livre <ArrowUpRight />
          </a>
          <small>
            Você será direcionado ao anúncio oficial. Preço e disponibilidade
            podem mudar.
          </small>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#">
          <span className="brand-mark">P</span>
          <span>PLAY HAS NO LIMITS</span>
        </a>
        <p>Prepare-se para jogar sem limites.</p>
        <div>
          <a href="#experiencia">Experiência</a>
          <a href="#conteudo">GTA VI</a>
          <a href={purchaseUrl} target="_blank" rel="noreferrer">Comprar</a>
        </div>
        <small>
          PlayStation e PS5 são marcas registradas da Sony Interactive
          Entertainment. GTA é marca da Rockstar Games. Página promocional
          independente.
        </small>
      </footer>
    </main>
  );
}

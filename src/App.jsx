import "./App.css";

const marketData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "R$ 358.240",
    change: "+3,4%",
    trend: "up",
    volume: "R$ 42,1B",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "R$ 18.920",
    change: "+2,1%",
    trend: "up",
    volume: "R$ 18,7B",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "R$ 720",
    change: "-1,2%",
    trend: "down",
    volume: "R$ 4,3B",
  },
];

const portfolioData = [
  { label: "Saldo disponível", value: "R$ 28.450,00" },
  { label: "Criptos em carteira", value: "6 ativos" },
  { label: "Variação 24h", value: "+2,8%" },
];

const transactions = [
  {
    id: "tx-1",
    type: "Compra",
    asset: "Bitcoin",
    amount: "0,024 BTC",
    status: "Concluída",
    statusKey: "done",
    time: "Há 12 min",
  },
  {
    id: "tx-2",
    type: "Venda",
    asset: "Ethereum",
    amount: "1,4 ETH",
    status: "Processando",
    statusKey: "pending",
    time: "Há 40 min",
  },
  {
    id: "tx-3",
    type: "Compra",
    asset: "Solana",
    amount: "22 SOL",
    status: "Concluída",
    statusKey: "done",
    time: "Há 2h",
  },
];

const highlights = [
  {
    title: "Cotação em tempo real",
    description:
      "Acompanhe variações, volume e tendências com atualizações automáticas a cada 30 segundos.",
  },
  {
    title: "Carteira inteligente",
    description:
      "Distribuição de ativos, metas e alertas personalizados para apoiar suas decisões de investimento.",
  },
  {
    title: "Operações rápidas",
    description:
      "Fluxo de compra e venda com confirmação em tempo real e histórico completo de transações.",
  },
];

function App() {
  return (
    <div className="app">
      {/* hero */}
      <header className="hero">
        <div className="container">
          <nav className="nav">
            <div className="brand">
              <span className="brand-dot" aria-hidden="true" />
              <div>
                <h1> Plataforma Digital de compra e venda de criptomoeda</h1>
              </div>
            </div>

            <div className="nav-actions">
              <button className="ghost-button" type="button">
                Entrar
              </button>
              <button className="primary-button" type="button">
                Criar conta
              </button>
            </div>
          </nav>

          <div className="hero-grid">
            <div className="hero-content">
              <h2>
                Compre, venda e monitore criptomoedas com uma experiência mobile
                em primeiro lugar.
              </h2>
              <p>
                Dashboard completo com dados em tempo real, histórico de
                transações e gestão inteligente de carteira. Tudo em uma
                aplicação moderna, rápida e segura.
              </p>

              <div className="hero-actions">
                <button className="primary-button" type="button">
                  Explorar mercado
                </button>
                <button className="outline-button" type="button">
                  Ver demonstração
                </button>
              </div>

              <div className="hero-metrics">
                <div>
                  <strong>90%</strong>
                  <span>Score performance</span>
                </div>
                <div>
                  <strong>+120k</strong>
                  <span>Usuários ativos</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Atualização de preços</span>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-header">
                <div>
                  <p className="card-title">Resumo da carteira</p>
                  <p className="card-subtitle">Saldo total</p>
                </div>
                <span className="badge">Ao vivo</span>
              </div>

              <h2>R$ 102.890,45</h2>
              <p className="card-change">+4,5% nas últimas 24 horas</p>

              <div className="card-grid">
                {portfolioData.map((item) => (
                  <div key={item.label} className="stat-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>

              <button className="secondary-button" type="button">
                Gerenciar carteira
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* mercado */}
        <section className="section" id="mercado">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="section-tag">Mercado agora</p>
                <h2>Principais criptomoedas</h2>
              </div>
              <button className="ghost-button" type="button">
                Atualizar
              </button>
            </div>

            <div className="market-grid">
              {marketData.map((asset) => (
                <article key={asset.symbol} className="market-card">
                  <div>
                    <p className="asset-name">
                      {asset.name} <span>{asset.symbol}</span>
                    </p>
                    <h3>{asset.price}</h3>
                  </div>

                  <div className={`asset-change ${asset.trend}`}>
                    <span>{asset.change}</span>
                    <p>Volume {asset.volume}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* higghlights */}
        <section className="section highlight">
          <div className="container">
            <div className="highlight-content">
              <p className="section-tag">Experiência mobile</p>
              <h2>Componentes dinâmicos e reutilizáveis</h2>
              <p>
                Construímos módulos flexíveis que se adaptam a qualquer tamanho
                de tela. A navegação é fluida, com gestos touch e feedback
                imediato.
              </p>

              <div className="highlight-list">
                {highlights.map((item) => (
                  <div key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="highlight-card">
              <h3>Últimas transações</h3>

              <div className="transaction-list">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="transaction-item">
                    <div>
                      <p className="transaction-type">{transaction.type}</p>
                      <p className="transaction-asset">{transaction.asset}</p>
                      <span>{transaction.amount}</span>
                    </div>

                    <div className="transaction-meta">
                      <span className={`status ${transaction.statusKey}`}>
                        {transaction.status}
                      </span>
                      <small>{transaction.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* fluxo*/}
        <section className="section" id="fluxo">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="section-tag">Fluxo de compra e venda</p>
                <h2>Simulação rápida de operação</h2>
              </div>
            </div>

            <div className="action-grid">
              <div className="action-card">
                <h3>Comprar cripto</h3>
                <p>
                  Selecione o ativo e defina o valor. O cálculo é automático.
                </p>

                <div className="action-inputs">
                  <label>
                    Ativo
                    <select defaultValue="BTC">
                      <option value="BTC">BTC - Bitcoin</option>
                      <option value="ETH">ETH - Ethereum</option>
                      <option value="SOL">SOL - Solana</option>
                    </select>
                  </label>

                  <label>
                    Valor (R$)
                    <input type="text" placeholder="0,00" inputMode="decimal" />
                  </label>
                </div>

                <button className="primary-button" type="button">
                  Confirmar compra
                </button>
              </div>

              <div className="action-card">
                <h3>Vender cripto</h3>
                <p>
                  Veja o impacto na sua carteira e confirme em poucos toques.
                </p>

                <div className="action-inputs">
                  <label>
                    Ativo
                    <select defaultValue="ETH">
                      <option value="BTC">BTC - Bitcoin</option>
                      <option value="ETH">ETH - Ethereum</option>
                      <option value="SOL">SOL - Solana</option>
                    </select>
                  </label>

                  <label>
                    Quantidade
                    <input type="text" placeholder="0,00" inputMode="decimal" />
                  </label>
                </div>

                <button className="outline-button" type="button">
                  Simular venda
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="footer">
        <div
          className="container"
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <p>Projeto de Bloco: Desenvolvimento Front-end com Frameworks</p>
          </div>

          <div className="footer-links">
            <a href="#mercado">Mercado</a>
            <a href="#fluxo">Transações</a>
            <a href="#!">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

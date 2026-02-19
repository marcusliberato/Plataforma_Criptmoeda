const requiredProp = () => null;
requiredProp.isRequired = requiredProp;

export default function ExploreMarketPage({ marketData, marketUpdateLabel, onBack }) {
  return (
    <section className='section' style={{ paddingTop: '24px' }}>
      <div className='section-header'>
        <div>
          <p className='section-tag'>Explorar mercado</p>
          <h2>Visão detalhada dos ativos</h2>
          <p className='market-meta'>{marketUpdateLabel}</p>
        </div>
        <button className='outline-button' type='button' onClick={onBack}>
          Voltar para início
        </button>
      </div>

      <div className='market-grid'>
        {marketData.map((asset) => (
          <article key={asset.symbol} className='market-card'>
            <div>
              <p className='asset-name'>
                {asset.name} <span>{asset.symbol}</span>
              </p>
              <h3>{asset.price}</h3>
              <p className='market-meta'>Volume {asset.volume}</p>
            </div>

            <div className={`asset-change ${asset.trend}`}>
              <span>{asset.change}</span>
              <p>Tendência das últimas 24h</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

ExploreMarketPage.propTypes = {
  marketData: requiredProp.isRequired,
  marketUpdateLabel: requiredProp.isRequired,
  onBack: requiredProp.isRequired,
};

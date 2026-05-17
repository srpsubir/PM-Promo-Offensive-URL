// MAV-38 — All content extracted from pm-pl-connector-prototype.html
// Acronyms expanded on first use throughout. Efficiency key used throughout.

export const MODELS = [
  { id: 'subscription', icon: '🔄', title: 'Subscription',              sub: 'Netflix, Spotify, Salesforce' },
  { id: 'ecommerce',    icon: '🛒', title: 'E-commerce / Transactional', sub: 'Amazon, ASOS, Gymshark' },
  { id: 'marketplace',  icon: '⚡', title: 'Marketplace',               sub: 'Airbnb, Uber, Etsy' },
  { id: 'advertising',  icon: '📡', title: 'Advertising / Media',       sub: 'Meta, YouTube, TikTok' },
  { id: 'usageBased',   icon: '⚙️', title: 'Usage-based / Platform',    sub: 'AWS, Stripe, Twilio' },
];

export const DOMAINS = [
  { id: 'acquisition',  icon: '📈', title: 'Acquisition',               sub: 'Getting new users or customers in the door' },
  { id: 'retention',    icon: '🧲', title: 'Retention',                 sub: 'Keeping them active and reducing churn' },
  { id: 'monetisation', icon: '💰', title: 'Monetisation',              sub: 'Extracting more revenue from existing users' },
  { id: 'efficiency',   icon: '🔧', title: 'Efficiency and Operations', sub: 'Reducing cost, improving reliability, streamlining how work gets done' },
];

export const METRICS = {
  acquisition: [
    'Customer Acquisition Cost (CAC)',
    'Conversion rate',
    'Signup rate',
    'Activation rate',
    'New Monthly Recurring Revenue (MRR)',
    'Trial starts',
    'Paid reach',
    'Time to first value',
    'Win rate',
    'Annual Contract Value (ACV)',
    'Pipeline conversion rate',
    'Sales cycle length',
    'Qualified pipeline',
    'Demo conversion rate',
  ],
  retention: [
    'Churn rate',
    'Daily Active Users / Monthly Active Users (DAU/MAU)',
    'Week 1 retention',
    'Month 3 retention',
    'Net Promoter Score (NPS)',
    'Feature adoption',
    'Session frequency',
    'Contract renewal rate',
  ],
  monetisation: [
    'Average Revenue Per User (ARPU)',
    'Average Revenue Per Account (ARPA)',
    'Expansion Monthly Recurring Revenue (MRR)',
    'Attach rate',
    'Upgrade conversion',
    'Revenue per session',
    'Net Revenue Retention (NRR)',
    'Paid conversion rate',
  ],
  efficiency: [
    '99th Percentile Latency (P99)',
    'Uptime %',
    'Cost per unit of work',
    'Infra cost % of revenue',
    'Mean Time To Recover (MTTR)',
    'Workflow automation rate',
    'Support cost per ticket',
    'Process cycle time',
    'Headcount efficiency',
    'Deploy frequency',
  ],
};

export const PL = {
  subscription: [
    { id: 'revenue_mrr',         name: 'Monthly Recurring Revenue (MRR) / Annual Recurring Revenue (ARR)', desc: 'Subscribers x Average Revenue Per User (ARPU)',              op: null },
    { id: 'cogs',                name: 'Cost of Goods Sold (COGS)',                                         desc: 'Content, infra, support',                                    op: '-' },
    { id: 'gross_profit',        name: 'Gross Profit',                                                      desc: '',                                                           op: '=' },
    { id: 'cac',                 name: 'Customer Acquisition Cost (CAC)',                                   desc: 'Sales and marketing spend',                                  op: '-' },
    { id: 'ltv',                 name: 'Lifetime Value (LTV)',                                              desc: 'ARPU x gross margin / churn rate',                           op: '>' },
    { id: 'contribution_margin', name: 'Contribution Margin',                                               desc: '',                                                           op: '=' },
    { id: 'ebitda',              name: 'Earnings Before Interest, Tax, Depreciation and Amortisation (EBITDA)', desc: 'After R&D and G&A',                                    op: '-' },
  ],
  ecommerce: [
    { id: 'revenue_gmv',         name: 'Revenue / Gross Merchandise Value (GMV)',                           desc: 'Orders x Average Order Value (AOV)',                         op: null },
    { id: 'cogs',                name: 'Cost of Goods Sold (COGS)',                                         desc: 'Product cost',                                              op: '-' },
    { id: 'gross_profit',        name: 'Gross Profit',                                                      desc: '',                                                           op: '=' },
    { id: 'cac',                 name: 'Customer Acquisition Cost (CAC)',                                   desc: 'Paid marketing spend',                                      op: '-' },
    { id: 'returns_cost',        name: 'Fulfillment and Returns',                                           desc: 'Logistics, processing',                                     op: '-' },
    { id: 'contribution_margin', name: 'Contribution Margin',                                               desc: 'Per order unit economics',                                  op: '=' },
    { id: 'ebitda',              name: 'Earnings Before Interest, Tax, Depreciation and Amortisation (EBITDA)', desc: 'After overheads',                                      op: '-' },
  ],
  marketplace: [
    { id: 'gmv',                 name: 'Gross Merchandise Value (GMV)',                                     desc: 'Total transaction volume',                                  op: null },
    { id: 'take_rate',           name: 'Take Rate',                                                         desc: 'Platform commission %',                                     op: 'x' },
    { id: 'revenue',             name: 'Revenue',                                                           desc: 'GMV x take rate',                                           op: '=' },
    { id: 'cac_supply',          name: 'Supply-side Customer Acquisition Cost (CAC)',                       desc: 'Acquiring sellers and hosts',                                op: '-' },
    { id: 'cac_demand',          name: 'Demand-side Customer Acquisition Cost (CAC)',                       desc: 'Acquiring buyers and riders',                                op: '-' },
    { id: 'contribution_margin', name: 'Contribution Margin',                                               desc: 'Per transaction',                                           op: '=' },
    { id: 'ebitda',              name: 'Earnings Before Interest, Tax, Depreciation and Amortisation (EBITDA)', desc: 'After trust, safety, ops',                             op: '-' },
  ],
  advertising: [
    { id: 'dau_mau',             name: 'Daily Active Users / Monthly Active Users (DAU/MAU)',               desc: 'Active user base',                                          op: null },
    { id: 'ad_impressions',      name: 'Ad Impressions',                                                    desc: 'Sessions x ads per session',                                op: '>' },
    { id: 'revenue_cpm',         name: 'Revenue',                                                           desc: 'Impressions x Cost Per Thousand Impressions (CPM) rate',    op: '>' },
    { id: 'content_cost',        name: 'Content Cost',                                                      desc: 'Creation and licensing',                                    op: '-' },
    { id: 'infra_cost',          name: 'Infrastructure Cost',                                               desc: 'Delivery at scale',                                         op: '-' },
    { id: 'gross_profit',        name: 'Gross Profit',                                                      desc: '',                                                          op: '=' },
  ],
  usageBased: [
    { id: 'api_calls',           name: 'Usage Volume',                                                      desc: 'API calls, data, transactions',                             op: null },
    { id: 'revenue_usage',       name: 'Revenue',                                                           desc: 'Volume x price per unit',                                   op: '>' },
    { id: 'infra_cost',          name: 'Infrastructure (Cost of Goods Sold (COGS))',                        desc: 'Compute, bandwidth',                                        op: '-' },
    { id: 'gross_profit',        name: 'Gross Profit',                                                      desc: '',                                                          op: '=' },
    { id: 'expansion_revenue',   name: 'Expansion Revenue',                                                 desc: 'Existing customers growing',                                op: '+' },
    { id: 'ndr',                 name: 'Net Dollar Retention (NDR)',                                        desc: 'Net Revenue Retention (NRR): the compounding engine',        op: '>' },
  ],
};

export const N = {
  subscription: {
    acquisition: {
      narrative: `Your job is to bring new subscribers in the door. Every improvement in conversion rate or channel efficiency adds new Monthly Recurring Revenue (MRR) this period. But the connection to the P&L runs deeper than the top line. Your work directly determines Customer Acquisition Cost (CAC), the cost the company pays to acquire each customer. A lower CAC at the same Average Revenue Per User (ARPU) means a better Lifetime Value (LTV):CAC ratio, which is the single number your CFO uses to judge whether growth is sustainable or just expensive. When you improve trial-to-paid conversion, you are not just adding users. You are making every pound of marketing spend more productive.`,
      exec: `If [your initiative] improves our trial-to-paid conversion by 1%, we add [X] in new Monthly Recurring Revenue (MRR) this quarter without increasing the marketing budget, and our Customer Acquisition Cost (CAC) payback period shortens by [N] weeks. Growth becomes cheaper to sustain.`,
      hl: ['revenue_mrr', 'cac'],
      promo: `PMs who can connect their acquisition metrics to Customer Acquisition Cost (CAC) payback and Lifetime Value (LTV) get promoted faster. This is the language that separates product leaders from feature builders.`,
    },
    retention: {
      narrative: `Retention is the most powerful financial lever in any subscription business. Lifetime Value (LTV) = Average Revenue Per User (ARPU) multiplied by gross margin, divided by churn rate. Churn sits in the denominator. A 1% reduction in monthly churn does not reduce LTV by 1%. At many starting points, it doubles it. Every customer you keep is one the company does not need to re-acquire. Your work directly reduces the effective Customer Acquisition Cost (CAC) burden across the whole business. When churn falls, contribution margin improves because you are preserving revenue that has already been paid to acquire.`,
      exec: `If [your initiative] reduces monthly churn by 1 percentage point, average customer Lifetime Value (LTV) increases by [X] and we need to acquire [Y] fewer new customers each month just to maintain flat Monthly Recurring Revenue (MRR). Retention is our cheapest growth lever.`,
      hl: ['ltv', 'contribution_margin'],
      promo: `Retention PMs who can frame churn reduction in Lifetime Value (LTV) and contribution margin terms are the ones getting promoted to Senior PM and Group PM. That framing is exactly what this programme teaches.`,
    },
    monetisation: {
      narrative: `Monetisation in a subscription business is the most capital-efficient growth lever available. You have already paid the Customer Acquisition Cost (CAC). Every pound of expansion revenue from existing customers has near-zero incremental acquisition cost and flows almost entirely to gross profit. The metric your CFO watches here is Net Revenue Retention (NRR). If NRR is above 100%, your company can grow Annual Recurring Revenue (ARR) without acquiring a single new customer. A monetisation PM who moves NRR from 95% to 105% has fundamentally changed the unit economics of the entire business.`,
      exec: `Our current Net Revenue Retention (NRR) is [X]%. Each percentage point we add through [your initiative] means our existing customer base alone covers [Y]% of our growth target this quarter, before we acquire a single new customer.`,
      hl: ['revenue_mrr', 'ltv', 'contribution_margin'],
      promo: `Monetisation PMs who understand Net Revenue Retention (NRR) and expansion Monthly Recurring Revenue (MRR) get taken seriously in board-level conversations. That commercial fluency is what accelerates promotion.`,
    },
    efficiency: {
      narrative: `Infrastructure work in a subscription business flows directly to gross margin. Every reduction in cost to deliver the product per user means more of each subscription pound reaches gross profit. This matters more than it sounds: subscription businesses are valued as a multiple of Annual Recurring Revenue (ARR), but that multiple is heavily influenced by gross margin. A SaaS business at 80% gross margin is worth significantly more than one at 60% at the same revenue. When you reduce infrastructure cost, you expand gross margin percentage, which compounds through the entire valuation of the business.`,
      exec: `[Your initiative] reduces our infrastructure cost per user by [X]%, moving gross margin from [Y]% to [Z]%. At our current Annual Recurring Revenue (ARR), that is [amount] in additional annual contribution margin, and it improves our valuation multiple.`,
      hl: ['cogs', 'gross_profit'],
      promo: `Infra and platform PMs who can articulate their work in gross margin terms earn a seat at the commercial table. Most never make that connection. You will.`,
    },
  },
  ecommerce: {
    acquisition: {
      narrative: `In e-commerce, acquisition is expensive and the math is unforgiving. Customer Acquisition Cost (CAC) is often the largest variable cost line, and it only pays off if customers come back. Your job is to bring new buyers in at a cost the business can sustain. When you improve paid channel conversion rates, you lower effective CAC. When you improve the first-purchase experience, you raise the probability that a first-time buyer becomes a repeat customer, which is what makes the CAC worthwhile in the first place. The CFO tracks CAC payback: how many purchases until the acquisition cost is recovered?`,
      exec: `[Your initiative] drops effective Customer Acquisition Cost (CAC) from [X] to [Y], making first-purchase profitability achievable and reducing the repeat-purchase burden needed to break even on each new customer.`,
      hl: ['revenue_gmv', 'cac'],
      promo: `Acquisition PMs who think in Customer Acquisition Cost (CAC) payback and Lifetime Value (LTV) terms, not just funnel conversion, are the ones who get promoted into commercial and growth leadership roles.`,
    },
    retention: {
      narrative: `In e-commerce, retention is not contractual. Nobody owes you a second purchase. Every customer who comes back is a choice. Repeat purchase rate is the most important financial metric in the business: it separates a customer base that generates predictable revenue from one that requires constant expensive re-acquisition. Lifetime Value (LTV) in e-commerce = Average Order Value (AOV) multiplied by purchase frequency, multiplied by gross margin, multiplied by customer lifespan. You own purchase frequency and lifespan. And because Customer Acquisition Cost (CAC) has already been paid, every repeat order flows almost entirely to contribution margin.`,
      exec: `[Your initiative] increases our 90-day repeat purchase rate from [X]% to [Y]%, generating [Z] in revenue from customers we have already paid to acquire, without a single additional pound of marketing spend.`,
      hl: ['revenue_gmv', 'contribution_margin'],
      promo: `Retention PMs in e-commerce who can frame repeat purchase rate in Lifetime Value (LTV) and contribution margin terms unlock a completely different level of commercial influence in their organisation.`,
    },
    monetisation: {
      narrative: `Monetisation in e-commerce means getting more revenue from each transaction. Your primary lever is Average Order Value (AOV). Every pound increase in AOV at the same gross margin percentage drops directly to gross profit. And unlike acquisition, there is no Customer Acquisition Cost (CAC) attached to this revenue. It comes from customers already in the checkout flow. Upsell, cross-sell, bundling, and personalised recommendations all move AOV. The CFO loves this lever because it is high-margin growth with no incremental acquisition cost whatsoever.`,
      exec: `[Your initiative] increases Average Order Value (AOV) by [X] on average for customers who see it. Rolling it to 100% of sessions at current traffic is worth [Y] in additional gross profit this quarter, with no change in marketing spend.`,
      hl: ['revenue_gmv', 'gross_profit'],
      promo: `Monetisation PMs who can put a gross profit number on their Average Order Value (AOV) work give their exec something concrete to champion upward. That is what changes how leadership sees you.`,
    },
    efficiency: {
      narrative: `In e-commerce, the cost lines that matter most are Cost of Goods Sold (COGS) and fulfillment. Infrastructure and operations PMs who improve checkout reliability, fulfillment efficiency, or return processing directly move contribution margin per order. A 1% improvement in checkout conversion at significant traffic volume is a material revenue number. A reduction in cost per fulfilled order is a direct margin improvement. Reliability also carries a hidden revenue connection: slow load times abandon customers mid-funnel, and in e-commerce every second of latency has a measurable conversion cost.`,
      exec: `[Your initiative] improves our checkout conversion rate by approximately [X]%, worth [Y] in additional revenue at current traffic, and reduces fulfillment cost by [Z] per order flowing directly to contribution margin.`,
      hl: ['cogs', 'contribution_margin'],
      promo: `Operations and platform PMs who can translate reliability improvements into revenue and margin numbers get treated as commercial partners, not just technical contributors.`,
    },
  },
  marketplace: {
    acquisition: {
      narrative: `Marketplace acquisition is structurally different from any other model because you must acquire two sides simultaneously. Supply without demand is useless. Demand without supply is frustrating. Your job is to grow liquidity, not just user counts. Liquidity means enough supply density in the right geographies or categories that demand can reliably find what it needs, and enough demand that supply stays motivated to remain active. Every pound of acquisition spend must be evaluated against its liquidity impact, not just its volume impact.`,
      exec: `[Your initiative] adds [X] suppliers in our top three undersupplied geographies, improving demand match rate by [Y]%, which at current demand volume translates to [Z] in additional Gross Merchandise Value (GMV) this quarter.`,
      hl: ['gmv', 'cac_supply', 'cac_demand'],
      promo: `Marketplace PMs who think in liquidity and Gross Merchandise Value (GMV) rather than just user counts operate at a fundamentally different commercial level. That thinking gets you noticed.`,
    },
    retention: {
      narrative: `Marketplace retention is existential in a way unique to this model. When a subscription business loses a customer, it loses that customer's revenue. When a marketplace loses supply or demand, it loses the network effect that makes the platform valuable to everyone else. Churn compounds: less supply makes the platform less attractive to demand, which drives away more supply. Your retention metrics are measuring the health of the liquidity engine. When they fall, Gross Merchandise Value (GMV) falls not linearly but exponentially, because each churned participant reduces the value for those who remain.`,
      exec: `Our supply-side 90-day retention is [X]%. Each retained supplier completes an average of [N] transactions per month. [Your initiative] raises retention to [Y]%, protecting [Z] in monthly Gross Merchandise Value (GMV) that would otherwise require expensive re-acquisition to replace.`,
      hl: ['gmv', 'contribution_margin'],
      promo: `Retention PMs who can model the compounding effect of marketplace liquidity loss speak in terms that immediately resonate with marketplace investors and leadership.`,
    },
    monetisation: {
      narrative: `Take rate expansion is the highest-margin growth lever available to a marketplace. The Gross Merchandise Value (GMV) is already flowing through the platform. You have already paid to generate it. Increasing how much revenue you extract from each transaction through premium listings, promoted placement, insurance, payments, or value-added services requires near-zero incremental cost. Every percentage point of take rate improvement at scale is almost pure revenue growth. Your CFO watches take rate trends closely because they signal pricing power and the strength of the platform's value proposition to both sides.`,
      exec: `Rolling out [your initiative] to our top 20% of suppliers increases effective take rate to [Y]% on that cohort, adding [Z] in revenue from existing Gross Merchandise Value (GMV) with no change in transaction volume or acquisition spend.`,
      hl: ['take_rate', 'revenue', 'contribution_margin'],
      promo: `Monetisation PMs at marketplaces who understand take rate expansion and its margin implications are operating at a strategic level that gets rewarded with promotion and ownership.`,
    },
    efficiency: {
      narrative: `At marketplace scale, the operational costs per transaction, including trust and safety review, payment processing, dispute resolution, and fraud detection, can significantly erode contribution margin. Your work on infrastructure and operations directly determines how much of the take rate flows to profit. Automating fraud checks reduces cost per onboarded supplier. Improving dispute resolution speed reduces support cost per transaction. Each improvement has a direct, calculable impact on unit economics, which is how a marketplace moves from contribution-margin-negative to profitable at scale.`,
      exec: `[Your initiative] reduces cost per onboarded supplier from [X] to [Y]. At current onboarding volume, that saving flows directly to contribution margin without touching Gross Merchandise Value (GMV) or take rate.`,
      hl: ['cac_supply', 'contribution_margin'],
      promo: `Operations PMs at marketplaces who tie automation work to contribution margin per transaction give their exec a number to take to the board. That is the work that earns promotion.`,
    },
  },
  advertising: {
    acquisition: {
      narrative: `In an ad-supported business, user growth is revenue growth. There is a direct, calculable line from each new acquired user to the ad revenue they generate over their lifetime on the platform. Your CFO thinks about revenue per Daily Active User as a unit economic: every incremental active user generates a predictable amount of ad revenue based on average session length, impressions per session, and Cost Per Thousand Impressions (CPM). When you improve acquisition efficiency, you are not just growing the user base. You are expanding the ad inventory available to sell. More Daily Active Users / Monthly Active Users (DAU/MAU) means more impressions, which means more revenue at the same CPM rates.`,
      exec: `[Your initiative] drives each percentage point of Daily Active Users / Monthly Active Users (DAU/MAU) growth, generating approximately [X] in incremental annual ad revenue at our current Cost Per Thousand Impressions (CPM) and engagement rates. That means our user acquisition spend has a direct and measurable return on the P&L.`,
      hl: ['dau_mau', 'ad_impressions', 'revenue_cpm'],
      promo: `Acquisition PMs at media companies who can express Daily Active User (DAU) growth in ad revenue terms are the ones who get to shape growth strategy, not just optimise funnels.`,
    },
    retention: {
      narrative: `In ad-supported media, user retention is literally revenue retention. A churned user is a permanent loss of their entire future ad revenue contribution. Unlike subscription churn, there is no cancellation to catch. Users simply stop coming back. Engagement depth matters as much as user count. A user who spends 30 minutes daily generates more ad impressions and therefore more revenue than one who visits briefly each week. Your retention metrics, daily active rate, session frequency, session length, are all proxy metrics for the ad inventory your platform generates.`,
      exec: `[Your initiative] improves 30-day retention by [Y] percentage points, retaining the equivalent of [Z] in annual ad revenue we would otherwise lose and need to replace through new, expensive user acquisition.`,
      hl: ['dau_mau', 'ad_impressions', 'revenue_cpm'],
      promo: `Retention PMs who can quantify engagement in ad revenue terms operate at a level that earns commercial trust from leadership. This is the framing that gets you promoted.`,
    },
    monetisation: {
      narrative: `Ad monetisation improvements are pure margin. The users are already on the platform. The impressions are already being served. Every improvement in Cost Per Thousand Impressions (CPM) through better targeting, better ad format performance, better relevance scoring, or higher fill rates extracts more revenue from existing traffic with near-zero incremental cost. For advertiser-side PMs: your work on targeting accuracy and measurement tools directly affects what advertisers are willing to pay per impression. Better measurement means advertisers can prove return on investment, which increases CPM bids. That flows directly to revenue.`,
      exec: `[Your initiative] improves our ad relevance score by [X] points, increasing average Cost Per Thousand Impressions (CPM) by [Y]%. At our current monthly impression volume, that is [Z] in additional quarterly revenue with no increase in content spend or user acquisition cost.`,
      hl: ['revenue_cpm', 'gross_profit'],
      promo: `Monetisation PMs who can express Cost Per Thousand Impressions (CPM) improvement in quarterly revenue terms are doing the work that earns a VP-level commercial voice in the business.`,
    },
    efficiency: {
      narrative: `In media businesses, content and infrastructure are typically the two largest cost lines. Gross margin improvement comes from reducing the cost of content delivery or production relative to the ad revenue it generates. An infrastructure PM who reduces cost per video served, improves CDN efficiency, or optimises transcoding pipelines directly improves the gross margin on every pound of ad revenue. Reliability also has a direct revenue connection: outages and buffering cause session abandonment, reducing impressions served and ad revenue for those sessions.`,
      exec: `[Your initiative] reduces content delivery cost by [X]%, saving [Y] annually in infrastructure spend. At our current gross margin, this flows directly to Earnings Before Interest, Tax, Depreciation and Amortisation (EBITDA) with no impact on user experience.`,
      hl: ['content_cost', 'infra_cost', 'gross_profit'],
      promo: `Infrastructure PMs at media companies who frame their work in gross margin and Earnings Before Interest, Tax, Depreciation and Amortisation (EBITDA) terms earn a seat at the commercial leadership table. Most never make that translation.`,
    },
  },
  usageBased: {
    acquisition: {
      narrative: `In usage-based businesses, acquisition is just the starting gun. New customers often begin small and grow their usage over time, so the value of an acquired customer compounds as they expand. An acquisition PM who improves time-to-first-value is accelerating the entire revenue trajectory of every new customer. Customer Acquisition Cost (CAC) in usage-based is often high, particularly in enterprise. The CAC payback calculation depends entirely on how quickly customers ramp to meaningful usage. Shortening that ramp is one of the highest-return moves an acquisition PM can make.`,
      exec: `[Your initiative] reduces time to first successful API call from [X] days to [Y] days, increasing the probability a trial customer reaches meaningful usage by [Z]%, improving our Customer Acquisition Cost (CAC) payback period by [N] months across the new customer cohort.`,
      hl: ['revenue_usage', 'api_calls'],
      promo: `Acquisition PMs at platform companies who think in time-to-value and Customer Acquisition Cost (CAC) payback earn the trust of both product and commercial leadership. That dual credibility accelerates promotion.`,
    },
    retention: {
      narrative: `Net Revenue Retention (NRR) is the most powerful metric in a usage-based business and the one your CFO watches most closely. NRR measures whether existing customers are spending more or less than a year ago, net of churn. If NRR is above 100%, your company can grow Annual Recurring Revenue (ARR) without acquiring a single new customer. At NRR of 120%, you can lose 20% of your customers and still grow revenue. Your retention work, improving onboarding, deepening feature adoption, reduces the risk of a customer migrating away and directly builds NRR.`,
      exec: `Our current Net Revenue Retention (NRR) is [X]%. Each percentage point we add through [your initiative] means our existing base alone grows Annual Recurring Revenue (ARR) by [Y] this year, before a single new customer is acquired.`,
      hl: ['expansion_revenue', 'ndr'],
      promo: `Retention PMs at usage-based companies who understand Net Revenue Retention (NRR) and can model its effect on Annual Recurring Revenue (ARR) growth are operating at a level that earns board-room credibility and promotion.`,
    },
    monetisation: {
      narrative: `Usage-based monetisation is about designing pricing that grows with customer success. When customers succeed, they use more, and revenue follows naturally. Your job is to remove the friction between customer success and increased usage through better pricing tier design, usage visibility tools, or new monetisable capabilities. The CFO thinks about this as Net Revenue Retention (NRR) expansion through product-led means. It is the cleanest form of revenue growth: no new sales motion, no new Customer Acquisition Cost (CAC), just customers finding more value and paying more for it.`,
      exec: `[Your initiative] increases average spend per customer in that cohort by [Y]%, converting a plateau in usage into an expansion revenue moment and adding [Z] to Net Revenue Retention (NRR) without incremental sales cost.`,
      hl: ['revenue_usage', 'expansion_revenue', 'ndr'],
      promo: `Monetisation PMs at platform companies who design for Net Revenue Retention (NRR) expansion are doing strategic product work that directly creates enterprise value. That is promotion-level thinking.`,
    },
    efficiency: {
      narrative: `Usage-based infrastructure work is existential, not incremental. Unlike pure SaaS businesses at 70-80% gross margin, usage-based businesses often run at 40-60% because they are delivering real compute, bandwidth, or transaction processing. If unit costs do not fall as volume grows, the business cannot scale profitably. Gross margin improvement through infrastructure efficiency is not a nice-to-have. It is the path to a viable business model. Every reduction in cost per API call or cost per GB is a direct gross margin improvement that compounds as volume grows.`,
      exec: `[Your initiative] reduces our infrastructure cost per API call by [X]%, moving gross margin from [Y]% to [Z]%. At our current revenue run rate, that is [amount] in additional annual gross profit, and the improvement compounds as volume scales.`,
      hl: ['infra_cost', 'gross_profit'],
      promo: `Infrastructure PMs at platform companies who can express their work in gross margin terms are doing the commercial thinking that earns them a seat at the strategic table. This is the skill that gets you promoted.`,
    },
  },
};

export const SOCIAL = {
  1: `Used by PMs at <strong>Vimeo</strong>, <strong>Zalando</strong> and 20 others.`,
  2: `Most PMs have never asked which P&L line their exec is accountable for. This diagnostic answers it.`,
  3: `PMs at Vimeo and Zalando said this was the question nobody had asked them directly.`,
  4: `The metric you name here is the bridge between your daily work and your exec's biggest pressure.`,
};

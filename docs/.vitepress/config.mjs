import { defineConfig } from 'vitepress'

const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : 'Cross-Border-Payments'

export default defineConfig({
  title: "F2F Cross-Border",
  description: "Fiat-to-Fiat Settlement Platform",
  base: `/${repoName}/`,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Get Started',
        items: [
          { text: 'How It Works', link: '/get-started/how-it-works' },
          { text: 'Running the Demo', link: '/get-started/running-the-demo' },
          { text: 'Problem Analysis', link: '/get-started/problem-analysis' },
          { text: 'Objectives & Success Criteria', link: '/get-started/objectives' },
          { text: 'Stakeholders & Roles', link: '/get-started/stakeholders' },
          { text: 'Evaluation Axes', link: '/get-started/evaluation-axes' },
          { text: 'Demonstration Scenario', link: '/get-started/demonstration-scenario' }
        ]
      },
      {
        text: 'Architecture',
        items: [
          { text: 'System Overview', link: '/architecture/overview' },
          { text: 'The Trust Layer: Hedera', link: '/architecture/trust-layer' },
          { text: 'The Settlement Layer: Chain Routing', link: '/architecture/settlement-layer' },
          { text: 'Governance', link: '/architecture/governance' },
          { text: 'Data Model', link: '/architecture/data-model' },
          { text: 'API Design', link: '/architecture/api-design' },
          { text: 'Functional Requirements', link: '/architecture/functional-requirements' },
          { text: 'Settlement Speed by Corridor', link: '/architecture/settlement-speed' },
          { text: 'Stablecoin Market Share by Chain', link: '/architecture/stablecoin-market-share' },
          { text: 'Payee Verification & Failed Settlement', link: '/architecture/payee-verification' },
          { text: 'Design System', link: '/architecture/design-system' },
          { text: 'Security & Privacy', link: '/architecture/security-privacy' }
        ]
      },
      {
        text: 'Business',
        items: [
          { text: 'Market Analysis', link: '/business/market-analysis' },
          { text: 'Alternative Approaches', link: '/business/alternative-approaches' },
          { text: 'Business Model', link: '/business/business-model' },
          { text: 'Lean Canvas', link: '/business/lean-canvas' },
          { text: 'Hedera Network Impact', link: '/business/network-impact' },
          { text: 'Go-to-Market Strategy', link: '/business/go-to-market' },
          { text: '5-Year Revenue Projection', link: '/business/global-capture-model' },
          { text: 'Token vs. No Token', link: '/business/token-decision' },
          { text: 'SWOT Analysis', link: '/business/swot' },
          { text: 'Partner Coverage by Corridor', link: '/business/partner-coverage' },
          { text: 'Potential Partners for Collaboration', link: '/business/potential-partners' },
          { text: 'Why a Local Bank Is Required', link: '/business/local-bank-requirement' }
        ]
      },
      {
        text: 'Compliance & Legal',
        items: [
          { text: 'Regulatory Landscape', link: '/legal/regulatory-landscape' },
          { text: 'Why This Is Legal', link: '/legal/why-this-is-legal' },
          { text: 'Compliance Data & Privacy', link: '/legal/compliance-data' },
          { text: 'Regulator Oversight', link: '/legal/regulator-oversight' }
        ]
      },
      {
        text: 'Analysis',
        items: [
          { text: 'Testing & Validation', link: '/analysis/testing-validation' },
          { text: 'Risks & Mitigations', link: '/analysis/risks-mitigations' },
          { text: 'Innovation, Limitations & Ethics', link: '/analysis/innovation-ethics' },
          { text: 'Known Limitations', link: '/analysis/known-limitations' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Module Reference', link: '/reference/modules' },
          { text: 'Live Testnet Evidence', link: '/reference/testnet-evidence' },
          { text: 'MongoDB + Prisma Setup', link: '/reference/mongodb-setup' },
          { text: 'Site Tour', link: '/reference/site-tour' },
          { text: 'App Tour', link: '/reference/app-tour' }
        ]
      },
      {
        text: 'Project',
        items: [
          { text: 'Milestones', link: '/project/milestones' },
          { text: 'UZH Blockchain', link: '/project/uzh-blockchain' },
          { text: 'Roadmap', link: '/project/roadmap' },
          { text: 'Pitch Strategy', link: '/project/pitch-strategy' },
          { text: 'User Feedback Survey', link: '/project/user-feedback-survey' },
          { text: 'Conclusion', link: '/project/conclusion' },
          { text: 'FAQ', link: '/project/faq' }
        ]
      }
    ]
  }
})

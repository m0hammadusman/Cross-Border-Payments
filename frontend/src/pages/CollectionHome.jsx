import { Link } from 'react-router-dom';
import brandIcon from '../assets/brand/icon.svg';
import NotificationPhotoSection from '../components/NotificationPhotoSection';
import f2fEthglobalCard from '../assets/marketing/f2f-uzh-ethglobal.jpeg';

const offerings = [
  { icon: '⚡', label: 'Instant settlement' },
  { icon: '🔐', label: 'Non-custodial' },
  { icon: '🔎', label: 'Publicly verifiable' },
];

const projects = [
  {
    name: 'F2F Cross-Border',
   
    description:
      'Fiat in, fiat out, no wallet ever. Licensed partners handle the money; Hedera anchors every step so it’s provable, not just claimed.',
    to: '/cross-border',
    cta: 'Explore F2F Cross-Border',
    hideCta: true,
    image: f2fEthglobalCard,
    refs: [
      
      { label: 'Open live demo', href: '/cross-border', internal: true },
    ],
  },
];

export default function CollectionHome() {
  return (
    <div className="min-h-screen bg-canvas font-sans antialiased flex justify-center">
      <main className="w-full max-w-6xl flex flex-col p-8 md:p-16 lg:p-24 gap-12 overflow-x-hidden">
        
        {/* Project Branding */}
        <div className="flex justify-between items-center">
          <div className="font-large text-base tracking-wide flex items-center gap-3 text-ink">
            <img src={brandIcon} alt="" className="w-9 h-9 rounded-xl shadow-sm" />
            <span>F2F Cross-Border</span>
          </div>
        </div>

        <NotificationPhotoSection />

        <section className="max-w-2xl">
          <p className="text-ink-muted leading-relaxed">
            Money moves through wildly different rails today; card and bank
            transfers, compliant stablecoins settling in seconds, and increasingly,
            autonomous AI agents paying each other directly over protocols
            and each of those rails comes with its own tooling, its own
            dashboards, and its own private idea of what actually counts as proof.
          </p>
          <p className="gradient-text font-script text-3xl md:text-4xl my-6 leading-snug">
            Did this actually happen, and can I check that myself?
          </p>
          <p className="text-ink-muted leading-relaxed">
            Neither a sender wiring money home nor a regulator trying to keep pace
            with machine-speed transactions should have to learn five unrelated
            systems just to get an honest answer to that one question, and that
            single conviction is what this project is built on.
          </p>
        </section>

        <section>
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">Project</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-ink mb-12">
            Explore the project
          </h2>

          <div className="flex flex-col gap-8 md:gap-10">
            {projects.map((proj) => {
              const Wrapper = proj.external ? 'a' : Link;
              const wrapperProps = proj.external
                ? { href: proj.to, target: '_blank', rel: 'noreferrer' }
                : { to: proj.to };
              return (
                <div
                  key={proj.name}
                  className="glass rounded-[2rem] p-8 md:p-12 border border-hairline hover:border-brand-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  <p className="text-xs md:text-sm font-semibold tracking-wider uppercase text-brand-400 mb-4">{proj.tag}</p>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-ink mb-4">{proj.name}</h3>
                  {proj.image && (
                    <img
                      src={proj.image}
                      alt={`${proj.name} — ETHGlobal Lisbon 2026 showcase`}
                      className="w-full max-w-sm rounded-2xl border border-hairline mb-6 mx-auto"
                    />
                  )}
                  <p className="text-ink-muted text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">{proj.description}</p>
                  {proj.refs && (
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 mb-6">
                      {proj.refs.map((ref) =>
                        ref.internal ? (
                          <Link 
                            key={ref.label} 
                            to={ref.href} 
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-500 text-white font-semibold text-lg shadow-lg hover:bg-brand-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                          >
                            {ref.label} &rarr;
                          </Link>
                        ) : (
                          <a
                            key={ref.label}
                            href={ref.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-brand-500 font-medium hover:underline text-sm"
                          >
                            {ref.label} &rarr;
                          </a>
                        )
                      )}
                    </div>
                  )}
                  {!proj.hideCta && (
                    <Wrapper
                      {...wrapperProps}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-400/10 border border-transparent text-sm font-semibold text-brand-500 hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all duration-300"
                    >
                      {proj.cta} &rarr;
                    </Wrapper>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

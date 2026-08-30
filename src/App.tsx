import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";
import headshot from "./assets/images/profile-headshot.jpg";
import tanstackLogo from "./assets/images/tanstack-logo.png";
import openstoryLogo from "./assets/images/openstory-logo.png";
import flowLogo from "./assets/images/flow-logo.svg";
import commaLogo from "./assets/images/comma-logo.png";

gsap.registerPlugin(ScrollTrigger);

const EMAIL = "tombeckenham@gmail.com";

const MARQUEE = [
	"Available for contract",
	"AI platform engineering",
	"TypeScript end-to-end",
	"0→1 product delivery",
	"Fractional CTO",
	"Open source",
];

function App() {
	const heroRef = useRef<HTMLDivElement>(null);
	const servicesRef = useRef<HTMLDivElement>(null);
	const workRef = useRef<HTMLDivElement>(null);
	const ossRef = useRef<HTMLDivElement>(null);
	const expRef = useRef<HTMLDivElement>(null);
	const writingRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const hero = heroRef.current;
		if (hero) {
			gsap.fromTo(
				hero.querySelectorAll("[data-reveal]"),
				{ opacity: 0, y: 24 },
				{
					opacity: 1,
					y: 0,
					duration: 0.7,
					stagger: 0.07,
					ease: "expo.out",
					delay: 0.1,
				},
			);
		}

		const sections = [
			servicesRef.current,
			workRef.current,
			ossRef.current,
			expRef.current,
			writingRef.current,
			contactRef.current,
		];
		sections.forEach((section) => {
			if (!section) return;
			gsap.fromTo(
				section.querySelectorAll("[data-reveal]"),
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.55,
					stagger: 0.05,
					ease: "expo.out",
					scrollTrigger: {
						trigger: section,
						start: "top 80%",
						toggleActions: "play none none reverse",
					},
				},
			);
		});
	}, []);

	return (
		<div className="page">
			<nav className="topnav">
				<a href="#top" className="brand">
					Tom Beckenham<span className="accent">.</span>
				</a>
				<div className="topnav-links mono">
					<a href="#services">Services</a>
					<a href="#work">Work</a>
					<a href="#oss">Open source</a>
					<a href="#experience">Experience</a>
					<a href="#writing">Writing</a>
				</div>
				<a className="btn btn-solid" href={`mailto:${EMAIL}`}>
					Start a project ↗
				</a>
			</nav>

			{/* ─────────────── Hero */}
			<header ref={heroRef} className="hero" id="top">
				<div className="hero-copy">
					<p className="mono kicker" data-reveal>
						Senior full-stack &amp; AI platform engineer
						<span className="accent"> ✦ </span>Sydney / remote
					</p>
					<h1 className="hero-title" data-reveal>
						From first
						<br />
						<em className="serif-it">commit</em>
						<br />
						to first
						<br />
						<em className="serif-it">paying&nbsp;customer.</em>
					</h1>
					<p className="hero-lede" data-reveal>
						25+ years shipping complex products. Two venture-backed companies
						founded and sold. Now hands-on full time — sole architect of{" "}
						<a href="https://openstory.so">OpenStory</a>, core maintainer of{" "}
						<a href="https://tanstack.com/ai">TanStack AI</a>, and available for
						contract: 0→1 builds, embedded senior IC, or fractional technical
						leadership.
					</p>
					<div className="hero-ctas" data-reveal>
						<a className="btn btn-solid" href={`mailto:${EMAIL}`}>
							Email me ↗
						</a>
						<a className="btn" href="https://www.linkedin.com/in/tombeckenham/">
							LinkedIn
						</a>
						<a className="btn" href="https://github.com/tombeckenham">
							GitHub
						</a>
					</div>
				</div>
				<div className="hero-photo" data-reveal>
					<img src={headshot} alt="Tom Beckenham" />
					<span className="sticker mono">● Available for contract</span>
				</div>
			</header>

			<div className="stats-strip">
				<div className="stat" data-reveal>
					<b>25+</b>
					<span className="mono">years shipping software</span>
				</div>
				<div className="stat" data-reveal>
					<b>×2</b>
					<span className="mono">companies founded &amp; sold</span>
				</div>
				<div className="stat" data-reveal>
					<b>£18m+</b>
					<span className="mono">monthly volume at Comma</span>
				</div>
				<div className="stat" data-reveal>
					<b>2,200+</b>
					<span className="mono">commits on OpenStory</span>
				</div>
			</div>

			<Marquee />

			{/* ─────────────── §01 Services */}
			<section ref={servicesRef} className="sect" id="services">
				<SectionHeading index="01" title="What I do" />
				<div className="svc">
					<article className="svc-row" data-reveal>
						<span className="svc-num mono">01</span>
						<h3>AI platform engineering</h3>
						<div className="svc-detail">
							<p>
								LLM and generative-media integration done properly: provider
								adapters across Anthropic, OpenAI, Google, OpenRouter and
								fal.ai, durable pipelines on Cloudflare Workflows, streaming
								structured output — and deterministic testing of
								non-deterministic AI flows.
							</p>
							<p className="mono svc-tags">
								LLM &amp; media pipelines / streaming structured output /
								record-and-replay E2E
							</p>
						</div>
					</article>
					<article className="svc-row" data-reveal>
						<span className="svc-num mono">02</span>
						<h3>Full-stack product delivery</h3>
						<div className="svc-detail">
							<p>
								Zero-to-one builds as sole or lead engineer. TypeScript
								end-to-end: React, TanStack Start &amp; Query, Node and Bun,
								Cloudflare Workers, D1 and R2. Strict types, real test
								coverage, CI/CD from day one — shipped weekly, not quarterly.
							</p>
							<p className="mono svc-tags">
								0→1 MVPs that reach revenue / serverless &amp; edge / legacy
								rebuilds, AI-accelerated
							</p>
						</div>
					</article>
					<article className="svc-row" data-reveal>
						<span className="svc-num mono">03</span>
						<h3>Technical leadership</h3>
						<div className="svc-detail">
							<p>
								Fractional CTO and advisory for founders. I&rsquo;ve raised
								US&nbsp;$6m+, built engineering teams from 0 to 15, sold to
								enterprise, and sat both sides of an acquisition — so the
								advice covers architecture, hiring and the board deck.
							</p>
							<p className="mono svc-tags">
								fractional CTO / architecture &amp; team reviews /
								founder-to-founder diligence
							</p>
						</div>
					</article>
				</div>
			</section>

			{/* ─────────────── §02 Selected work */}
			<section ref={workRef} className="sect" id="work">
				<SectionHeading index="02" title="Selected work" />

				<article className="case" data-reveal>
					<span className="case-num">01</span>
					<div className="case-main">
						<div className="case-top">
							<h3>RegWrangler</h3>
							<span className="chip mono">contract build</span>
							<span className="chip mono">with Hazelbrook Legal</span>
						</div>
						<p>
							Regulatory change-management platform for Australian financial
							services, built with law firm{" "}
							<a href="https://hazelbrooklegal.com">Hazelbrook Legal</a>.
							Engaged as the sole engineer to take it from concept to a
							working, scalable product — obligation tracking, assessment and
							allocation workflows, bulk import of legacy regulatory trackers.{" "}
							<em className="serif-it accent">
								First paying client within one month of v1.
							</em>{" "}
							Now used by some of Australia&rsquo;s largest financial services
							organisations.
						</p>
					</div>
					<dl className="case-facts">
						<div>
							<dt className="mono">role</dt>
							<dd>sole contract engineer</dd>
						</div>
						<div>
							<dt className="mono">to revenue</dt>
							<dd>&lt; 1 month from v1</dd>
						</div>
						<div>
							<dt className="mono">in production</dt>
							<dd>major Australian FS orgs</dd>
						</div>
					</dl>
				</article>

				<article className="case" data-reveal>
					<span className="case-num">02</span>
					<div className="case-main">
						<div className="case-top">
							<img className="case-logo" src={openstoryLogo} alt="" />
							<h3>OpenStory</h3>
							<span className="chip mono">founder</span>
							<span className="chip mono">open source</span>
						</div>
						<p>
							Open-source, AI-native video platform: paste a script, get a
							fully storyboarded, motion-and-music video — end-to-end on
							Cloudflare&rsquo;s edge. A durable pipeline of 30+ composable
							Workflows orchestrates script analysis, storyboarding,
							image-to-video motion, music and final merge. 15+ frontier models
							behind one selector; a deterministic Playwright E2E suite with
							record-and-replay mocking gates every PR.
						</p>
					</div>
					<dl className="case-facts">
						<div>
							<dt className="mono">scale</dt>
							<dd>2,200+ commits · 350+ PRs</dd>
						</div>
						<div>
							<dt className="mono">stack</dt>
							<dd>TanStack Start · Workers · D1 · R2</dd>
						</div>
						<div>
							<dt className="mono">visit</dt>
							<dd>
								<a href="https://openstory.so">openstory.so</a>
							</dd>
						</div>
					</dl>
				</article>

				<article className="case" data-reveal>
					<span className="case-num">03</span>
					<div className="case-main">
						<div className="case-top">
							<img className="case-logo" src={flowLogo} alt="" />
							<h3>Flow Wallet</h3>
							<span className="chip mono">engineering lead</span>
							<span className="chip mono">Flow Foundation</span>
						</div>
						<p>
							Lead engineer on the Chrome-extension crypto wallet for the Flow
							blockchain — 20k+ monthly active users. Led an architectural
							overhaul of the extension core that cut critical P0 issues by
							over 95%, unified state management, and introduced 180+ Vitest
							and Playwright tests with automated CI/CD.
						</p>
					</div>
					<dl className="case-facts">
						<div>
							<dt className="mono">users</dt>
							<dd>20k+ MAU</dd>
						</div>
						<div>
							<dt className="mono">p0 issues</dt>
							<dd>down 95%+</dd>
						</div>
						<div>
							<dt className="mono">source</dt>
							<dd>
								<a href="https://github.com/onflow/FRW-Extension">
									onflow/FRW-Extension
								</a>
							</dd>
						</div>
					</dl>
				</article>

				<article className="case" data-reveal>
					<span className="case-num">04</span>
					<div className="case-main">
						<div className="case-top">
							<img className="case-logo" src={commaLogo} alt="" />
							<h3>Comma Payments</h3>
							<span className="chip mono">founder &amp; CEO</span>
							<span className="chip chip-accent mono">acquired 2023</span>
						</div>
						<p>
							Founded Comma to end manual business-banking processes and
							brought open-banking bulk payments to market first in the UK —
							one-click payroll for millions of employees. Raised US $6m+ from
							top-tier funds, built a team of 15 engineers, grew to £18m+/month
							in payment volume, and sold the business to Weavr in March 2023.
						</p>
					</div>
					<dl className="case-facts">
						<div>
							<dt className="mono">volume</dt>
							<dd>£18m+ / month</dd>
						</div>
						<div>
							<dt className="mono">raised</dt>
							<dd>US $6m+</dd>
						</div>
						<div>
							<dt className="mono">exit</dt>
							<dd>acquired by Weavr</dd>
						</div>
					</dl>
				</article>
			</section>

			{/* ─────────────── §03 Open source */}
			<section ref={ossRef} className="sect" id="oss">
				<SectionHeading index="03" title="Open source" />
				<p className="sect-lede" data-reveal>
					My code is public — the fastest way to evaluate me is to{" "}
					<em className="serif-it">read it.</em>
				</p>

				<div className="oss-grid" data-reveal>
					<a className="oss-card" href="https://github.com/TanStack/ai">
						<img className="oss-logo" src={tanstackLogo} alt="TanStack" />
						<h3>TanStack AI</h3>
						<p className="mono oss-role">core maintainer · top-3 contributor</p>
						<p>
							30+ merged PRs on the type-safe AI SDK: streaming structured
							output across five providers, four adapters authored from scratch
							— fal.ai, ElevenLabs, Grok, OpenRouter.
						</p>
						<span className="mono oss-repo">TanStack/ai ↗</span>
					</a>
					<a
						className="oss-card"
						href="https://github.com/openstory-so/openstory"
					>
						<img className="oss-logo" src={openstoryLogo} alt="OpenStory" />
						<h3>OpenStory</h3>
						<p className="mono oss-role">author · 96% of history</p>
						<p>
							The full AI video platform, MIT licensed. 700+ file strict
							TypeScript codebase held at zero type-aware lint warnings while
							shipping weekly.
						</p>
						<span className="mono oss-repo">openstory-so/openstory ↗</span>
					</a>
					<a
						className="oss-card"
						href="https://github.com/onflow/FRW-Extension"
					>
						<img className="oss-logo" src={flowLogo} alt="Flow" />
						<h3>Flow Reference Wallet</h3>
						<p className="mono oss-role">engineering lead</p>
						<p>
							The open-source Chrome extension wallet for Flow and Flow EVM.
							Architectural overhaul, state-management refactor, CI/CD,
							end-to-end test coverage.
						</p>
						<span className="mono oss-repo">onflow/FRW-Extension ↗</span>
					</a>
					<a className="oss-card" href="https://github.com/tombeckenham/dotfiles">
						<span className="oss-logo oss-logo-mono">⌘</span>
						<h3>dotfiles</h3>
						<p className="mono oss-role">personal tooling</p>
						<p>
							My multi-agent Claude Code workflow: parallel agents on git
							worktrees, scoped permissions, tuned hooks. How I ship at the
							pace above.
						</p>
						<span className="mono oss-repo">tombeckenham/dotfiles ↗</span>
					</a>
				</div>
			</section>

			{/* ─────────────── §04 Experience */}
			<section ref={expRef} className="sect" id="experience">
				<SectionHeading index="04" title="Experience" />
				<div className="xp">
					<ExpRow
						years="2026 —"
						org="TanStack AI"
						role="Core maintainer"
						note="Top-3 contributor on the type-safe AI SDK."
					/>
					<ExpRow
						years="2025 —"
						org="OpenStory"
						role="Founder & sole engineer"
						note="Open-source AI video platform on Cloudflare's edge."
					/>
					<ExpRow
						years="2024–25"
						org="Flow Foundation"
						role="Full-stack engineer (lead)"
						note="Flow Wallet Chrome extension, 20k+ MAU."
					/>
					<ExpRow
						years="2023–24"
						org="Weavr"
						role="VP Strategy"
						note="Post-acquisition integration; £650k+ TCV deals."
					/>
					<ExpRow
						years="2020–21"
						org="Orbiit, via Toptal"
						role="Senior frontend (contract)"
						note="Owned everything user-facing for the founders."
					/>
					<ExpRow
						years="2019–23"
						org="Comma Payments"
						role="Founder & CEO"
						note="Open-banking bulk payments. Acquired by Weavr."
					/>
					<ExpRow
						years="2017–19"
						org="MurphyCobb"
						role="Head of Technology"
						note="Built the tech division; global brand-spend platform."
					/>
					<ExpRow
						years="2006–17"
						org="Specle"
						role="Founder"
						note="Ad-spec platform for the Guardian, Daily Mail, Condé Nast. Sold."
					/>
					<ExpRow
						years="1999–06"
						org="Adstream (now XR)"
						role="Lead engineer"
						note="C++ PDF and colour-correction software; ran the graphics team."
					/>
				</div>
			</section>

			{/* ─────────────── §05 Writing */}
			<section ref={writingRef} className="sect" id="writing">
				<SectionHeading index="05" title="Writing" />
				<ul className="writes">
					<li data-reveal>
						<a href="https://medium.com/@tombeckenham/rewriting-whole-apps-with-ai-69e879ad5f9c">
							<span className="w-title">Rewriting whole apps with AI</span>
							<span className="w-desc">
								Using Claude Code to rapidly rebuild a legacy frontend — where
								the speedups come from, and where they don&rsquo;t.
							</span>
							<span className="mono w-meta">Medium ↗</span>
						</a>
					</li>
					<li data-reveal>
						<a href="https://medium.com/@tombeckenham/sustainable-ai-business-models-9aa5baa527b0">
							<span className="w-title">Sustainable AI business models</span>
							<span className="w-desc">
								Lessons from fintech on pricing, margin, and AI products that
								pay for themselves instead of their infra bill.
							</span>
							<span className="mono w-meta">Medium ↗</span>
						</a>
					</li>
				</ul>
			</section>

			<Marquee />

			{/* ─────────────── Contact */}
			<section ref={contactRef} className="contact" id="contact">
				<p className="mono kicker" data-reveal>
					<span className="accent">●</span> Currently taking engagements ·
					Sydney · remote
				</p>
				<h2 className="contact-title" data-reveal>
					Have something that
					<br />
					needs <em className="serif-it accent">shipping?</em>
				</h2>
				<a className="contact-mail" href={`mailto:${EMAIL}`} data-reveal>
					{EMAIL}
				</a>
				<div className="hero-ctas" data-reveal>
					<a className="btn" href="https://www.linkedin.com/in/tombeckenham/">
						LinkedIn
					</a>
					<a className="btn" href="https://github.com/tombeckenham">
						GitHub
					</a>
					<a className="btn" href="https://x.com/tombeckenham">
						X / Twitter
					</a>
				</div>
				<p className="mono refs" data-reveal>
					References available — including investors and board members from
					both exits.
				</p>
			</section>

			<footer className="foot mono">
				<span>© 2026 Tom Beckenham · Sydney</span>
				<span>built with react · vite · no trackers</span>
			</footer>
		</div>
	);
}

/* ───────────── helpers ───────────── */

function Marquee() {
	const items = [...MARQUEE, ...MARQUEE];
	return (
		<div className="marquee" aria-hidden>
			<div className="marquee-track">
				{items.map((item, i) => (
					<span key={i}>
						{item}
						<i className="accent"> ✦ </i>
					</span>
				))}
			</div>
		</div>
	);
}

function SectionHeading({ index, title }: { index: string; title: string }) {
	return (
		<div className="sect-head" data-reveal>
			<span className="sect-index mono">({index})</span>
			<h2 className="sect-title">{title}</h2>
		</div>
	);
}

function ExpRow({
	years,
	org,
	role,
	note,
}: {
	years: string;
	org: string;
	role: string;
	note: string;
}) {
	return (
		<div className="xp-row" data-reveal>
			<span className="xp-years mono">{years}</span>
			<span className="xp-org">{org}</span>
			<span className="xp-role">{role}</span>
			<span className="xp-note">{note}</span>
		</div>
	);
}

export default App;

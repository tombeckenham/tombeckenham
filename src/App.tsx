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
				{ opacity: 0, y: 14 },
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					stagger: 0.06,
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
				{ opacity: 0, y: 16 },
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
					<span className="brand-mark">TB</span>
					<span className="brand-name">Tom Beckenham</span>
				</a>
				<div className="topnav-links">
					<a href="#services">Services</a>
					<a href="#work">Work</a>
					<a href="#oss">Open Source</a>
					<a href="#experience">Experience</a>
					<a href="#writing">Writing</a>
				</div>
				<a className="btn btn-primary btn-nav" href={`mailto:${EMAIL}`}>
					Start a project
				</a>
			</nav>

			{/* ─────────────── Hero */}
			<header ref={heroRef} className="hero" id="top">
				<div className="hero-copy">
					<p className="mono kicker" data-reveal>
						Senior full-stack &amp; AI platform engineer · Sydney / remote
					</p>
					<h1 className="hero-title" data-reveal>
						I build production <em className="em-peach">AI systems</em> — from
						first commit to first paying customer.
					</h1>
					<p className="hero-lede" data-reveal>
						25+ years shipping complex products. Founded, scaled and sold two
						venture-backed companies. Now hands-on full time: sole architect of{" "}
						<a href="https://openstory.so">OpenStory</a> and core maintainer of{" "}
						<a href="https://tanstack.com/ai">TanStack AI</a>. Available for
						contract engagements — as sole engineer on a 0→1 build, embedded
						senior IC, or fractional technical leadership.
					</p>
					<div className="hero-ctas" data-reveal>
						<a className="btn btn-primary" href={`mailto:${EMAIL}`}>
							Email me <Arrow />
						</a>
						<a className="btn" href="https://www.linkedin.com/in/tombeckenham/">
							LinkedIn
						</a>
						<a className="btn" href="https://github.com/tombeckenham">
							<Github /> GitHub
						</a>
					</div>
					<div className="stat-row" data-reveal>
						<div className="stat">
							<b>25+ yrs</b>
							<span>shipping software</span>
						</div>
						<div className="stat">
							<b>2 exits</b>
							<span>companies founded &amp; sold</span>
						</div>
						<div className="stat">
							<b>£18m+/mo</b>
							<span>payments processed at Comma</span>
						</div>
						<div className="stat">
							<b>2,200+</b>
							<span>commits on OpenStory</span>
						</div>
					</div>
				</div>
				<div className="hero-photo" data-reveal>
					<img src={headshot} alt="Tom Beckenham" />
					<span className="avail-badge">
						<i className="dot" /> Available for contract
					</span>
				</div>
			</header>

			{/* ─────────────── §01 Services */}
			<section ref={servicesRef} className="sect" id="services">
				<SectionHeading index="§01" title="What I do" />
				<div className="svc-grid">
					<article className="card svc" data-reveal>
						<p className="mono-accent svc-num">01</p>
						<h3>AI platform engineering</h3>
						<p>
							LLM and generative-media integration done properly: provider
							adapters across Anthropic, OpenAI, Google, OpenRouter and fal.ai,
							durable generation pipelines on Cloudflare Workflows, streaming
							structured output, and deterministic testing of non-deterministic
							AI flows.
						</p>
						<ul className="svc-list mono">
							<li>LLM &amp; media pipelines</li>
							<li>Streaming structured output</li>
							<li>Record-and-replay E2E testing</li>
						</ul>
					</article>
					<article className="card svc" data-reveal>
						<p className="mono-accent svc-num">02</p>
						<h3>Full-stack product delivery</h3>
						<p>
							Zero-to-one builds as sole or lead engineer. TypeScript
							end-to-end: React, TanStack Start &amp; Query, Node and Bun,
							Cloudflare Workers, D1 and R2. Strict types, real test coverage,
							CI/CD from day one — shipped weekly, not quarterly.
						</p>
						<ul className="svc-list mono">
							<li>0→1 MVPs that reach revenue</li>
							<li>Serverless &amp; edge architecture</li>
							<li>Legacy rebuilds, AI-accelerated</li>
						</ul>
					</article>
					<article className="card svc" data-reveal>
						<p className="mono-accent svc-num">03</p>
						<h3>Technical leadership</h3>
						<p>
							Fractional CTO and advisory for founders. I&rsquo;ve raised
							US&nbsp;$6m+, built engineering teams from 0 to 15, sold to
							enterprise, and sat both sides of an acquisition — so the advice
							covers architecture, hiring and the board deck.
						</p>
						<ul className="svc-list mono">
							<li>Fractional CTO / advisory</li>
							<li>Architecture &amp; team reviews</li>
							<li>Founder-to-founder diligence</li>
						</ul>
					</article>
				</div>
			</section>

			{/* ─────────────── §02 Selected work */}
			<section ref={workRef} className="sect" id="work">
				<SectionHeading index="§02" title="Selected work" />

				<article className="case" data-reveal>
					<div className="case-head">
						<h3>RegWrangler</h3>
						<span className="tag">contract build · with Hazelbrook Legal</span>
					</div>
					<div className="case-body">
						<div className="case-copy">
							<p>
								Regulatory change-management platform for Australian financial
								services, built with law firm{" "}
								<a href="https://hazelbrooklegal.com">Hazelbrook Legal</a>.
								Engaged as the sole engineer to take it from concept to a
								working, scalable product: obligation tracking, assessment and
								allocation workflows, and bulk import of legacy regulatory
								trackers.
							</p>
							<p>
								<span className="em-peach">
									First paying client within one month
								</span>{" "}
								of the first iteration going live. Now used by some of
								Australia&rsquo;s largest financial services organisations.
							</p>
						</div>
						<div className="case-facts">
							<div className="fact">
								<span className="k mono">role</span>
								<span>sole contract engineer</span>
							</div>
							<div className="fact">
								<span className="k mono">to revenue</span>
								<span>&lt; 1 month from v1</span>
							</div>
							<div className="fact">
								<span className="k mono">in production</span>
								<span>major Australian FS orgs</span>
							</div>
						</div>
					</div>
				</article>

				<article className="case" data-reveal>
					<div className="case-head">
						<h3>
							<img className="case-logo" src={openstoryLogo} alt="" />
							OpenStory
						</h3>
						<span className="tag">founder · open source</span>
					</div>
					<div className="case-body">
						<div className="case-copy">
							<p>
								Open-source, AI-native video platform that turns a script into
								a fully storyboarded, motion-and-music video — deployed
								end-to-end on Cloudflare&rsquo;s edge. A durable pipeline of
								30+ composable Cloudflare Workflows orchestrates script
								analysis, storyboarding, image-to-video motion, music and final
								merge, with idempotent auto-retried steps.
							</p>
							<p>
								15+ frontier models integrated (Kling v3, Seedance, Grok
								Imagine, Nano Banana) behind a unified model selector. A
								deterministic Playwright E2E suite with record-and-replay
								mocking of every model call gates each PR in CI.
							</p>
						</div>
						<div className="case-facts">
							<div className="fact">
								<span className="k mono">scale</span>
								<span>2,200+ commits · 350+ PRs</span>
							</div>
							<div className="fact">
								<span className="k mono">stack</span>
								<span>TanStack Start · Workers · D1 · R2</span>
							</div>
							<div className="fact">
								<span className="k mono">visit</span>
								<a href="https://openstory.so">openstory.so</a>
							</div>
						</div>
					</div>
				</article>

				<article className="case" data-reveal>
					<div className="case-head">
						<h3>
							<img className="case-logo" src={flowLogo} alt="" />
							Flow Wallet
						</h3>
						<span className="tag">engineering lead · Flow Foundation</span>
					</div>
					<div className="case-body">
						<div className="case-copy">
							<p>
								Lead engineer on the Chrome-extension crypto wallet for the
								Flow blockchain — 20k+ monthly active users. Led an
								architectural overhaul of the extension core that cut critical
								P0 issues by over 95%, unified state management, and introduced
								an E2E strategy of 180+ Vitest and Playwright tests with
								automated CI/CD.
							</p>
						</div>
						<div className="case-facts">
							<div className="fact">
								<span className="k mono">users</span>
								<span>20k+ MAU</span>
							</div>
							<div className="fact">
								<span className="k mono">p0 issues</span>
								<span>down 95%+</span>
							</div>
							<div className="fact">
								<span className="k mono">source</span>
								<a href="https://github.com/onflow/FRW-Extension">
									onflow/FRW-Extension
								</a>
							</div>
						</div>
					</div>
				</article>

				<article className="case" data-reveal>
					<div className="case-head">
						<h3>
							<img className="case-logo" src={commaLogo} alt="" />
							Comma Payments
						</h3>
						<span className="tag">founder &amp; CEO · acquired 2023</span>
					</div>
					<div className="case-body">
						<div className="case-copy">
							<p>
								Founded Comma to end manual business-banking processes and
								brought open-banking bulk payments to market first in the UK —
								one-click payroll for millions of employees. Raised US $6m+
								from top-tier funds, built a team of 15 engineers, grew to
								£18m+/month in payment volume, and sold the business to Weavr
								in March 2023.
							</p>
						</div>
						<div className="case-facts">
							<div className="fact">
								<span className="k mono">volume</span>
								<span>£18m+ / month</span>
							</div>
							<div className="fact">
								<span className="k mono">raised</span>
								<span>US $6m+</span>
							</div>
							<div className="fact">
								<span className="k mono">exit</span>
								<span>acquired by Weavr</span>
							</div>
						</div>
					</div>
				</article>
			</section>

			{/* ─────────────── §03 Open source */}
			<section ref={ossRef} className="sect" id="oss">
				<SectionHeading index="§03" title="Open source" />
				<p className="sect-lede" data-reveal>
					My code is public — the fastest way to evaluate me is to read it.
				</p>

				<div className="oss-grid">
					<a
						className="card oss-card"
						href="https://github.com/TanStack/ai"
						data-reveal
					>
						<img className="oss-logo" src={tanstackLogo} alt="TanStack" />
						<div>
							<h3>
								TanStack AI <span className="tag">core maintainer</span>
							</h3>
							<p>
								Type-safe, provider-agnostic TypeScript SDK for AI apps. Top-3
								contributor, 30+ merged PRs: streaming structured output across
								five providers, and four provider adapters authored from
								scratch — fal.ai, ElevenLabs, Grok and OpenRouter.
							</p>
							<span className="mono-accent repo">TanStack/ai →</span>
						</div>
					</a>
					<a
						className="card oss-card"
						href="https://github.com/openstory-so/openstory"
						data-reveal
					>
						<img className="oss-logo" src={openstoryLogo} alt="OpenStory" />
						<div>
							<h3>
								OpenStory <span className="tag">author</span>
							</h3>
							<p>
								The full AI video-generation platform, MIT licensed. 700+ file
								strict TypeScript codebase held at zero type-aware lint
								warnings while shipping weekly. 96% of repo history.
							</p>
							<span className="mono-accent repo">openstory-so/openstory →</span>
						</div>
					</a>
					<a
						className="card oss-card"
						href="https://github.com/onflow/FRW-Extension"
						data-reveal
					>
						<img className="oss-logo" src={flowLogo} alt="Flow" />
						<div>
							<h3>
								Flow Reference Wallet <span className="tag">lead</span>
							</h3>
							<p>
								The open-source Chrome extension wallet for Flow and Flow EVM.
								Architectural overhaul, state-management refactor, CI/CD and
								end-to-end test coverage.
							</p>
							<span className="mono-accent repo">onflow/FRW-Extension →</span>
						</div>
					</a>
					<a
						className="card oss-card"
						href="https://github.com/tombeckenham/dotfiles"
						data-reveal
					>
						<span className="oss-logo oss-logo-gh">
							<Github />
						</span>
						<div>
							<h3>
								dotfiles <span className="tag">personal</span>
							</h3>
							<p>
								My multi-agent Claude Code workflow: parallel agents on git
								worktrees, scoped permissions, tuned hooks. How I ship at the
								pace the case studies above describe.
							</p>
							<span className="mono-accent repo">tombeckenham/dotfiles →</span>
						</div>
					</a>
				</div>
			</section>

			{/* ─────────────── §04 Experience */}
			<section ref={expRef} className="sect" id="experience">
				<SectionHeading index="§04" title="Experience" />
				<div className="xp">
					<ExpRow
						years="2026 —"
						role="Core maintainer"
						org="TanStack AI"
						note="Top-3 contributor on the type-safe AI SDK."
					/>
					<ExpRow
						years="2025 —"
						role="Founder & sole engineer"
						org="OpenStory"
						note="Open-source AI video platform on Cloudflare's edge."
					/>
					<ExpRow
						years="2024 – 25"
						role="Full-stack engineer (lead)"
						org="Flow Foundation"
						note="Flow Wallet Chrome extension, 20k+ MAU."
					/>
					<ExpRow
						years="2023 – 24"
						role="VP Strategy"
						org="Weavr"
						note="Post-acquisition integration; £650k+ TCV deals."
					/>
					<ExpRow
						years="2020 – 21"
						role="Senior frontend (contract)"
						org="Orbiit, via Toptal"
						note="Owned everything user-facing for the founders."
					/>
					<ExpRow
						years="2019 – 23"
						role="Founder & CEO"
						org="Comma Payments"
						note="Open-banking bulk payments. Acquired by Weavr."
					/>
					<ExpRow
						years="2017 – 19"
						role="Head of Technology"
						org="MurphyCobb"
						note="Built the tech division; global brand-spend platform."
					/>
					<ExpRow
						years="2006 – 17"
						role="Founder"
						org="Specle"
						note="Ad-spec platform for the Guardian, Daily Mail, Condé Nast. Sold."
					/>
					<ExpRow
						years="1999 – 06"
						role="Lead engineer"
						org="Adstream (now XR)"
						note="C++ PDF and colour-correction software; ran the graphics team."
					/>
				</div>
			</section>

			{/* ─────────────── §05 Writing */}
			<section ref={writingRef} className="sect" id="writing">
				<SectionHeading index="§05" title="Writing" />
				<ul className="writes">
					<li data-reveal>
						<a href="https://medium.com/@tombeckenham/rewriting-whole-apps-with-ai-69e879ad5f9c">
							<span className="w-title">Rewriting whole apps with AI</span>
							<span className="w-desc">
								Using Claude Code to rapidly rebuild a legacy frontend — where
								the speedups come from, and where they don&rsquo;t.
							</span>
							<span className="mono-accent">→ medium</span>
						</a>
					</li>
					<li data-reveal>
						<a href="https://medium.com/@tombeckenham/sustainable-ai-business-models-9aa5baa527b0">
							<span className="w-title">Sustainable AI business models</span>
							<span className="w-desc">
								Lessons from fintech on pricing, margin, and AI products that
								pay for themselves instead of their infra bill.
							</span>
							<span className="mono-accent">→ medium</span>
						</a>
					</li>
				</ul>
			</section>

			{/* ─────────────── §06 Contact */}
			<section ref={contactRef} className="sect contact-sect" id="contact">
				<div className="contact-inner" data-reveal>
					<p className="mono kicker">
						<i className="dot" /> Currently taking engagements · Sydney · remote
					</p>
					<h2 className="contact-title">
						Have something that needs{" "}
						<em className="em-peach">shipping?</em>
					</h2>
					<p className="contact-lede">
						Contract, fractional or advisory. If it involves TypeScript, AI
						pipelines, payments or getting a product to its first paying
						customer, I&rsquo;ve probably done it before — recently.
					</p>
					<div className="hero-ctas">
						<a className="btn btn-primary" href={`mailto:${EMAIL}`}>
							{EMAIL} <Arrow />
						</a>
						<a className="btn" href="https://www.linkedin.com/in/tombeckenham/">
							LinkedIn
						</a>
						<a className="btn" href="https://x.com/tombeckenham">
							X / Twitter
						</a>
					</div>
					<p className="mono refs">
						References available — including investors and board members from
						both exits.
					</p>
				</div>
			</section>

			<footer className="foot">
				<span>© 2026 Tom Beckenham · Sydney</span>
				<span className="mono">built with react · vite · no trackers</span>
			</footer>
		</div>
	);
}

/* ───────────── helpers ───────────── */

function SectionHeading({ index, title }: { index: string; title: string }) {
	return (
		<div className="sect-head" data-reveal>
			<span className="sect-index mono-accent">{index}</span>
			<h2 className="sect-title">{title}</h2>
			<span className="sect-rule" />
		</div>
	);
}

function ExpRow({
	years,
	role,
	org,
	note,
}: {
	years: string;
	role: string;
	org: string;
	note: string;
}) {
	return (
		<div className="xp-row" data-reveal>
			<span className="xp-years mono">{years}</span>
			<span className="xp-org">{org}</span>
			<span className="xp-role">{role}</span>
			<span className="xp-note mute">{note}</span>
		</div>
	);
}

function Arrow() {
	return (
		<svg
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden
		>
			<path d="M5 12h14" />
			<path d="M13 6l6 6-6 6" />
		</svg>
	);
}

function Github() {
	return (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
			<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
		</svg>
	);
}

export default App;

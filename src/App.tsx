import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileTom from "./assets/images/profile-tom.png";
import flowLogo from "./assets/images/flow-logo.svg";
import flowWallet from "./assets/images/flow-wallet.png";
import commaLogo from "./assets/images/comma-logo.png";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
	const heroRef = useRef<HTMLDivElement>(null);
	const nowRef = useRef<HTMLDivElement>(null);
	const ossRef = useRef<HTMLDivElement>(null);
	const writingRef = useRef<HTMLDivElement>(null);
	const prevRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const clockRef = useRef<HTMLSpanElement>(null);
	const uptimeRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const hero = heroRef.current;
		if (hero) {
			gsap.fromTo(
				hero.querySelectorAll("[data-reveal]"),
				{ opacity: 0, y: 18 },
				{
					opacity: 1,
					y: 0,
					duration: 0.9,
					stagger: 0.06,
					ease: "expo.out",
					delay: 0.1,
				},
			);
		}

		const sections = [
			nowRef.current,
			ossRef.current,
			writingRef.current,
			prevRef.current,
			contactRef.current,
		];
		sections.forEach((section) => {
			if (!section) return;
			gsap.fromTo(
				section.querySelectorAll("[data-reveal]"),
				{ opacity: 0, y: 22 },
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
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

	useEffect(() => {
		const clock = clockRef.current;
		const uptime = uptimeRef.current;
		const start = Date.now();
		const id = window.setInterval(() => {
			const now = new Date();
			const hh = String(now.getHours()).padStart(2, "0");
			const mm = String(now.getMinutes()).padStart(2, "0");
			const ss = String(now.getSeconds()).padStart(2, "0");
			if (clock) clock.textContent = `${hh}:${mm}:${ss} AEST`;

			const delta = Math.floor((Date.now() - start) / 1000);
			const m = String(Math.floor(delta / 60)).padStart(2, "0");
			const s = String(delta % 60).padStart(2, "0");
			if (uptime) uptime.textContent = `${m}:${s}`;
		}, 1000);
		return () => window.clearInterval(id);
	}, []);

	return (
		<div className="page">
			<div className="grid" aria-hidden />
			<div className="vignette" aria-hidden />

			<nav className="topbar">
				<a href="#top" className="mono mono-accent">
					tom<span className="cursor">█</span>
				</a>
				<ul className="mono nav-links">
					<li>
						<a href="#now">§01 Now</a>
					</li>
					<li>
						<a href="#oss">§02 OSS</a>
					</li>
					<li>
						<a href="#writing">§03 Writing</a>
					</li>
					<li>
						<a href="#prev">§04 Previously</a>
					</li>
					<li>
						<a href="#contact">§05 Contact</a>
					</li>
				</ul>
			</nav>

			<section ref={heroRef} className="hero" id="top">
				<div className="hero-inner">
					<div className="hero-text">
						<div data-reveal className="kicker-row">
							<span className="avatar" aria-hidden>
								<img src={profileTom} alt="" />
							</span>
							<p className="mono kicker">
								<span className="dot-live" /> Tom Beckenham · Technical founder
								· Sydney, Australia
							</p>
							<span className="mono kicker-time">
								<span ref={clockRef}>00:00:00 AEST</span>
							</span>
						</div>
						<h1 data-reveal className="display">
							Engineer building{" "}
							<a href="https://openstory.so" className="underline-peach">
								OpenStory
							</a>
							<span className="display-mute">
								, an open-source platform for AI filmmaking.
							</span>
						</h1>
						<p data-reveal className="lede">
							Previously founded{" "}
							<a href="#prev">Comma Payments</a> (acquired 2023) and{" "}
							<a href="#prev">Specle</a> (2006). Engineering lead on the Flow
							Wallet Chrome Extension. Currently shipping AI video generation on
							TanStack Start + Cloudflare Workers.
						</p>
						<div data-reveal className="hero-actions">
							<a className="btn btn-primary" href="https://openstory.so">
								<span className="btn-glow" aria-hidden />
								<span className="btn-inner">
									<span>Visit OpenStory</span>
									<Arrow />
								</span>
							</a>
							<a className="btn" href="https://github.com/tombeckenham">
								<Github />
								<span>github.com/tombeckenham</span>
							</a>
						</div>
						<dl data-reveal className="spec-list mono">
							<div>
								<dt>Stack</dt>
								<dd>TypeScript · Bun · TanStack · Cloudflare Workers · React</dd>
							</div>
							<div>
								<dt>Focus</dt>
								<dd>AI video generation · agentic systems · open source</dd>
							</div>
							<div>
								<dt>Hire</dt>
								<dd>
									<a href="https://www.toptal.com/resume/tom-beckenham">
										Top 3% on Toptal
									</a>{" "}
									· available for advisory &amp; eng leadership
								</dd>
							</div>
						</dl>
					</div>

				</div>
			</section>

			{/* ─────────────────────────────────────────── Now / OpenStory */}
			<section ref={nowRef} id="now" className="block">
				<SectionHeading index="§01" title="Now" subtitle="Building OpenStory" />
				<div className="now-body">
					<div className="now-copy">
						<div data-reveal className="os-chip">
							<OpenStoryMark />
							<span className="mono">openstory.so</span>
							<span className="os-chip-sep" />
							<span className="mono mute">Open Video Generation</span>
						</div>
						<h2 data-reveal className="h2">
							Script to screen,{" "}
							<em className="em-peach">consistent</em> every shot.
						</h2>
						<p data-reveal className="body">
							Paste a script, get back a scene-by-scene breakdown, AI-generated
							frames, and motion video. Characters, locations, and visual style
							persist across every shot. Open source, MIT licensed.
						</p>
						<div data-reveal className="link-row mono">
							<a className="link-arrow" href="https://openstory.so">
								<span>openstory.so</span>
								<Arrow />
							</a>
							<a className="link-arrow" href="https://github.com/openstory-so/openstory">
								<Github />
								<span>openstory-so/openstory</span>
							</a>
						</div>
					</div>

					<div data-reveal className="pipeline" aria-hidden>
						<div className="pipe-title mono">
							<span>system / pipeline.ts</span>
							<span className="mute">runtime: Cloudflare Workers</span>
						</div>
						<div className="pipe-board">
							<PipelineNode
								code="01"
								title="Script"
								body={
									<>
										<span className="pm-line accent">EXT. ROOFTOP</span>
										<span className="pm-line">A woman steps to the edge.</span>
										<span className="pm-line">The city swells below.</span>
									</>
								}
							/>
							<Wire />
							<PipelineNode
								code="02"
								title="Scenes · LLM"
								body={
									<div className="pm-scenes">
										<span>01 · establishing wide</span>
										<span>02 · over-shoulder</span>
										<span>03 · close-up, tight</span>
									</div>
								}
							/>
							<Wire />
							<PipelineNode
								code="03"
								title="Frames · Fal.ai"
								body={
									<div className="pm-frames">
										<span className="pm-f pm-f1" />
										<span className="pm-f pm-f2" />
										<span className="pm-f pm-f3" />
										<span className="pm-f pm-f4" />
									</div>
								}
							/>
							<Wire />
							<PipelineNode
								code="04"
								title="Motion"
								body={
									<div className="pm-motion">
										<span className="pm-bar" />
										<span className="pm-bar" />
										<span className="pm-bar" />
										<span className="pm-bar" />
										<span className="pm-timecode mono">00:06:18</span>
									</div>
								}
							/>
						</div>
						<div className="pipe-foot mono">
							<span>TanStack Start</span>
							<span className="sep" />
							<span>Bun</span>
							<span className="sep" />
							<span>TanStack AI</span>
							<span className="sep" />
							<span>Fal.ai</span>
						</div>
					</div>
				</div>
			</section>

			{/* ─────────────────────────────────────────── Open Source */}
			<section ref={ossRef} id="oss" className="block">
				<SectionHeading index="§02" title="Open source" subtitle="Contributions & tools" />
				<div className="oss-grid">
					<article data-reveal className="card">
						<div className="card-head mono">
							<span className="tag">library</span>
							<span className="mute">PR #237 · merged</span>
						</div>
						<h3 className="card-title">
							TanStack<span className="slash">/</span>ai
						</h3>
						<p className="card-body">
							Authored the{" "}
							<a href="https://github.com/TanStack/ai/pull/237">Fal.ai adapter</a>{" "}
							for image and video generation. Also: NanoBanana Pro 2 support, an
							OpenRouter SDK upgrade with structured output, and assorted fixes.
						</p>
						<a className="link-arrow mono" href="https://github.com/TanStack/ai">
							<Github />
							<span>TanStack/ai</span>
							<Arrow />
						</a>
					</article>

					<article data-reveal className="card">
						<div className="card-head mono">
							<span className="tag">tooling</span>
							<span className="mute">personal</span>
						</div>
						<h3 className="card-title">
							tom<span className="slash">·</span>dotfiles
						</h3>
						<p className="card-body">
							My setup for multi-agent Claude Code workflows with git worktrees.
							Parallel agents, scoped permissions, tuned hooks.
						</p>
						<a
							className="link-arrow mono"
							href="https://github.com/tombeckenham/dotfiles"
						>
							<Github />
							<span>tombeckenham/dotfiles</span>
							<Arrow />
						</a>
					</article>
				</div>
			</section>

			{/* ─────────────────────────────────────────── Writing */}
			<section ref={writingRef} id="writing" className="block">
				<SectionHeading index="§03" title="Writing" subtitle="Essays & dispatches" />
				<ul className="writing-list">
					<li>
						<a
							data-reveal
							className="entry"
							href="https://medium.com/@tombeckenham/rewriting-whole-apps-with-ai-69e879ad5f9c"
						>
							<span className="entry-num mono">01</span>
							<span className="entry-body">
								<span className="entry-title">Rewriting whole apps with AI</span>
								<span className="entry-desc">
									Using Claude Code to rapidly rebuild a legacy frontend — where
									the speedups come from, and where they don&rsquo;t.
								</span>
							</span>
							<span className="entry-meta mono">
								<span>Medium</span>
								<Arrow />
							</span>
						</a>
					</li>
					<li>
						<a
							data-reveal
							className="entry"
							href="https://medium.com/@tombeckenham/sustainable-ai-business-models-9aa5baa527b0"
						>
							<span className="entry-num mono">02</span>
							<span className="entry-body">
								<span className="entry-title">Sustainable AI business models</span>
								<span className="entry-desc">
									Lessons from fintech on pricing, margin, and building AI
									products that pay for themselves instead of their infra bill.
								</span>
							</span>
							<span className="entry-meta mono">
								<span>Medium</span>
								<Arrow />
							</span>
						</a>
					</li>
				</ul>
			</section>

			{/* ─────────────────────────────────────────── Previously */}
			<section ref={prevRef} id="prev" className="block">
				<SectionHeading index="§04" title="Previously" subtitle="2006 — 2024" />

				<article data-reveal className="prev-item">
					<div className="prev-head">
						<div className="prev-logo">
							<img src={flowLogo} alt="Flow Blockchain" />
						</div>
						<div className="prev-head-text">
							<h3>Flow Blockchain</h3>
							<p className="prev-role mono">
								Engineering lead · Flow Wallet Chrome Extension
							</p>
						</div>
						<div className="prev-years mono">2024</div>
					</div>
					<p className="prev-body">
						Architectural overhaul, CI/CD, state-management refactor, and
						end-to-end test coverage on the primary consumer gateway to Flow
						and Flow EVM.
					</p>
					<div className="prev-media">
						<img src={flowWallet} alt="Flow Wallet" />
					</div>
					<a className="link-arrow mono" href="https://github.com/onflow/FRW-Extension">
						<Github />
						<span>onflow/FRW-Extension</span>
						<Arrow />
					</a>
				</article>

				<article data-reveal className="prev-item">
					<div className="prev-head">
						<div className="prev-logo prev-logo-comma">
							<img src={commaLogo} alt="Comma Payments" />
						</div>
						<div className="prev-head-text">
							<h3>Comma Payments</h3>
							<p className="prev-role mono">Founder &amp; CEO</p>
						</div>
						<div className="prev-years mono">2019 — 2023</div>
					</div>
					<p className="prev-body">
						Pioneered open banking bulk payments in the UK; £18M+/month
						processed. Acquired by Weavr (Paystratus Group) in March 2023.
					</p>
					<div className="stat-row">
						<div className="stat">
							<span className="stat-k">£18M+</span>
							<span className="stat-v mono">processed / month</span>
						</div>
						<div className="stat">
							<span className="stat-k">2023</span>
							<span className="stat-v mono">acquired by Weavr</span>
						</div>
						<div className="stat">
							<span className="stat-k">UK</span>
							<span className="stat-v mono">open banking pioneer</span>
						</div>
					</div>
				</article>

				<article data-reveal className="prev-item">
					<div className="prev-head">
						<div className="prev-logo prev-logo-specle" aria-hidden>
							<span>S</span>
						</div>
						<div className="prev-head-text">
							<h3>Specle</h3>
							<p className="prev-role mono">Founder &amp; CEO</p>
						</div>
						<div className="prev-years mono">2006 — 2017</div>
					</div>
					<p className="prev-body">
						Central ad-spec database used by The Guardian, Daily Mail, and
						Condé Nast. Cash-positive within three years; still operating
						today.
					</p>
					<div className="stat-row">
						<div className="stat">
							<span className="stat-k">3 yrs</span>
							<span className="stat-v mono">to cash-positive</span>
						</div>
						<div className="stat">
							<span className="stat-k">Still</span>
							<span className="stat-v mono">operating, 2026</span>
						</div>
						<div className="stat">
							<span className="stat-k">UK</span>
							<span className="stat-v mono">publishers &amp; agencies</span>
						</div>
					</div>
				</article>
			</section>

			{/* ─────────────────────────────────────────── Contact */}
			<section ref={contactRef} id="contact" className="block block-contact">
				<SectionHeading index="§05" title="Contact" subtitle="Links & availability" />
				<h2 data-reveal className="h2">
					Let&rsquo;s build something.
				</h2>
				<p data-reveal className="body">
					Open to advisory, technical leadership, and high-signal collaboration
					on AI video, agentic systems, and fintech infrastructure.
				</p>
				<ul className="contact-list mono">
					<li data-reveal>
						<span className="c-role">Code</span>
						<a href="https://github.com/tombeckenham">github.com/tombeckenham</a>
					</li>
					<li data-reveal>
						<span className="c-role">Social</span>
						<a href="https://x.com/tombeckenham">x.com/tombeckenham</a>
					</li>
					<li data-reveal>
						<span className="c-role">Résumé</span>
						<a href="https://www.linkedin.com/in/tombeckenham/">
							linkedin.com/in/tombeckenham
						</a>
					</li>
					<li data-reveal>
						<span className="c-role">Hire</span>
						<a href="https://www.toptal.com/resume/tom-beckenham">
							toptal.com/resume/tom-beckenham
						</a>
					</li>
				</ul>
			</section>

			<footer className="statusline mono">
				<span>
					<span className="status-dot" /> ONLINE
				</span>
				<span>session {""}
					<span ref={uptimeRef}>00:00</span>
				</span>
				<span className="status-spacer" />
				<span>© 2026 Tom Beckenham</span>
				<span>Sydney · 33.8688°S</span>
			</footer>
		</div>
	);
}

/* ───────────── helpers ───────────── */

function SectionHeading({
	index,
	title,
	subtitle,
}: {
	index: string;
	title: string;
	subtitle: string;
}) {
	return (
		<header className="sect-head">
			<span data-reveal className="mono sect-index">
				{index}
			</span>
			<h2 data-reveal className="sect-title">
				{title}
			</h2>
			<span data-reveal className="mono sect-subtitle">
				{subtitle}
			</span>
			<span data-reveal className="sect-rule" />
		</header>
	);
}

function PipelineNode({
	code,
	title,
	body,
}: {
	code: string;
	title: string;
	body: React.ReactNode;
}) {
	return (
		<div className="pnode">
			<div className="pnode-head mono">
				<span className="pnode-code">{code}</span>
				<span className="pnode-title">{title}</span>
				<span className="pnode-led" />
			</div>
			<div className="pnode-body">{body}</div>
		</div>
	);
}

function Wire() {
	return (
		<svg className="pwire" viewBox="0 0 32 12" aria-hidden>
			<path
				d="M0 6 L24 6 M20 2 L28 6 L20 10"
				fill="none"
				stroke="currentColor"
				strokeWidth="1"
				strokeLinecap="square"
			/>
		</svg>
	);
}

function Arrow() {
	return (
		<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden>
			<path
				d="M3 8h10M9 4l4 4-4 4"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="square"
			/>
		</svg>
	);
}

function Github() {
	return (
		<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
			<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
		</svg>
	);
}

function OpenStoryMark() {
	return (
		<svg viewBox="0 0 173 173" width="16" height="16" aria-hidden>
			<path
				fill="currentColor"
				d="M86.5 133.2q-15.4 0-27-5.9-11.6-5.9-18.1-16.4-6.5-10.5-6.5-24.4 0-13.9 6.5-24.4 6.5-10.5 18.1-16.4 11.6-5.9 27-5.9 15.4 0 27 5.9 11.6 5.9 18.1 16.4 6.5 10.5 6.5 24.4 0 13.9-6.5 24.4-6.5 10.5-18.1 16.4-11.6 5.9-27 5.9Zm0-14.2q10.9 0 18.8-4 7.9-4 12.3-11.3 4.4-7.3 4.4-17.3 0-10-4.4-17.3-4.4-7.3-12.3-11.3-7.9-4-18.8-4-10.8 0-18.8 4-8 4-12.4 11.3-4.4 7.3-4.4 17.3 0 10 4.4 17.3 4.4 7.3 12.4 11.3 8 4 18.8 4Z"
			/>
		</svg>
	);
}

export default App;

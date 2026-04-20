import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
				{ opacity: 0, y: 12 },
				{
					opacity: 1,
					y: 0,
					duration: 0.55,
					stagger: 0.05,
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
				{ opacity: 0, y: 14 },
				{
					opacity: 1,
					y: 0,
					duration: 0.55,
					stagger: 0.04,
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

	useEffect(() => {
		const ids = ["top", "now", "oss", "writing", "prev", "contact"] as const;
		const links = document.querySelectorAll<HTMLAnchorElement>(".tn-link");
		const targets = ids.map((id) => document.getElementById(id));
		const onScroll = () => {
			let cur = 0;
			const y = window.scrollY + 140;
			targets.forEach((s, i) => {
				if (s && s.offsetTop <= y) cur = i;
			});
			links.forEach((l, i) => l.classList.toggle("active", i === cur));
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const id = window.setInterval(() => {
			if (Math.random() < 0.04) {
				document.body.style.opacity = (0.85 + Math.random() * 0.1).toFixed(2);
				window.setTimeout(() => {
					document.body.style.opacity = "1";
				}, 70);
			}
		}, 1100);
		return () => window.clearInterval(id);
	}, []);

	return (
		<div className="shell">
			<div className="titlebar">
				<div className="tb-dots">
					<span /><span /><span />
				</div>
				<div className="tb-title">tom@home: ~/about — zsh — 132×42</div>
				<div className="tb-meta">v1.0 · synthwave</div>
			</div>

			<nav className="tnav">
				<a href="#top" className="tn-link active">~/about</a>
				<a href="#now" className="tn-link">§01 now/</a>
				<a href="#oss" className="tn-link">§02 oss/</a>
				<a href="#writing" className="tn-link">§03 writing/</a>
				<a href="#prev" className="tn-link">§04 prev/</a>
				<a href="#contact" className="tn-link">§05 contact/</a>
			</nav>

			{/* ─────────────── Hero */}
			<section ref={heroRef} className="hero" id="top">
				<Prompt path="~/about" cmd="cat README.md" reveal />

				<pre className="ascii" data-reveal aria-label="Tom Beckenham">
{`████████╗ ██████╗ ███╗   ███╗     ██████╗
╚══██╔══╝██╔═══██╗████╗ ████║     ██╔══██╗
   ██║   ██║   ██║██╔████╔██║     ██████╔╝
   ██║   ██║   ██║██║╚██╔╝██║     ██╔══██╗
   ██║   ╚██████╔╝██║ ╚═╝ ██║ ██╗ ██████╔╝
   ╚═╝    ╚═════╝ ╚═╝     ╚═╝ ╚═╝ ╚═════╝`}
				</pre>

				<p className="tagline" data-reveal>
					<span className="hl">&gt;</span> Engineer building{" "}
					<a href="https://openstory.so">OpenStory</a>{" "}
					<span className="hl">—</span> an open-source platform for AI
					filmmaking.<span className="cursor pink-b">█</span>
				</p>

				<p className="lede" data-reveal>
					Previously founded <a href="#prev">Comma Payments</a> (acquired 2023)
					and <a href="#prev">Specle</a> (2006). Engineering lead on the Flow
					Wallet Chrome Extension. Currently shipping AI video generation on
					TanStack Start &amp; Cloudflare Workers.
				</p>

				<div className="cmd-row" data-reveal>
					<a className="cmd-btn primary" href="https://openstory.so">
						$ open openstory.so
					</a>
					<a className="cmd-btn" href="https://github.com/tombeckenham">
						$ gh repo list tombeckenham
					</a>
				</div>

				<div className="stats" data-reveal>
					<b>name</b><span>tom beckenham</span>
					<b>role</b><span>technical founder · engineering lead</span>
					<b>loc</b><span>sydney · 33.8688° s</span>
					<b>stack</b>
					<span>typescript · bun · tanstack · cloudflare workers · react</span>
					<b>focus</b><span>ai video · agentic systems · open source</span>
					<b>hire</b>
					<span>
						<a href="https://www.toptal.com/resume/tom-beckenham">
							top 3% on toptal
						</a>{" "}
						· advisory &amp; eng leadership
					</span>
				</div>
			</section>

			{/* ─────────────── §01 Now */}
			<section ref={nowRef} className="block" id="now">
				<SectionBar
					index="§01"
					path="./now"
					meta="building openstory · runtime: cloudflare workers"
					right={<><span className="green">●</span> active</>}
				/>
				<div className="block-body">
					<h2 className="h-sect" data-reveal>
						Script to screen, <span className="pink">consistent</span> every
						shot.
					</h2>
					<p className="deck" data-reveal>
						<span className="pink-b">&gt;</span> Paste a script, get a
						scene-by-scene breakdown, AI-generated frames, and motion video.
						Characters, locations and visual style persist across every shot.
						Open source, MIT.
					</p>

					<div data-reveal style={{ marginBottom: ".6rem" }}>
						<Prompt path="~/openstory" cmd="./pipeline --watch" />
					</div>

					<div className="pipe" data-reveal>
						<div className="pipe-head">
							<span>system / pipeline.ts</span>
							<span>
								runtime: <span className="cyan">cloudflare-workers</span>
							</span>
						</div>

						<div className="pipe-grid">
							<PipelineNode code="[01]" title="script">
								<span className="accent">EXT. ROOFTOP</span>
								<br />A woman steps to the edge.
								<br />The city swells below.
							</PipelineNode>
							<PipelineNode code="[02]" title="scenes · llm">
								01 · establishing wide
								<br />02 · over-shoulder
								<br />03 · close-up, tight
							</PipelineNode>
							<PipelineNode code="[03]" title="frames · fal">
								frames=<span className="b">4</span> · seed=
								<span className="b">42</span>
								<br />character_id=<span className="b">a91</span>
								<br />palette=<span className="accent">pink/cyan</span>
							</PipelineNode>
							<PipelineNode code="[04]" title="motion" last>
								<div className="wave">
									<i /><i /><i /><i /><i />
								</div>
								tc=<span className="accent">00:06:18</span>
								<br />out=<span className="b">final.mp4</span>
							</PipelineNode>
						</div>

						<div className="pipe-foot">
							$ stack: <span>tanstack-start</span> · <span>bun</span> ·{" "}
							<span>tanstack-ai</span> · <span>fal.ai</span>
						</div>
					</div>

					<div className="cmd-row" data-reveal>
						<a className="cmd-btn primary" href="https://openstory.so">
							$ visit openstory.so
						</a>
						<a
							className="cmd-btn"
							href="https://github.com/openstory-so/openstory"
						>
							$ git clone openstory-so/openstory
						</a>
					</div>
				</div>
			</section>

			{/* ─────────────── §02 Open source */}
			<section ref={ossRef} className="block" id="oss">
				<SectionBar
					index="§02"
					path="./open_source"
					meta="contributions and tools"
					right="2 entries"
				/>
				<div className="block-body">
					<h2 className="h-sect" data-reveal>
						$ ls <span className="pink">~/oss</span>
					</h2>

					<div className="oss">
						<article className="oss-card" data-reveal>
							<div className="row">
								<span className="tag">library</span>
								<span>pr #237 · merged</span>
							</div>
							<h3>
								tanstack<span className="slash">/</span>ai
							</h3>
							<p>
								Authored the{" "}
								<a href="https://github.com/TanStack/ai/pull/237">
									Fal.ai adapter
								</a>{" "}
								for image and video generation. Also: NanoBanana Pro 2 support,
								an OpenRouter SDK upgrade with structured output, and assorted
								fixes.
							</p>
							<a href="https://github.com/TanStack/ai">
								→ github.com/TanStack/ai
							</a>
						</article>
						<article className="oss-card" data-reveal>
							<div className="row">
								<span className="tag">tooling</span>
								<span>personal</span>
							</div>
							<h3>
								tom<span className="slash">·</span>dotfiles
							</h3>
							<p>
								My setup for multi-agent Claude Code workflows with git
								worktrees. Parallel agents, scoped permissions, tuned hooks.
							</p>
							<a href="https://github.com/tombeckenham/dotfiles">
								→ github.com/tombeckenham/dotfiles
							</a>
						</article>
					</div>
				</div>
			</section>

			{/* ─────────────── §03 Writing */}
			<section ref={writingRef} className="block" id="writing">
				<SectionBar
					index="§03"
					path="./writing"
					meta="essays & dispatches"
					right="2 entries · medium"
				/>
				<div className="block-body">
					<h2 className="h-sect" data-reveal>
						$ tail -f <span className="pink">~/writing</span>
					</h2>

					<ul className="writes">
						<li data-reveal>
							<a href="https://medium.com/@tombeckenham/rewriting-whole-apps-with-ai-69e879ad5f9c">
								<span className="num">01</span>
								<span>
									<span className="ttl">Rewriting whole apps with AI</span>
									<span className="desc">
										Using Claude Code to rapidly rebuild a legacy frontend —
										where the speedups come from, and where they don&rsquo;t.
									</span>
								</span>
								<span className="meta">→ medium</span>
							</a>
						</li>
						<li data-reveal>
							<a href="https://medium.com/@tombeckenham/sustainable-ai-business-models-9aa5baa527b0">
								<span className="num">02</span>
								<span>
									<span className="ttl">Sustainable AI business models</span>
									<span className="desc">
										Lessons from fintech on pricing, margin, and building AI
										products that pay for themselves instead of their infra
										bill.
									</span>
								</span>
								<span className="meta">→ medium</span>
							</a>
						</li>
					</ul>
				</div>
			</section>

			{/* ─────────────── §04 Previously */}
			<section ref={prevRef} className="block" id="prev">
				<SectionBar
					index="§04"
					path="./previously"
					meta="2006 — 2024"
					right="3 entries"
				/>
				<div className="block-body">
					<h2 className="h-sect" data-reveal>
						$ history --years
					</h2>

					<div className="dossier">
						<article className="dossier-row" data-reveal>
							<div className="d-years">
								2024<small>eng lead</small>
							</div>
							<div className="d-main">
								<h3>flow blockchain</h3>
								<div className="role">
									flow wallet · chrome extension
								</div>
								<p>
									Architectural overhaul, CI/CD, state-management refactor, and
									end-to-end test coverage on the primary consumer gateway to
									Flow and Flow EVM. Source:{" "}
									<a href="https://github.com/onflow/FRW-Extension">
										onflow/FRW-Extension
									</a>
									.
								</p>
							</div>
							<div className="d-side">
								<div className="kv">
									<span className="k">stack</span>
									<span className="v">react · ts · evm</span>
								</div>
								<div className="kv">
									<span className="k">role</span>
									<span className="v">eng lead</span>
								</div>
								<div className="kv">
									<span className="k">status</span>
									<span className="v green">shipped</span>
								</div>
							</div>
						</article>

						<article className="dossier-row" data-reveal>
							<div className="d-years">
								2019<small>– 2023 · founder</small>
							</div>
							<div className="d-main">
								<h3>comma payments</h3>
								<div className="role">
									open banking · bulk payments · uk
								</div>
								<p>
									Pioneered open-banking bulk payments in the UK; £18M+/month
									processed at run rate. Acquired by Weavr (Paystratus Group) in
									March 2023.
								</p>
							</div>
							<div className="d-side">
								<div className="kv">
									<span className="k">arr</span>
									<span className="v">£18m+/mo processed</span>
								</div>
								<div className="kv">
									<span className="k">exit</span>
									<span className="v green">acquired 2023</span>
								</div>
								<div className="kv">
									<span className="k">market</span>
									<span className="v">uk · open banking</span>
								</div>
							</div>
						</article>

						<article className="dossier-row" data-reveal>
							<div className="d-years">
								2006<small>– 2017 · founder</small>
							</div>
							<div className="d-main">
								<h3>specle</h3>
								<div className="role">
									ad-spec database · publishers &amp; agencies
								</div>
								<p>
									Central ad-spec database used by The Guardian, Daily Mail, and
									Condé Nast. Cash-positive within three years; still operating
									today.
								</p>
							</div>
							<div className="d-side">
								<div className="kv">
									<span className="k">cash+</span>
									<span className="v">in 3 years</span>
								</div>
								<div className="kv">
									<span className="k">status</span>
									<span className="v green">live · 2026</span>
								</div>
								<div className="kv">
									<span className="k">market</span>
									<span className="v">uk publishers</span>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>

			{/* ─────────────── §05 Contact */}
			<section ref={contactRef} className="block" id="contact">
				<SectionBar
					index="§05"
					path="./contact"
					meta="links & availability"
					right={<><span className="green">●</span> open to work</>}
				/>
				<div className="block-body">
					<h2 className="h-sect" data-reveal>
						$ whoami<span className="cursor cyan">█</span>
					</h2>
					<p className="deck" data-reveal>
						Open to advisory, technical leadership, and high-signal
						collaboration on AI video, agentic systems, and fintech
						infrastructure.
					</p>

					<div className="contact" data-reveal>
						<div className="kv">
							<span className="k">code</span>
							<a href="https://github.com/tombeckenham">
								github.com/tombeckenham
							</a>
						</div>
						<div className="kv">
							<span className="k">social</span>
							<a href="https://x.com/tombeckenham">x.com/tombeckenham</a>
						</div>
						<div className="kv">
							<span className="k">résumé</span>
							<a href="https://www.linkedin.com/in/tombeckenham/">
								linkedin.com/in/tombeckenham
							</a>
						</div>
						<div className="kv">
							<span className="k">hire</span>
							<a href="https://www.toptal.com/resume/tom-beckenham">
								toptal.com/resume/tom-beckenham
							</a>
						</div>
					</div>
				</div>
			</section>

			<footer className="statusbar">
				<span>
					<span className="green">●</span> ONLINE
				</span>
				<span>
					SESSION{" "}
					<span ref={uptimeRef} className="cyan">
						00:00
					</span>
				</span>
				<span>
					<span ref={clockRef} className="pink">
						00:00:00 AEST
					</span>
				</span>
				<span>
					CPU{" "}
					<span className="bar">
						<i /><i /><i /><i /><i />
					</span>{" "}
					<span className="cyan">38%</span>
				</span>
				<span style={{ justifyContent: "flex-end" }}>
					© 2026 TOM BECKENHAM · SYDNEY
				</span>
			</footer>
		</div>
	);
}

/* ───────────── helpers ───────────── */

function Prompt({
	path,
	cmd,
	reveal,
}: {
	path: string;
	cmd: string;
	reveal?: boolean;
}) {
	return (
		<div className="prompt" data-reveal={reveal ? "" : undefined}>
			<b className="user">tom</b>
			<span className="muted">@</span>
			<b className="host">home</b>
			<span className="muted">:</span>
			<b className="path">{path}</b>
			<span className="muted">$</span> <em>{cmd}</em>
		</div>
	);
}

function SectionBar({
	index,
	path,
	meta,
	right,
}: {
	index: string;
	path: string;
	meta: string;
	right: React.ReactNode;
}) {
	return (
		<div className="section-bar">
			<span>
				<b>{index}</b> &nbsp; {path}
			</span>
			<span className="muted center">{meta}</span>
			<span className="right">{right}</span>
		</div>
	);
}

function PipelineNode({
	code,
	title,
	children,
	last,
}: {
	code: string;
	title: string;
	children: React.ReactNode;
	last?: boolean;
}) {
	return (
		<div className="pnode">
			<div className="pnode-head">
				<span>{code}</span>
				<span>{title}</span>
				<span className="led" />
			</div>
			<div className="pnode-body">{children}</div>
			{!last && <span className="pnode-arrow">▶</span>}
		</div>
	);
}

export default App;

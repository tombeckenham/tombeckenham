import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileHero from "./assets/images/profile-hero.png";
import flowLogo from "./assets/images/flow-logo.svg";
import commaLogo from "./assets/images/comma-logo.png";
import flowWallet from "./assets/images/flow-wallet.png";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
	const heroRef = useRef<HTMLDivElement>(null);
	const flowRef = useRef<HTMLDivElement>(null);
	const commaRef = useRef<HTMLDivElement>(null);
	const socialRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const hero = heroRef.current;
		const flow = flowRef.current;
		const comma = commaRef.current;
		const social = socialRef.current;

		if (!hero || !flow || !comma || !social) return;

		// Hero animation
		gsap.fromTo(
			hero.children,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out" }
		);

		// Flow section animation
		gsap.fromTo(
			flow.children,
			{ opacity: 0, x: -100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				stagger: 0.1,
				scrollTrigger: {
					trigger: flow,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none reverse",
				},
			}
		);

		// Comma section animation
		gsap.fromTo(
			comma.children,
			{ opacity: 0, x: 100 },
			{
				opacity: 1,
				x: 0,
				duration: 1,
				stagger: 0.1,
				scrollTrigger: {
					trigger: comma,
					start: "top 80%",
					end: "bottom 20%",
					toggleActions: "play none none reverse",
				},
			}
		);

		// Social links animation
		gsap.fromTo(
			social.children,
			{ opacity: 0, scale: 0.8 },
			{
				opacity: 1,
				scale: 1,
				duration: 0.8,
				stagger: 0.1,
				scrollTrigger: {
					trigger: social,
					start: "top 90%",
					toggleActions: "play none none reverse",
				},
			}
		);
	}, []);

	return (
		<div className="portfolio">
			{/* Hero Section */}
			<section ref={heroRef} className="hero">
				<div className="hero-bg"></div>
				<div className="hero-content">
					<div className="hero-image">
						<img
							src={profileHero}
							alt="Tom Beckenham"
							className="profile-image"
						/>
					</div>
					<div className="hero-text">
						<h1>Tom Beckenham</h1>
						<h2>Wallet Engineer @ Flow Blockchain</h2>
						<p>
							Senior technical lead with years of experience building complex
							products both as a hands-on engineer and leader of engineering
							teams.
						</p>
					</div>
				</div>
			</section>

			{/* Flow Foundation Section */}
			<section ref={flowRef} className="flow-section">
				<div className="container">
					<div className="section-header">
						<div className="section-text">
							<div className="section-title">
								<img
									src={flowLogo}
									alt="Flow Blockchain"
									className="company-logo flow-logo"
								/>
								<h2>Flow Blockchain</h2>
							</div>
							<div className="role">
								Full Stack Engineer • November 2024 - Present
							</div>
							<p>
								Leading engineering of the Flow Wallet Chrome Extension - the
								primary gateway for consumers and traders to access the Flow
								blockchain and Flow EVM.
							</p>
							<div className="project-links">
								<a
									href="https://github.com/onflow/FRW-Extension"
									target="_blank"
									rel="noopener noreferrer"
									className="project-link github"
								>
									<svg
										className="project-icon"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
									</svg>
									<span>View Extension Code</span>
								</a>
								<a
									href="https://wallet.flow.com"
									target="_blank"
									rel="noopener noreferrer"
									className="project-link wallet"
								>
									<svg
										className="project-icon"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M12 0C7.589 0 4 3.589 4 8v8c0 4.411 3.589 8 8 8s8-3.589 8-8V8c0-4.411-3.589-8-8-8zm0 2c3.309 0 6 2.691 6 6v8c0 3.309-2.691 6-6 6s-6-2.691-6-6V8c0-3.309 2.691-6 6-6z" />
										<circle cx="12" cy="8" r="3" />
										<path d="M9 14h6v2H9z" />
									</svg>
									<span>Flow Wallet</span>
								</a>
							</div>
						</div>
						<div className="section-media">
							<div className="flow-wallet-showcase">
								<img
									src={flowWallet}
									alt="Flow Wallet"
									className="wallet-image"
								/>
							</div>
						</div>
					</div>

					<div className="achievements">
						<div className="achievement">
							<h4>Architectural Overhaul</h4>
							<p>
								Spearheaded major architectural improvements enhancing security
								and scalability, reducing critical issues by over 95%
							</p>
						</div>
						<div className="achievement">
							<h4>Modern Testing Strategy</h4>
							<p>
								Implemented end-to-end testing with Vitest and Playwright,
								establishing robust quality assurance
							</p>
						</div>
						<div className="achievement">
							<h4>CI/CD Pipeline</h4>
							<p>
								Automated development and release processes with GitHub Actions,
								streamlining team productivity
							</p>
						</div>
						<div className="achievement">
							<h4>State Management Refactor</h4>
							<p>
								Unified application state management and data flow across the
								entire wallet ecosystem
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Comma Section */}
			<section ref={commaRef} className="comma-section">
				<div className="container">
					<div className="section-header">
						<div className="section-text">
							<div className="section-title">
								<img
									src={commaLogo}
									alt="Comma Payments"
									className="company-logo comma-logo"
								/>
								<h2>Comma Payments</h2>
							</div>
							<div className="role">
								Founder & CEO • August 2019 - March 2023
							</div>
							<p>
								Built Comma with the mission to "end business banking bulls***"
								by pioneering open banking bulk payments in the UK.
							</p>
						</div>
						<div className="section-media">
							<div className="comma-showcase">
								<div className="video-container">
									<iframe
										src="https://www.youtube.com/embed/7-6TAxEXlsA?controls=1&modestbranding=1&rel=0"
										title="Comma Payments Demo"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										className="comma-video"
									></iframe>
								</div>
							</div>
						</div>
					</div>

					<div className="achievements">
						<div className="achievement">
							<h4>Open Banking Pioneer</h4>
							<p>
								First to market with bulk payment solutions targeting
								accounting, accounts payable, and payroll sectors
							</p>
						</div>
						<div className="achievement">
							<h4>Venture Success</h4>
							<p>
								Raised funding from top-tier global venture funds, becoming a
								talent and investment magnet
							</p>
						</div>
						<div className="achievement">
							<h4>Strategic Acquisition</h4>
							<p>
								Successfully acquired by Weavr in March 2023, with technology
								integrated into their embedded payments platform
							</p>
						</div>
						<div className="achievement">
							<h4>Market Impact</h4>
							<p>
								Solved critical pain points in business payments, reducing
								manual entry and late supplier payments
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Social Links Section */}
			<section ref={socialRef} className="social-section">
				<div className="container">
					<h2>Connect</h2>
					<div className="social-links">
						<a
							href="https://github.com/tombeckenham"
							target="_blank"
							rel="noopener noreferrer"
							className="social-link github"
						>
							<svg
								className="social-icon"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
							</svg>
							<span>GitHub</span>
						</a>
						<a
							href="https://www.linkedin.com/in/tombeckenham/"
							target="_blank"
							rel="noopener noreferrer"
							className="social-link linkedin"
						>
							<svg
								className="social-icon"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
							<span>LinkedIn</span>
						</a>
						<a
							href="https://x.com/tombeckenham"
							target="_blank"
							rel="noopener noreferrer"
							className="social-link twitter"
						>
							<svg
								className="social-icon"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
							<span>X</span>
						</a>
					</div>
					<div className="contact">
						<p>Sydney, Australia</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;

'use client';
import React, { useEffect, useRef } from "react";
import styles from "./page.module.scss";  
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { Flip } from "gsap-trial/Flip";

import Preloader from "./componetns/preloader/preloader";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Target1, Target2 } from "@/icons/icons";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText, ScrollTrigger, Flip) 

export default function Home() {
	const container = useRef();
	const business_values_chart = [27, 53, 62, 58, 30, 63, 55, 63, 71, 76, 67, 88, 78, 90]
	const horizontal_progress = [
		{label: "Revenue generated for clients", value: 1570, purpose: 1570},
		{label: "Conversation opened", value: 1200, purpose: 2000},
		{label: "Leads generated via target", value: 378, purpose: 378},
		{label: "Calls scheduled for clients", value: 197, purpose: 400},
	]
	const tech_solutions = [
		{ heading: 'B2B Marketing',
			text: [
				`Your solution is of high value and great quality, 
				but you have a hard time attracting the right audience? 
				Wish to work with specific clients but can't cut through 
				the noise of a saturated market? Or simply looking to 
				advance your growth efforts?`,
				`That's the challenge for real B2B marketing pros. 
				Having a perfect knowledge of the digital landscape, 
				we will help you identify the lowest hanging fruits before 
				you spend a fortune on marketing campaigns. While you make 
				good use of the results, we work on a sustainable strategy 
				to scale your business in the long run.`
			],
			targetUrl: '',
			icon: <Target1 />
		},
		{ heading: 'LinkedIn Lead Generation',
			text: [
				`Your business is all set up and now feel ready to expand your client 
				list? You understand your ideal client and how your product can 
				solve their problems?`,
				`That's when we come in with the comprehensive lead generation campaign to 
				employ your sales team with more deals? Like experienced detectives, we will 
				search for the prospects who drive the most value for your business. ext step? We 
				make them talk to you. Unlike most salesy outreaches, our customized campaign is 
				focused on building long-term relationships. Your sales team will love it.`
			],
			targetUrl: '',
			icon: <Target2 />
		}
	]

	const container1 = useRef();
  const tl = useRef();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.slider');
			let el = boxes[0]
			let q = gsap.utils.selector(el);

      tl.current = gsap
        .timeline()
				.to(q(".animated_text"), { opacity: 0.2 })
        .to(boxes[1], { x: '-62vw' }, '<')
        .reverse();
    },
    { scope: container1 }
  );

	useGSAP(() => {

		gsap.utils.toArray(["#home_background_container", "#growing_businesses"]).forEach((panel, i) => {
			ScrollTrigger.create({
				trigger: panel,
				start: i === 0 ? "top top" : "-100 -1000",
				end: i === 1 ? "bottom bottom" : "",
				pin: i === 2 ? false : true, 
				pinSpacing: false,
				onUpdate: () => i === 1 && gsap.set("#growing_businesses", {
					y: '-100px',
				}) 
			});
		});		

		const split = new SplitText("#growing_businesses_text", { type: "chars" });
		gsap.from(split.chars, {
			duration: 0.1,
			delay: 0,
			y: 0,
			x: 0,
			autoAlpha: 0,
			ease: "power4.inOut",
			stagger: 0.05,
			scrollTrigger: {
				trigger: "#growing_businesses",
				start: "top center"
			}
		});

		const split2 = new SplitText("#consistent_leads_header", { type: "chars" });
		gsap.from(split2.chars, {
			duration: 0.1,
			delay: 0,
			y: 0,
			x: 0,
			autoAlpha: 0,
			ease: "power4.inOut",
			stagger: 0.05,
			scrollTrigger: {
				trigger: "#consistent_leads",
				start: "top center"
			}
		});

		gsap.to(".candle", {
			duration: 1,
			yPercent: -100,
			ease: "power4.out",
			scrollTrigger: {
				trigger: "#consistent_leads",
				start: "top center"
			},
			stagger: {
				each: 0.1,
			}
		});

		gsap.to(".progress__item_animated", {
			duration: 1,
			xPercent: 100,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#consistent_leads_header",
				toggleActions: 'restart none none none',
				start: "top top"
			},
			stagger: {
				each: 0.3,
			}
		});

		gsap.to(".progress__item_text", {
			duration: 1,
			delay: 0.1,
			opacity: 1,
			scrollTrigger: {
				trigger: "#consistent_leads_header",
				toggleActions: 'restart none none none',
				start: "top top"
			},
		});

		const split3 = new SplitText(".trusted_partner_heading", { type: "chars" });
		gsap.from(split3.chars, {
			duration: 0.1,
			delay: 0,
			y: 0,
			x: 0,
			autoAlpha: 0,
			ease: "power4.inOut",
			stagger: 0.05,
			scrollTrigger: {
				trigger: "#trusted_partner",
				toggleActions: 'restart none none none',
				start: "top center"
			}
		});

		gsap.to(".sepatator", {
			duration: 1,
			delay: 0.1,
			xPercent: 100,
			opacity: 1,
			scrollTrigger: {
				trigger: "#trusted_partner",
				toggleActions: 'restart none none none',
				start: "top bottom"
			},
			stagger: {
				each: 0.3,
			}
		});

		gsap.to(".trusted_partner_text--anim-simple", {
			duration: 1,
			opacity: 1,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#trusted_partner",
				toggleActions: 'restart none none none',
				start: "top center"
			},
		});
	}, { scope: container,  revertOnUpdate: true});




  return (
    <main className={styles.main} ref={container}>

			<section id="home_background_container" className={styles.new_container}>
				<Preloader />
				<div className={styles.preloader__logo_full}>
					<div
						className={styles.logo_text_horizontal}
						id="horizontal_text"
						style={{opacity: '0'}}
					>
						Respect
					</div>
					<div
						className={styles.logo_text_vertical_dot}
						id="logo_text_vertical_dot"
						style={{opacity: '0'}}
					>
						<span>.</span>
					</div>
						
					<div className={styles.logo_text_vertical__wrapper}>
						<span
							className={styles.logo_text_vertical__text}
							id="vertical_text"
							style={{opacity: '0'}}
						>
							Studio
						</span>
					</div>
				</div>

				<div className={styles.info_text}>
					Digital Marketing <br />Agency
				</div>
			</section>
			

			<section className={styles.growing_businesses} id="growing_businesses">
				<div
					className={styles.growing_businesses__header}
				>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="79" height="51" viewBox="0 0 79 51" fill="none">
							<path d="M21.609 36.3C21.661 37.28 21.661 38.157 21.661 39.137V45.74H37.389V51H0L0 39.138C0 30.061 1.806 23.563 10.778 23.563C16.709 23.563 19.545 26.399 20.778 30.99L37.384 22.326V28.206L21.609 36.3ZM4.435 45.74H17.225V38.726C17.225 33.208 16.657 28.979 10.882 28.979C5.107 28.979 4.435 33.208 4.435 38.726L4.435 45.74Z" fill="#101820"/>
							<path d="M63.822 3.8147e-06C70.579 3.8147e-06 76.508 3.042 78.004 10.211H72.898C71.66 5.931 67.329 4.43501 63.615 4.43501C60.728 4.43501 55.672 5.72501 55.672 9.902C55.672 13.202 58.251 14.853 61.759 15.626L66.09 16.606C71.814 17.843 78.672 20.009 78.672 27.538C78.672 34.81 71.866 38.729 64.441 38.729C55.623 38.729 50.052 33.881 49.072 26.456H54.229C55.209 31.612 58.772 34.294 64.543 34.294C70.112 34.294 73.26 31.715 73.26 28.002C73.26 24.031 69.855 22.484 65.213 21.402L60.572 20.422C55.417 19.287 50.31 16.399 50.31 10.211C50.31 3.042 57.788 3.8147e-06 63.822 3.8147e-06Z" fill="#101820"/>
							<path d="M44.398 51V45.069H50.328V51H44.398Z" fill="#101820"/>
						</svg>
					</div>

					<div>
						<a>Services</a>
						<a>Case Studies</a>
						<a>Blog</a>
					</div>

					<div>
						<a>We're hiring</a>
						<a>Contacts</a>
						<button className={styles.btn_primary}>
							<ArrowRight />

							<span>Book a call</span>
						</button>
					</div>
				</div>

				<div className={styles.growing_businesses__content} id="growing_businesses__content">
					<div className={styles.growing_businesses__content__text_1} id="growing_businesses_text">
						Growing <br /> businesses by <br /> building <br /> relationships
					</div>
					<div className={styles.growing_businesses__content__text_2}>
						B2B Marketing & LinkedIn Lead <br />
						Generation agency
					</div>

					</div>
			</section>

			<section className={styles.consistent_leads} id="consistent_leads">
				<h3 id="consistent_leads_header">
					Consitent leads flow to streamline <br />
					Your business growth.
				</h3>
				<p>
					We combine disruptive marketing techniques with proven <br />
					tech solutions to provide maximum business value. 
				</p>

				<div className={styles.business_values_chart__wrapper}>
					<div className={styles.business_values_chart} id="business_values_chart">
						{business_values_chart.map((candle, index) => {
							return (
								<div key={index} className={styles.business_values_chart__candle+' candle'}>
									<label htmlFor={`candle_${index}`}>{candle}</label>
									<div style={{height: `${candle}%`}} id={`candle_${index}`}>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			
				<div className={styles.horizontal_progress} id="horizontal_progress">
					{horizontal_progress.map((item, index) => {
						return (
							<div
								key={index}
								className={styles.horizontal_progress__item_container}
							>
								<div
									style={{width: `${item.value/item.purpose*100}%`}}
									className={styles.horizontal_progress__item}
									id={`progress__item${index}`}
								>
									<label htmlFor={`progress__item${index}`} className="progress__item_text">{item.label}</label>
									<div className={styles.value+" progress__item_text"} >{item.value}</div>
								</div>

								<div
									className={styles.progress__item_animated_wrapper}
									style={{width: `${item.value/item.purpose*100}%`}}
								>
									<div
										className={styles.progress__item_animated+" progress__item_animated"}
										id={`progress__item${index}`}
									></div>
								</div>
								
							</div>
						)
					})}
				</div>
			</section>

			<section className={styles.trusted_partner} id="trusted_partner">
				<div className={styles.trusted_partner__heading}>
					<hr className="sepatator" />
						<h2><div className="trusted_partner_heading">Trusted long-term partner</div></h2>
						<p className="trusted_partner_text--anim-simple">For leading B2B tech and <br /> service companies</p>
					<hr className="sepatator" />
				</div>

				<div className={styles.trusted_partner__content}>
					<p className={styles.trusted_partner__description+" trusted_partner_text--anim-simple"}>We combine disruptive marketing techniques with proven tech solutions to provide maximum business value.</p>

					<div className={styles.sliders_container} ref={container1}>
						{tech_solutions.map((solution, index) => {
							return (
								<div
									key={index}
									className={styles.slider+" slider"}
									onClick={()=> toggleTimeline()}
								>
									<p className={styles.slider__number+" animated_text"}>
										{index + 1}
									</p>
									<h3 className={styles.slider__heading+" animated_text"}>
										{solution.heading}
									</h3>

									<div className={styles.slider__body+" animated_text"}>
										{solution.text.map((pr, i) => {
											return <p key={i}>{pr}</p>
										})}
									</div>
									
									<div className={styles.slider__footer+" animated_text"}>
										{solution.icon}

										<button className={styles.btn_primary}>
											<ArrowRight />

											Learn more
										</button>
									</div>
									
								</div>
							)
						})}
					</div>
				</div>
			</section>

			
    </main>
  );
}

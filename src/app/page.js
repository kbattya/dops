'use client';
import React, { useEffect, useRef } from "react";
import styles from "./page.module.scss";  
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import Preloader from "./componetns/preloader/preloader";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText, ScrollTrigger) 

export default function Home() {
const container = useRef();
const business_values_chart = [27, 53, 62, 58, 30, 63, 55, 63, 71, 76, 67, 88, 78, 90]
const horizontal_progress = [
	{label: "Revenue generated for clients", value: 1570, purpose: 1570},
	{label: "Conversation opened", value: 1200, purpose: 2000},
	{label: "Leads generated via target", value: 378, purpose: 378},
	{label: "Calls scheduled for clients", value: 197, purpose: 400},
]

useGSAP(() => {
	gsap.to("#home_background_container", {
		y: 0,
	});	

	gsap.utils.toArray(["#home_background_container", "#growing_businesses"]).forEach((panel, i) => {
		ScrollTrigger.create({
			trigger: panel,
			start: i === 0 ? "top top" : "-100 -1000",
			end: i === 1 ? "bottom bottom" : "",
			pin: i === 2 ? false : true, 
			pinSpacing: false,
			markers: true,
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
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" width="22" height="13" viewBox="0 0 22 13" fill="none">
							<path d="M21.1007 6.49956L15.3873 0.786133H12.5306L17.2399 5.49546L0.899353 5.48769L0.900767 7.51284L17.2498 7.51355L12.5306 12.213L15.3866 12.2137L21.1007 6.49956Z" fill="#E63E3A"/>
							</svg>

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

			{/* <div id="panel">
			

				<div className={styles.white}>
				</div>

			</div> */}
			

			
    </main>
  );
}

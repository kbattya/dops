'use-client'
import React, {useEffect} from "react";
import styles from "../../page.module.scss";
import { gsap } from "gsap";

import { SplitText } from "gsap-trial/SplitText";

export default function Preloader ({}) {
	useEffect(() => {
		var tl = gsap.timeline();
		tl.to("#preloader__counter", {
			duration: 0.5,
			opacity: 1,
			onStart: function() {
				var numbers = [2, 6, 12, 24, 48, 56, 64, 76, 82, 98, 100];
				var index = 0;
				var numberInterval = setInterval(function() {
					document.querySelector("#preloader__counter").textContent = numbers[index];
					index++;
					if (index === numbers.length) clearInterval(numberInterval);
				}, 200);
			}
		});

		tl.to("#preloader__counter", {
      duration: 1,
      delay: 1,
      onComplete: () => {
        const preloader = document.querySelector("#preloader__counter");
        if (preloader) {
          preloader.remove();
        }
				gsap.set("#horizontal_text", { autoAlpha: 1 });
				gsap.set("#logo_text_vertical_dot", { autoAlpha: 1 });
				gsap.set("#vertical_text", { autoAlpha: 1 });

        const split = new SplitText("#horizontal_text", { type: "chars" });
        gsap.from(split.chars, {
          duration: 0.1,
      		delay: 0,
          y: 0,
          x: 0,
          autoAlpha: 0,
          ease: "power4.inOut",
          stagger: 0.2,
        });

				var split2 = new SplitText("#vertical_text", {type: "chars"});
				gsap.from(split2.chars, {
					duration: 0.1,
					delay: 0,
					y: 0, 
					x: 0,
					autoAlpha: 0, 
					ease: "power4.inOut",
					stagger: 0.22
				});	
      }
    });
	}, [])

	return (
		<div className={styles.preloader}>
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

			<div
				className={styles['preloader__counter']}
				id="preloader__counter"
			>
			</div>

			{/* <div className="background-container">
				<img src="" alt="" />
			</div> */}
		</div>
	)
}
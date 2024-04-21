'use-client'
import React, { useEffect, useState, useRef } from "react";
import styles from "../../page.module.scss";
import { gsap } from "gsap";
import Image from "next/image";

import image1 from "../../../images/01header.png"
import image2 from '../../../images/02header.jpg'
import image3 from '../../../images/03header.png';
import image4 from '../../../images/04header.jpg';

import { SplitText } from "gsap-trial/SplitText";

export default function Preloader ({}) {
	var images = [
		image1,
		image2,
		image3,
		image4
	];
	const [currentImage, setCurrentImage] = useState(images[0]);
	const indexRef = useRef(0);
	
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
				function customDelay(index) {
					return index === 0 ? 0 : 0.2;
				}
        gsap.from(split.chars, {
          duration: 0.1,
      		delay: customDelay,
          y: 0,
          x: 0,
          autoAlpha: 0,
          ease: "power4.inOut",
          stagger: 0.2,
        });

				var split2 = new SplitText("#vertical_text", {type: "chars"});

				gsap.from(split2.chars, {
					duration: 0.1,
					delay: customDelay,
					y: 0, 
					x: 0,
					autoAlpha: 0, 
					ease: "power4.inOut",
					stagger: 0.22,
					onComplete: () => {
						gsap.to("#preloader_background_container", {
							duration: 2,
							y: '-100%',
							ease: "power4.inOut",
						});

						gsap.to("#growing_businesses", {
							duration: 2,
							delay: 0,
							y: '-100px',
							ease: "power4.inOut",
						});
						gsap.to("#home_background", {
							duration: 2,
							delay: 0,
							y: '-95px',
							ease: "power4.inOut",
						});
					}
				});	
      }
    });
	}, [])

// 	function changeImages() {
//     const intervalId = setInterval(() => {
// 			const nextIndex = (indexRef.current + 1) % images.length;
// 			indexRef.current = nextIndex;
// 			setCurrentImage(images[nextIndex]); 
//     }, 1000);  

//     return intervalId;
// }

	return (
		<>
			<div className={styles.preloader} id="page_preloader">
				<div
					className={styles.preloader__counter}
					id="preloader__counter"
				>
				</div>

				<div
					id="preloader_background_container"
					className={styles.background__container}
				>
				</div>

			</div>

			<div
				className={styles.home_background}
				id="home_background"
				>
				<Image
					src={currentImage}
					quality={100}
				/>
			</div>
		</>
	)
}
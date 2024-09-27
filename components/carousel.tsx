"use client";

import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Carousel01 from "@/public/images/carousel-01.png";
import Carousel02 from "@/public/images/carousel-02.png";
import Carousel03 from "@/public/images/carousel-03.png";
import Carousel04 from "@/public/images/carousel-04.png";
import Carousel05 from "@/public/images/carousel-05.png";
import Carousel06 from "@/public/images/carousel-06.png";
import Carousel07 from "@/public/images/carousel-07.png";
import Carousel08 from "@/public/images/carousel-08.png";
import Carousel09 from "@/public/images/carousel-09.png";
import Carousel10 from "@/public/images/carousel-10.png";
import Carousel11 from "@/public/images/carousel-11.png";
import Carousel12 from "@/public/images/carousel-12.png";
import Carousel13 from "@/public/images/carousel-13.png";
import Carousel14 from "@/public/images/carousel-14.png";
import Carousel15 from "@/public/images/carousel-15.png";
import Carousel16 from "@/public/images/carousel-16.png";
import Carousel17 from "@/public/images/carousel-17.png";
import Carousel18 from "@/public/images/carousel-18.png";
import Carousel19 from "@/public/images/carousel-19.png";
import Carousel20 from "@/public/images/carousel-20.png";
import Carousel21 from "@/public/images/carousel-21.png";
import Carousel22 from "@/public/images/carousel-22.png";
import Carousel23 from "@/public/images/carousel-23.png";
import Carousel24 from "@/public/images/carousel-24.png";
import Carousel25 from "@/public/images/carousel-25.png";
import Carousel26 from "@/public/images/carousel-26.png";
import Carousel27 from "@/public/images/carousel-27.png";
import Carousel28 from "@/public/images/carousel-28.png";
import Carousel29 from "@/public/images/carousel-29.png";
import Carousel30 from "@/public/images/carousel-30.png";
import Carousel31 from "@/public/images/carousel-31.png";
import Carousel32 from "@/public/images/carousel-32.png";
import Carousel33 from "@/public/images/carousel-33.png";
import Carousel34 from "@/public/images/carousel-34.png";
import Carousel35 from "@/public/images/carousel-35.png";
import Carousel36 from "@/public/images/carousel-36.png";
import Carousel37 from "@/public/images/carousel-37.png";

// Import Swiper
import Swiper, { Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Navigation]);

export default function Carousel() {
	useEffect(() => {
		const carousel = new Swiper(".carousel", {
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 4,
				},
			},
			grabCursor: true,
			loop: false,
			centeredSlides: false,
			initialSlide: 0,
			spaceBetween: 24,
			watchSlidesProgress: true,
			navigation: {
				nextEl: ".carousel-next",
				prevEl: ".carousel-prev",
			},
		});
	}, []);

	const carouselItems = [
		{ image: Carousel01 },
		{ image: Carousel02 },
		{ image: Carousel03 },
		{ image: Carousel04 },
		{ image: Carousel05 },
		{ image: Carousel06 },
		{ image: Carousel07 },
		{ image: Carousel08 },
		{ image: Carousel09 },
		{ image: Carousel10 },
		{ image: Carousel11 },
		{ image: Carousel12 },
		{ image: Carousel13 },
		{ image: Carousel14 },
		{ image: Carousel15 },
		{ image: Carousel16 },
		{ image: Carousel17 },
		{ image: Carousel18 },
		{ image: Carousel19 },
		{ image: Carousel20 },
		{ image: Carousel21 },
		{ image: Carousel22 },
		{ image: Carousel23 },
		{ image: Carousel24 },
		{ image: Carousel25 },
		{ image: Carousel26 },
		{ image: Carousel27 },
		{ image: Carousel28 },
		{ image: Carousel29 },
		{ image: Carousel30 },
		{ image: Carousel31 },
		{ image: Carousel32 },
		{ image: Carousel33 },
		{ image: Carousel34 },
		{ image: Carousel35 },
		{ image: Carousel36 },
		{ image: Carousel37 },
	];

	function shuffleArray(
		array: {
			image: StaticImageData;
		}[]
	) {
		for (let i = array.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	shuffleArray(carouselItems);

	return (
		<section className="bg-gray-800">
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:pt-32 md:pb-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
						<h2 className="text-3xl font-bold text-gray-100">
							Preview of Cards
						</h2>
					</div>

					{/* Carousel built with Swiper.js [https://swiperjs.com/] */}
					<div className="carousel swiper-container">
						<div className="swiper-wrapper">
							{/* Carousel items */}
							{carouselItems.map((item, index) => (
								<div key={index} className="swiper-slide h-auto">
									<div className="relative group">
										<div className="aspect-[31/43] w-full">
											<Image
												className="w-full h-full object-cover rounded-lg"
												src={item.image}
												layout="fill"
												alt={`Card ${index + 1}`}
											/>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					{/* Arrows */}
					<div className="flex mt-12 space-x-4 justify-end">
						<button className="carousel-prev relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
							<span className="sr-only">Previous</span>
							<svg
								className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
								viewBox="0 0 16 16"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
							</svg>
						</button>
						<button className="carousel-next relative z-20 w-14 h-14 rounded-full flex items-center justify-center group bg-gray-700 hover:bg-blue-500 transition duration-150 ease-in-out">
							<span className="sr-only">Next</span>
							<svg
								className="w-4 h-4 fill-gray-400 group-hover:fill-white transition duration-150 ease-in-out"
								viewBox="0 0 16 16"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

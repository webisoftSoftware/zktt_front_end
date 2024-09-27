import Link from "next/link";

export default function VideoDemo() {
	return (
		<section className="bg-gray-100 py-16 md:py-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						See our product in action
					</h2>
					<p className="text-xl text-gray-600">
						Watch our demo to understand how our solution can help you
					</p>
				</div>

				<div className="max-w-5xl mx-auto h-[55vh] min-h-[400px] rounded-xl overflow-hidden shadow-2xl">
					<iframe
						src="https://www.youtube.com/embed/dQw4w9WgXcQ"
						title="Product Demo Video"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-full"
					></iframe>
				</div>
			</div>
		</section>
	);
}

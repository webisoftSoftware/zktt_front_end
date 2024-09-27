export default function Faqs() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20 border-b border-gray-100">
					{/* Section header */}
					<div className="pb-12 md:pb-20">
						<h2 className="h2 font-cabinet-grotesk">
							YourQuestions, Our answers
						</h2>
					</div>
					{/* Columns */}
					<div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
						{/* Column */}
						<div className="w-full md:w-1/2 space-y-8">
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-cabinet-grotesk font-bold">
									When will ZKTT be completed?
								</h4>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua,
									ut enim ad minim veniam.
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-cabinet-grotesk font-bold">
									Where can I get updates?
								</h4>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua,
									ut enim ad minim veniam.
								</p>
							</div>
						</div>
						{/* Column */}
						<div className="w-full md:w-1/2 space-y-8">
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-cabinet-grotesk font-bold">
									What was the inspiration for the game
								</h4>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua,
									ut enim ad minim veniam.
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-cabinet-grotesk font-bold">
									How can I contribute to this project?
								</h4>
								<p className="text-gray-500">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua,
									ut enim ad minim veniam.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

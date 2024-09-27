export default function Faqs() {
	return (
		<section>
			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				<div className="py-12 md:py-20 border-b border-gray-100">
					{/* Section header */}
					<div className="pb-12 md:pb-20">
						<h2 className="h2 font-cabinet-grotesk">
							Your Questions, Our answers
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
									By the end of October we plan to have a fully working beta
									running locally. By the end of November we plan to have a V1
									on Sepolia.
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-cabinet-grotesk font-bold">
									Where can I get updates?
								</h4>
								<p className="text-gray-500">
									You can visit our website kzTable.top for more information
									about the current state of the games development
								</p>
							</div>
						</div>
						{/* Column */}
						<div className="w-full md:w-1/2 space-y-8">
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-cabinet-grotesk font-bold">
									What was the inspiration for the game?
								</h4>
								<p className="text-gray-500">
									We wanted to build a blockchain based card game that is
									similar to the fun game Hearthstone that is fun for people of
									all ages and sizes.
								</p>
							</div>
							{/* Item */}
							<div className="space-y-2">
								<h4 className="text-xl font-cabinet-grotesk font-bold">
									How can I contribute to this project?
								</h4>
								<p className="text-gray-500">
									Currently our game is still in development, but once it is
									released on Sepolia you can play test it and send us feedback
									via email.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

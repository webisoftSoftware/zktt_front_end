"use client";

import { Box, VStack } from "@chakra-ui/react";
import Header from "@/components/header";
import VideoSection from "@/components/video-section";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
	return (
		<>
			<Header />
			<VStack spacing={8} align="stretch">
				<Box as="section" bg="gray.900" color="yellow.400" py={16}>
					<Hero />
				</Box>
				<Box as="section" bg="gray.900" color="yellow.400" py={16}>
					<VideoSection />
				</Box>
			</VStack>
			<Footer />
		</>
	);
}

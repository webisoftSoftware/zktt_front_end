// components/HeroSection.tsx
import { Box, Text } from "@chakra-ui/react";

export default function Hero() {
	return (
		<Box maxW="container.xl" mx="auto" px={4} textAlign="center">
			<Text
				as="h1"
				fontSize={["4xl", "5xl", "6xl"]}
				fontWeight="bold"
				letterSpacing="wider"
				textTransform="uppercase"
			>
				ZKTable.Top
			</Text>
		</Box>
	);
}

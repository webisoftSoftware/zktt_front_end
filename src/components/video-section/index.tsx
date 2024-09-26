// components/VideoSection.tsx
import { Box, AspectRatio } from "@chakra-ui/react";

export default function VideoSection() {
	return (
		<Box maxW="container.xl" mx="auto" px={4}>
			<AspectRatio ratio={16 / 9} maxW="container.lg" mx="auto">
				<Box as="iframe" src="https://www.youtube.com/embed/your-video-id" />
			</AspectRatio>
		</Box>
	);
}

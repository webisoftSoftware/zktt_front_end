import { Box, Flex, Button } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box as="footer" bg="gray.900" color="white" py={4}>
			<Flex
				justify="center"
				align="center"
				maxW="container.xl"
				mx="auto"
				px={4}
			>
				<Button mr={4}>Save</Button>
				<Button>Share</Button>
			</Flex>
		</Box>
	);
}

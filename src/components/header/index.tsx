import { Box, Flex, Text, Link } from "@chakra-ui/react";

export default function Header() {
	return (
		<Box as="header" bg="gray.900" color="yellow.400" py={4}>
			<Flex
				justify="space-between"
				align="center"
				maxW="container.xl"
				mx="auto"
				px={4}
			>
				<Text as="h1" fontSize="xl" fontWeight="bold">
					COMING TO STARKNET
				</Text>
				<Link href="https://github.com" isExternal>
					X + GITHUB
				</Link>
			</Flex>
		</Box>
	);
}

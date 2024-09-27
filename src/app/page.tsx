"use client";

import { Box, VStack } from "@chakra-ui/react";
import Header from "@/components/header";
import VideoSection from "@/components/video-section";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

// controller imports
import { useEffect, useState } from "react";
import { StarknetProvider } from "./StarknetProvider";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import CartridgeConnector from "@cartridge/connector";

// controller integration
export function ConnectWallet() {
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();
    const { address } = useAccount();
  
    const connector = connectors[0] as unknown as CartridgeConnector;
  
    const [username, setUsername] = useState<string>();
    useEffect(() => {
      if (!address) return;
      connector.username()?.then((n) => setUsername(n));
    }, [address, connector]);
  
    return (
      <div>
        {address && (
          <>
            <p>Account: {address} </p>
            {username && <p>Username: {username}</p>}
          </>
        )}
  
        <button
          onClick={() => {
            address ? disconnect() : connect({ connector });
          }}
        >
          {address ? "Disconnect" : "Connect"}
        </button>
      </div>
    );
  }

export default function Home() {
	return (
		<>
			<StarknetProvider>
			<ConnectWallet></ConnectWallet>
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
			</StarknetProvider>
		</>
	);
}

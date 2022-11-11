import "../styles/globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import { StoreProvider } from "../utils/Store";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";

// Import Solana Wallet
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import React from "react";
import { SharedContextProvider } from "../context/SharedContext";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const network = WalletAdapterNetwork.Devnet;
const endpoint = clusterApiUrl(network);
const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [pageLoaded, setPageLoaded] = React.useState(false);

  React.useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <ThemeProvider enableSystem={true} attribute="class">
          <SharedContextProvider>
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                  {Component.auth ? (
                    <Auth adminOnly={Component.auth.adminOnly}>
                      {pageLoaded ? <Component {...pageProps} /> : null}
                    </Auth>
                  ) : (
                    <div>
                      {pageLoaded ? <Component {...pageProps} /> : null}
                    </div>
                  )}
                </WalletModalProvider>
              </WalletProvider>
            </ConnectionProvider>
          </SharedContextProvider>
        </ThemeProvider>
      </StoreProvider>
    </SessionProvider>
  );
}

function Auth({ children, adminOnly }) {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/unauthorized?message=login required");
    },
  });
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (adminOnly && !session.user.isAdmin) {
    router.push("/unauthorized?message=admin login required");
  }

  return children;
}

export default MyApp;

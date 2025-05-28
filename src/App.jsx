import React, { useState } from 'react';
import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { polygonMumbai } from 'wagmi/chains';
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import '@rainbow-me/rainbowkit/styles.css';

/*  <<<  insert your real addresses here  >>>  */
const routerAddress   = '0xYOUR_ROUTER_CONTRACT';
const recoveryAddress = '0xYOUR_RECOVERY_CONTRACT';

const abiRouter = [
  'function setFallbackAddress(address _fallbackAddress)',
  'function safeTransfer(address token, address to, uint256 amount)'
];

const abiRecovery = [
  'function recoverTokens(address token)'
];

const { chains, provider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({ appName: 'ReclaimX', chains });
const wagmiClient = createClient({ autoConnect: true, connectors, provider });

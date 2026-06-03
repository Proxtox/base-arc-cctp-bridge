# base-arc-cctp-bridge

Full example for seamless USDC bridging between Base and Arc using Circle Cross-Chain Transfer Protocol (CCTP).

## Overview
Educational + production-ready starter for cross-chain stablecoin movement between Coinbase's Base and Circle's Arc L1.

## Tech Stack
- Solidity
- CCTP (Circle)
- viem / ethers.js
- Next.js (optional frontend)

## Getting Started
```bash
git clone https://github.com/Proxtox/base-arc-cctp-bridge.git
cd base-arc-cctp-bridge
npm install
```

## Key Files
- `contracts/CCTPBridgeExample.sol` - Bridge initiation example

## Next Steps
- Integrate real CCTP contracts + attestations
- Add frontend with bridge UI
- Add status polling for completed transfers
- Support other chains via CCTP

## License
MIT
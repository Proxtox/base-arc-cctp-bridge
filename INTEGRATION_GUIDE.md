# Integration Guide

This guide helps you go from the starter to a production-ready bridge.

## 1. Replace Mock Addresses
Update the CCTP contract address in `scripts/deploy.js` and contracts with real addresses for the network you're deploying to.

## 2. Add Real CCTP Integration
Replace the placeholder `bridgeUSDC` function with actual calls to Circle's CCTP contracts (depositForBurn + attestation).

## 3. Frontend Improvements
The included frontend is a starting point. Consider adding:
- Wallet connection (RainbowKit or Privy)
- Real transaction status tracking
- Error handling and loading states

## 4. Testing
Expand the test suite to cover:
- Successful bridge flows
- Failure cases
- Event emissions

## 5. Production Considerations
- Add rate limiting
- Implement proper error recovery
- Add monitoring and alerts
- Consider using a relayer service

Need help? Open an issue in the repo!
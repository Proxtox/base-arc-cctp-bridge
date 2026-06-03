// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title CCTPBridgeExample
/// @notice Example contract demonstrating USDC bridging between Base and Arc using CCTP
interface ICCTP {
    function depositForBurn(uint256 amount, uint32 destinationDomain, bytes32 mintRecipient, address burnToken) external returns (uint64);
}

contract CCTPBridgeExample {
    address public cctp;
    event BridgeInitiated(address indexed user, uint256 amount, uint32 destinationDomain);

    constructor(address _cctp) {
        cctp = _cctp;
    }

    function bridgeUSDC(uint256 amount, uint32 destinationDomain, bytes32 mintRecipient) external {
        // In production: approve + call depositForBurn on real CCTP contract
        emit BridgeInitiated(msg.sender, amount, destinationDomain);
    }
}
"use client";

import { useState } from 'react';

export default function BridgePage() {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBridge = async () => {
    setLoading(true);
    // In real app: call CCTP bridge contract via wagmi/viem
    setTimeout(() => {
      alert(`Bridging ${amount} USDC from Base to Arc (demo)`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Base ↔ Arc CCTP Bridge</h1>
      
      <input
        type="text"
        placeholder="Amount in USDC"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border rounded mb-4"
      />

      <button
        onClick={handleBridge}
        disabled={loading || !amount}
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Bridging...' : 'Bridge USDC'}
      </button>

      <p className="text-sm text-gray-500 mt-4">
        Demo frontend. Connect wallet + integrate real CCTP in production.
      </p>
    </div>
  );
}
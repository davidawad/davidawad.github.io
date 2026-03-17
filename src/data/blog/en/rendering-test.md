---
author: David Awad
pubDatetime: 2026-03-17T00:00:00Z
title: Rendering Test — Code, Math, and Formatting
postSlug: rendering-test
featured: false
draft: true
tags:
  - dev
  - test
description: "Dev-only post to test code syntax highlighting (Solidity, Python, shell), LaTeX math rendering, and all prose formatting features."
---

## Table of Contents

## Code Blocks

### Solidity — ERC-20 token with a twist

```solidity file="Token.sol"
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @notice A minimal ERC-20 with a burn-on-transfer tax.
contract TaxedToken is ERC20, Ownable {
    uint256 public constant TAX_BPS = 100; // 1% burn tax in basis points

    constructor(address initialOwner)
        ERC20("TaxedToken", "TAXED")
        Ownable(initialOwner)
    {
        _mint(initialOwner, 1_000_000 ether);
    }

    function _update(
        address from,
        address to,
        uint256 amount
    ) internal override {
        if (from == address(0) || to == address(0)) {
            // mint / burn — no tax
            super._update(from, to, amount);
            return;
        }

        uint256 tax = (amount * TAX_BPS) / 10_000;
        uint256 net  = amount - tax;

        super._update(from, address(0), tax); // burn the tax
        super._update(from, to, net);         // transfer remainder
    }
}
```

### Solidity — minimal on-chain oracle with diff notation

```solidity
contract PriceOracle {
    mapping(address => uint256) public prices;
    address public immutable owner;

    constructor() {
        owner = msg.sender;
    }

    // [!code --]
    function setPrice(address token, uint256 price) external {
    // [!code ++]
    function setPrice(address token, uint256 price) external onlyOwner {
        prices[token] = price;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "not owner");
        _;
    }
}
```

### Python — highlighted lines

```python
import hashlib

def merkle_root(leaves: list[bytes]) -> bytes:
    """Compute the Merkle root of a list of leaf hashes."""
    if len(leaves) == 0:
        return b""
    if len(leaves) == 1:  # [!code highlight]
        return leaves[0]  # [!code highlight]

    # Duplicate last leaf if odd number
    if len(leaves) % 2 == 1:
        leaves.append(leaves[-1])

    parent_level = []
    for i in range(0, len(leaves), 2):
        combined = leaves[i] + leaves[i + 1]
        parent_level.append(hashlib.sha256(combined).digest())

    return merkle_root(parent_level)
```

### Shell

```bash
# Deploy and verify a contract on Sepolia
forge script script/Deploy.s.sol:Deploy \
  --rpc-url $SEPOLIA_RPC \
  --private-key $PRIVATE_KEY \
  --broadcast \
  --verify \
  --etherscan-api-key $ETHERSCAN_KEY \
  -vvvv
```

---

## Math — LaTeX via KaTeX

### Inline math

The price of a call option under Black-Scholes is $C = S_0 N(d_1) - K e^{-rT} N(d_2)$ where $N$ is the standard normal CDF.

A blockchain's expected finality time grows as $O(\log n)$ in a BFT system with $n$ validators, assuming a $\tfrac{2}{3}$ honest majority.

### Display math — Bonding curve

A constant-product AMM maintains:

$$
x \cdot y = k
$$

where $x$, $y$ are reserve quantities and $k$ is invariant. Given an input $\Delta x$, the output is:

$$
\Delta y = y - \frac{k}{x + \Delta x} = \frac{y \cdot \Delta x}{x + \Delta x}
$$

### The EIP-1559 base fee update rule

After each block, the base fee adjusts by at most $\tfrac{1}{8}$:

$$
b_{n+1} = b_n \cdot \left(1 + \frac{1}{8} \cdot \frac{g_{\text{used}} - g_{\text{target}}}{g_{\text{target}}}\right)
$$

where $g_{\text{target}} = \tfrac{g_{\text{limit}}}{2}$.

### Ethereum proof-of-stake finality

A checkpoint is finalized when it has a supermajority link with weight exceeding $\tfrac{2}{3}$ of total stake $V$:

$$
W(\text{source} \to \text{target}) \geq \frac{2}{3} \sum_{v \in V} \text{stake}(v)
$$

The probability that a validator with fractional stake $\alpha$ is selected as block proposer in a given slot is:

$$
P(\text{propose}) = \frac{\text{stake}_v}{\sum_{v' \in V} \text{stake}_{v'}} = \alpha
$$

---

## Prose Formatting

### Blockquote

> The key property we want from a blockchain is not decentralization per se, but **credible neutrality** — a system where no single party can unilaterally change the rules.

### Table

| Consensus | Finality | Throughput | Sybil resistance |
|-----------|----------|------------|-----------------|
| PoW | Probabilistic | ~7 tps | Compute |
| PoS | BFT (~2 epochs) | ~100k tps | Stake |
| dBFT | Instant | ~1k tps | Governance |

### Collapsible ToC test

<details>
<summary>How does the bonding curve ensure no arbitrage?</summary>

Because the AMM always prices according to $x \cdot y = k$, any deviation from external market prices is immediately corrected by arbitrageurs who profit by pushing the reserves back toward equilibrium. The pool itself doesn't need an oracle — the market does the work.

</details>

---

## Code inline

Calling `transferFrom(owner, spender, amount)` will revert if `allowance[owner][spender] < amount`. The `unchecked` block skips overflow checks for a `uint256` decrement that is already bounds-checked above it.

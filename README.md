# `Router Nitro Course CookBook`

Welcome to the Router Nitro Course! This README serves as a guide to the structure and content of the course. Below, you'll find the different modules that make up the course curriculum along with brief descriptions of each module.

# `Router Protocol`

![Screenshot 2024-02-14 at 10 17 43 PM](https://github.com/ShivankK26/Router-Nitro-CookBook/assets/115289871/5e0487c0-8170-4a74-ad60-90c91a57e8a8)


**Company Information**

Router Protocol is a solution introduced to address the issues hindering the usability of cross-chain liquidity migration in the DeFi ecosystem. It acts as a bridge connecting various layer 1 and layer 2 blockchains, allowing for the flow of contract-level data across them. The Router Protocol can either transfer tokens between chains or initiate operations on one chain and execute them on another.

Please check the [official documentation of Router Protocol](https://www.routerprotocol.com/)



# ⭐️ `Star us`

If this repository helps you build cross-chain dapps faster and easier - please star this project, every star makes us very happy!

# 🤝 `Need help?`

If you need help or have other some questions - don't hesitate to write in our discord channel and we will check asap. [Discord link](https://discord.gg/xvx2pFu9). The best thing about this is the super active community ready to help at any time! We help each other.

# 🤝 `Clone or fork this repository`

```sh
git clone https://github.com/router-resources/Router-Nitro-CookBook
```
## Index

1. [What's the Need of Router Nitro & Why to Use it?](#1-need-of-nitro--why-to-use-nitro)
2. [What is Asset Swapping and Asset Transfer?](#2-asset-swapping-and-asset-transfer)
3. [Introduction to Router Nitro & its Statistics](#3-introduction-to-nitro--statistics-of-nitro)
4. [What's the Difference between Router Nitro & Other Products in the Market?](#5-differences-between-nitro--other-products-why-nitro-is-the-best)
5. [What are Some Prerequisites for Learning Router Nitro?](#7-prerequisites-for-nitro)
6. [Understanding Forwarders and How They Work?](#6-understanding-forwarders-and-how-they-work)
7. [Theoretical Concepts Involved in Router Nitro](#8-theoretical-steps-involved-in-nitro)
8. [Explaining the Codebase of Router Nitro - Part 1](#9-explaining-the-codebase---part-1)
9. [Explaining the Codebase of Router Nitro - Part 2](#10-explaining-the-codebase---part-2)
10. [Explaining the Codebase of Router Nitro - Part 3](#11-explaining-the-codebase---part-3)
11. [Summary & Cheatsheets](#12-summary--cheatsheets)


# `Module 1: What's the Need of Router Nitro & Why to Use it?`

Welcome to the Module 1 Of the Router Nitro CookBook. In this module, we'll be understanding that what's the need of Router Nitro? Why CrossChain Interoperability needs to be catered and why should you only prefer Router Nitro? Let's Begin...

![image](https://github.com/router-resources/Router-Nitro-CookBook/assets/124175970/11cdb796-f40e-48ca-920d-23e3895dc0ce)

### Why do we need CrossChain Bridges?

Several factors highlight the need for cross-chain bridges:

**Unlocking diverse functionalities:** Each blockchain possesses unique strengths and weaknesses. For example, Ethereum boasts a vibrant DeFi ecosystem, while Solana offers faster transaction speeds. Bridges allow users to access functionalities across different blockchains, maximizing their utility.

**Enhanced liquidity:** By enabling asset movement between blockchains, bridges increase liquidity across the entire crypto market. This benefits both users and projects, leading to fairer pricing and efficient capital allocation.

**Boosting innovation:** Bridges pave the way for innovative dApps (decentralized applications) that span multiple blockchains. This fosters competition and accelerates the development of the entire blockchain space.
Types of Cross-Chain Bridges:


### Why to Use Router Nitro?

![image](https://github.com/router-resources/Router-Nitro-CookBook/assets/124175970/47fe0361-b156-4c24-920d-37d1e8062814)

- Router Nitro is the most efficient intent based CrossChain Bridge in Web3. Nitro ensures fund safety by allowing forwarders to claim funds only after verified settlement, deterring malicious activities for robust security.

- Every new Smart Contract you launch needs to go through a Security Audit, so users can have trust in your Security. However, accessing Liquidity from other Chains is still impossible without going through a Bridging Process.

- Amongst all CrossChain Bridges, the amount Of Gas Overspent in Router Nitro is literally 0%.

- Router Nitro's additional Security module allows for perpetual updates to accomodate for Cryptographic Advances in Security.

1. Forwarders can claim funds only after verified settlement, deterring malicious activity.
2. Blockchain Level, Contract Level Security and Code Level Security.
3. Constant Security Updates, that make Nitro one step ahead of the Hackers.

# Conclusion

In conclusion, Module 1 has provided a comprehensive overview of the need for Router Nitro and its significance in the context of CrossChain interoperability. We have explored the fundamental concepts of CrossChain bridges and the challenges associated with inter-blockchain communication.

As we progress through the course, we will delve deeper into the functionalities and technical aspects of Router Nitro, building upon the foundation established in Module 1 to explore its full potential and applications in real-world scenarios.

# `Module 2: What is Asset Swapping and Asset Transfer?`

Welcome to the Module 2 Of the Router Nitro CookBook. In this module, we'll be understanding that what is Asset Swapping and Asset Transfer? Let's Begin...

![Screenshot 2024-02-21 at 4 13 01 PM](https://github.com/router-resources/Router-Nitro-CookBook/assets/124175970/99a5a476-f335-4fb3-ab67-71e4a993ef05)

Asset swapping, and asset transfer are concepts related to Blockchain and CrossChain interoperability, each serving different purposes in enabling the movement of assets across different Blockchain Networks. Here's an explanation of each term:

### What is Asset Swapping?

![image](https://github.com/router-resources/Router-Nitro-CookBook/assets/124175970/bd28017a-ecaf-44bd-b61a-d6484d898646)

Asset swapping on the blockchain lets you exchange tokens from one blockchain network for tokens on another, making it easier for you to diversify your digital assets or use them in different blockchain systems. 

With asset swapping, you could exchange those Matic tokens for AVAX tokens on the Avalanche blockchain. It's like trading your tokens from one blockchain network for tokens on a completely different blockchain, allowing you to switch between different types of digital assets without those blockchains needing to directly connect with each other.

### What is Asset Transfer?

![image](https://github.com/router-resources/Router-Nitro-CookBook/assets/124175970/0f3dfb45-19c8-45fc-94e5-28df11e712b3)

Asset transfer refers to the process of moving digital assets from one user or address to another across different blockchain networks.

For example , you can transfer, let's say, some USDT from the Polygon blockchain to the Avalanche blockchain

# Conclusion

In conclusion, Module 2 has provided a comprehensive understanding of asset swapping and asset transfer in the context of blockchain and cross-chain interoperability. We have explored the distinct concepts of asset swapping and asset transfer, each serving different purposes in enabling the movement of assets across different blockchain networks.

As we progress through the course, we will delve deeper into a Cross Chain asset swapping and transfer engine which helps you do transfer and swapping of assets from one blockchain to another in an efficient , cost effective and secure way. 

# `Module 3: Introduction to Router Nitro & its Statistics`

Welcome to the Module 3 Of the Router Nitro CookBook. In this module, we'll be understanding what Router Nitro is and what are its latest statistics. Since the launch of Router Nitro mainnet, it has been dominating the industry so let's understand how it has been doing this. Let's Begin...

### Introduction To Router Nitro

- Router Protocol is a solution introduced to address the issues hindering the usability of cross-chain liquidity migration in the DeFi ecosystem. It acts as a bridge connecting various layer 1 and layer 2 blockchains, allowing for the flow of contract-level data across them. The Router Protocol can either transfer tokens between chains or initiate operations on one chain and execute them on another.

- Router Nitro is a CrossChain swapping engine or protocol designed to enable CrossChain asset transfers. It serves as a mechanism for seamlessly moving digital assets or tokens between different blockchain networks.

- Router Nitro employs a trustless method for managing CrossChain asset transfers. In this system, a forwarder entity delivers the requested asset to the user on the destination chain. After confirming the forwarder's successful settlement on the destination chain, they can access the user's deposited funds on the source chain

### Statistics Of Router Nitro

![Screenshot 2024-02-21 at 4 17 25 PM](https://github.com/router-resources/Router-Nitro-CookBook/assets/124175970/3c602491-bb71-4f22-9cc6-10db4c51411f)


- At the time of writing, 27760+ transactions have been made on the mainnet of Router Nitro, with a traffic of more than 1130 unique users.

- Within just 25 days of launch, 110+ assets have been bridged with a total volume of transactions of $17.57M.

- To learn more about the current statistics, click [here](https://explorer.routernitro.com/).

### Chains Supported

Currently Router Nitro is supporting 14+ Chains and collaborating with other Chains too. At the time of writing the supported chains are- Arbitrum, Avalanche, Base, BNB, Ethereum, Linea, Manta, Mantle, Optimism, Polygon, Polygon zkEVM, Scroll, TRON, zkSync.

# Conclusion

In conclusion, Module 3 has provided an insightful introduction to Router Nitro and highlighted its latest statistics since the launch of its mainnet. Router Nitro serves as a crucial solution addressing the challenges faced in cross-chain liquidity migration within the DeFi ecosystem.

To explore the current statistics and track the progress of Router Nitro, users can visit the official Explorer at [Router Nitro Explorer](https://explorer.routernitro.com/).

As we move forward in the course, we will delve deeper into the technical aspects and practical applications of Router Nitro, equipping participants with the knowledge and skills to leverage its capabilities effectively in the blockchain ecosystem.

# `Module 4: What's the Difference between Router Nitro & Other Products in the Market?`

Welcome to the Module 4 Of the Router Nitro CookBook. In this module, we'll be understanding the Difference between Router Nitro and some other Products in Market. Let's Begin...

![router chain](https://github.com/ShivankK26/Router-Nitro-CookBook/assets/115289871/edac46cf-dadb-4a42-ba1b-503af9d087a6)

### Why Router Nitro is the BEST solution in market?

In general, Router Nitro stands out among other CrossChain Bridges for several reasons:

1) **Cost-Effectiveness**: Router Nitro offers a more economical option with lower fees for transferring and swapping assets between blockchains compared to other bridging solutions. This can save users a significant amount in transaction costs.

2) **Time Efficiency**: Unlike other bridging solutions that may take longer, Router Nitro is designed for swift asset transfers. Users can complete asset swaps and transfers within a few seconds, providing a quick and efficient experience.

3) **No TVL Locking**: Router Nitro operates on an intent-based system, where forwarders handle the asset transfers between chains. This eliminates the need for Total Value Locked (TVL), making it more secure. With no significant funds locked, the system becomes less attractive to hackers, enhancing overall security.

In summary, Router Nitro excels in being cost-effective, time-efficient, and secure, making it a preferred choice for users looking to move assets across different blockchains.

# Conclusion

In conclusion, Module 4 has shed light on the distinctive features and advantages of Router Nitro compared to other products available in the market. Router Nitro stands out as the premier solution for addressing the challenges associated with cross-chain liquidity migration in the DeFi ecosystem.

As we progress through the course, readers will gain a deeper understanding of Router Nitro's capabilities and its role in driving innovation and efficiency in the DeFi landscape. With Router Nitro, users can navigate the complexities of cross-chain interoperability with confidence and efficiency, unlocking new opportunities for growth and development in the blockchain ecosystem.

# Module 5: What are Some Prerequisites for Learning Router Nitro?

Welcome to the Module 5 Of the Router Nitro CookBook. In this module, we'll be understanding that what are some Prerequisites for Learning Router Nitro. Let's Begin...

### Some Prerequisites

Any person who wants to learn how to Build any dApp on Router Nitro should-

- Have basic knowledge of CrossChain Bridges, Asset Transfer, and Asset Swapping.

- Have an understanding of how does a forwarder entity work.

- Have an understanding of CrossChain Interoperability and how Router Protocol has been shaping the industry.

- Basic ReactJS and Solidity knowledge.

Now, you're good to go to be a Buildooor in Router Protocol's Ecosystem 🚀.

# Conclusion

In conclusion, Module 5 has outlined the essential prerequisites for learning and building dApps on Router Nitro effectively. To embark on the journey of mastering Router Nitro and contributing to its ecosystem, individuals should fulfill the above requirements.

# Module 6: Understanding Forwarders and How They Work?

Welcome to Module 6 Of Router Nitro CookBook. In this module, we'll be understanding what are forwarders, how do they work, and how Router Protocol has been implementing it. Let's Begin...

### What are Forwarders?

![forwarders](https://github.com/router-resources/Router-Nitro-CookBook/assets/124175970/b8e783e5-d5dd-41b7-a1c9-94157fc3b04d)

- Picture a scenario where you need to transfer funds from Bank A to Bank B. In this process, Router Nitro acts as an intermediary, collecting the money from Bank A, and then its partners, referred to as forwarders, personally convey the funds to Bank B. Following the transfer, Router Nitro undertakes a crucial verification step to ensure that the amount you originally deposited in Bank A matches the amount that arrives at Bank B. If the verification is successful, Router Nitro’s partners retrieve the funds they initially transferred to your Bank B, effectively completing the transaction.

- Router Nitro has three flows with which it enables this swapping -

1. **Forwarder Flow:** It uses a trustless optimistic approach to handle cross-chain asset transfers and has an entity called the forwarder that provides the users with their desired assets on the destination chain.
2. **Burn and Mint flow:** For certain tokens, the bridge has mint/burn rights, which allows the bridge to burn the tokens on one chain and mint them on another.
3. **USDC circle flow:** This flow uses Circle’s CCTP infra to provide cross-chain transfers of USDC. The flow works for USDC transfers on chains where CCTP is live.

- Now, we will be covering the Forwarder flow, and before we do that, here are some terms and their explanations for you to understand the flow in a better way
1. **Orchestrators:** It ensures that all the validators and relayers are playing in sync and that the information being passed between them is accurate and legitimate.
2. **Middleware contract:** It is a contract which is deployed on the Router chain, which enables custom business logic directly in the bridging layer.
3. **IBC:** Inter-Blockchain Communication Protocol is an open-source protocol to handle authentication and transport of data between blockchains (within the Cosmos ecosystem.
4. **Gateway contracts:** Gateway contracts serve as the interface for the application contracts on any chain to interact with contracts on other chains.

### How does Router Nitro implement the Forwarders?

- In the forwarder flow, first of all, a user invokes the Nitro contract to transfer funds from Chain A (source) to Chain B (destination). The source chain Nitro contract will validate the request, deduct funds from the user’s account, increment event nonce and emit a FundsDeposited event. Whenever a FundsDeposited event is emitted from a Nitro contract, Orchestrators listen to this event and submit the event to the Router chain along with their attestation. Parallely, the forwarders also listen to the FundsDeposited event.

- After 2/3+1 validation, the Router chain will invoke the middleware Nitro contract with the event info, and after this, the middleware contract will persist with the request! While the event was being processed on the Router chain (attestation, validator, submission on the middleware contract), in parallel, the forwarder also listens to the FundsDeposited event and invokes the Nitro contract on the destination chain.

- Upon receiving the transaction, the Nitro contract on the destination chain will (a) transfer the defined amount from the forwarder address to the receiver address, (b) create a hash of the fields included in the request and persist it in the status map (to skip the replays), and © emit a FundsPaid event confirming the execution.Orchestrators on the Router chain listen to the FundsPaid event from the destination chain Nitro contract and submit it to the Router chain with their attestation. Upon receiving the FundsPaid event, the middleware contract verifies that the message generated from the request data is the same as the message hash from the executed event, marks the request as Completed and persists the forwarder address and amount.

So, just like that, Router Nitro bridges your assets from Chain A to Chain B efficiently, securely, and with minimal cost using the reverse verification flow!

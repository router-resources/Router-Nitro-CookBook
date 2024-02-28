# `Module 6: Understanding Forwarders and How They Work?`

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

# Conclusion

In conclusion, Module 6 of Router Nitro CookBook provided an in-depth understanding of forwarders and how they function within the Router Protocol ecosystem. By leveraging forwarders, Router Nitro facilitates cross-chain asset transfers efficiently and securely. The module outlined three key flows utilized by Router Nitro, namely the Forwarder Flow, Burn and Mint Flow, and the USDC Circle Flow, each catering to specific token transfer scenarios.

Moreover, the module introduced essential terms such as Orchestrators, Middleware contracts, IBC, and Gateway contracts to better comprehend the intricacies of the Forwarder Flow. It elucidated the step-by-step process involved in transferring funds from one chain to another, highlighting the crucial roles played by Orchestrators and forwarders in ensuring transaction validity and execution.

Through a detailed examination of the forwarder flow implementation, Module 6 illustrated how Router Nitro bridges assets seamlessly across different chains while maintaining security and minimizing costs. By employing a reverse verification flow, Router Nitro completes asset transfers with accuracy and reliability, thus offering users a robust solution for interoperability in the blockchain space.

# [ Next : Module 7: Explaining the CodeBase of Router Nitro - Part 1 ](Module7.md)

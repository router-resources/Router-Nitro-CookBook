# `Module 8: Explaining the CodeBase of Router Nitro - Part 2`

Welcome to Module 8 Of Router Nitro CookBook. In this module, we'll be looking at a dApp and understanding its CodeBase. In the previous module, we understood about **Step 1** which is getting the quote data. This is the Part 2 of understanding the CodeBase. Let's Begin...

### Understanding the CodeBase Part- 2

In this module, we'll be understanding the step 2, i.e Checking and Setting an Allowance.

### Step2: Check and set allowance

In Step 2 of using Router Nitro, you'll verify and configure the allowance for token transfers. This process allows Router's swap or transfer contract to safely move tokens on your behalf between blockchain networks.

```
import { ethers, Contract } from 'ethers'

// ERC20 Contract ABI for "Approve" and "Allowance" functions
const erc20_abi = [
    {
        "name": "approve",
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "name": "allowance",
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// Fetch the current allowance and update if needed
const checkAndSetAllowance = async (wallet, tokenAddress, approvalAddress, amount) => {
    // Transactions with the native token don't need approval
    if (tokenAddress === ethers.constants.AddressZero) {
        return
    }

    const erc20 = new Contract(tokenAddress, erc20_abi, wallet);
    const allowance = await erc20.allowance(await wallet.getAddress(), approvalAddress);
    if (allowance.lt(amount)) {
        const approveTx = await erc20.approve(approvalAddress, amount, {gasPrice: await wallet.provider.getGasPrice()});
        try {
            await approveTx.wait();
            console.log(`Transaction mined succesfully: ${approveTx.hash}`)
        }
        catch (error) {
            console.log(`Transaction failed with error: ${error}`)
        }
    }
}
```

1. **Define ERC20 Contract ABI:** We begin by defining the ABI (Application Binary Interface) for ERC20 tokens, specifically focusing on the "approve" and "allowance" functions. This ABI is essential for interacting with ERC20 token contracts.

2. **The `checkAndSetAllowance` Function:** This function checks your current allowance and, if necessary, sets a new allowance. It first checks if the token is the native token (ETH), in which case no approval is needed.

3. **Creating an ERC20 Contract:** Using the provided token address and the ERC20 ABI, we create an instance of the ERC20 contract. This contract represents the token you want to set an allowance for.

4. **Checking Current Allowance:** We retrieve your current allowance for the token. The allowance is the maximum amount the Voyager system (or any other address) can withdraw from your wallet.

5. **Setting the Allowance:** If the current allowance is less than the desired amount, we proceed to set a new allowance. We initiate an approval transaction to the ERC20 contract, granting permission to Router's swap or transfer contract to withdraw tokens on your behalf.

6. **Handling Transactions:** The code handles the approval transaction, monitors its status, and logs the transaction hash upon successful confirmation.

When the button is clicked your signer (wallet) is set up and the `checkAndSetAllowance` function is called with the required parameters. You can find it in quote.allowanceTo in the quoteData obtained from step 1

<img width="269" alt="image" src="https://github.com/router-resources/Voyager-2-Cookbook/assets/124175970/6ae5efe7-e589-4a61-95ad-37b8b5077c99">

Please replace `"YOUR_PRIVATE_KEY"` and other placeholders with your actual private key and the specific token details.

# Conclusion

In conclusion, Module 8 of the Router Nitro CookBook provided a detailed examination of Step 2 in using Router Nitro: checking and setting an allowance for token transfers. This crucial step ensures the safe and secure movement of tokens between blockchain networks through Router's swap or transfer contract.

The module delved into the codebase, offering insights into the implementation of the checkAndSetAllowance function, which automates the process of verifying and configuring allowances for token transfers. Here's a breakdown of the key components discussed:

1. **ERC20 Contract ABI Definition:** The module began by defining the ABI (Application Binary Interface) for ERC20 tokens, specifically focusing on the "approve" and "allowance" functions. This ABI is essential for interacting with ERC20 token contracts.

2. **checkAndSetAllowance Function:** This function, central to Step 2, checks the current allowance and sets a new allowance if necessary. It first checks if the token is the native token (ETH), in which case no approval is needed. Then, it creates an instance of the ERC20 contract using the provided token address and ABI.

3. **Checking and Setting Allowances:** The function retrieves the current allowance for the token and compares it with the desired amount. If the current allowance is less than the desired amount, a new allowance is set through an approval transaction to the ERC20 contract.

4. **Transaction Handling:** The code efficiently handles the approval transaction, monitoring its status and logging the transaction hash upon successful confirmation.

By providing developers with a clear understanding of the codebase and its functionalities, Module 8 empowers them to seamlessly integrate Router Nitro into their decentralized applications, facilitating efficient and secure cross-chain token transfers. Through these insights, developers can leverage Router Nitro to enhance interoperability across diverse blockchain networks, unlocking new possibilities in the decentralized finance landscape.

# `Quiz (Module 8 - Part 2)`

Instructions: Answer the following questions based on the information presented in Module 8 - Part 2 of the Router Nitro Cookbook. Choose the best answer for each question.

**What is the primary purpose of the checkAndSetAllowance function in the context of Router Nitro?**

a) To retrieve the current balance of the user's wallet.<br>
b) To verify and potentially configure allowances for token transfers.<br>
c) To generate a unique widget ID for the user's dApp integration.<br>
d) To directly initiate the cross-chain transfer of tokens.

**Under what circumstance does the checkAndSetAllowance function NOT require any execution?**

a) When the allowance for the token is already sufficient for the desired transfer.<br>
b) When the user has insufficient balance for the desired token transfer.<br>
c) When the destination chain does not support the ERC20 token standard.

**What information does the erc20_abi variable in the code snippet represent?**

a) The private key of the user's cryptocurrency wallet.<br>
b) The interface definition for interacting with ERC20 token contracts.<br>
c) The specific parameters required for the getQuote function.


# [ Next: Module 9: Explaining the CodeBase of Router Nitro - Part 3 ](Module9.md)

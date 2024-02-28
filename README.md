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
7. [Explaining the Codebase of Router Nitro - Part 1](#9-explaining-the-codebase---part-1)
8. [Explaining the Codebase of Router Nitro - Part 2](#10-explaining-the-codebase---part-2)
9. [Explaining the Codebase of Router Nitro - Part 3](#11-explaining-the-codebase---part-3)
10. [Summary & Cheatsheets](#12-summary--cheatsheets)



# `Module 7: Explaining the CodeBase of Router Nitro - Part 1`

Welcome to Module 7 Of Router Nitro CookBook. In this module, we'll be looking at a dApp and understanding its CodeBase. This is the Part 1 of understanding the CodeBase. Let's Begin...

### Understanding the CodeBase Part- 1

![gif](https://github.com/router-resources/Voyager-2-Cookbook/assets/124175970/7add0a31-99d0-4d16-9e7d-9f8a3390bfb7)

It's very easy to integrate Nitro in your dApp. All you need is a 20 lines of copy paste code ! **Clone this repository**,hit **npm install** to install all the neccessary package and libraries and hit **npm run dev** to start the demo dapp. All you need to do is change some parameters based on the dapp that you are building. You find all the suppoted chains and assets [ here](https://docs.routerprotocol.com/develop/voyager/voyager-v2.0/supported-chains-tokens)

This Demo app demonstrate how to use Nitro to transsfer USDT from Polygon Mumbai to Avalanche Fuji. Note, this dApp is just made for demonstration purpose. After having this dapp code on your local system, you can modify it (change thee parameters) based on the dapp you want to build.

After you have run the dApp on your localhost, it's time to undertand how does the dApp works.

All you need is just 3 easy steps to integrate Voyager into any dapp :-

Step1: Get the Quote

Step2: Check and set allowance

Step3: Execute the transaction

![Untitled Workspace](https://github.com/router-resources/Voyager-2-Cookbook/assets/124175970/0e7775f5-cf4f-41b1-a57d-bfc57e2fc44f)

### Step1: Get the Quote

Router Nitro enables you to interact with the nitro contract and initiate CrossChain token transfers. The first step in this process is to request a quote, which provides you with essential details about the proposed token transfer.

To request a quote, follow these steps:

1. **Define the PATH_FINDER_API_URL:** Set the PATH_FINDER_API_URL variable to the URL of the Pathfinder API for the Voyager testnet. This is where you will send your quote request.

   ```javascript
   const PATH_FINDER_API_URL = "https://api.pf.testnet.routerprotocol.com/api";
   ```

2. **Create the `getQuote` Function:** This function handles the quote request. It uses the `axios` library to make an HTTP GET request to the Voyager Pathfinder API.

   ```javascript
   const getQuote = async (params) => {
     const endpoint = "v2/quote";
     const quoteUrl = `${PATH_FINDER_API_URL}/${endpoint}`;
     try {
       const res = await axios.get(quoteUrl, { params });
       return res.data;
     } catch (e) {
       console.error(`Fetching quote data from pathfinder: ${e}`);
     }
   };
   ```

3. **Call the `getQuote` Function:** Use this function to request a quote by passing appropriate parameters.In this repository , this function is called using a a button.

```javascript
// Example usage:
const quoteParams = {
  fromTokenAddress: from,
  toTokenAddress: to,
  amount: amount,
  fromTokenChainId: "80001",
  toTokenChainId: "43113", // Fuji

  widgetId: 0, // get your unique wdiget id by contacting us on Telegram
};

const quoteData = await getQuote(quoteParams);
console.log("Quote Data:", quoteData);
```

These parameters define the details of the token transfer you wish to execute. Let's break down what each parameter represents:

- `'fromTokenAddress'`: This should specify the address of the token you want to transfer from (the source token).

- `'toTokenAddress'`: Provide the address of the token you want to transfer to (the destination token).

- `'amount'`: Set the amount of the token you wish to transfer.

- `'fromTokenChainId'`: This parameter represents the chain ID of the source blockchain. In this case, it's set to "80001."

- `'toTokenChainId'`: Similarly, this parameter specifies the chain ID of the destination blockchain, which, in this example, is "43113" (Fuji).

- `'widgetId'`: This parameter is used to identify the widget responsible for the transfer. You'll typically need to obtain a unique widget ID through contact with the Voyager team, often via Telegram or other means. For now, let's keep it as 0.

With these parameters, you can now call the `getQuote` function with this `params` object to initiate a quote request for your specific token transfer.

   <img width="197" alt="image" src="https://github.com/router-resources/Voyager-2-Cookbook/assets/124175970/5867052e-301e-46c6-b206-24094c19298e">

### Response

The `getQuote` function returns the quote data, which typically includes details about the token transfer, such as source and destination chains, token amount, fees, and other relevant information.Click the **Get Quote** button and go to console to see the quote data printed on console.

# Conclusion

In conclusion, Module 7 of Understanding the CodeBase introduced users to the seamless integration of Nitro into their decentralized applications (dApps). By following a straightforward process outlined in just 20 lines of code, developers can effectively incorporate Nitro into their projects, facilitating cross-chain token transfers.

The module demonstrated a practical example using a demo dApp to transfer USDT from Polygon Mumbai to Avalanche Fuji. After setting up the dApp locally and modifying parameters as per individual project requirements, users embarked on understanding the three fundamental steps to integrate Voyager into any dApp:

1. **Step 1: Get the Quote:** Users initiated the token transfer process by requesting a quote from the Nitro contract through the Pathfinder API. The quote provided essential details about the proposed token transfer, including source and destination chains, token amounts, and associated fees.

2. **Step 2: Check and Set Allowance:** Once users obtained the quote, they were prompted to check and set the necessary allowances for the token transfer to proceed smoothly.

3. **Step 3: Execute the Transaction:** With all prerequisites met, users executed the transaction, initiating the cross-chain token transfer from the source to the destination chain.

The module provided detailed insights into each step, including code snippets and explanations, to guide developers through the integration process effectively. By following the outlined steps, developers can seamlessly incorporate Nitro into their dApps, enabling efficient and secure cross-chain token transfers.

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

# `Module 9: Explaining the CodeBase of Router Nitro - Part 3`

Welcome to Module 9 Of Router Nitro CookBook. In this module, we'll be looking at a dApp and understanding its CodeBase. In the previous module, we understood about **Step 2** which is checking and setting the allowance. This is the Part 3 of understanding the CodeBase. Let's Begin...

### Understanding the CodeBase Part- 3

In this module, we'll be understanding the step 3, i.e getTransaction.

### Step3: Executing the Transaction

In this step, we will explore how to execute a transaction .This process involves sending a transaction to perform the cross-chain token transfer initiated in Step 1 and configured in Step 2.

1. **The `getTransaction` Function:**

This function is responsible for actually executing the transaction. It takes in the following parameters

- **`params`**: Parameters required for the transaction, which should include the source and destination token addresses, slippage tolerance, sender and receiver addresses, and the widget ID.
- **`quoteData`**: Quote data obtained from Step 1.

When the button is clicked, It performs the following tasks using the function defined:-

```
  const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/polygon_mumbai", 80001);

    const wallet = new ethers.Wallet("76313c982e5cfdc0c47e36465e5fa90e0db291667296a7bd163178b955162b13", provider)

	const params ={
		'fromTokenAddress': from,
		'toTokenAddress': to,
		'amount': amount,
		'fromTokenChainId': "80001",
		'toTokenChainId': "43113", // Fuji

		'widgetId': 0, // get your unique wdiget id by contacting us on Telegram
	}

	const quoteData = await getQuote(params);


	console.log(quoteData)

    const txResponse = await getTransaction({
		'fromTokenAddress': from,
		'toTokenAddress': to,
		'fromTokenChainId': "80001",
		'toTokenChainId': "43113", // Fuji

		'widgetId': 0, // get your unique wdiget id by contacting us on Telegram
	}, quoteData); // params have been defined in step 1 and quoteData has also been fetched in step 1

    // sending the transaction using the data given by the pathfinder
    const tx = await wallet.sendTransaction(txResponse.txn.execution)
    try {
        await tx.wait();
        console.log(`Transaction mined successfully: ${tx.hash}`)
    }
    catch (error) {
        console.log(`Transaction failed with error: ${error}`)
    }
```

- **Signer Setup**: Configures a signer using the specified JSON-RPC provider. Replace `"YOUR_PRIVATE_KEY"` with your actual private key. You can also use the `provider.getSigner()` method if you're implementing this for a user interface (UI).

- **Retrieve Transaction Data**: Calls the `getTransaction` function with the necessary parameters to fetch the transaction data from the Voyager system.

```
const getTransaction = async (params, quoteData) => {
		const endpoint = "v2/transaction"
		const txDataUrl = `${PATH_FINDER_API_URL}/${endpoint}`

		console.log(txDataUrl)

		try {
			const res = await axios.post(txDataUrl, {
				...quoteData,
				fromTokenAddress: params.fromTokenAddress,
				toTokenAddress: params.toTokenAddress,
				slippageTolerance: 0.5,
				senderAddress: account,
				receiverAddress: account,
				widgetId: params.widgetId
			})
			return res.data;
		} catch (e) {
			console.error(`Fetching tx data from pathfinder: ${e}`)
		}
	}
```

**Send Transaction**: Initiates the transaction using the data obtained from the Voyager system.

**Transaction Handling**: Monitors the transaction status. If the transaction is successfully mined, it logs the transaction hash. If there is an error, it logs an error message.

Please replace `"YOUR_PRIVATE_KEY"` with your actual private key and ensure that you have the required parameters, including `params` and `quoteData` obtained from Step 1.

<img width="182" alt="image" src="https://github.com/router-resources/Voyager-2-Cookbook/assets/124175970/7ea56614-6412-43f5-aab8-5e28aa044ff8">

# Conclusion

In conclusion, Module 9 of the Router Nitro Cookbook provided an insightful exploration of Step 3 in using Router Nitro: executing the transaction for cross-chain token transfers. This final step in the process, outlined in the dApp's codebase, enables users to initiate and complete token transfers seamlessly between different blockchain networks.

Here's a summary of the key points covered in this module:

1. **The `getTransaction` Function:** This function is pivotal in executing the transaction. It requires parameters such as source and destination token addresses, slippage tolerance, sender and receiver addresses, and the widget ID.

2. **Transaction Setup:** The module guides users through setting up the necessary components for transaction execution. It includes configuring a signer using the specified JSON-RPC provider and retrieving transaction data using the `getTransaction` function with essential parameters.

3. **Initiating the Transaction:** Once the transaction data is obtained from the Voyager system, the code initiates the transaction using the provided data.

4. **Transaction Handling:** The code monitors the status of the transaction. Upon successful mining, it logs the transaction hash for reference. In case of errors during transaction execution, it provides error messages for debugging purposes.

5. **Implementation Considerations:** Users are reminded to replace `"YOUR_PRIVATE_KEY"` with their actual private key and ensure the availability of required parameters obtained from Step 1 of the process.

By elucidating the intricacies of transaction execution in cross-chain token transfers, Module 9 equips developers and users with the knowledge and tools necessary to leverage Router Nitro effectively within their decentralized applications. Through these insights, users can facilitate secure, efficient, and seamless token transfers across diverse blockchain networks, thereby fostering greater interoperability and expanding the possibilities within the decentralized finance ecosystem.

# `Module 10: Summary & Cheatsheets`

Welcome to Module 10 Of Router Nitro CookBook. This is the final module of this CookBook in which you'll get access to the CheetSheet on Router Nitro. Let's Begin...

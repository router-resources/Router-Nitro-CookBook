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

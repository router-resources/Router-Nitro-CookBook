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

# `Quiz (Module 7 - Part 1)`

Instructions: Answer the following questions based on the information presented in Module 7 - Part 1 of the Router Nitro Cookbook. Choose the best answer for each question.

**What is the primary purpose of the getQuote function in the provided code example?**

a) To initiate the cross-chain token transfer directly.<br>
b) To retrieve information about fees and other details associated with a potential transfer.<br>
c) To check and set the necessary allowances required for the token transfer.<br>
d) To connect to the user's cryptocurrency wallet and obtain their private key.


# [ Next: Module 8: Explaining the CodeBase of Router Nitro - Part 2](Module8.md)

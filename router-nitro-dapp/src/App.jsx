import React, { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import "./App.css";
import ABI from './ABI'

function App() {
  const from = "0x22bAA8b6cdd31a0C5D1035d6e72043f4Ce6aF054";
  const to = "0xb452b513552aa0B57c4b1C9372eFEa78024e5936";
  const [amount, setAmount] = useState(0);

  const [quoteData, setQuoteData] = useState("");
  const [polygonBalance, setPolygonBalance] = useState(0);
  const [avalancheBalance, setAvalancheBalance] = useState(0);
  const [account, setAccount] = useState("Connect Wallet");
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step3, setStep3] = useState("");
  const erc20_abi = ABI;
    
  const PATH_FINDER_API_URL = "https://api.pf.testnet.routerprotocol.com/api";

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

  const checkAndSetAllowance = async (
    wallet,
    tokenAddress,
    approvalAddress,
    amount,
  ) => {
    if (tokenAddress === ethers.constants.AddressZero) {
      return;
    }

    const erc20 = new ethers.Contract(tokenAddress, erc20_abi, wallet);
    const allowance = await erc20.allowance(
      await wallet.getAddress(),
      approvalAddress,
    );
    if (allowance.lt(amount)) {
      const approveTx = await erc20.approve(approvalAddress, amount, {
        gasPrice: await wallet.provider.getGasPrice(),
      });
      try {
        await approveTx.wait();
        console.log(`Transaction mined succesfully: ${approveTx.hash}`);
      } catch (error) {
        console.log(`Transaction failed with error: ${error}`);
      }
    } else {
      alert("enough allowance");
    }
  };

  const getTransaction = async (params, quoteData) => {
    const endpoint = "v2/transaction";
    const txDataUrl = `${PATH_FINDER_API_URL}/${endpoint}`;

    try {
      const res = await axios.post(txDataUrl, {
        ...quoteData,
        slippageTolerance: 0.5,
        senderAddress: account,
        receiverAddress: account,
      });
      return res.data;
    } catch (e) {
      console.error(`Fetching tx data from pathfinder: ${e}`);
    }
  };
  return (
    <div class="body">
      <center>
        <div class="navbar">
          <h1 class="name">Router Nitro Dapp</h1>
          <button
            class="button-52"
            onClick={async () => {
              if (window.ethereum) {
                try {
                  const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                  });

                  setAccount(accounts[0]);
                  const provider = new ethers.providers.Web3Provider(
                    window.ethereum,
                  );
                  const provider1 = new ethers.providers.JsonRpcProvider(
                    "https://rpc.ankr.com/polygon_mumbai",
                    80001,
                  );
                  const provider2 = new ethers.providers.JsonRpcProvider(
                    "https://rpc.ankr.com/avalanche_fuji",
                    43113,
                  );
                  const signer = provider.getSigner();

                  const contract = new ethers.Contract(
                    from,
                    erc20_abi,
                    provider1,
                  );

                  let balance = await contract.balanceOf(accounts[0]);

                  console.log(
                    ethers.utils.formatEther(balance) * Math.pow(10, 6),
                  );
                  setPolygonBalance(
                    ethers.utils.formatEther(balance) * Math.pow(10, 6),
                  );
                  const contract2 = new ethers.Contract(
                    to,
                    erc20_abi,
                    provider2,
                  );
                  balance = await contract2.balanceOf(accounts[0]);
                  console.log(
                    ethers.utils.formatEther(balance) * Math.pow(10, 12),
                  );
                  setAvalancheBalance(
                    ethers.utils.formatEther(balance) * Math.pow(10, 12),
                  );
                } catch (err) {
                  console.log(err);
                }
              }
            }}
          >
            {" "}
            {account.substring(0, 4) + "...." + account.substring(38, 42)}
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h5>Transfer UDST from Polygon Mumbai to Avalanche Fuji</h5>
        <br></br>
        <div>
          Polygon: {polygonBalance}&nbsp;&nbsp;&nbsp;&nbsp;Avalanche:{" "}
          {avalancheBalance}
        </div>

        <br></br>
        <input
          placeholder="Enter Amount"
          onChange={(e) => {
            setAmount(e.target.value * Math.pow(10, 12));
          }}
        ></input>
        <h2>Steps Involved!</h2>
        <br></br>
        <button
          class="button-51"
          onClick={async () => {
            const params = {
              fromTokenAddress: from,
              toTokenAddress: to,
              amount: amount,
              fromTokenChainId: "80001",
              toTokenChainId: "43113",
              partnerId: "0",
            };

            const quoteData = await getQuote(params);
            setQuoteData(quoteData);
            setStep1("✅");
            alert(quoteData.allowanceTo);
          }}
        >
          Step 1: Get Quote {step1}
        </button>

        <br></br>
        <br></br>
        <button
          class="button-51"
          onClick={async () => {
            if (window.ethereum) {
              try {
                const accounts = await window.ethereum.request({
                  method: "eth_requestAccounts",
                });

                console.log(accounts[0]);
                const provider = new ethers.providers.Web3Provider(
                  window.ethereum,
                );
                const signer = provider.getSigner();

                await checkAndSetAllowance(
                  signer,
                  from,
                  quoteData.allowanceTo,
                  ethers.constants.MaxUint256,
                );
                setStep2("✅");
              } catch (err) {
                console.log(err);
              }
            }
          }}
        >
          Step 2: Check Allowance {step2}
        </button>
        <br></br>
        <br></br>

        <button
          class="button-51"
          onClick={async () => {
            if (window.ethereum) {
              try {
                const accounts = await window.ethereum.request({
                  method: "eth_requestAccounts",
                });

                console.log(accounts[0]);
                const provider = new ethers.providers.Web3Provider(
                  window.ethereum,
                );
                const signer = provider.getSigner();

                const txResponse = await getTransaction(
                  {
                    fromTokenAddress: from,
                    toTokenAddress: to,
                    fromTokenChainId: "80001",
                    toTokenChainId: "43113",

                    widgetId: 0,
                  },
                  quoteData,
                );

                const tx = await signer.sendTransaction(txResponse.txn);
                try {
                  await tx.wait();
                  alert(`Transaction mined successfully: ${tx.hash}`);
                  setStep3("✅");
                } catch (error) {
                  console.log(`Transaction failed with error: ${error}`);
                }
              } catch (err) {
                console.log(err);
              }
            }
          }}
        >
          Step 3: Execute {step3}
        </button>
      </center>
    </div>
  );
}

export default App;

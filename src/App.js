import React, { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import GPTInput from "./components/GPTInput";
import "./App.css";

function App() {
  useEffect(async () => {
    if (window.ethereum) {
      console.log("detected");

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        console.log(accounts[0]);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const provider1 = new ethers.providers.JsonRpcProvider(
          "https://rpc.ankr.com/polygon_mumbai",
          80001
        );
        const provider2 = new ethers.providers.JsonRpcProvider(
          "https://rpc.ankr.com/avalanche_fuji",
          43113
        );
        const signer = provider.getSigner();

        const contract = new ethers.Contract(from, erc20_abi, provider1);

        let balance = await contract.balanceOf(accounts[0]);

        console.log(ethers.utils.formatEther(balance) * Math.pow(10, 6));
        setPolygonBalance(ethers.utils.formatEther(balance) * Math.pow(10, 6));
        const contract2 = new ethers.Contract(to, erc20_abi, provider2);
        balance = await contract2.balanceOf(accounts[0]);
        console.log(ethers.utils.formatEther(balance) * Math.pow(10, 12));
        setAvalancheBalance(
          ethers.utils.formatEther(balance) * Math.pow(10, 12)
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const [from, setFromAddress] = useState(
    "0x22bAA8b6cdd31a0C5D1035d6e72043f4Ce6aF054"
  );
  const [to, setToAddress] = useState(
    "0xb452b513552aa0B57c4b1C9372eFEa78024e5936"
  );
  const [amount, setAmount] = useState(0);
  const [quoteData, setQuoteData] = useState("");
  const [polygonBalance, setPolygonBalance] = useState(0);
  const [avalancheBalance, setAvalancheBalance] = useState(0);
  const [account, setAccount] = useState("Connect Wallet");
  const erc20_abi = [
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "burnFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "initialOwner",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "ECDSAInvalidSignature",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "length",
          type: "uint256",
        },
      ],
      name: "ECDSAInvalidSignatureLength",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "s",
          type: "bytes32",
        },
      ],
      name: "ECDSAInvalidSignatureS",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "allowance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientAllowance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "needed",
          type: "uint256",
        },
      ],
      name: "ERC20InsufficientBalance",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "approver",
          type: "address",
        },
      ],
      name: "ERC20InvalidApprover",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "receiver",
          type: "address",
        },
      ],
      name: "ERC20InvalidReceiver",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "ERC20InvalidSpender",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
      ],
      name: "ERC2612ExpiredSignature",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "signer",
          type: "address",
        },
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "ERC2612InvalidSigner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "currentNonce",
          type: "uint256",
        },
      ],
      name: "InvalidAccountNonce",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidShortString",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "OwnableInvalidOwner",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "OwnableUnauthorizedAccount",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "str",
          type: "string",
        },
      ],
      name: "StringTooLong",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [],
      name: "EIP712DomainChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
        {
          internalType: "uint8",
          name: "v",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "r",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "s",
          type: "bytes32",
        },
      ],
      name: "permit",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "decimals",
      outputs: [
        {
          internalType: "uint8",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "DOMAIN_SEPARATOR",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "eip712Domain",
      outputs: [
        {
          internalType: "bytes1",
          name: "fields",
          type: "bytes1",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "string",
          name: "version",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "chainId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "verifyingContract",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "salt",
          type: "bytes32",
        },
        {
          internalType: "uint256[]",
          name: "extensions",
          type: "uint256[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "nonces",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const [consoleData, setConsoleData] = useState([]);

  const PATH_FINDER_API_URL = "https://k8-testnet-pf.routerchain.dev/api";

  const getQuote = async (params) => {
    const endpoint = "v2/sequencer-quote";
    const quoteUrl = `${PATH_FINDER_API_URL}/${endpoint}`;

    console.log("quoteUrl: ", quoteUrl);
    console.log("params: ", params);

    try {
      const res = await axios.get(quoteUrl, { params });
      return res.data;
    } catch (e) {
      console.error(`Fetching quote data from pathfinder: ${e}`);
    }
  };
  // /Users/jitinchekka/Desktop/Talk2Vault/src/App.js
  const checkAndSetAllowance = async (
    wallet,
    tokenAddress,
    approvalAddress,
    amount
  ) => {
    // Transactions with the native token don't need approval
    if (tokenAddress === ethers.constants.AddressZero) {
      return;
    }

    const erc20 = new ethers.Contract(tokenAddress, erc20_abi, wallet);
    const allowance = await erc20.allowance(
      await wallet.getAddress(),
      approvalAddress
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
      console.log("enough allowance");
      alert("enough allowance");
    }
  };

  const getTransaction = async (params, quoteData) => {
    const endpoint = "v2/transaction";
    const txDataUrl = `${PATH_FINDER_API_URL}/${endpoint}`;

    console.log(txDataUrl);

    try {
      const res = await axios.post(txDataUrl, {
        ...quoteData,
        fromTokenAddress: params.fromTokenAddress,
        toTokenAddress: params.toTokenAddress,
        slippageTolerance: 0.5,
        senderAddress: account,
        receiverAddress: account,
        widgetId: params.widgetId,
      });
      return res.data;
    } catch (e) {
      console.error(`Fetching tx data from pathfinder: ${e}`);
    }
  };

  function askGPT(objective) {
    let prompt = `
        Commands you can issue:
        1. BRIDGE 'amount' 'fromChain' 'toChain' 'condition'
          You need to issue this command to exchange of values between two different tokens takes place within the same Blockchain called Swapping.
          where,
            amount - value to be exchanged,
            fromChain - Abbreviation or Name of the blockchain networks you want to Bridge,
            toChain - Abbreviation or Name of the blockchain networks you want to get Bridged,
            condition - If any additional condition mentioned by user else keep it NONE.

        2. EXECSTATUS 'txhash'
            You need to issue this command to Check Contract Execution Status which Returns the status code of a contract execution.
            where,
              txhash - the string representing the transaction hash to check the execution status

        3. RECSTATUS 'txhash'
            You need to issue this command to Check Transaction Receipt Status which Returns the status code of a transaction execution.
            where,
              txhash - the string representing the transaction hash to check the execution status
        
        4. LOGS
            You need to issue this command to Get Event Logs.

        You can only issue these commands as outputs where all parameters must be always within the single quotes. And no need to explain anything, where the format of the commands should be followed strictly.
        Example - 1:
        Input: Bridge 10 UDST from etherium to Solona
        Output: BRIDGE '10' 'etherium' 'Solona'
        `;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        system_instruction: {
          parts: {
            text: prompt
          }
        },
        contents: {
          parts: {
            text: `Input: ${objective}\nOutput:` // "BRIDGE '10' 'etherium' 'Solona'"
          }
        }
      }),
    };

    return fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=AIzaSyA8m8n6kyP8U6X3BR5iTEBOAgn3xztMd0E", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        return data.candidates[0].content.parts[0].text;
      });
  }

  function getID(fromChain, toChain) {
    let prompt1 = `
        from:{to:{address:"abc",chainID:"123",TokenSymbol:"ABC"}}
        the below data is in this format,
          usdt: {
            Ethereum: {
                address: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
                chainID: "5", 
                TokenSymbol: "GTH"
            },
            polygon: {
                address: "0x22bAA8b6cdd31a0C5D1035d6e72043f4Ce6aF054",
                chainID: "80001", 
                TokenSymbol: "MATIC"
            },
            avalanche: {
                address: "0xb452b513552aa0B57c4b1C9372eFEa78024e5936",
                chainID: "43113", 
                TokenSymbol: "AVAX"
            },
            bnb: {
                address: "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684", 
                chainID: "97", 
                TokenSymbol: "tBNB"
            },
            solana: {
                address: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU", 
                chainID: "102", 
                TokenSymbol: "SOL"
            }
          }

          Output format should be in this format and to be followed strictly,
          "from_address" "from_chainID" "to_address" "to_chainID"

          Example:
            Input: What are the ETH and MATIC's Address and ChainID's
            Output: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F" "5" "0x22bAA8b6cdd31a0C5D1035d6e72043f4Ce6aF054" "80001"
        `;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        system_instruction: {
          parts: {
            text: prompt1
          }
        },
        contents: {
          parts: {
            text: `Input: What are the ${fromChain} and ${toChain}'s Address and ChainID's\n Output:`
          }
        }
      })
    };

    return fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=AIzaSyA8m8n6kyP8U6X3BR5iTEBOAgn3xztMd0E", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("data json object: ", data);
        return data.candidates[0].content.parts[0].text;
      });
  }

  async function execapi(token, hash) {
    // Define the URL and API key
    const url = "https://api.etherscan.io/api";
    const params = new URLSearchParams({
      module: "transaction",
      action: "getstatus",
      txhash: hash,
      apikey: process.env.REACT_APP_ETHERSCAN_API_KEY,
    });

    // Create the full URL with parameters
    const fullUrl = `${url}?${params.toString()}`;

    // Make the fetch call
    fetch(fullUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data is: ", data);
        setConsoleData([
          ...consoleData,
          data.message + "\n" + formattedTimestamp,
        ]);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  async function rec_api(token, hash) {
    // Define the URL and API key
    const url = "https://api.etherscan.io/api";
    const params = new URLSearchParams({
      module: "transaction",
      action: "gettxreceiptstatus",
      txhash: hash,
      apikey: token, // replace with your actual API key
    });

    // Create the full URL with parameters
    const fullUrl = `${url}?${params.toString()}`;

    // Make the fetch call
    fetch(fullUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data is: ", data);
        setConsoleData([
          ...consoleData,
          data.message + "\n" + formattedTimestamp,
        ]);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  async function log_api(token) {
    // Define the URL and API key
    const url = "https://api.etherscan.io/api";
    const params = new URLSearchParams({
      module: "logs",
      action: "getLogs",
      address: account,
      fromBlock: "12878196",
      toBlock: "18396068",
      page: "1",
      offset: "1000",
      apikey: token, // replace with your actual API key
    });

    // Create the full URL with parameters
    const fullUrl = `${url}?${params.toString()}`;

    // Make the fetch call
    fetch(fullUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setConsoleData([...consoleData, data.message + formattedTimestamp]);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }
  //Run an action function as asked by GPT.
  async function performAction(commandString) {
    const etherapikey = process.env.REACT_APP_ETHERSCAN_API_KEY;
    console.log("commandString: ", commandString);
    const gpt_cmd = commandString.split("\n")[0];
    console.log("gpt_cmd: ", gpt_cmd);
    const regex = /'([^']+)'/g;
    let match;
    const parameters = [];

    // Find all matches
    while ((match = regex.exec(gpt_cmd)) !== null) {
      // Push the first capturing group, which contains the text between the single quotes
      parameters.push(match[1]);
    }

    if (gpt_cmd.includes("BRIDGE")) {
      console.log(parameters);

      if (parameters.length === 4) {
        const [amt, fromChain, toChain, condition] = parameters;
        const v = parseInt(amt);
        console.log(v);
        const k = v * Math.pow(10, 12);
        setAmount(k);

        const addressAndIds = await getID(fromChain, toChain);
        const parts = addressAndIds
          .split(" ")
          .map((part) => part.replace(/"/g, ""));
        console.log(parts);

        if (parts.length === 4) {
          const [fromAddress, fromChainID, toAddress, toChainID] = parts;
          setFromAddress(fromAddress);
          setToAddress(toAddress);

          // Quote
          const params = {
            fromTokenAddress: from,
            toTokenAddress: to,
            // Convert amount to string
            amount: k.toString(),
            fromTokenChainId: fromChainID,
            //  Remove trailing \n from toTokenChainId
            toTokenChainId: toChainID.replace(/\n$/, ""),
            // widgetId: 0,
          };
          console.log(params);

          const quoteData = await getQuote(params);
          setQuoteData(quoteData);
          // setStep1("✅");
          alert(quoteData.allowanceTo);

          console.log(quoteData);

          // allowance
          if (window.ethereum) {
            console.log("detected");

            try {
              const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
              });

              console.log(accounts[0]);
              const provider = new ethers.providers.Web3Provider(
                window.ethereum
              );
              const signer = provider.getSigner();

              await checkAndSetAllowance(
                signer,
                from, // fromTokenAddress (USDT on Mumbai)
                quoteData.allowanceTo, // quote.allowanceTo in getQuote(params) response from step 1
                ethers.constants.MaxUint256 // amount to approve (infinite approval)
              );
            } catch (err) {
              console.log(err);
            }
          }

          // execute
          if (window.ethereum) {
            console.log("detected");

            try {
              const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
              });

              console.log(accounts[0]);
              const provider = new ethers.providers.Web3Provider(
                window.ethereum
              );
              const signer = provider.getSigner();

              const txResponse = await getTransaction(
                {
                  fromTokenAddress: from,
                  toTokenAddress: to,
                  fromTokenChainId: fromChainID,
                  toTokenChainId: toChainID,

                  widgetId: 0, // get your unique wdiget id by contacting us on Telegram
                },
                quoteData
              ); // params have been defined in step 1 and quoteData has also been fetched in step 1

              // sending the transaction using the data given by the pathfinder
              const tx = await signer.sendTransaction(txResponse.txn.execution);
              try {
                await tx.wait();
                console.log(`Transaction mined successfully: ${tx.hash}`);
                setConsoleData([
                  ...consoleData,
                  `Transaction mined successfully: ${tx.hash} \n Date & Time: ${formattedTimestamp}`,
                ]);
              } catch (error) {
                console.log(`Transaction failed with error: ${error}`);
              }
            } catch (err) {
              console.log(err);
            }
          }
        } else {
          throw new Error("Unexpected number of elements in the string.");
        }
      } else {
        throw new Error("Unexpected number of parameters in command string.");
      }
    } else if (gpt_cmd.includes("SWAP")) {
    } else if (gpt_cmd.includes("EXECSTATUS")) {
      console.log(parameters);
      const res = await execapi(etherapikey, parameters[0]);
    } else if (gpt_cmd.includes("RECSTATUS")) {
      console.log(parameters);
      const res = await rec_api(etherapikey, parameters[0]);
    } else if (gpt_cmd.includes("LOGS")) {
      console.log(parameters);
      const res = await log_api(etherapikey);
    } else if (gpt_cmd.includes("STOP")) {
    } else {
      alert("Error has occured. Please try giving command again.");
    }
  }
  const [obj, setObj] = useState("");
  const performGPTAction = async (Objective) => {
    console.log("Objective: ", Objective);
    setObj(Objective);
    let actionCommand = await askGPT(Objective);
    console.log("GPT's response: ", actionCommand);
    performAction(actionCommand);
  };

  const currentTimestamp = new Date();

  // Format the timestamp as a string
  const formattedTimestamp = currentTimestamp.toLocaleString();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <nav className="navbar">
          <h2>Talk2Vault</h2>
          <div style={{ display: "flex", gap: "10px" }}>

            <button
              class="my-btn"
              onClick={async () => {
                if (window.ethereum) {
                  console.log("detected");

                  try {
                    const accounts = await window.ethereum.request({
                      method: "eth_requestAccounts",
                    });

                    setAccount(accounts[0]);

                    console.log(accounts[0]);
                    const provider = new ethers.providers.Web3Provider(
                      window.ethereum
                    );
                    const provider1 = new ethers.providers.JsonRpcProvider(
                      "https://rpc.ankr.com/polygon_mumbai",
                      80001
                    );
                    const provider2 = new ethers.providers.JsonRpcProvider(
                      "https://rpc.ankr.com/avalanche_fuji",
                      43113
                    );
                    const signer = provider.getSigner();

                    const contract = new ethers.Contract(
                      from,
                      erc20_abi,
                      provider1
                    );

                    let balance = await contract.balanceOf(accounts[0]);

                    console.log(
                      ethers.utils.formatEther(balance) * Math.pow(10, 6)
                    );
                    setPolygonBalance(
                      ethers.utils.formatEther(balance) * Math.pow(10, 6)
                    );

                    const contract2 = new ethers.Contract(
                      to,
                      erc20_abi,
                      provider2
                    );
                    balance = await contract2.balanceOf(accounts[0]);
                    console.log(
                      ethers.utils.formatEther(balance) * Math.pow(10, 12)
                    );
                    setAvalancheBalance(
                      ethers.utils.formatEther(balance) * Math.pow(10, 12)
                    );
                  } catch (err) {
                    console.log(err);
                  }
                }
              }}
            >
              {account}
              {/* {account.substring(0, 4) + "...." + account.substring(38, 42)} */}
            </button>
          </div>
        </nav>
        <div className="main">
          <div className="sidebar">
            <h5>Chat history</h5>
            <div className="cards">
              {consoleData.map((element, index) => (
                <div className="card">
                  <p>User: {obj}</p>
                  <p>Respose: {element}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mainbar">
            <div className="chatSession">
              <div className="chats">
                <div className="profile">
                  <h4>FUNDS</h4>
                </div>
                <div className="chat">
                  <div className="messages">
                    <div className="result">
                      <p>
                        Polygon: {polygonBalance} <span>MATIC</span>{" "}
                      </p>
                      <p>
                        Avalanche: {avalancheBalance} <span>AVAX</span>{" "}
                      </p>
                    </div>
                    {consoleData && (
                      <div className="console" style={{ overflow: "hidden" }}>
                        <div>{consoleData[0]}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <GPTInput onAskGPT={performGPTAction} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

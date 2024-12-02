# Project Name: Chain Whisperer

## Description:

Chain Whisperer is an innovative blockchain interaction platform that combines the power of AI with cross-chain functionality. This web3 application allows users to seamlessly interact with multiple blockchain networks (currently supporting Polygon Mumbai, Avalanche Fuji, Arbitrum, Holesky testnets) through natural language processing.

## Key Features:
- Natural language interface powered by AI (OpenAI GPT and Google Gemini) for blockchain interactions
- Abstraction of currency holdings across blockchains and routing of transactions based on user preferences
- Cross-chain token transfers and balance checking
- Web3 wallet integration (MetaMask support)
- Real-time balance updates across different networks
- User-friendly interface for both blockchain beginners and experts

## Flow of the Application:
<!-- Image -->
![Flow](https://raw.githubusercontent.com/jitinchekka/ChainWhisperer/refs/heads/main/static/flow.jpeg)

The platform aims to make blockchain technology more accessible by allowing users to execute complex blockchain operations using simple, conversational commands. Whether you're checking balances, transferring tokens, or interacting with smart contracts, Chain Whisperer translates your natural language inputs into blockchain transactions.

Commands you can issue :
- SWAP
- BRIDGE
- EXECSTATUS
- RECSTATUS
- LOGS

## Installation Instructions:
1. Clone the repository:
```bash
git clone https://github.com/jitinchekka/ChainWhisperer.git
```
2. Install dependencies:
```bash
cd ChainWhisperer
yarn install
```
3. Start the development server:
```bash
yarn dev
```
4. Open the application in your browser:
```
http://localhost:3000
```

## Usage Instructions:
1. Connect your MetaMask wallet to the application.
2. Enter your command in the text box and press Enter.
``` text
Bridge 1 AFTT from Ethereum to Avalanche
```
3. You will get the transaction hash as a response.
``` text
Transaction Hash: 0x1234567890abcdef
```
4. View the transaction status using the `EXECSTATUS` command.
``` text
ExecStatus 0x1234567890abcdef
```
5. Check the logs of the transaction using the `LOGS` command.
``` text
Logs
```

## Technologies Used:

### Frontend:
- React.js
- CSS3
- HTML5
- Axios for API requests

### Blockchain & Web3:
- Router Protocol for cross-chain transactions
- Ethers.js for blockchain interactions
- Web3.js
- MetaMask integration
- Multiple testnet integrations:
  - Polygon Mumbai
  - Avalanche Fuji
  - Arbitrum
  - Holesky

### AI & APIs:
- Google Gemini API for natural language processing
- Etherscan API for transaction data
- Router Protocol Pathfinder API

### Development Tools:
- Node.js
- npm/yarn
- Git for version control
- Environment variable management (.env)

### Smart Contract Development:
- ERC20 token standards
- Hardhat/Truffle for testing

### Hosting & Deployment:
- Vercel/Netlify for frontend hosting

# Challenges Faced:
- Integrating multiple blockchains and ensuring seamless communication between them
- Using intents to parse user commands
- Pathfinder API integration
- Rate limiting on the Gemini API calls
- Implementing optimal routing of transactions based on user preferences
- Handling different token standards and ensuring compatibility across networks
- Ensuring the security and reliability of cross-chain transactions
- Balancing the trade-off between user-friendliness and developer complexity

# Future Scope:
- Using Smart Wallets instead of EOC wallets to avoid switching chains and signing transactions multiple times
- Using Intent Parsing for more complex commands
- Integrating more Blockchains
- Deploying on Arbitrum and Avalanche Mainnet

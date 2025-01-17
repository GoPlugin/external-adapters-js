# Plugin External Adapter for Chain-reserve-wallet

This adapter fetches a list of addresses on a target chain that hold the reserves for the Proof of Reserve adapter. It does this by fetching the
addresses from a deployed smart contract.

### Environment Variables

| Required? |   Name   |                                           Description                                           | Options | Defaults to |
| :-------: | :------: | :---------------------------------------------------------------------------------------------: | :-----: | :---------: |
|    ✅     | RPC_URL  | The RPC URL for the chain where the smart contract holding the custodial addresses is deployed. |         |             |
|           | CHAIN_ID |                                   The chain id to connect to                                    |         |      1      |

---

## Chain-reserve-wallet Endpoint

This endpoint reads the set of custodial addresses from a smart contract and returns in as a response.

### Input Params

| Required? |      Name       |                            Description                             |     Options      | Defaults to |
| :-------: | :-------------: | :----------------------------------------------------------------: | :--------------: | :---------: |
|    ✅     |     chainId     |                  The ID of the target PoR chain.                   | mainnet, testnet |             |
|    ✅     |     network     |                         Blockchain network                         |  cardano, doge   |             |
|    ✅     | contractAddress | The address of the smart contract holding the custodial addresses. |                  |             |

### Sample Input

```json
{
  "id": "1",
  "data": {
    "chainId": "testnet",
    "network": "cardano",
    "contractAddress": "0xAe1932a83DeD75db2afD1E4EC6c0D4241554100A"
  }
}
```

### Sample Output

```json
{
  "jobRunID": "1",
  "result": [
    {
      "address": "addr_test1qz87tn9yat3xfutzds43tnj8qw457hk3v46w4028rtnx56v89wjwnrwcvlfm2atvcnnclh3x7thwrl7pgnffaw24mgws0dga4m",
      "chainId": "testnet",
      "network": "cardano"
    }
  ],
  "statusCode": 200,
  "data": {
    "result": [
      {
        "address": "addr_test1qz87tn9yat3xfutzds43tnj8qw457hk3v46w4028rtnx56v89wjwnrwcvlfm2atvcnnclh3x7thwrl7pgnffaw24mgws0dga4m",
        "chainId": "testnet",
        "network": "cardano"
      }
    ]
  }
}
```

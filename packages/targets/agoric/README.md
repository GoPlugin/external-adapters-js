# Plugin External Adapter for Agoric

This adapter posts a result to the [Agoric blockchain](https://agoric.com). See
the [Agoric Plugin Oracle
integration](https://github.com/Agoric/dapp-oracle/tree/master/plugin-agoric)
for details on how to use it with your Plugin node.

### Configuration

| Required? |  Name   | Description | Options | Defaults to |
| :-------: | :-----: | :---------: | :-----: | :---------: |
|           | API_KEY |             |         |             |

### Input Params

| Required? |   Name   |     Description     |          Options           | Defaults to |
| :-------: | :------: | :-----------------: | :------------------------: | :---------: |
|           | endpoint | The endpoint to use | [agoric](#Agoric-endpoint) |   agoric    |

---

## Agoric endpoint

This is the endpoint exposed by your local `ag-solo` after installing the
[Agoric Plugin Oracle
integration](https://github.com/Agoric/dapp-oracle/tree/master/plugin-agoric).

The default is http://localhost:8000/api/oracle

### Input Params

| Required? |     Name     |                            Description                            |      Options       |                Defaults to                |
| :-------: | :----------: | :---------------------------------------------------------------: | :----------------: | :---------------------------------------: |
|    ✅     | `request_id` |                     The Agoric oracle queryId                     |       string       | request_id from Agoric External Initiator |
|           |  `payment`   | How much \$PLI the Plugin node would like to collect as a fee | number as a string |      the whole fee the user offered       |
|    ✅     |   `result`   |        The result to return to the Agoric oracle contract         |       string       |                                           |

## Output

```json
{
  "jobRunID": "278c97ffadb54a5bbb93cfec5f7b5503",
  "data": { "result": "..." },
  "statusCode": 200
}
```

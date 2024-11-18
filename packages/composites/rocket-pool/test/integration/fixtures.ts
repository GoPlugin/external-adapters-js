import { AdapterRequest } from '@plugin/ea-bootstrap'
import nock from 'nock'

export const mockETHSuccess = (): nock.Scope =>
  nock('https://test.rpc:443', { encodedQueryParams: true })
    .persist()
    .post('/v3/0e1e6cbb87e2413bb89e0a0d6d6c2021', {
      method: 'eth_chainId',
      params: [],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request: AdapterRequest) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result: '0x1',
      }),
      [
        'Date',
        'Fri, 21 Oct 2022 06:39:28 GMT',
        'Content-Type',
        'application/json',
        'Content-Length',
        '40',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .post('/v3/0e1e6cbb87e2413bb89e0a0d6d6c2021', {
      method: 'eth_call',
      params: [{ to: '0xae78736cd615f374d3085123a210448e74fc6393', data: '0xe6aa216c' }, 'latest'],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request: AdapterRequest) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result: '0x0000000000000000000000000000000000000000000000000e764a8d003dfd22',
      }),
      [
        'Date',
        'Fri, 21 Oct 2022 06:39:29 GMT',
        'Content-Type',
        'application/json',
        'Content-Length',
        '103',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .post('/v3/0e1e6cbb87e2413bb89e0a0d6d6c2021', {
      method: 'eth_call',
      params: [{ to: '0xae78736cd615f374d3085123a210448e74fc6393', data: '0x313ce567' }, 'latest'],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request: AdapterRequest) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result: '0x0000000000000000000000000000000000000000000000000000000000000012',
      }),
      [
        'Date',
        'Fri, 21 Oct 2022 06:39:30 GMT',
        'Content-Type',
        'application/json',
        'Content-Length',
        '103',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )

export const mockUSDSuccess = (): nock.Scope =>
  nock('https://test.rpc:443', { encodedQueryParams: true })
    .persist()
    .post('/v3/0e1e6cbb87e2413bb89e0a0d6d6c2021', {
      method: 'eth_chainId',
      params: [],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request: AdapterRequest) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result: '0x1',
      }),
      [
        'Date',
        'Fri, 21 Oct 2022 06:39:28 GMT',
        'Content-Type',
        'application/json',
        'Content-Length',
        '40',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .post('/v3/0e1e6cbb87e2413bb89e0a0d6d6c2021', {
      method: 'eth_call',
      params: [{ to: '0xae78736cd615f374d3085123a210448e74fc6393', data: '0xe6aa216c' }, 'latest'],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request: AdapterRequest) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result: '0x0000000000000000000000000000000000000000000000000e764a8d003dfd22',
      }),
      [
        'Date',
        'Fri, 21 Oct 2022 06:39:29 GMT',
        'Content-Type',
        'application/json',
        'Content-Length',
        '103',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .post('/v3/0e1e6cbb87e2413bb89e0a0d6d6c2021', {
      method: 'eth_call',
      params: [{ to: '0xae78736cd615f374d3085123a210448e74fc6393', data: '0x313ce567' }, 'latest'],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request: AdapterRequest) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result: '0x0000000000000000000000000000000000000000000000000000000000000012',
      }),
      [
        'Date',
        'Fri, 21 Oct 2022 06:39:30 GMT',
        'Content-Type',
        'application/json',
        'Content-Length',
        '103',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .post('/v3/0e1e6cbb87e2413bb89e0a0d6d6c2021', {
      method: 'net_version',
      params: [],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request: AdapterRequest) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result: '1',
      }),
      [
        'Date',
        'Fri, 21 Oct 2022 06:46:11 GMT',
        'Content-Type',
        'application/json',
        'Content-Length',
        '38',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .post('/v3/0e1e6cbb87e2413bb89e0a0d6d6c2021', {
      method: 'eth_getCode',
      params: ['0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419', 'latest'],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request: AdapterRequest) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result:
          '0x608060405234801561001057600080fd5b506004361061018d5760003560e01c80638f6b4d91116100e3578063bc43cbaf1161008c578063f2fde38b11610066578063f2fde38b1461042b578063f8a2abd31461045e578063feaf968c146104915761018d565b8063bc43cbaf146103fa578063c159730414610402578063e8c4be30146104235761018d565b8063a928c096116100bd578063a928c0961461038d578063b5ab58dc146103c0578063b633620c146103dd5761018d565b80638f6b4d911461032957806392eefe9b146103315780639a6fc8f5146103645761018d565b80636001ac531161014557806379ba50971161011f57806379ba50971461030f5780638205bf6a146103195780638da5cb5b146103215761018d565b80636001ac5314610222578063668a0f021461028a5780637284e416146102925761018d565b806350d25bcd1161017657806350d25bcd146101e157806354fd4d50146101fb57806358303b10146102035761018d565b8063245a7bfc14610192578063313ce567146101c3575b600080fd5b61019a610499565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101cb6104bb565b6040805160ff9092168252519081900360200190f35b6101e9610559565b60408051918252519081900360200190f35b6101e96106e0565b61020b61074d565b6040805161ffff9092168252519081900360200190f35b61024b6004803603602081101561023857600080fd5b503569ffffffffffffffffffff16610757565b6040805169ffffffffffffffffffff96871681526020810195909552848101939093526060840191909152909216608082015290519081900360a00190f35b6101e9610978565b61029a610af9565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102d45781810151838201526020016102bc565b50505050905090810190601f1680156103015780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610317610c76565b005b6101e9610d78565b61019a610ef9565b61024b610f15565b6103176004803603602081101561034757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611134565b61024b6004803603602081101561037a57600080fd5b503569ffffffffffffffffffff16611201565b610317600480360360208110156103a357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661138b565b6101e9600480360360208110156103d657600080fd5b50356114ce565b6101e9600480360360208110156103f357600080fd5b5035611657565b61019a6117d9565b61019a6004803603602081101561041857600080fd5b503561ffff166117f5565b61019a61181d565b6103176004803603602081101561044157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611839565b6103176004803603602081101561047457600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611935565b61024b611a02565b60025462010000900473ffffffffffffffffffffffffffffffffffffffff1690565b6000600260000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561052857600080fd5b505afa15801561053c573d6000803e3d6000fd5b505050506040513d602081101561055257600080fd5b5051905090565b60055460009073ffffffffffffffffffffffffffffffffffffffff168015806106675750604080517f6b14daf8000000000000000000000000000000000000000000000000000000008152336004820181815260248301938452366044840181905273ffffffffffffffffffffffffffffffffffffffff861694636b14daf8946000939190606401848480828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909201965060209550909350505081840390508186803b15801561063a57600080fd5b505afa15801561064e573d6000803e3d6000fd5b505050506040513d602081101561066457600080fd5b50515b6106d257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f206163636573730000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6106da611b8b565b91505090565b6000600260000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166354fd4d506040518163ffffffff1660e01b815260040160206040518083038186803b15801561052857600080fd5b60025461ffff1690565b600554600090819081908190819073ffffffffffffffffffffffffffffffffffffffff1680158061086d5750604080517f6b14daf8000000000000000000000000000000000000000000000000000000008152336004820181815260248301938452366044840181905273ffffffffffffffffffffffffffffffffffffffff861694636b14daf8946000939190606401848480828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909201965060209550909350505081840390508186803b15801561084057600080fd5b505afa158015610854573d6000803e3d6000fd5b505050506040513d602081101561086a57600080fd5b50515b6108d857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f206163636573730000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60035473ffffffffffffffffffffffffffffffffffffffff1661095c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4e6f2070726f706f7365642061676772656761746f722070726573656e740000604482015290519081900360640190fd5b61096587611bf8565b939b929a50909850965090945092505050565b60055460009073ffffffffffffffffffffffffffffffffffffffff16801580610a865750604080517f6b14daf8000000000000000000000000000000000000000000000000000000008152336004820181815260248301938452366044840181905273ffffffffffffffffffffffffffffffffffffffff861694636b14daf8946000939190606401848480828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909201965060209550909350505081840390508186803b158015610a5957600080fd5b505afa158015610a6d573d6000803e3d6000fd5b505050506040513d6020811015610a8357600080fd5b50515b610af157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f206163636573730000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6106da611d57565b6060600260000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637284e4166040518163ffffffff1660e01b815260040160006040518083038186803b158015610b6657600080fd5b505afa158015610b7a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526020811015610bc157600080fd5b8101908080516040519392919084640100000000821115610be157600080fd5b908301906020820185811115610bf657600080fd5b8251640100000000811182820188101715610c1057600080fd5b82525081516020918201929091019080838360005b83811015610c3d578181015183820152602001610c25565b50505050905090810190601f168015610c6a5780820380516001836020036101000a031916815260200191505b50604052505050905090565b60015473ffffffffffffffffffffffffffffffffffffffff163314610cfc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4d7573742062652070726f706f736564206f776e657200000000000000000000604482015290519081900360640190fd5b60008054337fffffffffffffffffffffffff00000000000000000000000000000000000000008083168217845560018054909116905560405173ffffffffffffffffffffffffffffffffffffffff90921692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a350565b60055460009073ffffffffffffffffffffffffffffffffffffffff16801580610e865750604080517f6b14daf8000000000000000000000000000000000000000000000000000000008152336004820181815260248301938452366044840181905273ffffffffffffffffffffffffffffffffffffffff861694636b14daf8946000939190606401848480828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909201965060209550909350505081840390508186803b158015610e5957600080fd5b505afa158015610e6d573d6000803e3d6000fd5b505050506040513d6020811015610e8357600080fd5b50515b610ef157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f206163636573730000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6106da611e2e565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600554600090819081908190819073ffffffffffffffffffffffffffffffffffffffff1680158061102b5750604080517f6b14daf8000000000000000000000000000000000000000000000000000000008152336004820181815260248301938452366044840181905273ffffffffffffffffffffffffffffffffffffffff861694636b14daf8946000939190606401848480828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909201965060209550909350505081840390508186803b158015610ffe57600080fd5b505afa158015611012573d6000803e3d6000fd5b505050506040513d602081101561102857600080fd5b50515b61109657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f206163636573730000000000000000000000000000000000000000000000604482015290519081900360640190fd5b60035473ffffffffffffffffffffffffffffffffffffffff1661111a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4e6f2070726f706f7365642061676772656761746f722070726573656e740000604482015290519081900360640190fd5b611122611e9b565b95509550955095509550509091929394565b60005473ffffffffffffffffffffffffffffffffffffffff1633146111ba57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600554600090819081908190819073ffffffffffffffffffffffffffffffffffffffff168015806113175750604080517f6b14daf8000000000000000000000000000000000000000000000000000000008152336004820181815260248301938452366044840181905273ffffffffffffffffffffffffffffffffffffffff861694636b14daf8946000939190606401848480828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909201965060209550909350505081840390508186803b1580156112ea57600080fd5b505afa1580156112fe573d6000803e3d6000fd5b505050506040513d602081101561131457600080fd5b50515b61138257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f206163636573730000000000000000000000000000000000000000000000604482015290519081900360640190fd5b61096587611fe4565b60005473ffffffffffffffffffffffffffffffffffffffff16331461141157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b60035473ffffffffffffffffffffffffffffffffffffffff82811691161461149a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e76616c69642070726f706f7365642061676772656761746f720000000000604482015290519081900360640190fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001690556114cb81612117565b50565b60055460009073ffffffffffffffffffffffffffffffffffffffff168015806115dc5750604080517f6b14daf8000000000000000000000000000000000000000000000000000000008152336004820181815260248301938452366044840181905273ffffffffffffffffffffffffffffffffffffffff861694636b14daf8946000939190606401848480828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909201965060209550909350505081840390508186803b1580156115af57600080fd5b505afa1580156115c3573d6000803e3d6000fd5b505050506040513d60208110156115d957600080fd5b50515b61164757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f206163636573730000000000000000000000000000000000000000000000604482015290519081900360640190fd5b611650836121de565b9392505050565b60055460009073ffffffffffffffffffffffffffffffffffffffff168015806117655750604080517f6b14daf8000000000000000000000000000000000000000000000000000000008152336004820181815260248301938452366044840181905273ffffffffffffffffffffffffffffffffffffffff861694636b14daf8946000939190606401848480828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909201965060209550909350505081840390508186803b15801561173857600080fd5b505afa15801561174c573d6000803e3d6000fd5b505050506040513d602081101561176257600080fd5b50515b6117d057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f206163636573730000000000000000000000000000000000000000000000604482015290519081900360640190fd5b611650836122d8565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b60046020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1633146118bf57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821790925560008054604051929316917fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae12789190a350565b60005473ffffffffffffffffffffffffffffffffffffffff1633146119bb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000604482015290519081900360640190fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b600554600090819081908190819073ffffffffffffffffffffffffffffffffffffffff16801580611b185750604080517f6b14daf8000000000000000000000000000000000000000000000000000000008152336004820181815260248301938452366044840181905273ffffffffffffffffffffffffffffffffffffffff861694636b14daf8946000939190606401848480828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016909201965060209550909350505081840390508186803b158015611aeb57600080fd5b505afa158015611aff573d6000803e3d6000fd5b505050506040513d6020811015611b1557600080fd5b50515b611b8357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f4e6f206163636573730000000000000000000000000000000000000000000000604482015290519081900360640190fd5b61112261239b565b6000600260000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561052857600080fd5b600354600090819081908190819073ffffffffffffffffffffffffffffffffffffffff16611c8757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4e6f2070726f706f7365642061676772656761746f722070726573656e740000604482015290519081900360640190fd5b600354604080517f9a6fc8f500000000000000000000000000000000000000000000000000000000815269ffffffffffffffffffff89166004820152905173ffffffffffffffffffffffffffffffffffffffff90921691639a6fc8f59160248082019260a092909190829003018186803b158015611d0457600080fd5b505afa158015611d18573d6000803e3d6000fd5b505050506040513d60a0811015611d2e57600080fd5b508051602082015160408301516060840151608090940151929a91995097509195509350915050565b6000611d61612516565b5060408051808201825260025461ffff81168083526201000090910473ffffffffffffffffffffffffffffffffffffffff16602080840182905284517f668a0f0200000000000000000000000000000000000000000000000000000000815294519394611e1c9463668a0f0292600480840193919291829003018186803b158015611deb57600080fd5b505afa158015611dff573d6000803e3d6000fd5b505050506040513d6020811015611e1557600080fd5b50516124b8565b69ffffffffffffffffffff1691505090565b6000600260000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638205bf6a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561052857600080fd5b600354600090819081908190819073ffffffffffffffffffffffffffffffffffffffff16611f2a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4e6f2070726f706f7365642061676772656761746f722070726573656e740000604482015290519081900360640190fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b158015611f9257600080fd5b505afa158015611fa6573d6000803e3d6000fd5b505050506040513d60a0811015611fbc57600080fd5b5080516020820151604083015160608401516080909401519299919850965091945092509050565b60008060008060008060006120048869ffffffffffffffffffff166124d8565b61ffff821660009081526004602081905260408083205481517f9a6fc8f500000000000000000000000000000000000000000000000000000000815267ffffffffffffffff86169381019390935290519496509294509092839283928392839273ffffffffffffffffffffffffffffffffffffffff1691639a6fc8f59160248083019260a0929190829003018186803b1580156120a057600080fd5b505afa1580156120b4573d6000803e3d6000fd5b505050506040513d60a08110156120ca57600080fd5b508051602082015160408301516060840151608090940151929850909650945090925090506120fd85858585858c6124e0565b9b509b509b509b509b505050505050505091939590929450565b60028054604080518082018252600161ffff808516919091011680825273ffffffffffffffffffffffffffffffffffffffff9590951660209182018190527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000090931685177fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000084021790935560009384526004909252912080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b600069ffffffffffffffffffff8211156121fa575060006122d3565b600080612206846124d8565b61ffff8216600090815260046020526040902054919350915073ffffffffffffffffffffffffffffffffffffffff168061224657600093505050506122d3565b8073ffffffffffffffffffffffffffffffffffffffff1663b5ab58dc836040518263ffffffff1660e01b8152600401808267ffffffffffffffff16815260200191505060206040518083038186803b1580156122a157600080fd5b505afa1580156122b5573d6000803e3d6000fd5b505050506040513d60208110156122cb57600080fd5b505193505050505b919050565b600069ffffffffffffffffffff8211156122f4575060006122d3565b600080612300846124d8565b61ffff8216600090815260046020526040902054919350915073ffffffffffffffffffffffffffffffffffffffff168061234057600093505050506122d3565b8073ffffffffffffffffffffffffffffffffffffffff1663b633620c836040518263ffffffff1660e01b8152600401808267ffffffffffffffff16815260200191505060206040518083038186803b1580156122a157600080fd5b60008060008060006123ab612516565b5060408051808201825260025461ffff8116825262010000900473ffffffffffffffffffffffffffffffffffffffff166020820181905282517ffeaf968c0000000000000000000000000000000000000000000000000000000081529251919260009283928392839283929163feaf968c9160048083019260a0929190829003018186803b15801561243c57600080fd5b505afa158015612450573d6000803e3d6000fd5b505050506040513d60a081101561246657600080fd5b5080516020820151604083015160608401516080909401518a5193995091975095509193509091506124a190869086908690869086906124e0565b9a509a509a509a509a505050505050509091929394565b67ffffffffffffffff1660409190911b69ffff0000000000000000161790565b604081901c91565b60008060008060006124f2868c6124b8565b8a8a8a6124ff8a8c6124b8565b939f929e50909c509a509098509650505050505050565b60408051808201909152600080825260208201529056fea264697066735822122028582c2a257ada18019b18ad7f86982bbacce394b00b5665d3d393b7cccb97ae64736f6c63430006060033',
      }),
      [
        'Date',
        'Fri, 21 Oct 2022 06:46:11 GMT',
        'Content-Type',
        'application/json',
        'Transfer-Encoding',
        'chunked',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .post('/v3/0e1e6cbb87e2413bb89e0a0d6d6c2021', {
      method: 'eth_call',
      params: [{ to: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419', data: '0x313ce567' }, 'latest'],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request: AdapterRequest) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result: '0x0000000000000000000000000000000000000000000000000000000000000008',
      }),
      [
        'Date',
        'Fri, 21 Oct 2022 06:46:12 GMT',
        'Content-Type',
        'application/json',
        'Content-Length',
        '103',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
    .post('/v3/0e1e6cbb87e2413bb89e0a0d6d6c2021', {
      method: 'eth_call',
      params: [{ to: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419', data: '0x50d25bcd' }, 'latest'],
      id: /^\d+$/,
      jsonrpc: '2.0',
    })
    .reply(
      200,
      (_, request: AdapterRequest) => ({
        jsonrpc: '2.0',
        id: request['id'],
        result: '0x0000000000000000000000000000000000000000000000000000001e013ed2cf',
      }),
      [
        'Date',
        'Fri, 21 Oct 2022 06:46:13 GMT',
        'Content-Type',
        'application/json',
        'Content-Length',
        '103',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )

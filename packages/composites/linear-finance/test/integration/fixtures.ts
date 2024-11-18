import { AdapterRequest } from '@plugin/ea-bootstrap'
import nock from 'nock'

export const adapterConfig = {
  coinmarketcap: {
    adapterUrlEnvVar: 'COINMARKETCAP_ADAPTER_URL',
    adapterUrl: 'http://localhost:8082',
  },
}

export const mockXBCIResponseSuccess = (time: string): nock.Scope =>
  nock('https://pro-api.xangle.io')
    .get(`/v1/index/xangle-bluechip?reference_timestamp=${time}`)
    .reply(
      200,
      {
        data: {
          index_value: {
            value: 372.5752830602402,
            reference_timestamp_utc: time,
          },
          portfolio: [
            {
              name: 'Bitcoin',
              project_id: '5cd51e79293878abac111834',
              symbol: 'BTC',
              weight: 0.2597,
              unit: 0.0033068750192173455,
              credibility_rating: 'AA+',
            },
            {
              name: 'Ethereum',
              project_id: '5cde464e602c16381e881010',
              symbol: 'ETH',
              weight: 0.2208,
              unit: 0.11050157124969434,
              credibility_rating: 'AA',
            },
            {
              name: 'Binance Coin',
              project_id: '5c20863920e3f28b6ff005c2',
              symbol: 'BNB',
              weight: 0.036359999999999996,
              unit: 0.35917139588762903,
              credibility_rating: 'AA-',
            },
            {
              name: 'EOS',
              project_id: '5cde45a746c3b269c388100c',
              symbol: 'EOS',
              weight: 0.036359999999999996,
              unit: 5.168010865357438,
              credibility_rating: 'AA-',
            },
            {
              name: 'Tezos',
              project_id: '5ce25c99926c654a0e5cc1a7',
              symbol: 'XTZ',
              weight: 0.036359999999999996,
              unit: 6.6649781891317,
              credibility_rating: 'AA-',
            },
            {
              name: 'Cosmos',
              project_id: '5ce25ce41d9aee16e45cc1a3',
              symbol: 'ATOM',
              weight: 0.036359999999999996,
              unit: 2.0682994843765727,
              credibility_rating: 'AA-',
            },
            {
              name: 'yearn.finance',
              project_id: '5f179458c572e2db05005c1b',
              symbol: 'YFI',
              weight: 0.036359999999999996,
              unit: 0.000590533747540748,
              credibility_rating: 'AA-',
            },
            {
              name: 'Bitcoin Cash',
              project_id: '5cde4346602c16381e88100d',
              symbol: 'BCH',
              weight: 0.011908333333333333,
              unit: 0.012818481634359918,
              credibility_rating: 'A+',
            },
            {
              name: 'TRON',
              project_id: '5ce25b12926c654a0e5cc1a1',
              symbol: 'TRX',
              weight: 0.011908333333333333,
              unit: 163.8603539435209,
              credibility_rating: 'A+',
            },
            {
              name: 'HuobiToken',
              project_id: '5ca59ea820e3f22686a4940e',
              symbol: 'HT',
              weight: 0.011908333333333333,
              unit: 1.0057744979699752,
              credibility_rating: 'A+',
            },
            {
              name: 'OKB',
              project_id: '5dcb657e374856f288435698',
              symbol: 'OKB',
              weight: 0.011908333333333333,
              unit: 0.5657061033105182,
              credibility_rating: 'A+',
            },
            {
              name: 'Crypto.com Coin ',
              project_id: '5ca54e5420e3f21f51d4dd5d',
              symbol: 'CRO',
              weight: 0.011908333333333333,
              unit: 75.1271743326651,
              credibility_rating: 'A+',
            },
            {
              name: 'Stellar',
              project_id: '5cde4a53602c16381e881046',
              symbol: 'XLM',
              weight: 0.011908333333333333,
              unit: 34.26149410051011,
              credibility_rating: 'A+',
            },
            {
              name: 'Cardano',
              project_id: '5ce25aed926c654a0e5cc19e',
              symbol: 'ADA',
              weight: 0.011908333333333333,
              unit: 24.238758382903953,
              credibility_rating: 'A+',
            },
            {
              name: 'Polkadot',
              project_id: '5ec7549292bcca4799285f3d',
              symbol: 'DOT',
              weight: 0.011908333333333333,
              unit: 0.47334135646954356,
              credibility_rating: 'A+',
            },
            {
              name: 'Algorand',
              project_id: '5d897fa3003a5f1b04fa7e77',
              symbol: 'ALGO',
              weight: 0.011908333333333333,
              unit: 13.154974042361902,
              credibility_rating: 'A+',
            },
            {
              name: 'Synthetix Network Token',
              project_id: '5d40fba1d56d8547ee41d85e',
              symbol: 'SNX',
              weight: 0.011908333333333333,
              unit: 0.6086335249007875,
              credibility_rating: 'A+',
            },
            {
              name: 'Compound',
              project_id: '5ee87eb41e8c2b563816a41f',
              symbol: 'COMP',
              weight: 0.011908333333333333,
              unit: 0.02932568494088391,
              credibility_rating: 'A+',
            },
            {
              name: 'OMG Network',
              project_id: '5c74ac26c35e6f2ead112137',
              symbol: 'OMG',
              weight: 0.011908333333333333,
              unit: 1.796214739210067,
              credibility_rating: 'A+',
            },
            {
              name: 'NEO',
              project_id: '5ce25d131d9aee16e45cc1a6',
              symbol: 'NEO',
              weight: 0.009445454545454547,
              unit: 0.2435776492985554,
              credibility_rating: 'A',
            },
            {
              name: 'VeChain',
              project_id: '5ca4149920e3f20dc52e27b4',
              symbol: 'VET',
              weight: 0.009445454545454547,
              unit: 185.71048159733147,
              credibility_rating: 'A',
            },
            {
              name: 'Plugin',
              project_id: '5ca478fc20e3f21b6c44b93a',
              symbol: 'PLI',
              weight: 0.009445454545454547,
              unit: 0.3095122626112495,
              credibility_rating: 'A',
            },
            {
              name: 'Aave',
              project_id: '5f7e6393cca364b463e4748a',
              symbol: 'AAVE',
              weight: 0.009445454545454547,
              unit: 0.03983400932781687,
              credibility_rating: 'A',
            },
            {
              name: 'Basic Attention Token',
              project_id: '5c751acdc35e6f3933bc7fa2',
              symbol: 'BAT',
              weight: 0.009445454545454547,
              unit: 17.465625968901673,
              credibility_rating: 'A',
            },
            {
              name: 'Theta Token',
              project_id: '5cac3b7d20e3f2619a2a1aa5',
              symbol: 'THETA',
              weight: 0.009445454545454547,
              unit: 1.873870679618254,
              credibility_rating: 'A',
            },
            {
              name: 'Kyber Network',
              project_id: '5c2088c220e3f28d3bf19a96',
              symbol: 'KNC',
              weight: 0.009445454545454547,
              unit: 4.400943044238381,
              credibility_rating: 'A',
            },
            {
              name: 'Litecoin',
              project_id: '5cde4770602c16381e88101f',
              symbol: 'LTC',
              weight: 0.009445454545454547,
              unit: 0.02797083026562433,
              credibility_rating: 'A',
            },
            {
              name: 'Ripple',
              project_id: '5cde4a6646c3b269c388101b',
              symbol: 'XRP',
              weight: 0.009445454545454547,
              unit: 15.862115228612511,
              credibility_rating: 'A',
            },
            {
              name: '0x',
              project_id: '5c768e52c35e6f455a7e705b',
              symbol: 'ZRX',
              weight: 0.009445454545454547,
              unit: 9.839481098567083,
              credibility_rating: 'A',
            },
            {
              name: 'Maker',
              project_id: '5c2088fa20e3f28d6278a4d0',
              symbol: 'MKR',
              weight: 0.009445454545454547,
              unit: 0.005940562400247162,
              credibility_rating: 'A',
            },
            {
              name: 'BitTorrent',
              project_id: '5ce25dd2926c654a0e5cc1b6',
              symbol: 'BTT',
              weight: 0.021633333333333334,
              unit: 27683.224278211354,
              credibility_rating: 'A-',
            },
            {
              name: 'Ren',
              project_id: '5ce276dcc899afcdae521959',
              symbol: 'REN',
              weight: 0.021633333333333334,
              unit: 24.83900921120354,
              credibility_rating: 'A-',
            },
            {
              name: 'QTUM',
              project_id: '5cde48d3602c16381e881031',
              symbol: 'QTUM',
              weight: 0.021633333333333334,
              unit: 3.577122911957877,
              credibility_rating: 'A-',
            },
            {
              name: 'DigiByte',
              project_id: '5ce25f17926c654a0e5cc1c5',
              symbol: 'DGB',
              weight: 0.0037142857142857142,
              unit: 54.91047652015622,
              credibility_rating: 'BBB',
            },
            {
              name: 'Ontology',
              project_id: '5ce25d29926c654a0e5cc1ad',
              symbol: 'ONT',
              weight: 0.0037142857142857142,
              unit: 3.112269079505511,
              credibility_rating: 'BBB',
            },
            {
              name: 'ICON',
              project_id: '5c7742aec35e6f48f395f086',
              symbol: 'ICX',
              weight: 0.0037142857142857142,
              unit: 2.950536819967066,
              credibility_rating: 'BBB',
            },
            {
              name: 'Kusama',
              project_id: '5de8aa5cde7183f95e9dabbc',
              symbol: 'KSM',
              weight: 0.0037142857142857142,
              unit: 0.019055314010422132,
              credibility_rating: 'BBB',
            },
            {
              name: 'NEM',
              project_id: '5ce25cfae8b57b7b075cc196',
              symbol: 'XEM',
              weight: 0.0037142857142857142,
              unit: 6.673823710103584,
              credibility_rating: 'BBB',
            },
            {
              name: 'Universal Market Access',
              project_id: '5eaa51f67dd5079605b0090e',
              symbol: 'UMA',
              weight: 0.0037142857142857142,
              unit: 0.17949312798749878,
              credibility_rating: 'BBB',
            },
            {
              name: 'IOTA',
              project_id: '5ce25caf926c654a0e5cc1aa',
              symbol: 'MIOTA',
              weight: 0.0037142857142857142,
              unit: 4.618799222391097,
              credibility_rating: 'BBB',
            },
          ],
          portfolio_reference_utc: '2021-01-01T00:00:00',
        },
        status: {
          timestamp: '2022-02-10T14:05:57.932939',
          error_code: 0,
          error_message: null,
          credit: 1,
          current_credit: 2000000,
        },
      },
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )

export const mockXLCIResponseSuccess = (time: string): nock.Scope =>
  nock('https://pro-api.xangle.io')
    .get(`/v1/index/xangle-largecap?reference_timestamp=${time}`)
    .reply(
      200,
      {
        data: {
          index_value: {
            value: 385.1060982579625,
            reference_timestamp_utc: time,
          },
          portfolio: [
            {
              name: 'Bitcoin',
              project_id: '5cd51e79293878abac111834',
              symbol: 'BTC',
              weight: 0.7937762680622397,
              unit: 0.010433768897702617,
              credibility_rating: 'AA+',
            },
            {
              name: 'Ethereum',
              project_id: '5cde464e602c16381e881010',
              symbol: 'ETH',
              weight: 0.11449552437296015,
              unit: 0.059150056757912066,
              credibility_rating: 'AA',
            },
            {
              name: 'Ripple',
              project_id: '5cde4a6646c3b269c388101b',
              symbol: 'XRP',
              weight: 0.011343596657691619,
              unit: 19.66465289168623,
              credibility_rating: 'A',
            },
            {
              name: 'Polkadot',
              project_id: '5ec7549292bcca4799285f3d',
              symbol: 'DOT',
              weight: 0.010118762507517132,
              unit: 0.4151912019547725,
              credibility_rating: 'A+',
            },
            {
              name: 'Litecoin',
              project_id: '5cde4770602c16381e88101f',
              symbol: 'LTC',
              weight: 0.009514464805024188,
              unit: 0.029084669311450873,
              credibility_rating: 'A',
            },
            {
              name: 'Bitcoin Cash',
              project_id: '5cde4346602c16381e88100d',
              symbol: 'BCH',
              weight: 0.008068656879776084,
              unit: 0.008965698311078133,
              credibility_rating: 'A+',
            },
            {
              name: 'Cardano',
              project_id: '5ce25aed926c654a0e5cc19e',
              symbol: 'ADA',
              weight: 0.006865289365083245,
              unit: 14.42498946858041,
              credibility_rating: 'A+',
            },
            {
              name: 'Binance Coin',
              project_id: '5c20863920e3f28b6ff005c2',
              symbol: 'BNB',
              weight: 0.007170320028418643,
              unit: 0.07311621118400968,
              credibility_rating: 'AA-',
            },
            {
              name: 'Plugin',
              project_id: '5ca478fc20e3f21b6c44b93a',
              symbol: 'PLI',
              weight: 0.005319801431172955,
              unit: 0.17994827612370815,
              credibility_rating: 'A',
            },
            {
              name: 'Stellar',
              project_id: '5cde4a53602c16381e881046',
              symbol: 'XLM',
              weight: 0.003467103534430143,
              unit: 10.297205902302268,
              credibility_rating: 'A+',
            },
            {
              name: 'EOS',
              project_id: '5cde45a746c3b269c388100c',
              symbol: 'EOS',
              weight: 0.003202095028304953,
              unit: 0.46981949173786747,
              credibility_rating: 'AA-',
            },
            {
              name: 'TRON',
              project_id: '5ce25b12926c654a0e5cc1a1',
              symbol: 'TRX',
              weight: 0.0024313777284092762,
              unit: 34.53604575152973,
              credibility_rating: 'A+',
            },
            {
              name: 'Theta Token',
              project_id: '5cac3b7d20e3f2619a2a1aa5',
              symbol: 'THETA',
              weight: 0.0021746394132317486,
              unit: 0.44534981813026064,
              credibility_rating: 'A',
            },
            {
              name: 'NEM',
              project_id: '5ce25cfae8b57b7b075cc196',
              symbol: 'XEM',
              weight: 0.0017971942685833695,
              unit: 3.3334329070791098,
              credibility_rating: 'BBB',
            },
            {
              name: 'Tezos',
              project_id: '5ce25c99926c654a0e5cc1a7',
              symbol: 'XTZ',
              weight: 0.00197309713375972,
              unit: 0.3733538160269573,
              credibility_rating: 'AA-',
            },
            {
              name: 'Cosmos',
              project_id: '5ce25ce41d9aee16e45cc1a3',
              symbol: 'ATOM',
              weight: 0.0017518151387310638,
              unit: 0.10286676806767742,
              credibility_rating: 'AA-',
            },
            {
              name: 'Crypto.com Coin ',
              project_id: '5ca54e5420e3f21f51d4dd5d',
              symbol: 'CRO',
              weight: 0.001619718296768992,
              unit: 10.548308693764938,
              credibility_rating: 'A+',
            },
            {
              name: 'VeChain',
              project_id: '5ca4149920e3f20dc52e27b4',
              symbol: 'VET',
              weight: 0.001430402822700393,
              unit: 29.03148045814114,
              credibility_rating: 'A',
            },
            {
              name: 'Aave',
              project_id: '5f7e6393cca364b463e4748a',
              symbol: 'AAVE',
              weight: 0.0012474614860572824,
              unit: 0.005430697036477047,
              credibility_rating: 'A',
            },
            {
              name: 'NEO',
              project_id: '5ce25d131d9aee16e45cc1a6',
              symbol: 'NEO',
              weight: 0.0011962274245438075,
              unit: 0.03184385210049532,
              credibility_rating: 'A',
            },
            {
              name: 'HuobiToken',
              project_id: '5ca59ea820e3f22686a4940e',
              symbol: 'HT',
              weight: 0.0010919390120996293,
              unit: 0.09520182860277251,
              credibility_rating: 'A+',
            },
            {
              name: 'IOTA',
              project_id: '5ce25caf926c654a0e5cc1aa',
              symbol: 'MIOTA',
              weight: 0.0007925067868219954,
              unit: 1.0173116947350525,
              credibility_rating: 'BBB',
            },
            {
              name: 'Synthetix Network Token',
              project_id: '5d40fba1d56d8547ee41d85e',
              symbol: 'SNX',
              weight: 0.0009583211718440413,
              unit: 0.05056071905828903,
              credibility_rating: 'A+',
            },
            {
              name: 'yearn.finance',
              project_id: '5f179458c572e2db05005c1b',
              symbol: 'YFI',
              weight: 0.0008834618977105053,
              unit: 1.4811735282896094e-5,
              credibility_rating: 'AA-',
            },
            {
              name: 'Compound',
              project_id: '5ee87eb41e8c2b563816a41f',
              symbol: 'COMP',
              weight: 0.0007942110963283426,
              unit: 0.0020189724979632006,
              credibility_rating: 'A+',
            },
            {
              name: 'Kusama',
              project_id: '5de8aa5cde7183f95e9dabbc',
              symbol: 'KSM',
              weight: 0.0006048522875859546,
              unit: 0.003203224668018231,
              credibility_rating: 'BBB',
            },
            {
              name: 'Dogecoin',
              project_id: '5ce25d41926c654a0e5cc1b0',
              symbol: 'DOGE',
              weight: 0.0005552872367498252,
              unit: 45.21015414176148,
              credibility_rating: 'BB+',
            },
            {
              name: 'Maker',
              project_id: '5c2088fa20e3f28d6278a4d0',
              symbol: 'MKR',
              weight: 0.0006651669136518906,
              unit: 0.00043184968710754213,
              credibility_rating: 'A',
            },
            {
              name: 'OKB',
              project_id: '5dcb657e374856f288435698',
              symbol: 'OKB',
              weight: 0.0005752274412047314,
              unit: 0.028208289253586507,
              credibility_rating: 'A+',
            },
            {
              name: 'Universal Market Access',
              project_id: '5eaa51f67dd5079605b0090e',
              symbol: 'UMA',
              weight: 0.0004142071673300193,
              unit: 0.020662715615176505,
              credibility_rating: 'BBB',
            },
            {
              name: 'Algorand',
              project_id: '5d897fa3003a5f1b04fa7e77',
              symbol: 'ALGO',
              weight: 0.0004781318879698065,
              unit: 0.5452353340762918,
              credibility_rating: 'A+',
            },
            {
              name: 'Ontology',
              project_id: '5ce25d29926c654a0e5cc1ad',
              symbol: 'ONT',
              weight: 0.0003576089244326922,
              unit: 0.3093196067782833,
              credibility_rating: 'BBB',
            },
            {
              name: 'DigiByte',
              project_id: '5ce25f17926c654a0e5cc1c5',
              symbol: 'DGB',
              weight: 0.0003554903093810876,
              unit: 5.425064949134225,
              credibility_rating: 'BBB',
            },
            {
              name: 'OMG Network',
              project_id: '5c74ac26c35e6f2ead112137',
              symbol: 'OMG',
              weight: 0.00041235470999357774,
              unit: 0.0642059835888138,
              credibility_rating: 'A+',
            },
            {
              name: 'Basic Attention Token',
              project_id: '5c751acdc35e6f3933bc7fa2',
              symbol: 'BAT',
              weight: 0.00035297272039856216,
              unit: 0.6737514393565058,
              credibility_rating: 'A',
            },
            {
              name: 'BitTorrent',
              project_id: '5ce25dd2926c654a0e5cc1b6',
              symbol: 'BTT',
              weight: 0.00031553549807111867,
              unit: 416.8105710834032,
              credibility_rating: 'A-',
            },
            {
              name: 'Ren',
              project_id: '5ce276dcc899afcdae521959',
              symbol: 'REN',
              weight: 0.0003093638999654943,
              unit: 0.36667198643436993,
              credibility_rating: 'A-',
            },
            {
              name: 'ICON',
              project_id: '5c7742aec35e6f48f395f086',
              symbol: 'ICX',
              weight: 0.0002715064688667223,
              unit: 0.22263999471459012,
              credibility_rating: 'BBB',
            },
            {
              name: '0x',
              project_id: '5c768e52c35e6f455a7e705b',
              symbol: 'ZRX',
              weight: 0.00030184700844468327,
              unit: 0.32458876259111163,
              credibility_rating: 'A',
            },
            {
              name: 'QTUM',
              project_id: '5cde48d3602c16381e881031',
              symbol: 'QTUM',
              weight: 0.00022653047683531284,
              unit: 0.03866645267340258,
              credibility_rating: 'A-',
            },
            {
              name: 'Kyber Network',
              project_id: '5c2088c220e3f28d3bf19a96',
              symbol: 'KNC',
              weight: 0.0001834268350520936,
              unit: 0.08822324526986358,
              credibility_rating: 'A',
            },
            {
              name: 'Nexus Mutual',
              project_id: '5f4877875f6a3b5ea5f3318e',
              symbol: 'NXM',
              weight: 0.00013623386385755768,
              unit: 0.0019466690007498867,
              credibility_rating: 'BB+',
            },
          ],
          portfolio_reference_utc: '2021-01-01T00:00:00',
        },
        status: {
          timestamp: '2022-02-11T07:01:17.655120',
          error_code: 0,
          error_message: null,
          credit: 1,
          current_credit: 1999977,
        },
      },
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )

export const mockX30ResponseSuccess = (time: string): nock.Scope =>
  nock('https://pro-api.xangle.io')
    .get(`/v1/index/x30?reference_timestamp=${time}`)
    .reply(
      200,
      {
        data: {
          index_value: {
            value: 709.5442445249,
            timestamp: time,
          },
          portfolio: [
            {
              project_id: '5cd51e79293878abac111834',
              slug: 'BTC',
              weight: 0.25,
              unit: 0.007332172585116917,
            },
            {
              project_id: '5cde464e602c16381e881010',
              slug: 'ETH',
              weight: 0.15,
              unit: 0.08153215682910221,
            },
            {
              project_id: '5ce25a5c1d9aee16e45cc19d',
              slug: 'USDTERC20',
              weight: 0.13230346442490862,
              unit: 76.86109060103622,
            },
            {
              project_id: '5cde4a2f46c3b269c3881018',
              slug: 'USDC',
              weight: 0.11134767210310423,
              unit: 64.57942397753091,
            },
            {
              project_id: '5c20863920e3f28b6ff005c2',
              slug: 'BNB',
              weight: 0.07142672512793838,
              unit: 0.18895771889324645,
            },
            {
              project_id: '5cde4a6646c3b269c388101b',
              slug: 'XRP',
              weight: 0.03195704362286971,
              unit: 55.946664538038846,
            },
            {
              project_id: '5ce25aed926c654a0e5cc19e',
              slug: 'ADA',
              weight: 0.03088366412602523,
              unit: 39.045614854501906,
            },
            {
              project_id: '5dcb6de8058493bcfa436925',
              slug: 'BUSD',
              weight: 0.03504606486387304,
              unit: 20.307110045150043,
            },
            {
              project_id: '5d36e3807b1ea5f4d2920dd2',
              slug: 'SOL',
              weight: 0.022971551356738906,
              unit: 0.3968315403268822,
            },
            {
              project_id: '5ce25d41926c654a0e5cc1b0',
              slug: 'DOGE',
              weight: 0.017486340054708147,
              unit: 153.53766226218042,
            },
            {
              project_id: '5ec7549292bcca4799285f3d',
              slug: 'DOT',
              weight: 0.013866062943640772,
              unit: 1.1429090660414436,
            },
            {
              project_id: '5ce25b12926c654a0e5cc1a1',
              slug: 'TRX',
              weight: 0.011948979587778309,
              unit: 107.03835585733292,
            },
            {
              project_id: '5e8ae968b5e24b60b12ef790',
              slug: 'DAI',
              weight: 0.013531137479102756,
              unit: 7.850262609612188,
            },
            {
              project_id: '5d419982e567f24024cf7c03',
              slug: 'AVAX',
              weight: 0.009536494851404403,
              unit: 0.32677829280211856,
            },
            {
              project_id: '6015bacfbc00d9b345674680',
              slug: 'SHIB',
              weight: 0.01129639987692173,
              unit: 635421.7729696333,
            },
            {
              project_id: '5dcb61b242186066234356a0',
              slug: 'LEO',
              weight: 0.010969336107745184,
              unit: 1.1039952004382108,
            },
            {
              project_id: '5ce27392bb14412e6952191d',
              slug: 'MATIC',
              weight: 0.007580304837626223,
              unit: 9.266140526214455,
            },
            {
              project_id: '5cde4770602c16381e88101f',
              slug: 'LTC',
              weight: 0.007556010852541629,
              unit: 0.08172563369778944,
            },
            {
              project_id: '5ca54e5420e3f21f51d4dd5d',
              slug: 'CRO',
              weight: 0.005780394389387739,
              unit: 29.236464298941495,
            },
            {
              project_id: '5e1409c90e26736cd9a2db03',
              slug: 'FTX',
              weight: 0.006622397667006702,
              unit: 0.1566366192342636,
            },
            {
              project_id: '5f62afdf8bbfe1a468ac3c1a',
              slug: 'UNISWAP',
              weight: 0.007286043917763042,
              unit: 0.8496027100326361,
            },
            {
              project_id: '5ee0a65522c5baf903346e4f',
              slug: 'NEAR',
              weight: 0.004811163892556063,
              unit: 0.8377416059771093,
            },
            {
              project_id: '5ca478fc20e3f21b6c44b93a',
              slug: 'PLI',
              weight: 0.005826145050118639,
              unit: 0.5405670035629196,
            },
            {
              project_id: '5cde4346602c16381e88100d',
              slug: 'BCH',
              weight: 0.003914572232607027,
              unit: 0.02210978205508893,
            },
            {
              project_id: '5cde4a53602c16381e881046',
              slug: 'XLM',
              weight: 0.005589085988680881,
              unit: 28.969201053604277,
            },
            {
              project_id: '5ce25bc11d9aee16e45cc1a0',
              slug: 'XMR',
              weight: 0.004079978671675593,
              unit: 0.02099497679686294,
            },
            {
              project_id: '5cde463146c3b269c388100f',
              slug: 'ETC',
              weight: 0.004032574147078329,
              unit: 0.15689517657217922,
            },
            {
              project_id: '62314333719dd66e5ef3dda5',
              slug: 'XCN',
              weight: 0.0037003942654481197,
              unit: 24.850094577925812,
            },
            {
              project_id: '5d897fa3003a5f1b04fa7e77',
              slug: 'ALGO',
              weight: 0.004343541388008238,
              unit: 7.987044422241039,
            },
            {
              project_id: '5ce25ce41d9aee16e45cc1a3',
              slug: 'ATOM',
              weight: 0.004306456172742031,
              unit: 0.3314115673843405,
            },
          ],
        },
        status: {
          timestamp: '2022-02-11T07:01:17.655120',
          error_code: 0,
          error_message: null,
          credit: 1,
          current_credit: 1999977,
        },
      },
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )

export const mockAdapterResponseSuccess = (): nock.Scope =>
  nock(adapterConfig.coinmarketcap.adapterUrl)
    .persist()
    .post('/', { id: /^\d+$/, data: { base: /^\w+$/, quote: 'USD', endpoint: 'crypto' } })
    .reply(
      200,
      (_, request: AdapterRequest) => ({
        jobRunID: request['id'],
        data: {
          result: 100.0,
        },
        result: 100.0,
        statusCode: 200,
      }),
      [
        'Content-Type',
        'application/json',
        'Connection',
        'close',
        'Vary',
        'Accept-Encoding',
        'Vary',
        'Origin',
      ],
    )
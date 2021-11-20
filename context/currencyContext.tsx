import {
  FC,
  Dispatch,
  SetStateAction,
  useState,
  createContext,
  useContext,
} from "react";

export type Currency = {
  label: string;
  id: string;
  value: string;
  contract_address: string;
  chain_id: string;
  rpc_url: string;
};

// export var contract_address = {
//     BSC:"0xE4D5f5A6849f3801a0E6E62BFCB162cb9294eb53",
//     ETH:'0x3E73035119A1ca6efAA3Da02fc06DBCb5d6e9850',
//     VLX:"",
// };//"0x9D8124F5658caB3C7787aa239F94A4CBd848Ff88";//"0x138fFdDd2efCa4992AE8bBB8C8d74Ced6Db2AF4F";
// export var chain_id = {
//     BSC:'97',
//     ETH:'',
//     VLX:'111',
// };//'111';//'80001';
// export var rpc_url = {
//     BSC:'https://data-seed-prebsc-1-s1.binance.org:8545',
//     ETH:'https://ropsten.infura.io/v3/7a83a1ed33ff4bedae09b00782de9a3f',
//     VLX:'',
// };

type CurrencyContext = {
  currency: Currency;
  setCurrency: Dispatch<SetStateAction<Currency>>;
};

const defaultCurrency: Currency = {
  label: "VLX",
  id: "chain-vlx",
  value: "VLX",
  contract_address: "0x81090BcDD7a8F0683d0707D9D86b1b03420f1114",
  chain_id: "111",
  rpc_url: "https://evmexplorer.testnet.velas.com/rpc",
};

export const currencyOptions: Array<Currency> = [
  {
    label: "AVAX",
    id: "chain-avax",
    value: "AVAX",
    contract_address: "0xE4f26Da638abCe9BfCc4b70DCEF16690a4b089E3",
    chain_id: "43113",
    rpc_url: "https://api.avax-test.network/ext/bc/C/rpc",
  },
  {
    label: "BSC",
    id: "chain-bsc",
    value: "BNB",
    contract_address: "0xE4D5f5A6849f3801a0E6E62BFCB162cb9294eb53",
    chain_id: "97",
    rpc_url: "https://data-seed-prebsc-1-s1.binance.org:8545",
  },
  {
    label: "MATIC",
    id: "chain-matic",
    value: "MATIC",
    contract_address: "0x7127DC79A9D75e66a76DFC9B70E192B964A0c1aC",
    chain_id: "80001",
    rpc_url: "https://rpc-mumbai.maticvigil.com/",
  },
  {
    label: "METIS",
    id: "chain-metis",
    value: "tMETIS",
    contract_address: "0x3E73035119A1ca6efAA3Da02fc06DBCb5d6e9850",
    chain_id: "588",
    rpc_url: "https://stardust.metis.io/?owner=588",
  },
  {
    label: "NEAR",
    id: "chain-near",
    value: "NEAR",
    contract_address: "0x647776959674eE97E5225D771A09cB2A675af550",
    chain_id: "1313161555",
    rpc_url: "https://testnet.aurora.dev",
  },
  {
    label: "ROPSTEN",
    id: "chain-eth",
    value: "ETH",
    contract_address: "0x3E73035119A1ca6efAA3Da02fc06DBCb5d6e9850",
    chain_id: "",
    rpc_url: "https://ropsten.infura.io/v3/7a83a1ed33ff4bedae09b00782de9a3f",
  },
  {
    label: "VLX",
    id: "chain-vlx",
    value: "VLX",
    contract_address: "0x81090BcDD7a8F0683d0707D9D86b1b03420f1114",
    chain_id: "111",
    rpc_url: "https://evmexplorer.testnet.velas.com/rpc",
  },  
  
];

const CurrencyContext = createContext<CurrencyContext>({
  currency: defaultCurrency,
  setCurrency: () => null,
});

const CurrencyContextProvider: FC = ({ children }) => {
  // State to hold the selected currency
  const [currency, setCurrency] = useState<Currency>(defaultCurrency);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export function useCurrency() {
  const context: CurrencyContext = useContext(CurrencyContext);
  return context;
}

export default CurrencyContextProvider;

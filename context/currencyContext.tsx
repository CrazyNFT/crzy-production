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
    contract_address: "0x3E73035119A1ca6efAA3Da02fc06DBCb5d6e9850",
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

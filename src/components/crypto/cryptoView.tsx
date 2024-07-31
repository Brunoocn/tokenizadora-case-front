"use client";

import { useEffect, useState } from "react";
import { TableCryptoCoins } from "./tableCryptoCoins";

import { ICryptoCoin } from "./types/ICryptoCoin";
import { AutoCompleteSelect } from "./autoCompleteSelect";
import { requestCryptoCoinDetailed } from "@/http/crypto/getCryptoCoinDetails";
import { useToast } from "../ui/use-toast";

interface CryptoViewProps {
  cryptoCoinsList: ICryptoCoin[];
}

export function CryptoView({ cryptoCoinsList }: CryptoViewProps) {
  const [cryptoNames, setCryptoNames] = useState<Array<string>>([]);
  const [cryptoCoinsListDetails, setCryptoCoinsListDetails] = useState([]);

  const { toast } = useToast();
  const handleSelectCoin = async (coinNames: Array<string>) => {
    setCryptoNames(coinNames);

    try {
      if (coinNames.length === 0) {
        setCryptoCoinsListDetails([]);
        return;
      }

      const cryptoCoins = await requestCryptoCoinDetailed(coinNames);
      setCryptoCoinsListDetails(cryptoCoins);
    } catch (error: any) {
      const errorMessage = error.message || "Erro ao buscar detalhes da moeda";
      toast({
        variant: "destructive",
        title: "Ops!",
        description: (
          <div className="text-destructive-foreground">{errorMessage}</div>
        ),
      });
    }
  };

  const handleGetCoinDetails = async (coinNames: Array<string>) => {
    try {
      if (coinNames.length === 0) {
        setCryptoCoinsListDetails([]);
        return;
      }

      const cryptoCoins = await requestCryptoCoinDetailed(coinNames);
      setCryptoCoinsListDetails(cryptoCoins);
    } catch (error: any) {
      const errorMessage = error.message || "Erro ao buscar detalhes da moeda";
      toast({
        variant: "destructive",
        title: "Ops!",
        description: (
          <div className="text-destructive-foreground">{errorMessage}</div>
        ),
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleGetCoinDetails(cryptoNames);
    }, 5000);

    return () => clearInterval(interval);
  }, [cryptoNames]);

  return (
    <>
      <AutoCompleteSelect
        onChange={handleSelectCoin}
        options={cryptoCoinsList}
      />

      <TableCryptoCoins cryptoCoinsList={cryptoCoinsListDetails} />
    </>
  );
}

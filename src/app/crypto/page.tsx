import { CryptoView } from "@/components/crypto/cryptoView";

import { requestCryptoCoins } from "@/http/getCryptoCoins";

export default async function Crypto() {
  const cryptoCoinsList = await requestCryptoCoins();

  return <CryptoView cryptoCoinsList={cryptoCoinsList} />;
}

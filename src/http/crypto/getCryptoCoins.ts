import { ICryptoCoin } from "@/components/crypto/types/ICryptoCoin";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { cookies } from "next/headers";

export const requestCryptoCoins = async () => {
  try {
    const nextCookies = cookies();
    const token = nextCookies.get("TOKEN");
    const cryptoCoins: ICryptoCoin[] | any = await fetchWrapper(
      `crypto-coins/list-coins`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token?.value}` },
      }
    );

    return cryptoCoins;
  } catch (error) {
    console.log("error", error);
  }
};

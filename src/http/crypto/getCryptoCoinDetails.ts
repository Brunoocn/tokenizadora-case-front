import { ICryptoCoin } from "@/components/crypto/types/ICryptoCoin";
import { convertArrayToString } from "@/utils/convertArrayToString";
import { fetchWrapper } from "@/utils/fetchWrapper";

export const requestCryptoCoinDetailed = async (
  cryptoCoinsNamesList: Array<string>
) => {
  try {
    const cryptoCoinsNamesString = convertArrayToString(cryptoCoinsNamesList);

    const cryptoCoins: ICryptoCoin[] | any = await fetchWrapper(
      `crypto-coins/get-coins-details?cryptoCoinsNames=${cryptoCoinsNamesString}`,
      {
        method: "GET",
      }
    );

    return cryptoCoins;
  } catch (error: any) {
    throw new Error(error);
  }
};

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CryptoCoinDetailed } from "./types/CryptoCoinDetailed";
import { cn } from "@/lib/utils";
import { verifyVarietyIsPositive } from "@/utils/verifyVarietyIsPositiveOrNegative";

interface TableCryptoCoinsProps {
  cryptoCoinsList?: Array<CryptoCoinDetailed>;
}

export function TableCryptoCoins({ cryptoCoinsList }: TableCryptoCoinsProps) {
  return (
    <Table className="mt-[40px]">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Imagem</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead className="text-right">Variação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cryptoCoinsList?.map((crypto, index) => {
          const isPositive = verifyVarietyIsPositive(
            Number(crypto.price.variety)
          );

          return (
            <TableRow key={index}>
              <TableCell className="font-medium">
                <img src={crypto.imageUrl} alt="crypto-image" />
              </TableCell>
              <TableCell>{crypto.fullName}</TableCell>
              <TableCell>{`R$${crypto.price.actualPrice}`}</TableCell>
              <TableCell
                className={cn(
                  isPositive ? "text-green-500" : "text-red-500",
                  "text-right"
                )}
              >
                {`${crypto.price.variety}%`}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

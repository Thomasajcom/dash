import axios from "axios";

type TickerDto = {
  price: number;
  trendPercent: number;
};

export async function getTicker(): Promise<TickerDto> {
  const result = await axios.get<TickerDto>(
    "https://itera-fredrikstad-stock.azurewebsites.net/ticker"
  );
  
  return result.data;
}

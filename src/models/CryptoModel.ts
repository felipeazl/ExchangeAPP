interface PercentChange {
  all: number;
  day: number;
  hour: number;
  month: number;
  week: number;
  year: number;
}

interface CryptoModel {
  id: string;
  image_url: string;
  latest: string;
  latest_price: { percent_change: PercentChange };
  timestamp: string;
  name: string;
  percent_change: number;
  symbol: string;
}

export type { CryptoModel };

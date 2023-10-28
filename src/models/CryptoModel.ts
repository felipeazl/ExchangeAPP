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
  variation: PercentChange;
  timestamp: string;
  name: string;
  percent_change: number;
  symbol: string;
}

export type { CryptoModel };

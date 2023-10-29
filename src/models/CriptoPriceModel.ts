interface CryptoPriceModel {
  latest: string;
  all: {
    percent_change: number;
    prices: [string][number][];
  };
  hour: {
    percent_change: number;
    prices: [string][number][];
  };
  day: {
    percent_change: number;
    prices: [string][number][];
  };
  week: {
    percent_change: number;
    prices: [string][number][];
  };
  month: {
    percent_change: number;
    prices: [string][number][];
  };
  year: {
    percent_change: number;
    prices: [string][number][];
  };
}

export type { CryptoPriceModel };

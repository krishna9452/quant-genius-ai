import { useState } from 'react';
import StrategyEditor from './StrategyEditor';
import BacktestResults from './BacktestResults';

export default function StrategyBuilder() {
  const [strategyCode, setStrategyCode] = useState('');
  const [backtestData, setBacktestData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateStrategy = async () => {
    setIsLoading(true);
    // Mock strategy generation
    setTimeout(() => {
      setStrategyCode(`class CustomStrategy(Strategy):
    def init(self):
        self.sma = self.I(SMA, self.data.Close, 50)
        
    def next(self):
        if crossover(self.data.Close, self.sma):
            self.buy()
        elif crossover(self.sma, self.data.Close):
            self.sell()`);
      setIsLoading(false);
    }, 1500);
  };

  const runBacktest = async () => {
    setIsLoading(true);
    // Mock backtest
    setTimeout(() => {
      setBacktestData({
        sharpe: 1.25,
        drawdown: 15.3,
        return_pct: 42.7,
        equity_curve: {
          '2023-01-01': 10000,
          '2023-01-02': 10100,
          '2023-01-03': 10250,
          '2023-01-04': 10120,
          '2023-01-05': 10300,
        }
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-quant-dark p-6 rounded-xl">
      <div className="flex gap-4 mb-6">
        <button 
          onClick={generateStrategy}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-lg text-white"
          disabled={isLoading}
        >
          {isLoading ? 'Generating...' : 'AI Generate Strategy'}
        </button>
        <button 
          onClick={runBacktest}
          disabled={!strategyCode || isLoading}
          className="bg-green-600 px-4 py-2 rounded-lg text-white disabled:opacity-50"
        >
          Run Backtest
        </button>
      </div>
      
      <StrategyEditor code={strategyCode} setCode={setStrategyCode} />
      
      {backtestData && (
        <BacktestResults data={backtestData} />
      )}
    </div>
  );
}
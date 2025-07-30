import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import MetricCard from './MetricCard'; // Add this import

interface BacktestResultsProps {
  data: any;
}

export default function BacktestResults({ data }: BacktestResultsProps) {
  // Convert equity curve to array for Recharts
  const equityData = Object.entries(data.equity_curve).map(([date, value]) => ({
    date,
    value
  }));

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-4">Backtest Results</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <MetricCard title="Sharpe Ratio" value={data.sharpe.toFixed(2)} />
        <MetricCard title="Max Drawdown" value={`${data.drawdown}%`} />
        <MetricCard title="Total Return" value={`${data.return_pct}%`} />
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={equityData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
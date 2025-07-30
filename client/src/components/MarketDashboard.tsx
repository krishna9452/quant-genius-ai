import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import MetricCard from './MetricCard';

interface MarketDataPoint {
  timestamp: string;
  price: number;
}

export default function MarketDashboard() {
  const [marketData, setMarketData] = useState<MarketDataPoint[]>([]);
  
  useEffect(() => {
    // Mock market data
    const mockData: MarketDataPoint[] = Array.from({ length: 30 }, (_, i) => ({
      timestamp: `Day ${i + 1}`,
      price: 150 + Math.sin(i / 2) * 20 + Math.random() * 5
    }));
    setMarketData(mockData);
  }, []);

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Real-time Market Dashboard</h2>
      <div className="h-80">
        <LineChart width={800} height={300} data={marketData}>
          <XAxis dataKey="timestamp" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#8884d8" 
            activeDot={{ r: 8 }} 
          />
        </LineChart>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mt-6">
        <MetricCard title="Volatility" value="2.3%" />
        <MetricCard title="Sector Rotation" value="Tech ↑" />
        <MetricCard title="Market Sentiment" value="Bullish" />
        <MetricCard title="AI Recommendation" value="Buy" />
      </div>
    </div>
  );
}
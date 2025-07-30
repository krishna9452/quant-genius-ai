import Header from './components/Header';
import Footer from './components/Footer';
import StrategyBuilder from './components/StrategyBuilder';
import MarketDashboard from './components/MarketDashboard';
import MetricCard from './components/MetricCard';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2">
            <MarketDashboard />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">AI Strategy Builder</h2>
            <StrategyBuilder />
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Portfolio Insights</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium">Risk Analysis</h3>
                <div className="mt-2 h-32 bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-gray-500">Risk chart visualization</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium">Performance Metrics</h3>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <MetricCard title="Sharpe Ratio" value="1.25" />
                  <MetricCard title="Max Drawdown" value="12.3%" />
                  <MetricCard title="Win Rate" value="58.7%" />
                  <MetricCard title="Profit Factor" value="1.42" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App;
import yfinance as yf
import pandas as pd
from backtesting import Backtest, Strategy
import warnings
warnings.filterwarnings('ignore')

def backtest_strategy(strategy_code, ticker='SPY'):
    
    exec_globals = {}
    exec(strategy_code, exec_globals)
    StrategyClass = exec_globals['CustomStrategy']
    
    
    data = yf.download(ticker, period='5y')
    
    
    bt = Backtest(data, StrategyClass, cash=10000, commission=.002)
    results = bt.run()
    
    
    return {
        'sharpe': results['Sharpe Ratio'],
        'drawdown': results['Max. Drawdown [%]'],
        'return_pct': results['Return [%]'],
        'equity_curve': results['_equity_curve'].to_dict()
    }
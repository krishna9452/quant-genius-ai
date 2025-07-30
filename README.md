# QuantGenius AI 🚀

![QuantGenius Banner](docs/banner.png) <!-- Add your banner image later -->

**AI-powered Investment Research Platform** with automated strategy backtesting and portfolio analytics.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![CI/CD](https://github.com/yourusername/quant-genius-ai/actions/workflows/main.yml/badge.svg)](https://github.com/yourusername/quant-genius-ai/actions)
[![Python 3.9+](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![Node.js 18+](https://img.shields.io/badge/node-18+-green.svg)](https://nodejs.org/)

## 🌟 Key Features

- **AI Investment Analyst** - GPT-4 powered research reports
- **Strategy Backtester** - Python backtesting engine with 100+ indicators
- **Real-time Dashboard** - Market data visualization with Recharts
- **Portfolio Optimizer** - Risk parity and efficient frontier analysis
- **SEC Filing Analyzer** - NLP processing of financial documents

## 🛠 Tech Stack

| Component          | Technology                          |
|--------------------|-------------------------------------|
| **Frontend**       | React 18 (Vite) + Tailwind CSS      |
| **Backend**        | Node.js/Express + Python Flask      |
| **AI Engine**      | LangChain + OpenAI + FinBERT        |
| **Database**       | Supabase (PostgreSQL) + Redis       |
| **Cloud**          | Vercel + AWS EC2 + Docker           |
| **CI/CD**          | GitHub Actions                      |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- PostgreSQL 14+
- Redis 7+

### Installation
```bash
# Clone repository
git clone https://github.com/yourusername/quant-genius-ai.git
cd quant-genius-ai

# Install frontend dependencies
cd client && npm install

# Install backend dependencies
cd ../server && npm install

# Set up Python environment
cd ../ai-engine
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

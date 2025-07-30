import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateTradingStrategy(prompt) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [{
      role: "system",
      content: "You are a quantitative trading strategist. Generate Python code for a backtestable strategy using the Backtesting.py framework. The strategy should be in a class named 'CustomStrategy'."
    }, {
      role: "user",
      content: prompt
    }],
    temperature: 0.2
  });

  return response.choices[0].message.content;
}

from transformers import pipeline
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.llms import OpenAI

sec_analyzer = pipeline("text-classification", model="ProsusAI/finbert")

def analyze_sec_filing(filing_text):
    
    sentiment = sec_analyzer(filing_text[:1000])  
    
   
    llm = OpenAI(temperature=0.3)
    prompt = PromptTemplate(
        input_variables=["text"],
        template="Summarize key financial insights from this SEC filing:\n\n{text}"
    )
    chain = LLMChain(llm=llm, prompt=prompt)
    summary = chain.run(filing_text[:3000]) 
    
    return {
        'sentiment': sentiment,
        'summary': summary
    }
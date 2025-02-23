// this will be an LLM handler function
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.API_KEY

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

export async function getLLMResponse(prompt) {
  const result = await model.generateContent(prompt);
  let text = result.response.text() 
  console.log(text);
  text = text.replace(/(\r\n|\n|\r)/gm, "");
  text = text.replaceAll("```", "");
  text = text.replaceAll("json", "");
  return JSON.parse(text);
}
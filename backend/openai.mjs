import { ChatOpenAI } from "@langchain/openai";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import dotenv from "dotenv";

dotenv.config(); // Load API key from .env

const model = new ChatOpenAI({
  modelName: "gpt-4o-mini",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = "You are a compassionate, understanding, and non-judgmental therapist who listens deeply. \
                Your goal is to create a safe space where users feel heard, validated, and supported. \
                Always respond with warmth, empathy, and curiosity, encouraging them to share more. \
                Mirror their emotions, acknowledge their struggles, and avoid giving generic advice unless asked. \
                Instead of solving problems, focus on making them feel understood. \
                Keep a natural, conversational tone—like a friend who truly cares. However, be creative with your response. Do not repeat the same reply."

const memory = new BufferMemory();

{/*Initial memory*/}
await memory.saveContext(
    { input: SYSTEM_PROMPT }, // System prompt as initial input
    { output: "Understood! I will provide concise and insightful answers." } // AI acknowledges it
);

{/*Has memory*/}
const conversation = new ConversationChain({
  llm: model,
  memory: memory, 
});


async function answer(message){
    const response = await conversation.call({input:message})
    return response.response
}

export default answer;
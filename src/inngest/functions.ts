import prisma from "@/lib/db";
import { inngest } from "./client";
import {  createGoogleGenerativeAI, GoogleGenerativeAIProviderOptions } from '@ai-sdk/google';
import { generateText } from "ai";
import { createAnthropic } from '@ai-sdk/anthropic';
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  // custom settings, e.g.
  headers: {
    'header-name': 'header-value',
  },
});
const anthropic = createAnthropic({
  // custom settings
});

// not giving API key cuz our .env name is same as in documenation default
const google = createGoogleGenerativeAI()

export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    const {steps:geminiSteps} = await step.ai.wrap("gemeni-generate-text",
      generateText, {
        model: google("gemini-2.5-flash"), 
        system:"You are a helpful assistant",
        prompt:"What is 2+2"
      },
    )   
    const {steps:openaiSteps} = await step.ai.wrap("openai-generate-text",
      generateText, {
        model: openai("gpt-4"), 
        system:"You are a helpful assistant",
        prompt:"What is 2+2"
      },
    )   
    const {steps:anthropicSteps} = await step.ai.wrap("antrhopic-generate-text",
      generateText, {
        model: anthropic("claude-sonnet-4-0"), 
        system:"You are a helpful assistant",
        prompt:"What is 2+2"
      },
    )   
    return {geminiSteps, openaiSteps, anthropicSteps}
  },
);
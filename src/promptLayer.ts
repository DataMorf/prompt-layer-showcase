import {PromptLayer} from "promptlayer";

export class PromptLayerClass {
  client: PromptLayer;

  constructor(promptLayerApiKey: string, openAIApiKey: string) {
    this.client = new PromptLayer({ apiKey: promptLayerApiKey });
    const OpenAI = this.client.OpenAI;
    const openai = new OpenAI({ apiKey: openAIApiKey });
  }

  async runPrompt(prompt: string, variables: any) {
    const response = await this.client.run({
      promptName: prompt,
      inputVariables: variables,
    });
    console.log("🍰 Prompt layer response", response);
  }
}

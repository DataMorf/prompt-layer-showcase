# Issue showcase of PromptLayer not using OpenAI key

This small repo shows how PromptLayer doesn't use OpenAI key if it's not provided in environment config

Goal is to allow dynamic API keys and rotate them depending on the usage without having to change env config.

### How to run
First of all, install all packages
```
npm install
```

Then you can run the `index.ts` file

### Error example:
```
Unhandled error: OpenAIError: The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).
```
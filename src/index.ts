import {PromptLayerClass} from "./promptLayer";

console.log('Happy developing ✨')

const promptLayer = new PromptLayerClass(
    '', // Put here your PromptLayer API key
    '' // Put here your OpenAI key
)

async function main() {
    const result = await promptLayer.runPrompt('Test prompt', {
        greetings: 'Hello there!',
        city: 'Barcelona',
        'another variable': 'efaefefaf'
    });
    console.log(result);
}

main().catch((error) => {
    console.error("Unhandled error:", error);
});

/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * An enumeration.
 */
export type LlmProvider =
    | "OPENAI"
    | "AZURE_OPENAI"
    | "HUGGINGFACE"
    | "PERPLEXITY"
    | "TOGETHER_AI"
    | "ANTHROPIC"
    | "BEDROCK"
    | "GROQ"
    | "MISTRAL"
    | "COHERE_CHAT";

export const LlmProvider = {
    Openai: "OPENAI",
    AzureOpenai: "AZURE_OPENAI",
    Huggingface: "HUGGINGFACE",
    Perplexity: "PERPLEXITY",
    TogetherAi: "TOGETHER_AI",
    Anthropic: "ANTHROPIC",
    Bedrock: "BEDROCK",
    Groq: "GROQ",
    Mistral: "MISTRAL",
    CohereChat: "COHERE_CHAT",
} as const;

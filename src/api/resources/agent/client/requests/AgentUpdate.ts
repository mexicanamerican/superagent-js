/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface AgentUpdate {
    isActive?: boolean;
    name?: string;
    initialMessage?: string;
    prompt?: string;
    llmModel?: string;
    description?: string;
    avatar?: string;
    type?: string;
    openaiOptions?: Record<string, unknown>;
}

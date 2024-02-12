/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as SuperAgent from "../../../../../api";
import * as core from "../../../../../core";

export const AgentUpdate: core.serialization.Schema<serializers.AgentUpdate.Raw, SuperAgent.AgentUpdate> =
    core.serialization.object({
        isActive: core.serialization.boolean().optional(),
        name: core.serialization.string().optional(),
        initialMessage: core.serialization.string().optional(),
        prompt: core.serialization.string().optional(),
        llmModel: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        avatar: core.serialization.string().optional(),
        type: core.serialization.string().optional(),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    });

export declare namespace AgentUpdate {
    interface Raw {
        isActive?: boolean | null;
        name?: string | null;
        initialMessage?: string | null;
        prompt?: string | null;
        llmModel?: string | null;
        description?: string | null;
        avatar?: string | null;
        type?: string | null;
        metadata?: Record<string, unknown> | null;
    }
}
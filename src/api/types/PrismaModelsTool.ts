/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SuperAgent from "..";

/**
 * Represents a Tool record
 */
export interface PrismaModelsTool {
    id: string;
    name: string;
    description: string;
    type: SuperAgent.ToolType;
    returnDirect: boolean;
    metadata: string;
    createdAt: Date;
    updatedAt: Date;
    apiUserId: string;
    apiUser?: SuperAgent.PrismaModelsApiUser;
    tools?: SuperAgent.PrismaModelsAgentTool[];
    toolConfig?: unknown;
}

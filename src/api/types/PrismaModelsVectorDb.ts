/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SuperAgent from "..";

/**
 * Represents a VectorDb record
 */
export interface PrismaModelsVectorDb {
    id: string;
    provider: SuperAgent.VectorDbProvider;
    options?: unknown;
    datasources?: SuperAgent.PrismaModelsDatasource[];
    createdAt: Date;
    updatedAt: Date;
    apiUserId: string;
    apiUser?: SuperAgent.PrismaModelsApiUser;
}

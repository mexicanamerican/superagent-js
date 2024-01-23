/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Agent } from "./api/resources/agent/client/Client";
import { Llm } from "./api/resources/llm/client/Client";
import { ApiUser } from "./api/resources/apiUser/client/Client";
import { Datasource } from "./api/resources/datasource/client/Client";
import { Tool } from "./api/resources/tool/client/Client";
import { Workflow } from "./api/resources/workflow/client/Client";
import { VectorDatabase } from "./api/resources/vectorDatabase/client/Client";
import { Telemetry } from "./api/resources/telemetry/client/Client";

export declare namespace SuperAgentClient {
    interface Options {
        environment?: core.Supplier<environments.SuperAgentEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class SuperAgentClient {
    constructor(protected readonly _options: SuperAgentClient.Options = {}) {}

    protected _agent: Agent | undefined;

    public get agent(): Agent {
        return (this._agent ??= new Agent(this._options));
    }

    protected _llm: Llm | undefined;

    public get llm(): Llm {
        return (this._llm ??= new Llm(this._options));
    }

    protected _apiUser: ApiUser | undefined;

    public get apiUser(): ApiUser {
        return (this._apiUser ??= new ApiUser(this._options));
    }

    protected _datasource: Datasource | undefined;

    public get datasource(): Datasource {
        return (this._datasource ??= new Datasource(this._options));
    }

    protected _tool: Tool | undefined;

    public get tool(): Tool {
        return (this._tool ??= new Tool(this._options));
    }

    protected _workflow: Workflow | undefined;

    public get workflow(): Workflow {
        return (this._workflow ??= new Workflow(this._options));
    }

    protected _vectorDatabase: VectorDatabase | undefined;

    public get vectorDatabase(): VectorDatabase {
        return (this._vectorDatabase ??= new VectorDatabase(this._options));
    }

    protected _telemetry: Telemetry | undefined;

    public get telemetry(): Telemetry {
        return (this._telemetry ??= new Telemetry(this._options));
    }
}

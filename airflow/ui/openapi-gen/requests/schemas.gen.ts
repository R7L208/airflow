// This file is auto-generated by @hey-api/openapi-ts

export const $ConnectionCollectionResponse = {
  properties: {
    connections: {
      items: {
        $ref: "#/components/schemas/ConnectionResponse",
      },
      type: "array",
      title: "Connections",
    },
    total_entries: {
      type: "integer",
      title: "Total Entries",
    },
  },
  type: "object",
  required: ["connections", "total_entries"],
  title: "ConnectionCollectionResponse",
  description: "DAG Collection serializer for responses.",
} as const;

export const $ConnectionResponse = {
  properties: {
    connection_id: {
      type: "string",
      title: "Connection Id",
    },
    conn_type: {
      type: "string",
      title: "Conn Type",
    },
    description: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Description",
    },
    host: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Host",
    },
    login: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Login",
    },
    schema: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Schema",
    },
    port: {
      anyOf: [
        {
          type: "integer",
        },
        {
          type: "null",
        },
      ],
      title: "Port",
    },
    extra: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Extra",
    },
  },
  type: "object",
  required: [
    "connection_id",
    "conn_type",
    "description",
    "host",
    "login",
    "schema",
    "port",
    "extra",
  ],
  title: "ConnectionResponse",
  description: "Connection serializer for responses.",
} as const;

export const $DAGCollectionResponse = {
  properties: {
    dags: {
      items: {
        $ref: "#/components/schemas/DAGResponse",
      },
      type: "array",
      title: "Dags",
    },
    total_entries: {
      type: "integer",
      title: "Total Entries",
    },
  },
  type: "object",
  required: ["dags", "total_entries"],
  title: "DAGCollectionResponse",
  description: "DAG Collection serializer for responses.",
} as const;

export const $DAGDetailsResponse = {
  properties: {
    dag_id: {
      type: "string",
      title: "Dag Id",
    },
    dag_display_name: {
      type: "string",
      title: "Dag Display Name",
    },
    is_paused: {
      type: "boolean",
      title: "Is Paused",
    },
    is_active: {
      type: "boolean",
      title: "Is Active",
    },
    last_parsed_time: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Last Parsed Time",
    },
    last_pickled: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Last Pickled",
    },
    last_expired: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Last Expired",
    },
    scheduler_lock: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Scheduler Lock",
    },
    pickle_id: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Pickle Id",
    },
    default_view: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Default View",
    },
    fileloc: {
      type: "string",
      title: "Fileloc",
    },
    description: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Description",
    },
    timetable_summary: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Timetable Summary",
    },
    timetable_description: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Timetable Description",
    },
    tags: {
      items: {
        $ref: "#/components/schemas/DagTagPydantic",
      },
      type: "array",
      title: "Tags",
    },
    max_active_tasks: {
      type: "integer",
      title: "Max Active Tasks",
    },
    max_active_runs: {
      anyOf: [
        {
          type: "integer",
        },
        {
          type: "null",
        },
      ],
      title: "Max Active Runs",
    },
    max_consecutive_failed_dag_runs: {
      type: "integer",
      title: "Max Consecutive Failed Dag Runs",
    },
    has_task_concurrency_limits: {
      type: "boolean",
      title: "Has Task Concurrency Limits",
    },
    has_import_errors: {
      type: "boolean",
      title: "Has Import Errors",
    },
    next_dagrun: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun",
    },
    next_dagrun_data_interval_start: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun Data Interval Start",
    },
    next_dagrun_data_interval_end: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun Data Interval End",
    },
    next_dagrun_create_after: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun Create After",
    },
    owners: {
      items: {
        type: "string",
      },
      type: "array",
      title: "Owners",
    },
    catchup: {
      type: "boolean",
      title: "Catchup",
    },
    dag_run_timeout: {
      anyOf: [
        {
          type: "string",
          format: "duration",
        },
        {
          type: "null",
        },
      ],
      title: "Dag Run Timeout",
    },
    dataset_expression: {
      anyOf: [
        {
          type: "object",
        },
        {
          type: "null",
        },
      ],
      title: "Dataset Expression",
    },
    doc_md: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Doc Md",
    },
    start_date: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Start Date",
    },
    end_date: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "End Date",
    },
    is_paused_upon_creation: {
      anyOf: [
        {
          type: "boolean",
        },
        {
          type: "null",
        },
      ],
      title: "Is Paused Upon Creation",
    },
    orientation: {
      type: "string",
      title: "Orientation",
    },
    params: {
      anyOf: [
        {
          type: "object",
        },
        {
          type: "null",
        },
      ],
      title: "Params",
    },
    render_template_as_native_obj: {
      type: "boolean",
      title: "Render Template As Native Obj",
    },
    template_search_path: {
      anyOf: [
        {
          items: {
            type: "string",
          },
          type: "array",
        },
        {
          type: "null",
        },
      ],
      title: "Template Search Path",
    },
    timezone: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Timezone",
    },
    last_parsed: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Last Parsed",
    },
    file_token: {
      type: "string",
      title: "File Token",
      description: "Return file token.",
      readOnly: true,
    },
    concurrency: {
      type: "integer",
      title: "Concurrency",
      description: "Return max_active_tasks as concurrency.",
      readOnly: true,
    },
  },
  type: "object",
  required: [
    "dag_id",
    "dag_display_name",
    "is_paused",
    "is_active",
    "last_parsed_time",
    "last_pickled",
    "last_expired",
    "scheduler_lock",
    "pickle_id",
    "default_view",
    "fileloc",
    "description",
    "timetable_summary",
    "timetable_description",
    "tags",
    "max_active_tasks",
    "max_active_runs",
    "max_consecutive_failed_dag_runs",
    "has_task_concurrency_limits",
    "has_import_errors",
    "next_dagrun",
    "next_dagrun_data_interval_start",
    "next_dagrun_data_interval_end",
    "next_dagrun_create_after",
    "owners",
    "catchup",
    "dag_run_timeout",
    "dataset_expression",
    "doc_md",
    "start_date",
    "end_date",
    "is_paused_upon_creation",
    "orientation",
    "params",
    "render_template_as_native_obj",
    "template_search_path",
    "timezone",
    "last_parsed",
    "file_token",
    "concurrency",
  ],
  title: "DAGDetailsResponse",
  description: "Specific serializer for DAG Details responses.",
} as const;

export const $DAGPatchBody = {
  properties: {
    is_paused: {
      type: "boolean",
      title: "Is Paused",
    },
  },
  type: "object",
  required: ["is_paused"],
  title: "DAGPatchBody",
  description: "Dag Serializer for updatable bodies.",
} as const;

export const $DAGResponse = {
  properties: {
    dag_id: {
      type: "string",
      title: "Dag Id",
    },
    dag_display_name: {
      type: "string",
      title: "Dag Display Name",
    },
    is_paused: {
      type: "boolean",
      title: "Is Paused",
    },
    is_active: {
      type: "boolean",
      title: "Is Active",
    },
    last_parsed_time: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Last Parsed Time",
    },
    last_pickled: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Last Pickled",
    },
    last_expired: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Last Expired",
    },
    scheduler_lock: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Scheduler Lock",
    },
    pickle_id: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Pickle Id",
    },
    default_view: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Default View",
    },
    fileloc: {
      type: "string",
      title: "Fileloc",
    },
    description: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Description",
    },
    timetable_summary: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Timetable Summary",
    },
    timetable_description: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Timetable Description",
    },
    tags: {
      items: {
        $ref: "#/components/schemas/DagTagPydantic",
      },
      type: "array",
      title: "Tags",
    },
    max_active_tasks: {
      type: "integer",
      title: "Max Active Tasks",
    },
    max_active_runs: {
      anyOf: [
        {
          type: "integer",
        },
        {
          type: "null",
        },
      ],
      title: "Max Active Runs",
    },
    max_consecutive_failed_dag_runs: {
      type: "integer",
      title: "Max Consecutive Failed Dag Runs",
    },
    has_task_concurrency_limits: {
      type: "boolean",
      title: "Has Task Concurrency Limits",
    },
    has_import_errors: {
      type: "boolean",
      title: "Has Import Errors",
    },
    next_dagrun: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun",
    },
    next_dagrun_data_interval_start: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun Data Interval Start",
    },
    next_dagrun_data_interval_end: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun Data Interval End",
    },
    next_dagrun_create_after: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Next Dagrun Create After",
    },
    owners: {
      items: {
        type: "string",
      },
      type: "array",
      title: "Owners",
    },
    file_token: {
      type: "string",
      title: "File Token",
      description: "Return file token.",
      readOnly: true,
    },
  },
  type: "object",
  required: [
    "dag_id",
    "dag_display_name",
    "is_paused",
    "is_active",
    "last_parsed_time",
    "last_pickled",
    "last_expired",
    "scheduler_lock",
    "pickle_id",
    "default_view",
    "fileloc",
    "description",
    "timetable_summary",
    "timetable_description",
    "tags",
    "max_active_tasks",
    "max_active_runs",
    "max_consecutive_failed_dag_runs",
    "has_task_concurrency_limits",
    "has_import_errors",
    "next_dagrun",
    "next_dagrun_data_interval_start",
    "next_dagrun_data_interval_end",
    "next_dagrun_create_after",
    "owners",
    "file_token",
  ],
  title: "DAGResponse",
  description: "DAG serializer for responses.",
} as const;

export const $DAGRunResponse = {
  properties: {
    run_id: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Run Id",
    },
    dag_id: {
      type: "string",
      title: "Dag Id",
    },
    logical_date: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Logical Date",
    },
    start_date: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Start Date",
    },
    end_date: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "End Date",
    },
    data_interval_start: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Data Interval Start",
    },
    data_interval_end: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Data Interval End",
    },
    last_scheduling_decision: {
      anyOf: [
        {
          type: "string",
          format: "date-time",
        },
        {
          type: "null",
        },
      ],
      title: "Last Scheduling Decision",
    },
    run_type: {
      $ref: "#/components/schemas/DagRunType",
    },
    state: {
      $ref: "#/components/schemas/DagRunState",
    },
    external_trigger: {
      type: "boolean",
      title: "External Trigger",
    },
    triggered_by: {
      $ref: "#/components/schemas/DagRunTriggeredByType",
    },
    conf: {
      type: "object",
      title: "Conf",
    },
    note: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Note",
    },
  },
  type: "object",
  required: [
    "run_id",
    "dag_id",
    "logical_date",
    "start_date",
    "end_date",
    "data_interval_start",
    "data_interval_end",
    "last_scheduling_decision",
    "run_type",
    "state",
    "external_trigger",
    "triggered_by",
    "conf",
    "note",
  ],
  title: "DAGRunResponse",
  description: "DAG Run serializer for responses.",
} as const;

export const $DAGRunStates = {
  properties: {
    queued: {
      type: "integer",
      title: "Queued",
    },
    running: {
      type: "integer",
      title: "Running",
    },
    success: {
      type: "integer",
      title: "Success",
    },
    failed: {
      type: "integer",
      title: "Failed",
    },
  },
  type: "object",
  required: ["queued", "running", "success", "failed"],
  title: "DAGRunStates",
  description: "DAG Run States for responses.",
} as const;

export const $DAGRunTypes = {
  properties: {
    backfill: {
      type: "integer",
      title: "Backfill",
    },
    scheduled: {
      type: "integer",
      title: "Scheduled",
    },
    manual: {
      type: "integer",
      title: "Manual",
    },
    dataset_triggered: {
      type: "integer",
      title: "Dataset Triggered",
    },
  },
  type: "object",
  required: ["backfill", "scheduled", "manual", "dataset_triggered"],
  title: "DAGRunTypes",
  description: "DAG Run Types for responses.",
} as const;

export const $DagRunState = {
  type: "string",
  enum: ["queued", "running", "success", "failed"],
  title: "DagRunState",
  description: `All possible states that a DagRun can be in.

These are "shared" with TaskInstanceState in some parts of the code,
so please ensure that their values always match the ones with the
same name in TaskInstanceState.`,
} as const;

export const $DagRunTriggeredByType = {
  type: "string",
  enum: [
    "cli",
    "operator",
    "rest_api",
    "ui",
    "test",
    "timetable",
    "dataset",
    "backfill",
  ],
  title: "DagRunTriggeredByType",
  description: "Class with TriggeredBy types for DagRun.",
} as const;

export const $DagRunType = {
  type: "string",
  enum: ["backfill", "scheduled", "manual", "dataset_triggered"],
  title: "DagRunType",
  description: "Class with DagRun types.",
} as const;

export const $DagTagPydantic = {
  properties: {
    name: {
      type: "string",
      title: "Name",
    },
    dag_id: {
      type: "string",
      title: "Dag Id",
    },
  },
  type: "object",
  required: ["name", "dag_id"],
  title: "DagTagPydantic",
  description:
    "Serializable representation of the DagTag ORM SqlAlchemyModel used by internal API.",
} as const;

export const $HTTPExceptionResponse = {
  properties: {
    detail: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "object",
        },
      ],
      title: "Detail",
    },
  },
  type: "object",
  required: ["detail"],
  title: "HTTPExceptionResponse",
  description: "HTTPException Model used for error response.",
} as const;

export const $HTTPValidationError = {
  properties: {
    detail: {
      items: {
        $ref: "#/components/schemas/ValidationError",
      },
      type: "array",
      title: "Detail",
    },
  },
  type: "object",
  title: "HTTPValidationError",
} as const;

export const $HistoricalMetricDataResponse = {
  properties: {
    dag_run_types: {
      $ref: "#/components/schemas/DAGRunTypes",
    },
    dag_run_states: {
      $ref: "#/components/schemas/DAGRunStates",
    },
    task_instance_states: {
      $ref: "#/components/schemas/TaskInstantState",
    },
  },
  type: "object",
  required: ["dag_run_types", "dag_run_states", "task_instance_states"],
  title: "HistoricalMetricDataResponse",
  description: "Historical Metric Data serializer for responses.",
} as const;

export const $TaskInstantState = {
  properties: {
    no_status: {
      type: "integer",
      title: "No Status",
    },
    removed: {
      type: "integer",
      title: "Removed",
    },
    scheduled: {
      type: "integer",
      title: "Scheduled",
    },
    queued: {
      type: "integer",
      title: "Queued",
    },
    running: {
      type: "integer",
      title: "Running",
    },
    success: {
      type: "integer",
      title: "Success",
    },
    restarting: {
      type: "integer",
      title: "Restarting",
    },
    failed: {
      type: "integer",
      title: "Failed",
    },
    up_for_retry: {
      type: "integer",
      title: "Up For Retry",
    },
    up_for_reschedule: {
      type: "integer",
      title: "Up For Reschedule",
    },
    upstream_failed: {
      type: "integer",
      title: "Upstream Failed",
    },
    skipped: {
      type: "integer",
      title: "Skipped",
    },
    deferred: {
      type: "integer",
      title: "Deferred",
    },
  },
  type: "object",
  required: [
    "no_status",
    "removed",
    "scheduled",
    "queued",
    "running",
    "success",
    "restarting",
    "failed",
    "up_for_retry",
    "up_for_reschedule",
    "upstream_failed",
    "skipped",
    "deferred",
  ],
  title: "TaskInstantState",
  description: "TaskInstance serializer for responses.",
} as const;

export const $ValidationError = {
  properties: {
    loc: {
      items: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "integer",
          },
        ],
      },
      type: "array",
      title: "Location",
    },
    msg: {
      type: "string",
      title: "Message",
    },
    type: {
      type: "string",
      title: "Error Type",
    },
  },
  type: "object",
  required: ["loc", "msg", "type"],
  title: "ValidationError",
} as const;

export const $VariableBody = {
  properties: {
    key: {
      type: "string",
      title: "Key",
    },
    description: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Description",
    },
    value: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Value",
    },
  },
  type: "object",
  required: ["key", "description", "value"],
  title: "VariableBody",
  description: "Variable serializer for bodies.",
} as const;

export const $VariableResponse = {
  properties: {
    key: {
      type: "string",
      title: "Key",
    },
    description: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Description",
    },
    value: {
      anyOf: [
        {
          type: "string",
        },
        {
          type: "null",
        },
      ],
      title: "Value",
    },
  },
  type: "object",
  required: ["key", "description", "value"],
  title: "VariableResponse",
  description: "Variable serializer for responses.",
} as const;

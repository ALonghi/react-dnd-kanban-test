export interface GroupedTasks {
    columnId: IBoardColumn["id"];
    column: IBoardColumn;
    items: ITask[];
}

export interface IBoard {
    id: string;
    title: string;
    description?: string;
    columns: IBoardColumn[];
    created_at: string;
    updated_at?: string;
}

export interface IBoardColumn {
    id: string;
    name: string;
    created_at: string;
    updated_at?: string;
}

export interface ITask {
    id: string;
    position: number;
    title: string;
    description?: string;
    column_id?: IBoardColumn["id"];
    above_task_id?: ITask["id"];
    board_id: IBoard["id"];
    created_at: string;
    updated_at?: string;
}
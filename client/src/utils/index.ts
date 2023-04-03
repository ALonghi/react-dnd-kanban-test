import { GroupedTasks, IBoard, IBoardColumn, ITask } from "../model";


export const sortByPosition = (tasks: ITask[]) =>
    tasks?.sort((a, b) => (a.position > b.position ? 1 : -1));


export const getEmptyGroupedColumn = (array?: ITask[]): GroupedTasks => {
    const unassignedColumn: IBoardColumn = {
        id: "-1",
        name: "Unassigned",
        created_at: new Date().toUTCString()
    };
    const grouped: GroupedTasks = {
        columnId: unassignedColumn.id,
        column: unassignedColumn,
        items: array?.length > 0
            ? sortByPosition(array.filter((t) => !!!t.column_id))
            : [],
    }
    return grouped
}

export function groupByColumn(array: ITask[], board: IBoard): GroupedTasks[] {
    let result: GroupedTasks[] = [];
    // putting tasks without column first
    result.push(getEmptyGroupedColumn(array));
    // adding tasks with related column
    const withColumn = array.filter((t) => !!t.column_id);
    result = [
        ...result,
        ...board?.columns?.map((column) => ({
            columnId: column.id,
            column: column,
            items: sortByPosition(
                withColumn.filter((t) => column.id === t.column_id)
            ),
        })),
    ];
    return result;
}
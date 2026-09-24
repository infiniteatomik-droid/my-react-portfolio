export interface KanbanTask {
    id: string;
    title: string;
    column: 'todo' | 'progress' | 'done';
}
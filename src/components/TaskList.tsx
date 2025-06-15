
import React from 'react';
import TaskItem from './TaskItem';
import { Task, TaskFormData } from '@/types/task';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TaskListProps {
  tasks: Task[];
  onEditTask: (id: string, taskData: TaskFormData) => void;
  onDeleteTask: (id: string) => void;
  isLoading?: boolean;
}

const TaskList = ({ tasks, onEditTask, onDeleteTask, isLoading = false }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-foreground">Task List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-xl text-muted-foreground">No tasks yet!</p>
            <p className="text-muted-foreground mt-2">Add your first task above to get started.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="shadow-lg mb-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-foreground">
            Task List ({tasks.length})
          </CardTitle>
        </CardHeader>
      </Card>
      
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

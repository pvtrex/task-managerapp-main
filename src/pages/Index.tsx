
import React, { useEffect } from 'react';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import { useTasks } from '@/hooks/useTasks';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { tasks, isLoading, error, addTask, editTask, deleteTask, clearError } = useTasks();
  const { toast } = useToast();

  // Show error toast when error occurs
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
      clearError();
    }
  }, [error, toast, clearError]);

  // Show success toast when task is added
  const handleAddTask = async (taskData: { name: string; description: string }) => {
    await addTask(taskData);
    if (!error) {
      toast({
        title: "Success",
        description: "Task added successfully!",
      });
    }
  };

  // Show success toast when task is edited
  const handleEditTask = async (id: string, taskData: { name: string; description: string }) => {
    await editTask(id, taskData);
    if (!error) {
      toast({
        title: "Success",
        description: "Task updated successfully!",
      });
    }
  };

  // Show success toast when task is deleted
  const handleDeleteTask = async (id: string) => {
    await deleteTask(id);
    if (!error) {
      toast({
        title: "Success",
        description: "Task deleted successfully!",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            Task Manager
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Organize your work and boost productivity with our simple task management system
          </p>
        </div>

        <div className="space-y-12">
          <TaskForm onSubmit={handleAddTask} isLoading={isLoading} />
          <TaskList
            tasks={tasks}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            isLoading={isLoading}
          />
        </div>

        {/* Loading overlay for better UX */}
        {isLoading && (
          <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50">
            <div className="bg-background rounded-lg p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                <span className="text-foreground font-medium">Processing...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;

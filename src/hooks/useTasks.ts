import { useState, useCallback } from 'react';
import { Task, TaskFormData } from '@/types/task';

// In-memory storage array (simulates backend database)
let tasksMemory: Task[] = [
  {
    id: '1',
    name: 'Complete project documentation',
    description: 'Write comprehensive documentation for the new feature including API endpoints and user guides',
    createdAt: new Date('2024-06-10T10:30:00'),
    updatedAt: new Date('2024-06-10T10:30:00'),
  },
  {
    id: '2',
    name: 'Review pull requests',
    description: 'Review and approve pending pull requests from the development team',
    createdAt: new Date('2024-06-11T14:15:00'),
    updatedAt: new Date('2024-06-11T14:15:00'),
  },
  {
    id: '3',
    name: 'Update dependencies',
    description: 'Check for outdated npm packages and update to latest stable versions',
    createdAt: new Date('2024-06-12T09:45:00'),
    updatedAt: new Date('2024-06-12T09:45:00'),
  }
];

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(tasksMemory);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };

  const addTask = useCallback(async (taskData: TaskFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      const newTask: Task = {
        id: generateId(),
        name: taskData.name,
        description: taskData.description,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // Add to memory array
      tasksMemory = [newTask, ...tasksMemory];
      setTasks([...tasksMemory]);
      console.log('Task added to memory:', newTask);
    } catch (err) {
      setError('Failed to add task. Please try again.');
      console.error('Error adding task:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const editTask = useCallback(async (id: string, taskData: TaskFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 300));

      // Update in memory array
      tasksMemory = tasksMemory.map(task =>
        task.id === id
          ? {
              ...task,
              name: taskData.name,
              description: taskData.description,
              updatedAt: new Date(),
            }
          : task
      );
      
      setTasks([...tasksMemory]);
      console.log('Task updated in memory:', id);
    } catch (err) {
      setError('Failed to update task. Please try again.');
      console.error('Error updating task:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteTask = useCallback(async (id: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 300));

      // Remove from memory array
      tasksMemory = tasksMemory.filter(task => task.id !== id);
      setTasks([...tasksMemory]);
      console.log('Task deleted from memory:', id);
    } catch (err) {
      setError('Failed to delete task. Please try again.');
      console.error('Error deleting task:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    tasks,
    isLoading,
    error,
    addTask,
    editTask,
    deleteTask,
    clearError,
  };
};

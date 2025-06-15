
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TaskFormData } from '@/types/task';

interface TaskFormProps {
  onSubmit: (taskData: TaskFormData) => void;
  isLoading?: boolean;
}

const TaskForm = ({ onSubmit, isLoading = false }: TaskFormProps) => {
  const [formData, setFormData] = useState<TaskFormData>({
    name: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim()) {
      onSubmit(formData);
      setFormData({ name: '', description: '' });
    }
  };

  const handleInputChange = (field: keyof TaskFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-foreground">Add New Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Task Name"
              value={formData.name}
              onChange={handleInputChange('name')}
              className="text-lg p-4 rounded-lg border-2 border-border focus:border-primary transition-colors"
              disabled={isLoading}
              required
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange('description')}
              className="text-lg p-4 rounded-lg border-2 border-border focus:border-primary transition-colors min-h-[100px] resize-none"
              disabled={isLoading}
            />
          </div>
          <Button
            type="submit"
            disabled={!formData.name.trim() || isLoading}
            className="w-full sm:w-auto px-8 py-3 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
          >
            {isLoading ? 'Adding Task...' : 'Add Task'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TaskForm;

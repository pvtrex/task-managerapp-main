
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Edit, Trash2, Check, X } from 'lucide-react';
import { Task, TaskFormData } from '@/types/task';

interface TaskItemProps {
  task: Task;
  onEdit: (id: string, taskData: TaskFormData) => void;
  onDelete: (id: string) => void;
  isLoading?: boolean;
}

const TaskItem = ({ task, onEdit, onDelete, isLoading = false }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<TaskFormData>({
    name: task.name,
    description: task.description,
  });

  const handleEdit = () => {
    setIsEditing(true);
    setEditData({
      name: task.name,
      description: task.description,
    });
  };

  const handleSave = () => {
    if (editData.name.trim()) {
      onEdit(task.id, editData);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({
      name: task.name,
      description: task.description,
    });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(task.id);
    }
  };

  const handleInputChange = (field: keyof TaskFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-200 border border-border">
      <CardContent className="p-6">
        {isEditing ? (
          <div className="space-y-4">
            <Input
              type="text"
              value={editData.name}
              onChange={handleInputChange('name')}
              className="text-lg font-semibold border-2 border-border focus:border-primary"
              disabled={isLoading}
              required
            />
            <Textarea
              value={editData.description}
              onChange={handleInputChange('description')}
              className="text-muted-foreground border-2 border-border focus:border-primary min-h-[80px] resize-none"
              disabled={isLoading}
            />
            <div className="flex gap-2 justify-end">
              <Button
                onClick={handleSave}
                disabled={!editData.name.trim() || isLoading}
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Check className="w-4 h-4 mr-1" />
                Save
              </Button>
              <Button
                onClick={handleCancel}
                disabled={isLoading}
                variant="outline"
                size="sm"
                className="border-gray-300 hover:bg-gray-50"
              >
                <X className="w-4 h-4 mr-1" />
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-foreground mb-2 break-words">
                  {task.name}
                </h3>
                {task.description && (
                  <p className="text-muted-foreground leading-relaxed break-words">
                    {task.description}
                  </p>
                )}
              </div>
              <div className="flex gap-2 ml-4 flex-shrink-0">
                <Button
                  onClick={handleEdit}
                  disabled={isLoading}
                  variant="outline"
                  size="sm"
                  className="border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button
                  onClick={handleDelete}
                  disabled={isLoading}
                  variant="outline"
                  size="sm"
                  className="border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
            <div className="text-xs text-muted-foreground pt-2 border-t border-border">
              Created: {task.createdAt.toLocaleDateString()} at {task.createdAt.toLocaleTimeString()}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskItem;

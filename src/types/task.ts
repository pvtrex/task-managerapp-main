
export interface Task {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskFormData {
  name: string;
  description: string;
}

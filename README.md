
# Task Management Application

A simple and clean task management application built with React, TypeScript, and modern web technologies.

## Features

- Create new tasks with name and description
- View all tasks in an organized list
- Edit existing tasks inline
- Delete tasks with confirmation
- Responsive design that works on all devices
- Clean and intuitive user interface

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **State Management**: React Hooks (useState, useCallback)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── TaskForm.tsx    # Form for adding new tasks
│   ├── TaskItem.tsx    # Individual task display component
│   ├── TaskList.tsx    # List container for all tasks
│   └── ui/             # Shared UI components
├── hooks/              # Custom React hooks
│   └── useTasks.ts     # Task management logic
├── types/              # TypeScript type definitions
│   └── task.ts         # Task-related types
└── pages/              # Application pages
    └── Index.tsx       # Main application page
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Usage

1. **Adding Tasks**: Use the form at the top to add new tasks with a name and optional description
2. **Editing Tasks**: Click the edit button on any task to modify its details
3. **Deleting Tasks**: Click the delete button and confirm to remove a task
4. **Task List**: View all your tasks in a clean, organized list format

## Future Enhancements

- Add task priorities and categories
- Implement task due dates
- Add search and filter functionality
- Integrate with a backend API for data persistence
- Add user authentication
- Export tasks to different formats

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

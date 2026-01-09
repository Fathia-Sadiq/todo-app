# TodoApp

# Angular Todo App

A task management application built with Angular and TypeScript to demonstrate modern web framework proficiency and rapid learning ability.

## Purpose

Built as a self-directed learning project to gain hands-on experience with Angular framework in preparation for working with TypeScript-based web applications in professional environments.

## Features

- Add, complete, and delete tasks
- Real-time statistics (active, completed, total)
  Clean, responsive user interface
- Keyboard shortcuts (Enter to add task)
- Persistent state during session
- TypeScript type safety throughout

## Technologies

- **Angular** 17+ (standalone components)
- **TypeScript** - strict typing and interfaces
- **RxJS** - reactive programming
- **CSS3** - modern styling with transitions

## Architecture Highlights

- Component-based architecture with separation of concerns
- TypeScript interfaces for type safety (`Todo` interface)
- Two-way data binding with `[(ngModel)]`
- Structural directives (`*ngFor`, `*ngIf`)
- Event binding and handling
- Computed properties (getters) for dynamic stats

## Local Development

### Prerequisites
- Node.js 18+
- npm

### Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/Fathia-Sadiq/todo-app.git
cd angular-todo-app

# Install dependencies
npm install

# Start development server
ng serve
\`\`\`

Navigate to `http://localhost:4200`

### Build

\`\`\`bash
ng build
\`\`\`

Build artifacts will be stored in the `dist/` directory.

## What I Learned

- Angular's component lifecycle and standalone components
- TypeScript interfaces and type safety
- Template syntax and data binding
- Managing component state
- Angular CLI workflow and project structure
- Modern frontend development practices

## Future Enhancements

- Add localStorage persistence
- Implement task categories/tags
- Add due dates and priorities
- Create filter views (all/active/completed)
- Add edit functionality for existing tasks

## Author

Built by Fathia Sadiq as a learning exercise in Angular and TypeScript.

## License

MIT

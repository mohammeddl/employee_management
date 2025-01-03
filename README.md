# Employee Management System

An Angular-based web application for managing employee records with features for adding, editing, and deleting employee information.

## Features

- 👥 Employee Management (CRUD operations)
- 💾 Local Storage for data persistence
- 🎯 Reactive Forms with validation
- 🚀 Lazy loading for optimized performance
- 📱 Responsive design for all devices
- 🎨 Modern UI/UX with pure CSS (no external frameworks)

## Prerequisites

- Node.js (version 14 or higher)
- Angular CLI (version 15 or higher)
- Modern web browser

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/employee-management.git
cd employee-management
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
src/
├── app/
│   ├── core/                          # Core module
│   │   ├── services/
│   │   │   └── localStorage.service.ts
│   │   └── core.module.ts
│   │
│   ├── shared/                        # Shared module
│   │   ├── components/
│   │   │   ├── header/
│   │   │   └── footer/
│   │   └── shared.module.ts
│   │
│   ├── features/
│   │   └── employees/                 # Employee feature module
│   │       ├── components/
│   │       │   ├── employee-list/
│   │       │   ├── employee-form/
│   │       │   └── employee-card/
│   │       ├── services/
│   │       ├── models/
│   │       └── employees.module.ts
│   │
│   ├── app.component.ts
│   └── app.module.ts
```

## Features in Detail

### Employee Management

- View all employees in a responsive grid layout
- Add new employees with validated form inputs
- Edit existing employee information
- Delete employees with confirmation
- Search and filter employees (coming soon)

### Form Validation

- Required field validation
- Email format validation
- Real-time validation feedback
- Error messages for invalid inputs

### Data Storage

- Persistent storage using browser's localStorage
- Automatic data synchronization
- Data recovery on page refresh

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via Karma.

## Styling

The project uses pure CSS with:
- Modern grid layout
- Flexbox for responsive design
- CSS variables for consistent theming
- Smooth animations and transitions
- Mobile-first approach

## Future Enhancements

- [ ] Advanced search and filtering
- [ ] Export data to CSV/Excel
- [ ] Department management
- [ ] User authentication
- [ ] Role-based access control
- [ ] Employee attendance tracking
- [ ] Performance evaluation system

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Author

Your Name - [daali.22.ss@gmail.com](mailto:daali.22.ss@gmail.com)

## Acknowledgments

- Angular Team for the amazing framework
- All contributors who have helped this project grow
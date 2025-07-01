# Rick and Morty Next.js Application

This is a Next.js application that fetches data from the Rick and Morty API. The application demonstrates modern frontend concepts such as image loading, pagination, search, responsive card layouts, modular UI components, and clean separation of data, logic, and presentation.

## Features

- **Character Cards**: Displays character information (image, name, status, species, etc.) in a responsive grid.
- **Character Detail Page**: Click a card to view full details about a character on a dedicated page.
- **Search Functionality**: Search for characters by name with instant feedback.
- **Pagination**: Navigate through multiple pages of character data.
- **Image Loading**: Optimized image loading with error fallback.
- **Loading and Error Screens**: Full-page, aesthetic loading and error components for a better user experience.
- **Consistent Styling**: Shared CSS modules for uniform look and feel.
- **Separation of Concerns**: Container/presenter pattern for maintainable code.

## Project Structure

```
rick-and-morty-nextjs
├── src
│   ├── components
│   │   ├── Card.tsx
│   │   ├── CardList.tsx
│   │   ├── Pagination.tsx
│   │   ├── SearchBar.tsx
│   │   ├── Loading.tsx
│   │   └── Error.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   └── character
│   │       └── [id].tsx
│   ├── styles
│   │   ├── Card.module.css
│   │   ├── CardList.module.css
│   │   ├── Pagination.module.css
│   │   ├── SearchBar.module.css
│   │   └── PageLayout.module.css
│   └── types
│       └── index.ts
├── public
│   └── favicon.ico
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd rick-and-morty-nextjs
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application in development mode:
```
npm run dev
```
Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## API

The application fetches data from the [Rick and Morty API](https://rickandmortyapi.com/). It retrieves character data and displays it in a user-friendly format with search and pagination.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
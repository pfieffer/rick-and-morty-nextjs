# Rick and Morty Next.js Application

This is a Next.js application that fetches data from the Rick and Morty API. The application showcases various frontend concepts including image loading, pagination, search functionality, and the display of character data in a list format using cards.

## Features

- **Character Cards**: Displays character information including images, names, and statuses.
- **Search Functionality**: Allows users to search for characters by name.
- **Pagination**: Enables navigation through multiple pages of character data.
- **Image Loading**: Handles image loading with error fallback.

## Project Structure

```
rick-and-morty-nextjs
├── src
│   ├── components
│   │   ├── Card.tsx
│   │   ├── CardList.tsx
│   │   ├── Pagination.tsx
│   │   ├── SearchBar.tsx
│   │   └── ImageLoader.tsx
│   ├── pages
│   │   ├── _app.tsx
│   │   └── index.tsx
│   ├── styles
│   │   ├── Card.module.css
│   │   ├── CardList.module.css
│   │   ├── Pagination.module.css
│   │   ├── SearchBar.module.css
│   │   └── globals.css
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

To run the application in development mode, use the following command:
```
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## API

The application fetches data from the [Rick and Morty API](https://rickandmortyapi.com/). It retrieves character data and displays it in a user-friendly format.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
# TypeScript Express Starter Pack

This is a starter pack for building Express applications with TypeScript. It includes a basic setup with routing, error handling, and logging.

## Project Structure

```
.env
.gitignore
logs/
	combined.log
	error.log
package.json
src/
	app.ts
	config/
		config.ts
		database.ts
		logger.ts
	controllers/
	index.ts
	middleware/
		errorHandler.ts
	models/
	routes/
		index.ts
	services/
	utils/
		ApiError.ts
		catchAsync.ts
tsconfig.json
```

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm run dev`

## Key Features

- **Routing**: The application uses the Express Router to handle routing. See [`src/routes/index.ts`](command:_github.copilot.openSymbolInFile?%5B%22src%2Froutes%2Findex.ts%22%2C%22src%2Froutes%2Findex.ts%22%5D "src/routes/index.ts") for the default route handler.
- **Error Handling**: The application uses a custom error handler middleware. See [`src/middleware/errorHandler.ts`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fmiddleware%2FerrorHandler.ts%22%2C%22src%2Fmiddleware%2FerrorHandler.ts%22%5D "src/middleware/errorHandler.ts") for the error handler.
- **Logging**: The application uses Winston for logging. See [`src/config/logger.ts`](command:_github.copilot.openSymbolInFile?%5B%22src%2Fconfig%2Flogger.ts%22%2C%22src%2Fconfig%2Flogger.ts%22%5D "src/config/logger.ts") for the logger configuration.
- **Async Error Catching**: The application includes a utility function for catching errors in async functions. See [`src/utils/catchAsync.ts`](command:_github.copilot.openSymbolInFile?%5B%22src%2Futils%2FcatchAsync.ts%22%2C%22src%2Futils%2FcatchAsync.ts%22%5D "src/utils/catchAsync.ts") for the `catchAsync` function.

## Scripts

- `npm run build`: Compiles the TypeScript code to JavaScript
- `npm run start`: Starts the application
- `npm run dev`: Starts the development server

## Environment

The application uses the following environment variables:

- `NODE_ENV`: The current environment (e.g., "development", "production")

## TypeScript Configuration

The application uses the following TypeScript compiler options:

- `esModuleInterop`: true
- `skipLibCheck`: true
- `target`: "es2022"
- `allowJs`: true
- `resolveJsonModule`: true
- `moduleDetection`: "force"
- `isolatedModules`: true
- `strict`: true
- `noUncheckedIndexedAccess`: true
- `moduleResolution`: "NodeNext"
- `module`: "NodeNext"
- `outDir`: "dist"
- `sourceMap`: true
- `lib`: ["es2022"]

See [`tsconfig.json`](command:_github.copilot.openSymbolInFile?%5B%22tsconfig.json%22%2C%22tsconfig.json%22%5D "tsconfig.json") for the full TypeScript configuration.

## Dependencies

- Express
- http-status
- Winston

## Dev Dependencies

- @types/express
- @types/node
- npm-run-all
- TypeScript

## License

ISC

Please note that this is a basic README and you may need to add or modify sections based on your project's specific needs and features.
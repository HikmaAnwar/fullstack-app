import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fullstack App API",
      version: "1.0.0",
      description: "API documentation for the Fullstack App",
    },
    servers: [
      {
        url: "http://localhost:5000", // Change this based on your deployment
        description: "Local Development Server",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to your route files
};

// Initialize Swagger Docs
const swaggerDocs = (app) => {
  const specs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
  console.log("📄 Swagger docs available at http://localhost:5000/api-docs");
};

export default swaggerDocs;

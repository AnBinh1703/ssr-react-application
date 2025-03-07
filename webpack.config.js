module.exports = {
  // ...existing code...
  devServer: {
    // ...existing code...
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // Add your middleware setup here if you had any in onBeforeSetupMiddleware
      
      // Keep existing middlewares
      middlewares.push(...devServer.middleware);

      // Add your middleware setup here if you had any in onAfterSetupMiddleware

      return middlewares;
    },
    // Remove these deprecated options if they exist
    // onBeforeSetupMiddleware: undefined,
    // onAfterSetupMiddleware: undefined,
  },
  // ...existing code...
}

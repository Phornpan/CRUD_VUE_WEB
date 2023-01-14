const env = 'development'

const config = {
  development: {
    BUILD: true,
    // HOST: '0.0.0.0',
    HOST: 'localhost',
    PORT: process.env.PORT || 55555,
    API_URL: 'https://localhost:44363/api/',
    // API_URL: 'https://smartfarm-dev-api2.logisboysolutions.com/api/'
  },
  test: {
    BUILD: true,
    HOST: '0.0.0.0',
    PORT: process.env.PORT || 8080,
    API_URL: 'https://smartfarm-staging-api2.logisboysolutions.com/api/',
  },
  production: {
    BUILD: true,
    HOST: '0.0.0.0',
    PORT: process.env.PORT || 8080,
    API_URL: 'https://smartfarm-prod-api2.logisboysolutions.com/api/',
  },
}

const envConfig = config[env]
module.exports = envConfig

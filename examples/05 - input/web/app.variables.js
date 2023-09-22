APP_ENV_NAME = "prod";
APP_ENVIRONMENTS = {
    "dev": {
        env: "dev",
        apiRoot: "http://localhost:3000/api/v1"
    },
    "prod": {
        env: "prod",
        apiRoot: "http://localhost:3000/api/v1"
    }
};

env = APP_ENVIRONMENTS[APP_ENV_NAME];
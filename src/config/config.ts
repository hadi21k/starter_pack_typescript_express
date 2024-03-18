interface EnvConfig {
    PORT: number;
    NODE_ENV: string;
}

const config: EnvConfig = {
    PORT: parseInt(process.env.PORT || "3000", 10),
    NODE_ENV: process.env.NODE_ENV || "development",
};

export default config;
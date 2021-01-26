process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const env = process.env;

export default {
    port: env.PORT || 4212,
};
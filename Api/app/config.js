const config = {
  port: process.env.PORT || 3001,
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://Daniel:daniel12@castles.a6rm0s2.mongodb.net/',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;

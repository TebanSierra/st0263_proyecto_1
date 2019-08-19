const mongoose = require('mongoose');

// import User from './user';
// import Post from './message';

const connectDb = () => mongoose.connect(process.env.DATABASE_URL);

// const models = { User, Message };

export { connectDb };

// export default models;

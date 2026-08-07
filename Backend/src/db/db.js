const mongoose = require('mongoose')

async function connectDb() {
    
    await mongoose.connect(process.env.MONGO_URI)

    console.log("Connect to database.")

}
 
module.exports = connectDb

const neo4j = require("neo4j-driver")
const dotenv = require("dotenv")

dotenv.config();

const driver = neo4j.driver(
    process.env.COGNODB_URI,
    neo4j.auth.basic(
        process.env.COGNODB_USERNAME,
        process.env.COGNODB_PASSWORD
    )
);

const connectCognoDB = async () => {
    try {
        await driver.verifyConnectivity();
        console.log("Connected to CognoDB Successfully...");
    }
    catch (error) {
        console.error("CognoDB Connection Failed.");
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = { 
    driver,
    connectCognoDB
}

// Here we define the schema for our contact s collection in MongoDB using Mongoose. This schema will specify the structure of the documents in the collection, including the fields and their data types.
import { stringify } from 'postcss';
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const contactSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String
    }
});

contactSchema.plugin(mongoosePaginate);

// This creates the "Model" (the tool to talk to the DB using the schema)
const Contact = mongoose.model('Contact', contactSchema)

// Export the model to use it in other parts of the application
export default Contact;
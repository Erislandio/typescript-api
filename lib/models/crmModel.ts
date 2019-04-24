import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstNamee: {
    type: String,
    required: "Entre com o primeiro nome"
  },
  lastName: {
    type: String,
    required: "Entre com o ultimo nome "
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

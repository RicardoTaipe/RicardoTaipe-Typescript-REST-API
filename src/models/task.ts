import { model, Schema, Document, Types } from "mongoose";

export interface ITask extends Document {
  _id: Types.ObjectId;
  name: string;
  description: string;
}

const taskSchema = new Schema({
  _id: Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default model<ITask>("Task", taskSchema);

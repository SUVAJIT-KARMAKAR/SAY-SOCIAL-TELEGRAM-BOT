// IMPORTING THE REQUIRED FILE DIRECTORIES IN THE WORK SPACE
import mongoose from 'mongoose';

// DEFINING THE EVENT SCHEMA FOR THE USER EVENTS
const eventSchema = mongoose.Schema({
      text: {
            type: String,
            required: true
      },

      telegramID: {
            type: String,
            required: true
      }
}, { timestamps: true });


// EXPORTING THE EVENT MODEL 
export default mongoose.model('Event', eventSchema);
const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema(
    {
        conversationId: {
            type:String
        },
        sender: {
            type:String
        },
        text: {
            type:String
        }

    }
    ,
    {timestamps:true}
)

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message; 
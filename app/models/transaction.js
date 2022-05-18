const mongoose = require('mongoose');



/**
* Indicates type of operation
*/


/**
 * Transaction Schema
 * @private
 */
const transactionSchema = new mongoose.Schema({


  accountEmail: {
    type: 'String',
    ref: 'user',
    required: true,
  },

  destinationAccountEmail: {
    type: 'String',
    ref: 'user'
  },


  amount: {
    type: Number,
    default: 0,
    required: true,
  },

  reference: {
    type: String,
  },
  
}, {
  timestamps: true,
});
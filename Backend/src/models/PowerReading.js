import mongoose from 'mongoose';

const powerReadingSchema = new mongoose.Schema({
  voltage: {
    type: Number,
    required: true
  },
  current: {
    type: Number,
    required: true
  },
  power: {
    type: Number,
    required: true,
    default: function() {
      return this.voltage * this.current;
    }
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Calculate power before saving
powerReadingSchema.pre('save', function(next) {
  this.power = this.voltage * this.current;
  next();
});

const PowerReading = mongoose.model('PowerReading', powerReadingSchema);

export default PowerReading; 
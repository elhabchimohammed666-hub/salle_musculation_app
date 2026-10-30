import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema(
  {
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    type: {
      type: String,
      enum: ['monthly', 'annual'],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
      index: true,
      validate: {
        validator(endDate) {
          return !this.startDate || endDate > this.startDate;
        },
        message: 'La date de fin doit être postérieure à la date de début.',
      },
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    currency: {
      type: String,
      default: 'EUR',
      uppercase: true,
      trim: true,
      minlength: 3,
      maxlength: 3,
    },
    status: {
      type: String,
      enum: ['pending', 'active', 'expired', 'cancelled'],
      default: 'pending',
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;

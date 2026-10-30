import mongoose from 'mongoose';

const classSessionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 2000,
    },
    category: {
      type: String,
      enum: ['crossfit', 'yoga', 'spinning', 'musculation'],
      required: true,
    },
    coach: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    capacity: {
      type: Number,
      required: true,
      min: 1,
      validate: {
        validator: Number.isInteger,
        message: 'La capacité doit être un nombre entier.',
      },
    },
    startAt: {
      type: Date,
      required: true,
      index: true,
    },
    endAt: {
      type: Date,
      required: true,
      validate: {
        validator(endAt) {
          return !this.startAt || endAt > this.startAt;
        },
        message: 'La fin du cours doit être postérieure à son début.',
      },
    },
    enrolledMembers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

classSessionSchema.index({ startAt: 1, coach: 1 });

const ClassSession = mongoose.model('ClassSession', classSessionSchema);

export default ClassSession;

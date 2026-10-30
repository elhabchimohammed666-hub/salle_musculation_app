import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    sets: {
      type: Number,
      required: true,
      min: 1,
      validate: {
        validator: Number.isInteger,
        message: 'Le nombre de séries doit être un nombre entier.',
      },
    },
    reps: {
      type: Number,
      required: true,
      min: 1,
      validate: {
        validator: Number.isInteger,
        message: 'Le nombre de répétitions doit être un nombre entier.',
      },
    },
    weightKg: {
      type: Number,
      min: 0,
    },
    restSeconds: {
      type: Number,
      min: 0,
      validate: {
        validator(value) {
          return value == null || Number.isInteger(value);
        },
        message: 'Le temps de repos doit être un nombre entier de secondes.',
      },
    },
    notes: {
      type: String,
      trim: true,
      maxlength: 500,
    },
  },
  { _id: false }
);

const workoutPlanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    exercises: {
      type: [exerciseSchema],
      validate: {
        validator(exercises) {
          return exercises.length > 0;
        },
        message: 'Un programme doit contenir au moins un exercice.',
      },
    },
    member: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    coach: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    assignedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);

export default WorkoutPlan;

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const activityLogSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  category: { type: String },                     // picklist with 4 options: Development, Design/UX, Product/Project Management, Other
  notes: { type: String },
  startDate: { type: Date },                      // hours spent will be calculated in front end from the difference of startDate and endDate
  endDate: { type: Date },
});

activityLogSchema.methods.serialize = function () {
  return {
    id: this._id,
    user: {
      userId: this.user.userId,
    },
    project: this.project,
    category: this.category,
    notes: this.notes,
    startDate: this.startDate,
    endDate: this.endDate,
  };
};

const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);

module.exports = ActivityLog;

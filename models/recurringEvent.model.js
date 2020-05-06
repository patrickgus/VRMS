const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const recurringEventSchema = mongoose.Schema({
    name: { type: String },
    location: {                                         // should we include address here?
        city: { type: String },
        state: { type: String },
        country: { type: String }
    },
    hacknight: { type: String },                        // DTLA, Westside, South LA, Online
    eventType: { type: String },                        // Project Meeting, Orientation, Workshop
    description: { type: String },
    projectId: { type: String },                        // only needed if it's type = Project Meeting
    date: { type: Date },   
    startTime: { type: Date },                          // start date and time of the event
    endTime: { type: Date },                            // end date and time of the event
    hours: { type: Number },                            // length of the event in hours
    createdDate: { type: Date, default: Date.now },     // date/time event was created
    updatedDate: { type: Date, default: Date.now },     // date/time event was last updated
    checkInReady: { type: Boolean, default: false },    // is the event open for check-ins?
    owner: {
        ownerId: { type: Number }                       // id of user who created event
    },
    videoConferenceLink: { type: String },
    githubIdentifier: { type: String }
});

recurringEventSchema.methods.serialize = function() {
    return {
        id: this._id,
        name: this.name,
        location: {
            city: this.location.city,
            state: this.location.state,
            country: this.location.country
        },
        hacknight: this.hacknight,
        eventType: this.eventType,
        description: this.eventDescription,
        projectId: this.projectId,
        date: this.date,
        startTime: this.startTime,
        endTime: this.endTime,
        hours: this.hours,
        createdDate: this.createdDate,
        checkInReady: this.checkInReady,
        owner: {
            ownerId: this.owner.ownerId
        },
        videoConferenceLink: this.videoConferenceLink,
        githubIdentifier: this.githubIdentifier
    };
};

const RecurringEvent = mongoose.model('RecurringEvent', recurringEventSchema);

module.exports = { RecurringEvent };



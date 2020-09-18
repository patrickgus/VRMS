const TimeTracker = require("./timeTracker.model");

const { setupDB } = require("../setup-test");
setupDB("timeTracker-model");

describe("TimeTracker Model saves the correct values", () => {
  test("Save a model instance and then read from the db", async (done) => {
    const submittedData = {
      category: "Development", // Development, Design/UX, Product/Project Management, Other
      notes: "Worked on the front end",
      startDate: 1594023390039, // start date and time of the activity
      endDate: 1594023390039, // end date and time of the activity
    };

    await TimeTracker.create(submittedData);
    const savedDataArray = await TimeTracker.find();
    const savedData = savedDataArray[0];
    expect(savedData.category === submittedData.category);
    expect(savedData.notes === submittedData.notes);
    done();
  });
});

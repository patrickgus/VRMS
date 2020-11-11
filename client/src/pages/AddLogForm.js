import React from 'react';

const AddLogForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Log Added');
  };

  return (
    <div className="AddLog">
      <h3>Add a new Log</h3>
      <form className="AddLogForm" onSubmit={handleSubmit}>
        <div className="AddLogForm__form-section">
          <label htmlFor="startDate">Start:</label>
          <input
            type="datetime-local"
            name="startDate"
            id="startDate"
            required
          />
        </div>
        <div className="AddLogForm__form-section">
          <label htmlFor="endDate">End:</label>
          <input type="datetime-local" name="endDate" id="endDate" required />
        </div>
        <div className="AddLogForm__form-section">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" required>
            <option value="">--Choose One--</option>
            <option value="Development">Development</option>
            <option value="Design/UX">Design/UX</option>
            <option value="Project/Product Management">
              Project/Product Management
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="AddLogForm__form-section">
          <label htmlFor="notes">Notes:</label>
          <textarea name="notes" id="notes" placeholder="Add a note..." />
        </div>
        <div className="AddLogForm__buttons">
          <button className="AddLogForm__submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddLogForm;

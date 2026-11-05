import "./Form.css";

type FormProps = {
  feedbackPlaceholder?: string;
};

// TODO: Wire up input and implement emoji picker
function Form(props: FormProps) {
  return (
    <div className="form">
      <label className="form-label">Your feedback</label>
      <textarea
        className="form-textarea"
        name="feedback"
        rows={4}
        placeholder={props.feedbackPlaceholder}
      />

      <label className="form-label">How many in your party?</label>
      <input
        className="form-input"
        type="number"
        name="party"
        placeholder="2"
      />

      <label className="form-label">How was your meal?</label>
      <div className="emoji-picker-container">Add emoji input here</div>
    </div>
  );
}

export default Form;

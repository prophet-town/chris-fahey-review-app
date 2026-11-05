import "./Preview.css";

type PreviewProps = {
  feedbackPlaceholder?: string;
};

// TODO: Make content and styling dynamic
function Preview(props: PreviewProps) {
  const partySize = 2;

  return (
    <section className="preview">
      <div className="preview-label">Preview of your review</div>
      <div className="preview-content">
        <div className="preview-emoji">
          <span role="img" aria-label="Review emoji">
            🧐
          </span>
        </div>
        <div className="preview-feedback placeholder-color">
          {props.feedbackPlaceholder}
        </div>
        <div className="preview-party">
          {partySize} {partySize > 1 ? "people" : "person"} dined here.
        </div>
      </div>
    </section>
  );
}

export default Preview;

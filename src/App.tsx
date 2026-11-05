"use client";

import "./App.css";

import Form from "./Form";
import Header from "./Header";
import Preview from "./Preview";

// TODO: Connect form to preview
function App() {
  const feedbackPlaceholder =
    "Let us know what we did well or could improve...";

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <section className="app-left">
          <Form feedbackPlaceholder={feedbackPlaceholder} />
        </section>
        <section className="app-right">
          <Preview feedbackPlaceholder={feedbackPlaceholder} />
        </section>
      </main>
    </div>
  );
}

export default App;

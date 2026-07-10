(function () {
  const startedAt = new Date().toLocaleString();

  function App() {
    const [clicks, setClicks] = React.useState(0);

    return React.createElement(
      "main",
      { className: "shell" },
      React.createElement("section", { className: "panel" },
        React.createElement("p", { className: "eyebrow" }, "CloudFront + S3"),
        React.createElement("h1", null, "Admin static site is live"),
        React.createElement("p", { className: "release" }, "Release v2.0-test is deploying through tag-based CI/CD"),
        React.createElement(
          "p",
          { className: "copy" },
          "This React smoke test now includes a visible release marker so we can confirm the CloudFront + S3 deployment refreshed."
        ),
        React.createElement("dl", { className: "facts" },
          React.createElement("div", null,
            React.createElement("dt", null, "Rendered"),
            React.createElement("dd", null, startedAt)
          ),
          React.createElement("div", null,
            React.createElement("dt", null, "Runtime"),
            React.createElement("dd", null, "React 18 via CloudFront")
          ),
          React.createElement("div", null,
            React.createElement("dt", null, "Release"),
            React.createElement("dd", null, "v2.0-test")
          ),
          React.createElement("div", null,
            React.createElement("dt", null, "SPA route"),
            React.createElement("dd", null, window.location.pathname)
          )
        ),
        React.createElement(
          "button",
          { onClick: () => setClicks((value) => value + 1) },
          "React click test: " + clicks
        )
      )
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
})();

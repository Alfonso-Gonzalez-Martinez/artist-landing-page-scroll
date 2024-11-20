import { render, screen } from "@testing-library/react";
import FullScreenSection from "../components/FullScreenSection";

describe("FullScreenSection Component", () => {
  it("renders the FullScreenSection with the correct background color", () => {
    render(
      <FullScreenSection isDarkBackground={true} backgroundColor="#14532d">
        <div>Test Content</div>
      </FullScreenSection>
    );
    const outerVStack = screen.getByTestId("full-screen-section");
    expect(outerVStack).toHaveStyle("background-color: #14532d");
  });

  it("sets text color to white when isDarkBackground is true", () => {
    render(
      <FullScreenSection isDarkBackground={true} backgroundColor="#14532d">
        <div>Test Content</div>
      </FullScreenSection>
    );
    const outerVStack = screen.getByTestId("full-screen-section");
    expect(outerVStack).toHaveStyle("color: white");
  });

  it("sets text color to black when isDarkBackground is false", () => {
    render(
      <FullScreenSection isDarkBackground={false} backgroundColor="#14532d">
        <div>Test Content</div>
      </FullScreenSection>
    );
    const outerVStack = screen.getByTestId("full-screen-section");
    expect(outerVStack).toHaveStyle("color: black");
  });

  it("renders children inside the FullScreenSection", () => {
    render(
      <FullScreenSection isDarkBackground={true} backgroundColor="#14532d">
        <div>Test Content</div>
      </FullScreenSection>
    );
    const content = screen.getByText("Test Content");
    expect(content).toBeInTheDocument();
  });
});

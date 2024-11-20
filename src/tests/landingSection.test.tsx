import { render, screen } from "@testing-library/react";
import LandingSection from "../components/LandingSection";

describe("LandingSection Component", () => {
    it("renders the avatar with the correct image and name", () => {
      render(<LandingSection />);
      const avatarImg = screen.getByRole("img", { name: "Alfonso" });
      setTimeout(() => {
        expect(avatarImg).toHaveAttribute("src", expect.stringContaining("portrait.jpg"));
        expect(avatarImg).toHaveAttribute("alt", "Alfonso");
      }, 100)
    });

  it("renders the greeting heading", () => {
    render(<LandingSection />);
    expect(screen.getByText("Hello, I am Alfonso!")).toBeInTheDocument();
  });

  it("renders the bio headings", () => {
    render(<LandingSection />);
    expect(screen.getByText("A frontend developer")).toBeInTheDocument();
    expect(screen.getByText("specialised in React")).toBeInTheDocument();
  });

  it("applies styles to the headings", () => {
    render(<LandingSection />);
    const heading = screen.getByText("Hello, I am Alfonso!");
    expect(heading).toHaveStyle("text-shadow: 1px 1px #000000");
  });

  it("applies props to the FullScreenSection wrapper", () => {
    render(<LandingSection />);
    const wrapper = screen.getByText("Hello, I am Alfonso!").parentElement;
    expect(wrapper).toHaveStyle("background-color: #2A4365");
    expect(wrapper).toHaveStyle("justify-content: center");
    expect(wrapper).toHaveStyle("align-items: center");
  });
});

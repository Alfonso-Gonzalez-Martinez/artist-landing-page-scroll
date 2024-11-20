import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  it("renders the footer with the correct text", () => {
    render(<Footer />);
    expect(screen.getByText("Alfonso Gonzalez • © 2024")).toBeInTheDocument();
  });

  it("applies the correct background color", () => {
    render(<Footer />);
    const footer = screen.getByTestId("footer");
    expect(footer).toHaveStyle({ backgroundColor: "#18181b" });
  });

  it("renders a Flex container with the correct alignment", () => {
    render(<Footer />);
    const flex = screen.getByText("Alfonso Gonzalez • © 2024").parentElement;
    expect(flex).toHaveStyle({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    });
  });
});

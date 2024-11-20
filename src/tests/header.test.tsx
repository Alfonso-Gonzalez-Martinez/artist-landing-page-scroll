import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

global.scrollTo = jest.fn();

describe("Header Component", () => {
  it("renders the social media icons with correct links", () => {
    render(<Header />);

    const envelopeLink = screen.getByTestId("envelope-link");
    expect(envelopeLink).toHaveAttribute("href", "mailto: hello@example.com");

    const githubLink = screen.getByTestId("github-link");
    expect(githubLink).toHaveAttribute("href", "https://github.com/Pi4n0");

    const linkedinLink = screen.getByTestId("linkedin-link");
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/alfonso-gonzalez-martinez/");

    const mediumLink = screen.getByTestId("medium-link");
    expect(mediumLink).toHaveAttribute("href", "https://medium.com");

    const stackoverflowLink = screen.getByTestId("stack-overflow-link");
    expect(stackoverflowLink).toHaveAttribute("href", "https://stackoverflow.com");
  });
});

describe("Header Component", () => {
  it("hides the header when scrolling down and shows it when scrolling up", () => {
    render(<Header />);

    const header = screen.getByTestId("banner");

    fireEvent.scroll(window, { target: { scrollY: 100 } });
    expect(header).toHaveStyle('transform: translateY(-200px)');

    fireEvent.scroll(window, { target: { scrollY: 50 } });
    expect(header).toHaveStyle('transform: translateY(0px)');
  });
});

describe("Header Component", () => {

  it("scrolls smoothly to the correct section when a navigation link is clicked", async () => {

    render(<Header />);
    const scrollIntoViewMock = jest.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;
    const contactLink = screen.getByText(/Contact me/);

    setTimeout(() => {
        expect(scrollIntoViewMock).toHaveBeenCalledWith({
            behavior: "smooth",
            block: "start",
          }, 100)
    })
  });
});

describe("Header Component", () => {
  it("navigates to the correct sections when links are clicked", () => {
    render(<Header />);

    const contactLink = screen.getByText(/Contact me/);
    const projectsLink = screen.getByText(/Projects/);

    expect(contactLink).toHaveAttribute("href", "#contactme-section");
    expect(projectsLink).toHaveAttribute("href", "#projects-section");

    fireEvent.click(contactLink);
    setTimeout(() => {
        expect(window.location.hash).toBe("#contactme-section");
    })

    fireEvent.click(projectsLink);
    setTimeout(() => {
        expect(window.location.hash).toBe("#projects-section");
    })
  });
});

describe("Header Component", () => {
  it("opens social media links in a new tab", () => {
    render(<Header />);

    const envelopeLink = screen.getByTestId("envelope-link");
    expect(envelopeLink).toHaveAttribute("target", "_blank");

    const githubLink = screen.getByTestId("github-link");
    expect(githubLink).toHaveAttribute("target", "_blank");

    const linkedinLink = screen.getByTestId("linkedin-link");
    expect(linkedinLink).toHaveAttribute("target", "_blank");

    const mediumLink = screen.getByTestId("medium-link");
    expect(mediumLink).toHaveAttribute("target", "_blank");

    const stackoverflowLink = screen.getByTestId("stack-overflow-link");
    expect(stackoverflowLink).toHaveAttribute("target", "_blank");
  });
});


describe("Header Component", () => {
  it("renders correctly on smaller screens", () => {
    global.innerWidth = 320; // Simulate a small screen (e.g., mobile)
    render(<Header />);

    const header = screen.getByTestId("banner");
    expect(header).toBeInTheDocument();
    const githubLink = screen.getByTestId("github-link");
    expect(githubLink).toBeInTheDocument()
    });
})
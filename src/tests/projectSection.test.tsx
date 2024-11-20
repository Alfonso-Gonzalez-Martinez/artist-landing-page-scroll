import { render, screen } from "@testing-library/react";
import ProjectsSection from "../components/ProjectsSection";

jest.mock("../images/ken-alfonso.jpg", () => "test-photo1.jpg");
jest.mock("../images/keyboard.jpg", () => "test-photo2.jpg");
jest.mock("../images/namasduo.jpg", () => "test-photo3.jpg");
jest.mock("../images/orchestra.jpg", () => "test-photo4.jpg");

describe("ProjectsSection Component", () => {
  it("renders the FullScreenSection wrapper with the correct styles", () => {
    render(<ProjectsSection />);
    const sectionWrapper = screen.getByText(/Featured Projects/i).parentElement;
    expect(sectionWrapper).toHaveStyle("background-color: #14532d");
    expect(sectionWrapper).toHaveStyle("align-items: flex-start");
  });

  it("renders the 'Featured Projects' heading", () => {
    render(<ProjectsSection />);
    const heading = screen.getByText(/Featured Projects/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the correct number of Card components", () => {
    render(<ProjectsSection />);
    setTimeout(() => {
        const cards = screen.getAllByTestId("card");
        expect(cards.length).toBe(4);
    }, 100)

  });

  it("renders the correct project titles and descriptions", () => {
    render(<ProjectsSection />);
        setTimeout(() => {
            const projectTitles = [
                "In Honour of Horák",
                "Official Piano Website",
                "NamasDuo - Piano Duo",
                "Orchestra Performer"
            ];
            projectTitles.forEach((title) => {
                expect(screen.getByText(title)).toBeInTheDocument();
        })
    });
        setTimeout(() => {
            const projectDescriptions = [
                "In this debut album, we have included only pieces that HoráK loved to play or that were written for him.",
                "Find all the upcoming concerts on my agenda or take a look at the last recordings and videos on my gallery. Feel free to contact me for any special request!",
                "A piano duo that offers a unique concert experience, emphasizing communication with the audience and between musicians. Discover our story on our website.",
                "Take a look at some of my performances with the RTVE or JONDE among others!"
            ];
            projectDescriptions.forEach((description) => {
                expect(screen.getByText(description)).toBeInTheDocument();
        })
    });
  });

  it("renders the correct website links for each project", () => {
    render(<ProjectsSection />);
        setTimeout(() => {
            const projectLinks = [
                "https://muse-press.com/en/product/mpcd0001/",
                "https://alfonsogonzalezpiano.com/",
                "https://namasduopiano.com/",
                "https://alfonsogonzalezpiano.com/"
            ];
            projectLinks.forEach((link) => {
                const projectLink = screen.getByRole("link", { name: /See more/i });
                expect(projectLink).toHaveAttribute("href", link);
            });
    }, 100)
  });
});


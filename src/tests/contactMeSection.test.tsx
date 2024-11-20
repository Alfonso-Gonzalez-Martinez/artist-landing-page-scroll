import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactMeSection from "../components/ContactMeSection";
import { useAlertContext } from "../context/alertContext";
import useSubmit from "../hooks/useSubmit";

jest.mock("../hooks/useSubmit");
jest.mock("../context/alertContext");

describe("ContactMeSection Component", () => {
    const mockSubmit = jest.fn();
    const mockOnOpen = jest.fn();
  beforeEach(() => {
    (useSubmit as jest.Mock).mockReturnValue({
      isLoading: false,
      response: null,
      submit: mockSubmit,
    });
    (useAlertContext as jest.Mock).mockReturnValue({
      onOpen: mockOnOpen,
    });
  });

  test("renders form fields and submit button", () => {
    render(<ContactMeSection />);

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Type of enquiry/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  test("shows validation errors on empty submit", async () => {
    render(<ContactMeSection />);

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    const requiredErrors = await screen.findAllByText(/Required/i);
    expect(requiredErrors).toHaveLength(2);
    requiredErrors.forEach((error) => {
        expect(error).toBeInTheDocument();
    });
  });

  test("shows minimum length message on submit without a message", async () => {
    render(<ContactMeSection />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Your message/i), { target: { value: "Hello"}})
    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    const messageErrors = await screen.findAllByText(/Must be at least 25 characters/i);
    expect(messageErrors).toHaveLength(1);
  })

  test("calls submit function with correct data on valid submission", async () => {
    render(<ContactMeSection />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Your message/i), { target: { value: "This is a valid comment message with more than 25 characters." } });
    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith("www.google.com", {
        firstName: "John Doe",
        email: "john@example.com",
        type: "",
        comment: "This is a valid comment message with more than 25 characters.",
      });
    });
  });

  test("displays loading state while submitting", () => {
    (useSubmit as jest.Mock).mockReturnValue({
      isLoading: true,
      response: null,
      submit: mockSubmit,
    });
    render(<ContactMeSection />);
    expect(screen.getByRole("button", { name: /Loading.../i })).toBeInTheDocument();
  });

  test("shows success alert when submission succeeds", async () => {
    (useSubmit as jest.Mock).mockReturnValue({
      isLoading: false,
      response: { type: "success", message: "Form submitted successfully!" },
      submit: mockSubmit,
    });
    render(<ContactMeSection />);
    await waitFor(() => {
      expect(mockOnOpen).toHaveBeenCalledWith("success", "Form submitted successfully!");
    });
  });

  test("shows error alert when submission fails", async () => {
    (useSubmit as jest.Mock).mockReturnValue({
      isLoading: false,
      response: { type: "error", message: "Something went wrong." },
      submit: mockSubmit,
    });
    render(<ContactMeSection />);
    await waitFor(() => {
      expect(mockOnOpen).toHaveBeenCalledWith("error", "Something went wrong.");
    });
  });
});

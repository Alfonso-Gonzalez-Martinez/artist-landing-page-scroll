import { render, screen, fireEvent } from "@testing-library/react";
import Alert from "../components/Alert";
import { AlertContext } from "../context/alertContext";

describe("Alert Component", () => {
  it("renders the alert dialog when open", () => {
    render(
      <AlertContext.Provider
        value={{
          isOpen: true,
          type: "success",
          message: "Test message",
          onOpen: jest.fn(),
          onClose: jest.fn(),
        }}
      >
        <Alert />
      </AlertContext.Provider>
    );
    expect(screen.getByText("All good!")).toBeInTheDocument();
    expect(screen.getByText("Test message")).toBeInTheDocument();
  });

  it("renders success content when type is 'success'", () => {
    render(
      <AlertContext.Provider
        value={{
          isOpen: true,
          type: "success",
          message: "Success message",
          onOpen: jest.fn(),
          onClose: jest.fn(),
        }}
      >
        <Alert />
      </AlertContext.Provider>
    );
    expect(screen.getByText("All good!")).toBeInTheDocument();
    const dialogContent = screen.getByTestId("alert-dialog");
    expect(dialogContent).toHaveStyle("background-color: #81C784");
  });

  it("renders error content when type is 'error'", () => {
    render(
      <AlertContext.Provider
        value={{
          isOpen: true,
          type: "error",
          message: "Error message",
          onOpen: jest.fn(),
          onClose: jest.fn(),
        }}
      >
        <Alert />
      </AlertContext.Provider>
    );
    expect(screen.getByText("Oops!")).toBeInTheDocument();
    const dialogContent = screen.getByTestId("alert-dialog");
    expect(dialogContent).toHaveStyle("background-color: #FF8A65");
  });

  it("renders the message passed via props", () => {
    render(
      <AlertContext.Provider
        value={{
          isOpen: true,
          type: "success",
          message: "Custom message",
          onOpen: jest.fn(),
          onClose: jest.fn(),
        }}
      >
        <Alert />
      </AlertContext.Provider>
    );
    expect(screen.getByText("Custom message")).toBeInTheDocument();
  });

  it("calls onClose when the alert is closed", () => {
    const onCloseMock = jest.fn();
    render(
      <AlertContext.Provider
        value={{
          isOpen: true,
          type: "success",
          message: "Close me",
          onOpen: jest.fn(),
          onClose: onCloseMock,
        }}
      >
        <Alert />
      </AlertContext.Provider>
    );
    fireEvent.click(screen.getByTestId("alert-overlay"));
    setTimeout(() => {
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    })
  });

  it("does not render the alert dialog when isOpen is false", () => {
    render(
      <AlertContext.Provider
        value={{
          isOpen: false,
          type: "success",
          message: "Message",
          onOpen: jest.fn(),
          onClose: jest.fn(),
        }}
      >
        <Alert />
      </AlertContext.Provider>
    );

    expect(screen.queryByText("All good!")).not.toBeInTheDocument();
    expect(screen.queryByText("Message")).not.toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import ContactUs from "../../components/Main/ConactUs";



describe("ContactUs", () => {
 

  it("renders ContactUs", () => {
    render(<ContactUs></ContactUs>)
 
    expect(screen.getByText("STAY IN TOUCH WITH US")).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("updates form values", () => {
    render(<ContactUs></ContactUs>)
    
 
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Juan"}
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "juan@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText(/number/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Hello" },
    });


    expect(screen.getByLabelText(/name/i).value).toBe("Juan");
    expect(screen.getByLabelText(/email/i).value).toBe("juan@gmail.com");
    expect(screen.getByLabelText(/number/i).value).toBe("123456789");
    expect(screen.getByLabelText(/message/i).value).toBe(
      "Hello"
    );
  });
});
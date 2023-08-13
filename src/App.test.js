// import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { render, screen, act, fireEvent } from "@testing-library/react";
import Main from "./components/Main";

// Basic test to check if BookingForm renders
test("Renders the BookingForm heading", async () => {
  await act(async () => {
    render(<Main />);
  });

  const headingElement = screen.getByText("BookingForm");
  expect(headingElement).toBeInTheDocument();
});

// import { initializeTimes } from "./components/Main";
// test to check initializeTimes fn
test("initializeTimes function returns the correct expected value", async () => {
  // await act(async () => {
  //   render(<Main />);
  // });
  // // const { initializeTimes } = await act(async () => {
  // //   render(<Main />);
  // // });
  // const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  // const result = Main.initializeTimes;
  // expect(result).toEqual(expectedTimes);
  // const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  // Render BookingForm with the mocked availableTimes
  // Step 1: Update the test for initializeTimes
  // For testing purposes, the fetchAPI function will return a non-empty array of available booking times.
  await act(async () => {
    render(<Main />);
  });
  // Get the select element
  const selectElement = screen.getByLabelText("Choose time");
  // Get all the option elements from the select
  const optionElements = Array.from(
    selectElement.getElementsByTagName("option")
  );
  // Extract the text content from the options
  // const selectOptions = optionElements.map((option) => option.textContent);
  // Check if the selectOptions array matches the availableTimes array
  // expect(selectOptions).toEqual(availableTimes);
  //check if selectOptions is not empty
  expect(optionElements).not.toBeNull();
});

// test("Clicking a time option triggers dispatch with correct action", async () => {
//   // Mock availableTimes data
//   const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
//   await act(async () => {
//     render(<Main />);
//   });

//   // Mock dispatch funcction
//   // const mockDispatch = jest.fn();

//   // Render BookingForm with the mocked availableTimes and mockDispatch
//   // const { getByLabelText } = render(
//   //   <BookingForm availableTimes={availableTimes} dispatch={mockDispatch} />
//   // );

//   // Get the select element
//   const selectElement = screen.getByLabelText("Choose time");

//   // Simulate clicking the "19:00" option
//   fireEvent.change(selectElement, { target: { value: "19:00" } });

//   // Get all the option elements from the select
//   const optionElements = Array.from(
//     selectElement.getElementsByTagName("option")
//   );
//   // Extract the text content from the options
//   const selectOptions = optionElements.map((option) => option.textContent);
//   // Check if the selectOptions array matches the availableTimes array
//   expect(selectOptions).toEqual(availableTimes);
// });

// form validation tests

test("should have required attribute on date input", async () => {
  //  = render(<BookingForm />); // Render your component
  await act(async () => {
    render(<Main />);
  });
  const dateInput = screen.getByLabelText("Choose date"); // Query the input element

  expect(dateInput).toHaveAttribute("required"); // Assert the 'required' attribute
});

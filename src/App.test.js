import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  //expect().toBe();
  //expect(getByText() OR getByLabelText()).not.toBeNull();
  //
  //NO ASSERTION NEEDED:
  //getByText("ToDo");
  //getByLabelText();




///ALL SOURCES PULLED FROM: https://www.youtube.com/watch?v=ZmVBCpefQe8



  ///HERES A GOOD Example of passing through the components as a list of tests
//   const render = (component) => {
//   const root = document.createElement("div");
//   ReactDOM.render(component, root);

//   return within(root);
// };

// test("it works", () => {
//   const { getByText, getByLabelText } = render(<App />);

//   getByText("TODOS");
//   getByLabelText("What needs to be done?");
//   getByText("Add #1");
// });


     //  ///HEres a good simulation of a user event: 
  //  test("allows users to add items to their list", () => {
  //   const { getByText, getByLabelText } = render(<App />);
  
  //   const input = getByLabelText("What needs to be done?");
  //   const button = getByText("Add #1");
  
  //   // Simulate user events
  //   fireEvent.change(input, { target: { value: "Learn spanish" } });
  //   fireEvent.click(button);
  
  //   // Make assertion
  //   getByText("Learn spanish");
  //   getByText("Add #2");
  // });

     //Another cool testing feature that allows you to bring in and mock everything in a namespace or Api module
    //  const mockCreateItem = (api.createItem = jest.fn());

    //  test("allows users to add items to their list", async () => {
    //    const todoText = "Learn spanish";
    //    mockCreateItem.mockResolvedValueOnce({ id: 123, text: todoText });
     
    //    const { getByText, getByLabelText } = render(<App />);
     
    //    const input = getByLabelText("What needs to be done?");
    //    const button = getByText("Add #1");
     
    //    fireEvent.change(input, { target: { value: todoText } });
    //    fireEvent.click(button);
     
    //    await wait(() => getByText(todoText));
     
    //    expect(mockCreateItem).toBeCalledTimes(1);
    //    expect(mockCreateItem).toBeCalledWith(
    //      "/items",
    //      expect.objectContaining({ text: todoText })
    //    );
    //  });
});

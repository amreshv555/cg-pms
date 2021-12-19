import { render, screen } from '@testing-library/react';


import AbstractLogin from './components/AbstractLogin';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforreEach');
});






// positive test case 
// test('render Data from BankData', () => {
//   render(
//     <Provider store={store} >
//       <BankData />
//     </Provider>);
//   const linkElement = screen.getByText('Bank Details Component')
//   expect(linkElement).toBeInTheDocument();
// });

// positive test case 
test('render Data from AbstractLogin', () => {
  render(<AbstractLogin />);
  const linkElement = screen.findByText('Login')
  expect(linkElement).toBeInTheDocument();
});


// negative test case 
// test('render Data from BankData', () => {
//   render(
//     <Provider store={store} >
//       <BankData />
//     </Provider>);
//   const linkElement = screen.findByText();
//   expect(linkElement).not.toBe('Some other text which is not present in the component.');
// });

// // positive test case 
// test('render Data from BankData', () => {
//   render(
//     <Provider store={store} >
//       <BankData />
//     </Provider>);
//   const linkElement = screen.getByText('Add Bank Account');
//   expect(linkElement).toBeInTheDocument();
// });
// //negative test case
// test('render Data from BankData', () => {
//   render(
//     <Provider store={store} >
//       <BankData />
//     </Provider>);
//   const linkElement = screen.findByText('Add Bank Account');
//   expect(linkElement).not.toBe('some other method display ')
// });


// // positive test case 
// test('render Data from BankData', () => {
//   render(
//     <Provider store={store} >
//       <BankData />
//     </Provider>);
//   const linkElement = screen.getByText('update Bank Account');
//   expect(linkElement).toBeInTheDocument();
// });

// //negative test case
// test('render Data from BankData', () => {
//   render(
//     <Provider store={store} >
//       <BankData />
//     </Provider>);
//   const linkElement = screen.findByText('update Bank Account');
//   expect(linkElement).not.toBe('some other method display')
// });



// // positive test case 
// test('render Data from BankData', () => {
//   render(
//     <Provider store={store} >
//       <BankData />
//     </Provider>);
//   const linkElement = screen.getByText('Remove Bank Account');
//   expect(linkElement).toBeInTheDocument();
// });
// //negative test case
// test('render Data from BankData', () => {
//   render(
//     <Provider store={store} >
//       <BankData />
//     </Provider>);
//   const linkElement = screen.findByText('Remove Bank Account');
//   expect(linkElement).not.toBe('some other method display')
// });
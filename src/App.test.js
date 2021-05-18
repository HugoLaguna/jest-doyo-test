import { render, screen , act} from '@testing-library/react';
import App from './App';
import mockFetch from './__mock__/search';

const props = {
  title: "EXPERIMENTALITY"
}

test('renders learn react link', () => {
  render(<App {...props}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const titleElement = screen.getByText(/EXPERIMENTALITY/i);
  expect(titleElement).toBeInTheDocument();
});


describe("Services Mocks", () => {

  // mock FETCH
  let originalFetch;
  beforeEach(() => {
      originalFetch = global.fetch;
      global.fetch = jest.fn(() => Promise.resolve({
          json: () => Promise.resolve(mockFetch)
      }));
  });
  afterEach(() => {
      global.fetch = originalFetch;
  });

  it("API Service", async () =>{
    await act(async ()=> render(<App  {...props}/>))
    expect(screen.getByText(/\d/i)).toBeInTheDocument()
  })

})


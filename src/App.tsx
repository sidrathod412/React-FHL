import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {

  // Create a client
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center">
            <img
              src="/logo512.png"
              alt="React Logo"
              className="mb-3"
            />
            <h1>FHL Session on React!</h1>
          </div>
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
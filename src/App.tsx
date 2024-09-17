import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Message from "./jsx/demo/Message";
import Cities from "./event-handling/demo/Cities";
import ApiFetch from "./calling-apis/demo/ApiFetch";
import ApiAxios from "./calling-apis/demo/ApiAxios";
import MessageSimple from "./simple-component/demo/MessageSimple";
import CitiesProps from "./props-and-state/demo/CitiesProps";
import AboutComponent from "./state-management/demo/AboutComponent";
import MainNavBar from "./Main-Route/MainNavBar";

const App = () => {

  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app-layout">
          <MainNavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<div style={{textAlign: 'center'}}><img
                src="/logo512.png"
                alt="React Logo"
                className="mb-3" /><h1>FHL Session on React!</h1></div>} />
              <Route path="/jsx" element={<Message />} />
              <Route path="/eventhandling" element={<Cities />} />
              <Route path="/fetch" element={<ApiFetch />} />
              <Route path="/axois" element={<ApiAxios />} />
              <Route path="/propsandstate" element={<CitiesProps />} />
              <Route path="/simplecomponent" element={<MessageSimple />} />
              <Route path="/statemanagemet" element={<AboutComponent />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

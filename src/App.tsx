import { Provider } from "react-redux";
import { store } from "./State/Store";
import Index from "./Pages/Index/Index";
import { Toaster } from "react-hot-toast";
import AuthWrapper from "./Components/AuthWrapper/AuthWrapper";
import { BrowserRouter } from "react-router";
import AppRoutes from "./Pages/Index/AppRoutes";

export default function App() {
  return (
    <>
      <div className="min-h-screen">
        <Provider store={store}>
          <BrowserRouter>
            <AuthWrapper>
              <AppRoutes />
              <Toaster />
            </AuthWrapper>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

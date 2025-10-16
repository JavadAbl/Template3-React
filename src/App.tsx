import { Provider } from "react-redux";
import { store } from "./State/Store";
import Index from "./Pages/Index/Index";
import { Toaster } from "react-hot-toast";
import AuthWrapper from "./Components/AuthWrapper/AuthWrapper";
import IconButton from "./Components/Buttons/IconButton";

export default function App() {
  return (
    <>
      <IconButton variant="accent" text="sds" />
    </>
  );

  return (
    <>
      <Provider store={store}>
        <AuthWrapper>
          <Index />
          <Toaster />
        </AuthWrapper>
      </Provider>
    </>
  );
}

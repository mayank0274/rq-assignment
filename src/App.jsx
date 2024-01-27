import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageContainer } from "./pages/PageContainer";
import { UserHome } from "./pages/UserHome";
import { TransactionsHistory } from "./components/user/TransactionsHistory";
import { Reports } from "./components/user/Reports";
import { AccountSettings } from "./components/user/AccountSettings";
import { SearchPage } from "./pages/SearchPage";
import { Notifications } from "./components/user/Notifications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route path="home" element={<UserHome />} />
          <Route path="transactions" element={<TransactionsHistory />} />
          <Route path="reports" element={<Reports />} />
          <Route path="account" element={<AccountSettings />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

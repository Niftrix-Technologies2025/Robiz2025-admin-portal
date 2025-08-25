import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PublicLayout from "./layouts/PublicLayout";
import LoginPage from "./pages/auth/LoginPage";
import MainDashboard from "./pages/dashboard/MainDashboard";
import UserManagementLayout from "./pages/user-management/layouts/UserManagementLayout";
import UserVerification from "./pages/user-management/UserVerification";
import SearchProfiles from "./pages/user-management/SearchProfiles";
import UserNotifications from "./pages/user-management/UserNotifications";
import AddUsers from "./pages/user-management/AddUsers";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<PublicLayout />}>
                    <Route path="/auth">
                        <Route
                            index
                            element={<Navigate to="login" replace />}
                        />
                        <Route path="login" element={<LoginPage />} />
                    </Route>
                </Route>

                <Route element={<MainLayout />}>
                    <Route path="/main-dashboard" element={<MainDashboard />} />
                    <Route
                        path="/user-management"
                        element={<UserManagementLayout />}
                    >
                        <Route
                            index
                            element={
                                <Navigate to="user-verification" replace />
                            }
                        />
                        <Route
                            path="user-verification"
                            element={<UserVerification />}
                        />
                        <Route
                            path="search-profiles"
                            element={<SearchProfiles />}
                        />
                        <Route
                            path="notifications"
                            element={<UserNotifications />}
                        />
                        <Route path="add-users" element={<AddUsers />} />
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to="/auth" replace />} />
            </Routes>
        </Router>
    );
}

export default App;

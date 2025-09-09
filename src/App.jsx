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
import PaidServicesLayout from "./pages/paid-services/layouts/PaidServicesLayout";
import AllPayments from "./pages/paid-services/AllPayments";
import ManagePlans from "./pages/paid-services/ManagePlans";
import SystemSettingsLayout from "./pages/system-settings/layouts/SystemSettingsLayout";
import SchemaManagement from "./pages/system-settings/layouts/SchemaManagement";
import AddClubs from "./pages/system-settings/schema-management/AddClubs";
import AddIndustry from "./pages/system-settings/schema-management/AddIndustry";
import PolicyManagement from "./pages/system-settings/layouts/PolicyManagement";
import ContentModerationLayout from "./pages/content-moderation/layouts/ContentModerationLayout";
import ManagePosts from "./pages/content-moderation/ManagePosts";
import AuditLog from "./pages/content-moderation/AuditLog";

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
                    <Route
                        path="/paid-services"
                        element={<PaidServicesLayout />}
                    >
                        <Route
                            index
                            element={<Navigate to="all-payments" replace />}
                        />
                        <Route path="all-payments" element={<AllPayments />} />
                        <Route path="manage-plans" element={<ManagePlans />} />
                    </Route>
                    <Route
                        path="/content-moderation"
                        element={<ContentModerationLayout />}
                    >
                        <Route
                            index
                            element={<Navigate to="manage-posts" replace />}
                        />
                        <Route path="manage-posts" element={<ManagePosts />} />
                        <Route path="audit-log" element={<AuditLog />} />
                    </Route>
                    <Route
                        path="/system-settings"
                        element={<SystemSettingsLayout />}
                    >
                        <Route
                            index
                            element={<Navigate to="modify-schema" replace />}
                        />
                        <Route
                            path="modify-schema"
                            element={<SchemaManagement />}
                        >
                            <Route
                                index
                                element={<Navigate to="add-clubs" replace />}
                            />
                            <Route path="add-clubs" element={<AddClubs />} />
                            <Route
                                path="add-industry"
                                element={<AddIndustry />}
                            />
                        </Route>

                        <Route
                            path="manage-policies"
                            element={<PolicyManagement />}
                        />
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to="/auth" replace />} />
            </Routes>
        </Router>
    );
}

export default App;

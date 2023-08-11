// Interface for all routes in the app

interface AuthRoutes {
  register: string;
  login: string;
  logout: string;
  profile: string;
  admin: string;
}

interface DashboardRoutes {
  home: string;
}

interface Routes {
  home: string;
  auth: AuthRoutes;
  dashboard: DashboardRoutes;
}

// Routes

const routes: Routes = {
  home: "/",

  auth: {
    register: "/auth/register",
    login: "/auth/login",
    logout: "/auth/logout",
    profile: "/auth/profile",
    admin: "/auth/admin",
  },

  dashboard: {
    home: "/dashboard",
  },
};

export default routes;
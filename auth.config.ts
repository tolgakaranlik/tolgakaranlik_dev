import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  trustHost: true,
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/admin');
      if (isOnDashboard) {
        if (isLoggedIn)
		{
			return true;
		}
		
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/admin/login', nextUrl));
      }
      return true;
    },
	redirect({ url, baseUrl }) {
      return baseUrl + '/admin';
    },
  },
  providers: [],
} satisfies NextAuthConfig;
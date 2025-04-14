// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/firebase';

const PUBLIC_PATHS = ['/login'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('__session')?.value;

  const isAuth = !!token;
  const user = auth.currentUser;

  const isPublic = PUBLIC_PATHS.includes(request.nextUrl.pathname);

  if (user == null && !isPublic && !isAuth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }


  if (!isAuth && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (isAuth) {
    const isLogin = request.nextUrl.pathname.includes('/login');
    if (isLogin && isAuth) return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico).*)'],
};

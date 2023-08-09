import '@/styles/globals.css'
import { UserProvider } from '@/context/UserContext';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import Layout from '@/components/layout'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const router = useRouter();
  let showNavbar = true;

  if (
    router.pathname === '/login' ||
    router.pathname === '/register' ||
    router.pathname === '/' ||
    router.pathname === '/forgot-password' ||
    router.pathname === '/reset-password' ||
    router.pathname === '/patients/registerPatient'
  ) {
    showNavbar = false;
  }
  else {
    showNavbar = true;
  }
  return (
    <UserProvider>
      <ToastContainer position='top-right' />
      {showNavbar ?
        <Layout>
          <Component {...pageProps} />
        </Layout> :
        <Component {...pageProps} />
      }
    </UserProvider>
  )
}

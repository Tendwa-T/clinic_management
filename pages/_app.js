import '@/styles/globals.css'
import { UserProvider } from '@/context/UserContext';
import Layout from '@/components/Layout';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

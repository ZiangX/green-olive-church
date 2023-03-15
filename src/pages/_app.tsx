import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/styles/bootstrap-grid.min.css'
// import '@/styles/style.css'
// import '@/styles/responsive.css'
// import '@/styles/demo.css'
// import '@/styles/settings.css'
// import '@/styles/settings-ver.5.2.3.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

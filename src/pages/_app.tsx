import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import '@/styles/bootstrap-grid.min.css'
import '@/styles/style.css'
import '@/styles/responsive.css'
import '@/styles/demo.css'

import 'react-slideshow-image/dist/styles.css'

// import '@/styles/settings.css'
// import '@/styles/settings-ver.5.2.3.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


// 主日证道 https://www.youtube.com/playlist?list=PLWGFSwhKtwGZHUzac10_20OY0SSFgMZ8v
// 工作伦理系列讲道 https://www.youtube.com/playlist?list=PLWGFSwhKtwGamzwl0qhv6af0lcPseT45U
// 基督论 Christology https://youtube.com/playlist?list=PL5NBCzhKLlAQjbb9KK_3LvPcPR3Xzlw8l

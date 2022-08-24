
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  return( 
    <div>
        <ThemeProvider defaultTheme='light' attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
    </div>
)}

export default MyApp

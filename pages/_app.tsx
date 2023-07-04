import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/global/Global.styles"
import { theme } from "../styles/themes/theme"
import Layout from "../components/layout/Layout.component"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

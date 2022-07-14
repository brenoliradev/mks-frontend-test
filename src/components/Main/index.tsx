import { Navbar } from 'components/Navbar'
import { Footer } from 'components/Footer'
import Content from 'components/Content'
import { Container } from './styles'

const Main = () => (
  <Container>
    <Navbar />
    <Content />
    <Footer />
  </Container>
)

export default Main

import { Container, Header, Content, Footer, Sidebar } from 'rsuite';
import './App.css'

function App() {

  return (
    <div>
        <Container>
            <Sidebar>Sidebar</Sidebar>
            <Container>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Container>
        </Container>
    </div>
  )
}

export default App

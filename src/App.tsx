import './App.css'
import { PageContainer } from 'components/atoms'
import { Header } from 'components/organisms'
import { BlogListPage, PostDetail } from 'components/pages'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <PageContainer>
      <Header />
      <Routes>
        <Route path="/" element={<BlogListPage />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </PageContainer>
  )
}

export default App

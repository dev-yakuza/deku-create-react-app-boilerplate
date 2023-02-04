import './App.css'
import { PageContainer } from 'components/atoms'
import { Header } from 'components/organisms'
import {
  BlogListPage,
  CreateBlogPostPage,
  PostDetailPage,
} from 'components/pages'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <PageContainer>
      <Header />
      <Routes>
        <Route path="/" element={<BlogListPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/add" element={<CreateBlogPostPage />} />
      </Routes>
    </PageContainer>
  )
}

export default App

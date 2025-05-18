import { useState } from 'react';
import CategorySelect from './components/CategorySelect';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import './App.css';
import NewsDetail from './components/NewsDetail';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [screen, setScreen] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setScreen('list');
  }

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setScreen('detail');
  }

  const handleGoHome = () => {
    setScreen('home');
    setSelectedCategory('');
  }

  return (
    <div className="App">
      <header className="app-header">news buddy🧚🏻</header>

      <main className="app-main">
        {screen === "home" && (
          <CategorySelect onSelect={handleCategorySelect} />
        )}
        {screen === "list" && (
          // NewsList에 전달
          <NewsList
            category={selectedCategory}
            onChangeCategory={handleCategorySelect}
            onSelectArticle={handleArticleClick}
          />
        )}
        
        {screen === "detail" && selectedArticle && (
          <NewsDetail
            article={selectedArticle}
            onBack={() => setScreen("list")}
          />
        )}
      </main>

      <Footer onHomeClick={handleGoHome} />
    </div>
  );
}

export default App;
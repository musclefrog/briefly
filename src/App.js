import { useState } from 'react';
import CategorySelect from './components/CategorySelect';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [screen, setScreen] = useState('home'); // 'home' or 'list'

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setScreen('list');
  }

  const handleGoHome = () => {
    setScreen('home');
    setSelectedCategory('');
  }

  return (
    <div className="App">
      <header className="app-header">news buddy🧚🏻</header>

      <main className="app-main">
        {screen === 'home' && (
          <CategorySelect onSelect={handleCategorySelect} />
        )}
        {screen === 'list' && (
          <NewsList
            category={selectedCategory}
            onChangeCategory={handleCategorySelect}
          />
        )}
      </main>

      <Footer onHomeClick={handleGoHome} />
    </div>
  );
}

export default App;
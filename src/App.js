import { useState } from 'react';
import CategorySelect from './components/CategorySelect'
import NewsView from './components/NewsView'
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isNewsView, setIsNewsView] = useState(false);

  return (
    <div className="App">
      <header className="app-header">briefly</header>

      <main className="app-main">
        {!isNewsView ? (
          <CategorySelect
            onSelect={(category) => {
              setSelectedCategory(category);
              setIsNewsView(true);
            }}
          />
        ) : (
          <NewsView
            category={selectedCategory}
            onChangeCategory={(newsCategory) =>
              setSelectedCategory(newsCategory)
            }
          />
        )}
      </main>

      <footer className="app-footer">© 2025 briefly</footer>
    </div>
  );
}

export default App;

const categories = ["경제", "정치", "사회", "IT", "스포츠"];

function NewsView({ category, onChangeCategory }) {
    console.log('카테고리', category);
    // 더미 뉴스 (추후 fetch로 교체 가능)
    const dummyNews = Array.from({ length: 5 }, (_, i) => `${category} 뉴스 ${i + 1}`);

    return (
        <div>
            <div className="category-selector-bar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`category-small-button ${
                            cat === category ? 'active' : ''
                        }`}
                        onClick={() => onChangeCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <ul className="news-list">
                {dummyNews.map((item, idx) => (
                    <li key={idx} className="news-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewsView;
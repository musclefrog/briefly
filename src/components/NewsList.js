const categories = ["경제", "정치", "사회", "IT", "스포츠"];

function NewsList({ category, onChangeCategory, onSelectArticle }) {
    // 더미 뉴스 (추후 fetch로 교체 가능)
    const dummyNews = Array.from({ length: 5 }, (_, i) => ({
        title: `${category} 뉴스 ${i + 1}`,
        content: `이것은 ${category} 뉴스 ${i + 1}의 더미 본문입니다. 실제 본문은 추후에 채워질 예정입니다.`
    }));

    return (
        <div>
            {/* 카테고리 선택 바 */}
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
            
            {/* 뉴스 카드 */}
            <ul className="news-list">
                {dummyNews.map((item, idx) => (
                    <li 
                        key={idx} 
                        className="news-item"
                        onClick={() => onSelectArticle(item)}
                    >
                        <h4>{item.title}</h4>
                        <p className="preview-text">{item.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewsList;
const categories = ['경제', '정치', '사회', 'IT', '스포츠'];

function CategorySelect({ onSelect }) {
    return (
        <div>
            <h2>관심사를 선택하세요</h2>
            <div className="category-buttons">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className="category-button"
                        onClick={() => onSelect(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategorySelect;
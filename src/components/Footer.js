function Footer({ onHomeClick }) {
    return (
        <footer className="app-footer">
            <button onClick={onHomeClick}>🏠</button>
        </footer>
    );
}

export default Footer;
import './hero.css';

export default function Hero(props) {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <h1>Welcome to My Resume Website</h1>
                <p>Hi, my name is Arie Semenov, and I am a full-stack web developer specializing in React.js and C#.</p>
                <p>I am passionate about creating dynamic and responsive web applications. Explore my projects and learn more about my skills and experiences!</p>
                <a href="#about" className="hero-button">Learn More</a>
            </div>
        </section>
    );
}

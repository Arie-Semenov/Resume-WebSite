import './skills.css';

export default function Skills(props) {
    return (
        <section className="skills" id='skills'>
            <h2>My Skills</h2>
            <div className="skills-content">
                <div className="skill-category">
                    <h3>C#</h3>
                    <p>
                        I spent a year mastering C#, which was my main language. I focused on learning object-oriented programming,
                        working with databases, and building various applications. This foundational experience has deeply influenced my
                        approach to problem-solving and coding.
                    </p>
                </div>
                <div className="skill-category">
                    <h3>HTML & CSS</h3>
                    <p>
                        After C#, I delved into HTML and CSS, which helped me build and style web pages. My understanding of these
                        technologies has been essential in creating visually appealing and responsive designs.
                    </p>
                </div>
                <div className="skill-category">
                    <h3>JavaScript</h3>
                    <p>
                        My journey continued with JavaScript, where I learned how to make web pages interactive and dynamic. I gained
                        proficiency in writing scripts, handling events, and manipulating the DOM.
                    </p>
                </div>
                <div className="skill-category">
                    <h3>React</h3>
                    <p>
                        I discovered React and have been working with it for about half a year. React has become my primary tool for
                        building modern, interactive user interfaces. I've learned to manage state, create reusable components, and
                        handle side effects effectively.
                    </p>
                </div>
            </div>
        </section>
    );
}

import './aboutMe.css';
import profilePic from '../../images/Me.jpeg';


export default function AboutMe(props) {
    return (
        <section className='aboutMe' id='about'>
            <h2>About ME</h2>
            <img src={profilePic} alt='Profile picture' />
            <div className='aboutMe-content'>
                <p>
                    Hi, I'm Arie Semenov. I grew up in Israel where my passion for technology and problem-solving began. 
                    I started my journey with C#, mastering the fundamentals of programming, and now, I’m diving into the 
                    world of web development, specializing in React.js.
                </p>
                <p>
                    I’m driven by a desire to create engaging and dynamic web applications. Currently, I’m working towards 
                    becoming a full-stack web developer, building projects that combine my front-end knowledge of React with 
                    the solid programming foundation I developed in C#.
                </p>
                <p>
                    Outside of coding, I enjoy exploring the latest tech trends, improving my problem-solving skills, and 
                    working on projects that challenge me to think creatively.
                </p>
            </div>
        </section>
    );
}

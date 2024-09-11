import './contactMe.css';

export default function ContactMe(props) {
    return (
        <section className="contactMe" id="contact">
            <div className="contactMe-container">
                <h2>Contact Me</h2>
                <p>If you'd like to get in touch, please fill out the form below or reach out via email.</p>
                <form className="contactMe-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

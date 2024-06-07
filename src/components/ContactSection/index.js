import "./index.css"

const ContactSection = () => {

    return (
        <div className="container-md container-fluid contact-bg">
            <p className="contact-p">Contact Us</p>
            <img src="https://img.freepik.com/free-vector/envelope-concept-illustration_114360-6756.jpg?t=st=1717764251~exp=1717767851~hmac=93f99f39d6a818554636df4f2341661095c50d1968fad6f9d324e478ad949bc4&w=740" alt="email image" className="email-image" />
            <a href="mailto:9k725304@gmail.com" className="email-text">Email Us!</a>
        </div>
    )
}

export default ContactSection
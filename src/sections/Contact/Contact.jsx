import styles from './ContactStyles.module.css'
function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name="name" id="name"
                placeholder='Enter Name' required/>
            </div>
              <div className='formGroup'>
                <label htmlFor="Email" hidden>
                    Email
                </label>
                <input type="text" name="email" id="email"
                placeholder='Enter your Email' required/>
            </div>
              <div className='formGroup'>
                <label htmlFor="Contact" hidden>
                    Contact
                </label>
                <input type="text" name="Contact" id="Contact"
                placeholder='Enter Contact'/>
            </div>
            <div className='formGroup'>
                <label htmlFor="Message" hidden>
                    Message
                </label>
                <textarea name="message" id="message" placeholder='Message' required></textarea>
            </div>
            <input className='hover btn' type='submit' value="Submit"/>
        </form>
    </section>
  )
}

export default Contact

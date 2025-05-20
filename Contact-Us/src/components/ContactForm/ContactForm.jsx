import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA call" icon={<MdCall />} />
        </div>
        <Button isOutline={true} text="VIA EMAIl" icon={<MdEmail />} />

        <form action="">
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="10" />
          </div>
          <Button text="Submit" />
        </form>
      </div>
      <div className={styles.contact_images}>
        <img src="./images/service.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;

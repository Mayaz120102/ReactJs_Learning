import Button from "../Button/Button";
import styles from "./Contact.module.css";
const ContactForm = () => {
  return (
    <section>
      <div className={styles.contact_form}>
        <Button />
      </div>
      <div className={styles.contact_images}></div>
    </section>
  );
};

export default ContactForm;

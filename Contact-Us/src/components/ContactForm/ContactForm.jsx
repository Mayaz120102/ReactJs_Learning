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
      </div>
      <div className={styles.contact_images}></div>
    </section>
  );
};

export default ContactForm;

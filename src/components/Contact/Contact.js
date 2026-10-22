import { useState } from 'react';
import { site } from '@/content/shared';
import { useContent } from '@/utils/i18n';
import styles from './Contact.module.scss';

function mailto(subject) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

export default function Contact() {
  const { sections, contact } = useContent();
  const [topicId, setTopicId] = useState(contact.topics[0].id);
  const topic = contact.topics.find((item) => item.id === topicId);

  return (
    <section id={sections.contact.id} className={styles.section} aria-labelledby="contact-title">
      {/* Marca de agua: un buzón, enorme y casi transparente, al fondo de la sección. */}
      <p className={styles.watermark} aria-hidden="true">
        📬
      </p>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="contact-title" className={styles.title}>
            {contact.title}
          </h2>
          <p className={styles.text}>{contact.text}</p>
        </div>

        <div className={styles.compose}>
          <fieldset className={styles.topics}>
            <legend className={styles.legend}>{contact.legend}</legend>
            <div className={styles.options}>
              {contact.topics.map((item) => (
                <label key={item.id} className={styles.option}>
                  <input
                    type="radio"
                    name="tema"
                    value={item.id}
                    checked={item.id === topicId}
                    onChange={() => setTopicId(item.id)}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <a href={mailto(topic.subject)} className={styles.write}>
            <span aria-hidden="true">✉️</span>
            {contact.write}
          </a>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { contact, site } from '@/utils/content';
import styles from './Contact.module.scss';

function mailto(subject) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

export default function Contact() {
  const [topicId, setTopicId] = useState(contact.topics[0].id);
  const topic = contact.topics.find((item) => item.id === topicId);

  return (
    <section id="contacto" className={styles.section} aria-labelledby="contacto-title">
      {/* Marca de agua: un buzón, enorme y casi transparente, al fondo de la sección. */}
      <p className={styles.watermark} aria-hidden="true">
        📬
      </p>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="contacto-title" className={styles.title}>
            ¿Hablamos?
          </h2>
          <p className={styles.text}>
            Escríbeme si tienes un proyecto entre manos, quieres que colaboremos o crees que encajo en tu
            equipo. Con un par de líneas de contexto es suficiente.
          </p>
        </div>

        <div className={styles.compose}>
          <fieldset className={styles.topics}>
            <legend className={styles.legend}>¿De qué quieres hablar?</legend>
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
            Escribir un email
          </a>
        </div>
      </div>
    </section>
  );
}

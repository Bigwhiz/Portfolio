import { Footer } from '../../components/footer';
import { Icon } from '../../components/icon';
import { Section } from '../../components/section';
import { Heading } from '../../components/heading';
import { Button } from '../../components/button';
import { baseMeta } from '../../utils/meta';
import { Link } from '@remix-run/react';
import config from '~/config.json';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: 'Find me on the platforms below.',
  });
};

export default function Contact() {
  return (
    <>
      <Section className={styles.contact}>
        <div className={styles.header}>
          <Heading as="h1" level={2}>Contact</Heading>
          <p className={styles.tagline}>Find me on the platforms below.</p>
        </div>

        <div className={styles.grid}>
          <a
            className={styles.card}
            href={config.x}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon className={styles.icon} icon="x" />
            <span>X (Twitter)</span>
          </a>

          <a
            className={styles.card}
            href={config.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon className={styles.icon} icon="github" />
            <span>GitHub</span>
          </a>

          <a
            className={styles.card}
            href={`mailto:${config.gmail}`}
          >
            <Icon className={styles.icon} icon="mail" />
            <span>{config.gmail}</span>
          </a>
        </div>

        <Link to="/" className={styles.homeLink}>
          <Button className={styles.returnButton} icon="arrow-left">
            Return Home
          </Button>
        </Link>
      </Section>
      <Footer />
    </>
  );
}

import { Footer } from '../../components/footer';
import { Icon } from '../../components/icon';
import { Section } from '../../components/section';
import { Heading } from '../../components/heading';
import { Button } from '../../components/button';
import { baseMeta } from '../../utils/meta';
import { Link } from '@remix-run/react';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: 'Find me on the platforms below.',
  });
};

export const Contact = () => {
  return (
    <>
      <Section className={styles.contact}>
        <div className={styles.form}>
          <Heading className={styles.title} level={2}>
            Let’s Connect
          </Heading>

          <div className={styles.socialLinks}>
            <a
              href="https://x.com/BigWhiz_001"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialItem}
            >
              <Icon icon="x" /> @BigWhiz_001
            </a>

            <a
              href="https://github.com/Bigwhiz"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialItem}
            >
              <Icon icon="github" /> @Bigwhiz
            </a>

            <a
              href="mailwisdomosas@gmail.com"
              className={styles.socialItem}
            >
              <Icon icon="mail" /> mailwisdomosas@gmail.com
            </a>
          </div>

          <Link to="/" className={styles.homeLink}>
            <Button className={styles.returnButton} icon="arrow-left">
              Return Home
            </Button>
          </Link>
        </div>
      </Section>
      <Footer />
    </>
  );
};

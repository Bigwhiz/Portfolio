import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import styles from './error.module.css';

export function Error({ error }) {
  const getMessage = () => {
    switch (error.status) {
      case 404:
        return {
          summary: 'Error 404: Offside!',
          message:
            'This page missed the mark — maybe it was transferred, benched, or simply doesn’t exist. Let’s get you back in play.',
        };
      case 405:
        return {
          summary: 'Error: method denied',
          message: error.data,
        };
      default:
        return {
          summary: 'Error: anomaly',
          message: error.statusText || error.data || error.toString(),
        };
    }
  };

  const { summary, message } = getMessage();

  return (
    <section className={styles.page}>
      <Transition in>
        {({ visible }) => (
          <>
            <div className={styles.details}>
              <div className={styles.text}>
                <Heading
                  className={styles.title}
                  data-visible={visible}
                  level={0}
                  weight="bold"
                >
                  {error.status}
                </Heading>

                <Heading
                  aria-hidden
                  className={styles.subheading}
                  data-visible={visible}
                  as="h2"
                  level={4}
                >
                  <DecoderText text={summary} start={visible} delay={300} />
                </Heading>

                <Text className={styles.description} data-visible={visible} as="p">
                  {message}
                </Text>

                <Button
                  secondary
                  iconHoverShift
                  className={styles.button}
                  data-visible={visible}
                  href="/"
                  icon="chevron-right"
                >
                  Back to homepage
                </Button>
              </div>
            </div>

            <div className={styles.videoContainer} data-visible={visible}>
              {/* Optional: background image or illustration here */}
            </div>
          </>
        )}
      </Transition>
    </section>
  );
}

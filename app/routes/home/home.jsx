import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
  id="project-1"
  sectionRef={projectOne}
  visible={visibleSections.includes(projectOne.current)}
  index={1}
  title="Redefining how people shop for tech"
  description="Building a seamless e-commerce platform for discovering and buying the latest phones, laptops, and accessories"
  buttonText="View project"
  buttonLink="/projects/adware"
  model={{
    type: 'laptop',
    alt: 'Adware e-commerce homepage shown on a laptop screen',
    textures: [
      {
        srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
        placeholder: sprTexturePlaceholder,
      },
    ],
  }}
/>

<ProjectSummary
  id="project-2"
  alternate
  sectionRef={projectTwo}
  visible={visibleSections.includes(projectTwo.current)}
  index={2}
  title="Writing and sharing made effortless"
  description="Building a clean and powerful blogging platform that makes publishing and reading content seamless"
  buttonText="View project"
  buttonLink="/projects/beeve"
  model={{
    type: 'phone',
    alt: 'App login screen',
    textures: [
      {
        srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
        placeholder: gamestackTexturePlaceholder,
      },
      {
        srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
        placeholder: gamestackTexture2Placeholder,
      },
    ],
  }}
/>

<ProjectSummary
  id="project-3"
  sectionRef={projectThree}
  visible={visibleSections.includes(projectThree.current)}
  index={3}
  title="Buzzed Book"
  description="A personalized book vault that tracks your reading progress, allows ratings and reviews, and organizes your digital shelf just the way you like it."
  buttonText="View project"
  buttonLink="/projects/buzzed-book"  // You can update this link later if needed
  model={{
    type: 'laptop',
    alt: 'Browsing, organizing, and tracking books in the Buzzed Book app',
    textures: [
      {
        srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
        placeholder: sliceTexturePlaceholder,
      },
    ],
  }}
/>

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};

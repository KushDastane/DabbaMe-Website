import { useEffect } from 'react';
import { Navbar, Footer } from '@components/layout';
import { SEO } from '@components/common/SEO';
import { StoryHero } from '@components/story/StoryHero';
import { StoryScene } from '@components/story/StoryScene';
import { SceneConnector } from '@components/story/SceneConnector';
import { StoryCTA } from '@components/story/StoryCTA';
import { STORY_SCENES } from '@constants/storyScenes';
import { ORGANIZATION_SCHEMA, BREADCRUMB_STORY_SCHEMA } from '@constants/seoSchemas';

/**
 * OurStoryPage Component
 *
 * Illustrated storybook page for DabbaMe.
 */
export default function OurStoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Our Story | DabbaMe — Built with Hunger & Love"
        description="Every startup begins with an idea. Ours began with hunger. Learn how Kush and Pranav built DabbaMe to make authentic home food accessible to everyone."
        keywords="DabbaMe story, founders, home food mission, tiffin app story, Kush Pranav, home kitchen journey"
        canonical="/our-story"
        ogImage="/story-01-hero.webp"
        schemas={[ORGANIZATION_SCHEMA, BREADCRUMB_STORY_SCHEMA]}
      />

      <div className="min-h-screen bg-[#FCFAF5] text-[#1E1E1E] selection:bg-[#F5B300]/30">
        <Navbar />

        <main id="main-content" tabIndex={-1}>
          {/* Hero — clean, no paths */}
          <StoryHero />

          {/* Scenes with individual connectors between each pair */}
          <div className="relative">
            {STORY_SCENES.map((scene, index) => (
              <div key={scene.sceneNumber}>
                <StoryScene
                  sceneNumber={scene.sceneNumber}
                  imageSrc={scene.imageSrc}
                  imageAlt={scene.imageAlt}
                  title={scene.title}
                  paragraphs={scene.paragraphs}
                  reverse={index % 2 !== 0}
                  rotation={scene.rotation}
                />

                {/* Arrow connector between this scene and the next */}
                {index < STORY_SCENES.length - 1 && (
                  <SceneConnector flipX={index % 2 !== 0} />
                )}
              </div>
            ))}
          </div>

          <StoryCTA />
        </main>

        <Footer />
      </div>
    </>
  );
}

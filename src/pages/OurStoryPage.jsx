import { useEffect } from 'react';
import { Navbar, Footer } from '@components/layout';
import { StoryHero } from '@components/story/StoryHero';
import { StoryScene } from '@components/story/StoryScene';
import { SceneConnector } from '@components/story/SceneConnector';
import { StoryCTA } from '@components/story/StoryCTA';
import { STORY_SCENES } from '@constants/storyScenes';

/**
 * OurStoryPage Component
 *
 * A premium, illustrated storybook page for DabbaMe.
 * Hero section is clean — no dotted line.
 * Individual dotted arrow connectors between each scene (1→2, 2→3 … 8→9).
 */
export default function OurStoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
  );
}

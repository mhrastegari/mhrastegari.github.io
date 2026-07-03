import { profileLinks } from '@shared/profile';
import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';
import { ExperienceSection } from './ExperienceSection';
import { Footer } from './Footer';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { ProjectsSection } from './ProjectsSection';
import { SkillsSection } from './SkillsSection';

export function IndexPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header links={profileLinks} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer links={profileLinks} />
    </div>
  );
}

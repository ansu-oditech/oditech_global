import { useEffect, useState, useRef, useMemo } from 'react';
import { Card } from './card';

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
  className?: string;
  activeSection?: string;
  onSectionChange?: (id: string) => void;
}

export const TableOfContents = ({ 
  sections, 
  className = '',
  activeSection: externalActiveSection,
  onSectionChange
}: TableOfContentsProps) => {
  const [internalActiveSection, setInternalActiveSection] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const tocRef = useRef<HTMLDivElement>(null);

  const activeSection = externalActiveSection !== undefined ? externalActiveSection : internalActiveSection;

  const sectionIds = useMemo(() => sections.map(section => section.id), [sections]);

  useEffect(() => {
    // Create a more aggressive observer that checks continuously while scrolling
    const handleScroll = () => {
      // Find which section is most visible in the viewport
      let maxVisibility = 0;
      let visibleSectionId = '';

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

        // Element is not visible at all
        if (rect.bottom < 0 || rect.top > viewHeight) {
          return;
        }

        // Calculate visibility as a percentage of the element's height
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewHeight, rect.bottom);
        const visibleHeight = visibleBottom - visibleTop;
        const visibilityPercentage = visibleHeight / rect.height;

        if (visibilityPercentage > maxVisibility) {
          maxVisibility = visibilityPercentage;
          visibleSectionId = id;
        }
      });

      if (visibleSectionId && visibleSectionId !== activeSection) {
        if (onSectionChange) {
          onSectionChange(visibleSectionId);
        } else {
          setInternalActiveSection(visibleSectionId);
        }

        // Auto-scroll the TOC to make the active item visible
        if (tocRef.current) {
          const activeElement = tocRef.current.querySelector(`[data-section-id="${visibleSectionId}"]`);
          if (activeElement) {
            activeElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Traditional intersection observer as backup
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        handleScroll();
      },
      {
        rootMargin: '-10% 0px -10% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds, activeSection, onSectionChange]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Actively set section for immediate feedback
      if (onSectionChange) {
        onSectionChange(id);
      } else {
        setInternalActiveSection(id);
      }
    }
  };

  return (
    <div className={`hidden lg:block sticky top-24 self-start ${className}`}>
      <Card className="w-64 overflow-hidden flex flex-col bg-white border border-slate-200 shadow-sm">
        <div className="flex flex-col h-full max-h-[80vh]">
          <h3 className="p-4 pb-2 text-base font-semibold">Contents</h3>
          <nav
            ref={tocRef}
            className="overflow-y-auto scrollbar-thin flex-grow px-4"
          >
            {sections.map(({ id, title }) => (
              <button
                key={id}
                data-section-id={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left py-2 border-0 transition-all duration-200 ${
                  activeSection === id
                    ? 'text-blue-500 font-medium'
                    : 'text-gray-800 hover:text-blue-500'
                }`}
                aria-current={activeSection === id ? 'true' : 'false'}
              >
                {title}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-muted/20">
            <div className="bg-gradient-to-r from-pink-100 to-blue-100 rounded-lg p-3 mb-2">
              <p className="text-sm font-medium text-blue-900 leading-tight text-center">
                Turn ideas into powerful products
              </p>
              <button className="w-full mt-3 border border-red-500 text-red-500 py-2 rounded hover:bg-red-500 hover:text-white transition-colors">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
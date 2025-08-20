import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getSafeData } from '../data/data';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeJob, setActiveJob] = useState(0);
  const { i18n, t } = useTranslation();
  const data = getSafeData();

  // Safety check to prevent errors when data is not loaded
  if (!data?.experience || !Array.isArray(data.experience) || data.experience.length === 0) {
    return (
      <section id="experience" className="section-padding py-20 px-5 md:px-30 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p style={{ color: 'var(--text-secondary)' }}>Loading experience data...</p>
          </div>
        </div>
      </section>
    );
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('experience');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Additional safety check for currentJob
  if (!data.experience[activeJob]) {
    setActiveJob(0); // Reset to first job if current one is invalid
  }

  const currentJob = data.experience[activeJob] || data.experience[0];
  const currentLanguage = i18n.language as 'en' | 'uz';

  return (
    <section id="experience" className="section-padding py-20 px-5 md:px-30 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="numbered-heading" style={{ color: 'var(--text-primary)' }}>
            {t('experience.title')}
          </h2>
        </div>

        {/* Experience Content */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Job Tabs */}
            <div className="lg:w-1/3">
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
                {data.experience?.map((job: any, index: number) => (
                  <button
                    key={job.id}
                    onClick={() => setActiveJob(index)}
                    className={`job-tab flex-shrink-0 px-4 py-3 text-left border-l-2 transition-all duration-300 ${
                      activeJob === index
                        ? 'border-green-500 bg-green-500/10'
                        : 'border-gray-600 hover:border-gray-400 hover:bg-gray-600/10'
                    }`}
                    style={{
                      color: activeJob === index ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      backgroundColor: activeJob === index ? 'var(--green-tint)' : 'transparent'
                    }}
                  >
                    <span className="text-sm font-mono">{job.company}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Job Details */}
            <div className="lg:w-2/3">
              <div className="job-details">
                {/* Job Title and Company */}
                <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {currentJob.title[currentLanguage]} <span style={{ color: 'var(--accent-primary)' }}>@ {currentJob.company}</span>
                </h3>

                {/* Work Date */}
                <p className="text-sm font-mono mb-6" style={{ color: 'var(--light-slate)' }}>
                  {currentJob.date[currentLanguage]}
                </p>

                {/* Job Description */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {currentJob?.description?.[currentLanguage]?.map((desc: string, index: number) => (
                      <li key={index} className="experience-item flex items-start space-x-3">
                        <span 
                          className="text-base leading-relaxed"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                    {t('experience.techTitle')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentJob?.stack?.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-md transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: 'var(--bg-tertiary)',
                          color: 'var(--accent-primary)',
                          border: '1px solid var(--accent-primary)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

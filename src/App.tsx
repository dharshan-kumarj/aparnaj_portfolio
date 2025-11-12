import './App.css';
import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormError('');

    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch {
      setFormStatus('error');
      setFormError('Failed to send message. Please try again.');
    }
  };

  const projects = [
    {
      title: "Flood Alert System",
      tech: ["Node.js", "Python", "Machine Learning", "MongoDB", "React"],
      description: "A comprehensive real-time flood monitoring, prediction, and alert system powered by ML and AI. Monitors weather conditions in flood-prone Indian cities, predicts flood risks using trained models, and sends personalized email notifications to registered users.",
      year: "2025",
      link: "https://github.com/Aparna0224/Flood_Alert"
    },
    {
      title: "RULE - AI Resume Analyzer",
      tech: ["React", "TypeScript", "AI/LLM", "Node.js", "Docker"],
      description: "Cutting-edge full-stack application leveraging advanced AI and machine learning for resume processing and candidate evaluation. Features intelligent parsing, 1-10 fit scoring, skill extraction, and real-time analysis with a modern, responsive UI.",
      year: "2025",
      link: "https://github.com/MSG-Mutual-Support-to-Grow/rule"
    },
    {
      title: "Currency Exchange Data Warehouse Pipeline",
      tech: ["Python", "PostgreSQL", "Prefect", "Power BI", "ETL"],
      description: "End-to-end data engineering project that extracts real-time currency exchange rates, transforms and stores data in PostgreSQL, automates ETL pipeline with Prefect scheduling, and visualizes insights in Power BI dashboards.",
      year: "2024",
      link: "https://github.com/Aparna0224/Currency-Exchange-Data-Warehouse-Pipeline"
    }
  ];

  const skills = [
    { category: "AI & Machine Learning", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Neural Networks", "Deep Learning"] },
    { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
    { category: "Frontend Development", items: ["React", "Tailwind CSS", "Next.js", "Responsive Design"] },
    { category: "Backend Development", items: ["Node.js", "Express", "REST APIs", "Database Design", "API Integration"] }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Hero />
      <About skills={skills} />
      <Projects projects={projects} />
      <Contact
        formData={formData}
        formStatus={formStatus}
        formError={formError}
        onSubmit={handleSubmit}
        onFormDataChange={setFormData}
      />
      <Footer />
    </div>
  );
}

export default App;

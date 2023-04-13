import Layout from '../components/Layout';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useLessonPlan } from '../contexts/LessonPlanContext';

const Index = () => {
  const [grade, setGrade] = useState('');
  const [topic, setTopic] = useState('');
  const router = useRouter();
  const { setLessonPlan } = useLessonPlan();

  const handleGenerateLesson = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8080/api/generate', {
        age: grade,
        topic: topic,
      });

      setLessonPlan(response.data);
      router.push('/result');
    } catch (error) {
      console.error('Error generating lesson:', error);
    }
  };


  return (
    <Layout>
      <div className="container mx-auto mt-16">
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <div className="bg-white shadow-md p-8 rounded">
              <h2 className="text-center mb-8 font-semibold text-2xl">LessonLab</h2>
              
              <div className="flex justify-center mb-6">
                <img src="/assets/hero4.jpg" alt="Your image description"  className="mx-auto object-cover object-center"
  style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
              </div>

              
              <div className="mb-4">
              <label htmlFor="grade" className="block text-gray-700 mb-2">
                Grade Level
              </label>
              <input
                type="text"
                id="grade"
                name="grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="topic" className="block text-gray-700 mb-2">
                Topic
              </label>
              <input
                type="text"
                id="topic"
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleGenerateLesson}
            >
              Generate Lesson
            </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

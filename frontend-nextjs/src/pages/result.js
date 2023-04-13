import { useContext } from 'react';
import Layout from '../components/Layout';
import { LessonPlanContext } from '../src/contexts/LessonPlanContext';

const Result = () => {
  const { lessonPlan } = useContext(LessonPlanContext);

  if (!lessonPlan) {
    return (
      <Layout>
        <div className="container mx-auto mt-16">
          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              <div className="bg-white shadow-md p-8 rounded">
                <h2 className="text-center mb-8 font-semibold text-2xl">No Lesson Plan Generated</h2>
                {/* Add a message or a link to go back to the index page */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto mt-16">
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <div className="bg-white shadow-md p-8 rounded">
              <h2 className="text-center mb-8 font-semibold text-2xl">Your Lesson Plan</h2>
              {/* Add your content here */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Grade: {lessonPlan.grade}</h3>
                <h3 className="font-semibold text-lg mb-2">Topic: {lessonPlan.topic}</h3>
                <p className="mb-4">{lessonPlan.description}</p>
                <ol>
                  {lessonPlan.activities.map((activity, index) => (
                    <li key={index} className="mb-2">
                      {activity}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Result;

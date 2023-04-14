import { useContext } from 'react';
import Layout from '../components/Layout';
import { useLessonPlan } from '../contexts/LessonPlanContext';

const Result = () => {
  const { lessonPlan } = useLessonPlan();

  if (!lessonPlan) {
    return (
      <Layout>
        <div className="container mx-auto mt-16">
          <h2 className="text-center mb-8 font-semibold text-2xl">No Lesson Plan Found</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto mt-16">
        <div className="flex justify-center">
          <div className="w-full md:w-2/2">
            <div className="bg-white shadow-md p-8 rounded">
              <h2 className="text-center mb-8 font-semibold text-2xl">Your Lesson Plan</h2>
              {/* Add your content here */}
              <div>
                
                <div className="card-body">
                    <p className="card-text" id="lesson-plan-container">
                        <div dangerouslySetInnerHTML={{ __html: JSON.stringify(lessonPlan.lesson_plan, null, 2) }}></div>
                    </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Result;

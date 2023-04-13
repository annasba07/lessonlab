import { createContext, useContext, useState } from 'react';

const LessonPlanContext = createContext();

export const useLessonPlan = () => {
  return useContext(LessonPlanContext);
};

export const LessonPlanProvider = ({ children }) => {
  const [lessonPlan, setLessonPlan] = useState(null);

  return (
    <LessonPlanContext.Provider value={{ lessonPlan, setLessonPlan }}>
      {children}
    </LessonPlanContext.Provider>
  );
};

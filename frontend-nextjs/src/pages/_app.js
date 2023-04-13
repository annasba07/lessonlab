import '../styles/globals.css';
import { LessonPlanProvider } from '../contexts/LessonPlanContext';

function MyApp({ Component, pageProps }) {
  return (
    <LessonPlanProvider>
      <Component {...pageProps} />
    </LessonPlanProvider>
  );
}

export default MyApp;

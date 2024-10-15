import ReactDOM from 'react-dom';
import zaf from './shared/zaf';
import { IAppData } from './interfaces/app-data';
import App from './modules/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

export const onAppRegistered = (callback: (appData: IAppData) => void) =>
  zaf.on('app.registered', (appData: IAppData) => callback(appData));



onAppRegistered((appData: IAppData) => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App appData={appData} />
    </StrictMode>,
  )
});

// onAppRegistered((appData: IAppData) => {
//   ReactDOM.render(<App appData={appData} />, document.body);
// });


import { useEffect } from 'react';
import { useAppStore } from '../stores'
import { IAppData } from '../interfaces/app-data';
import AppRouter from '../routers';


function App({appData} : {appData: IAppData}) {
  const setLocation = useAppStore((state) => state.setLocation);

  console.log(">>>appData:::", appData)

  useEffect(() => {
    setLocation(appData.context.location);
  })

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App

'use client';
import { useAdtraceContext } from '../_providers/adtrace-provider';
import styles from './adtrace-section.module.css';

const AdtraceSection = () => {
  // NOTE: attention wheerever you want use adtrace hooks put 'use client' in top of the component (use it in client components)
  const adtraceSdk = useAdtraceContext()
  
  return (
    <main className={styles.main}>
        <h3>Adtrace Web SDK Demo (Next.js)</h3>
        <button
            className={styles.button}
            onClick={() => adtraceSdk.trackEvent({
                eventToken: 'qpw44u',
                revenue: 10,
                currency: 'IRR',
                callbackParams: [
                    {key: 'key', value: 'value'},
                    {key: 'foo', value: 'bar'}
                ]
            })}
        >
            Event tracking
        </button>
        <button
            className={styles.button}
            onClick={() => {
                console.log(adtraceSdk?.getAttribution())
            }}
        >
            GetAttribution (console)
        </button>
        <button
            className={styles.button}
            onClick={() => {
                console.log(adtraceSdk?.getWebUUID())
            }}
        >
            GetWebUUID (console)
        </button>
    </main>
  )
}

export default AdtraceSection

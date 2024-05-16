import React, { Suspense, lazy } from 'react'
import Loading from '../loading/Loading'
const MarkdownPreview = lazy(() => delayForDemo(import('../../components/lazyLoad/MarkdownPreview')));

export default function LazyLoad({children}) {
  return (
    <>
        <Suspense fallback={<Loading />}>
            {children}
            <MarkdownPreview />
        </Suspense>
    </>
  )
}

function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
  }
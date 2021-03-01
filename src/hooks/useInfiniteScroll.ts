import React from 'react';


function useInfiniteScroll(fetchData:any){
  
  const loader = React.useRef(fetchData);
  const observer = React.useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
         console.log('is intersecting')
        }
      },
      { threshold: 0.25 }
    )
  );
  const [element, setElement] = React.useState(null);

  
  React.useEffect(() => {
    loader.current = fetchData;
  }, [fetchData]);

  React.useEffect(() => {
    const currentElement:any = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return [setElement]
}

export {useInfiniteScroll}
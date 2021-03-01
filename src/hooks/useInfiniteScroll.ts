import React from 'react';


function useInfiniteScroll(fetchData: () => Promise<void>| null): [React.Dispatch<React.SetStateAction<HTMLDivElement | null>>]{
  
  const loader = React.useRef<any>(fetchData);
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
  const [element, setElement] = React.useState<HTMLDivElement | null>(null);

  
  React.useEffect(() => {
    loader.current = fetchData;
  }, [fetchData]);

  React.useEffect(() => {
    const currentElement: HTMLDivElement | null = element;
    const currentObserver = observer.current;

    if (currentElement!== null) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement!== null) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return [setElement]
}

export {useInfiniteScroll}
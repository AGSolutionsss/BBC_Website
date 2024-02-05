import { useEffect } from 'react';

function ScrollToTopOnMount() {
  useEffect(() => {
    console.log('ScrollToTopOnMount useEffect is running!');
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTopOnMount;

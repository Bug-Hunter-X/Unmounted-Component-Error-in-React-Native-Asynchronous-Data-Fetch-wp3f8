```javascript
import { useState, useEffect } from 'react';
import { useIsMounted } from 'use-is-mounted'; // Install this hook

const MyComponent = () => {
  const [data, setData] = useState(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('some-api-endpoint');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        // Check if the component is still mounted before updating state
        if (isMounted()) {
          setData(jsonData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (data === null) {
    return <Text>Loading...</Text>;
  }

  // ... rest of the component using the 'data'
};
```
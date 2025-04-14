// hooks/useUserMatches.ts

import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export function useUserMatches() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user) {
        setError('No user logged in');
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'matches', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log(docSnap.data());

          var data = docSnap.data();
          var properties: any[] = []

          for (const property of data.properties) {
            const propertyRef = doc(db, 'properties', property);
            const propertySnap = await getDoc(propertyRef);

            // Do something with propertySnap here
            properties.push(propertySnap.data())
          }

          data.properties = properties
          setData(data);
        } else {
          setData(null);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}

export async function GetMatches() {

    var data = null;
    const user = auth.currentUser;

    if (user == null) {
      return null;
    }

    const docRef = doc(db, 'matches', user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

      data = docSnap.data();
      var properties: any[] = [];

      for (const property of data.properties) {
        // const propertyRef = doc(db, 'properties', property);
        // const propertySnap = await getDoc(propertyRef);

        // Do something with propertySnap here
        // properties.push(propertySnap.data());
      }

      // data.properties = properties;
      
    }

    return data
}

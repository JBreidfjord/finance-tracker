import { useEffect, useRef, useState } from "react";

import { db } from "../firebase/config";

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const query = useRef(_query).current;

  useEffect(() => {
    let ref = db.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    const unsub = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      },
      () => {
        setError("Could not fetch data");
      }
    );

    return () => unsub();
  }, [collection, query]);

  return { documents, error };
};

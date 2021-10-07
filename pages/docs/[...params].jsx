import React from "react";
import { useRouter } from "next/router";

// file => /docs/[...params].jsx
// route => /docs/a/b/c

function catchAllRouting() {
  const router = useRouter();
  const { params } = router.query;

  // params === ['a', 'b', 'c']
  console.log(params);
  return (
    <h2>
      Catch all routing params from routes {params} can be used when you have a
      bunch of pages that have pretty similar if not identical layouts and style
      but have different content and need their own URL. Such things like docs
      and wikis are a perfect use case.
    </h2>
  );
}

export default catchAllRouting;

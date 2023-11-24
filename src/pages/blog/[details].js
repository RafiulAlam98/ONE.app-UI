import { useRouter } from "next/router";
import React from "react";

const BlogDetails = () => {
  const router = useRouter();

  const id = router.query.details;
  console.log(id);
  return (
    <div>
      <h1>This page Coming Soon...</h1>
    </div>
  );
};

export default BlogDetails;

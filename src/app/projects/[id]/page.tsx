import React from "react";

// Define the type for the params
interface PageParams {
  pageId: string; // Adjust based on actual params structure
}

// Define the type for the props
interface PageProps {
  params: PageParams;
}

// Define the component using destructuring in the parameters
const Page: React.FC<PageProps> = ({ params: { pageId } }) => {
  return <div>Page ID: {pageId}</div>;
};

export default Page;

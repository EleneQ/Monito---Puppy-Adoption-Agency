import { useEffect } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  //get page numbers
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    window.scrollTo(0, 400);
  }, [paginate]);

  return (
    <nav>
      <ul className="flex justify-center items-center gap-5">
        {pageNumbers.map((pageNum) => (
          <li
            className="bg-primary-blue-9 text-white px-3 py-1 rounded-lg cursor-pointer"
            key={pageNum}
            onClick={() => paginate(pageNum)}
          >
            {pageNum}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
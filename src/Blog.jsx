import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data/data.json";

export default function Blog() {
    const [Category, setCategory] = useState("الكل");
const [searchItem, setSearchItem] = useState("");
    const filteredPosts = data.posts.filter((post) => {
        const matchCategory =
          Category === "الكل" || post.category === Category;
      
        const matchSearch =
          post.title.includes(searchItem) ||
          post.excerpt.includes(searchItem);
      
        return matchCategory && matchSearch;
      });
  //   The Pagination
  const [page, setPage] = useState(1);
  const currentPosts = filteredPosts.slice((page - 1) * 6, page * 6);

  const changePage = (pageNumber) => {
    setPage(pageNumber);
    //   Scrolling after pagination
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  };
  //   Appearance of the categories without pagination
  const changeCategory = (cat) => {
    setCategory(cat);
    setPage(1);
  };

  //   The buttons of view of cards
  const [view, setView] = useState("grid");


  return (
    <>
      <section className="blog">
        <div className="main-page">
          <div className="glow"></div>
          <div className="container">
            <div className="blog-text">
              <h1>استكشف مقالاتنا</h1>
              <p>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
            </div>
          </div>
        </div>

        {/* The search & tabs section */}

        <div className="cat-blog">
          <div className="container">
            <div className="search-cat d-flex flex-column flex-lg-row gap-3 justify-content-between align-items-center text-center text-lg-start  my-5">
              <input
                className="form-control  py-2"
                type="search"
                placeholder="ابحث في المقالات"
                aria-label="Search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
              />

              <div className="cat-tabs d-flex flex-wrap gap-2 d-flex gap-2 ">
                <button onClick={() => setCategory("الكل")} className="">
                  جميع المقالات
                </button>
                <button onClick={() => changeCategory("إضاءة")} className="">
                  إضاءة
                </button>
                <button onClick={() => changeCategory("بورتريه")} className="">
                  بورتريه
                </button>
                <button
                  onClick={() => changeCategory("مناظر طبيعية")}
                  className=""
                >
                  مناظر طبيعية
                </button>
                <button onClick={() => changeCategory("تقنيات")} className="">
                  تقنيات
                </button>
                <button onClick={() => changeCategory("معدات")} className="">
                  معدات
                </button>
              </div>
            </div>

            {/* Buttons of view */}

            <div className="view-buttons d-flex gap-2 justify-content-end">
              <button
                onClick={() => setView("grid")}
                className={view === "grid"  ? "active-view" : ""}
              >
                <i className="fa-solid fa-table-cells"></i>
              </button>

              <button
                onClick={() => setView("list")}
                className={view === "list"  ? "active-view" : ""}
              >
                <i className="fa-solid fa-list"></i>
              </button>
            </div>
            {/* The cards of categories */}
            <div
              className={
                view === "grid"
                  ? "row grid-view cards-new-art row-cols-1 row-cols-md-3 g-4 py-5"
                  : "list-view py-5"
              }
            >
              {currentPosts.map((post) => (
                <div className={view === "grid" ? "col" : "mb-4"} key={post.id}>
                  <div className="card h-100 ">
                    <img
                      src={post.image}
                      className="card-img-top"
                      alt={post.title}
                    />

                    <div className="card-body lh-lg p-4">
                      <span className="badge  mb-3">
                        {post.category}
                      </span>

                      <h5 className="card-title">{post.title}</h5>

                      <p className="card-text">{post.excerpt}</p>
                 
                    <div className="card-footer py-3 d-flex justify-content-between align-items-center">
                      <div className="author d-flex align-items-center">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          width="45"
                          height="45"
                          className="rounded-circle mx-3"
                        />

                        <div>
                          <strong className="text-white">{post.author.name}</strong>
                          <br />
                          <small>{post.author.role}</small>
                        </div>
                      </div>

                      <i className="fa-solid fa-chevron-left g-5"></i>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <nav aria-label="Page navigation example  ">
              <ul className="pagination align-items-center text-center justify-content-center gap-2">
                <li className="page-item">
                  <Link className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" onClick={() => changePage(1)}>
                    1
                  </Link>
                </li>

                <li className="page-item">
                  <Link className="page-link" onClick={() => changePage(2)}>
                    2
                  </Link>
                </li>

                <li className="page-item">
                  <Link className="page-link" onClick={() => changePage(3)}>
                    3
                  </Link>
                </li>

                <li className="page-item">
                  <Link className="page-link" onClick={() => changePage(4)}>
                    4
                  </Link>
                </li>

                <li className="page-item">
                  <Link className="page-link" onClick={() => changePage(5)}>
                    5
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

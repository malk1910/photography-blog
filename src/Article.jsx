// import React from "react";
// import { Link, NavLink, useParams } from "react-router-dom";

// import data from "./data/data.json";

// export default function Article() {
//   const { id } = useParams();

//   const article = data.posts.find((post) => post.id === Number(id));

//   if (!article) {
//     return <h1>Article Not Found</h1>;
//   }

//   return (
//     <div
//       className="article  "
//       style={{
//         background: `
//           linear-gradient(
//             to bottom,
//             rgba(0,0,0,0) 20%,
//             rgba(0,0,0,.5) 35%,
//             rgba(0,0,0,.9) 50%,
//             #000 70%
//           ),
//           url(${article.image})
//         `,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
        
//       }}
//     >

//         <div className="header-article">
       
//           <div className="top-bar-art">
//             <Link to="/Home">
//               <i className="fa-solid fa-house"></i>
//             </Link>
//             <i className="fa-solid fa-chevron-left"></i>
//             <Link to="/Blog">المدونة</Link>
//             <i className="fa-solid fa-chevron-left"></i>
//             <Link to="">{article.category}</Link>
//           </div>
//           <div className="container header-container">

//     <div className="data-bar-art d-flex flex-row gap-3">
//     <p className="badge-category-art">{article.category}</p>
//     <p><i class="fa-regular fa-calendar"></i> {article.date}</p>
//     <p><i class="fa-regular fa-clock"></i> {article.readTime}</p>

//     <h1>{article.title}</h1>



// </div>
//         </div>


//       </div>
//     </div>
    // <div className="container py-5">
    //   <img
    //     src={article.image}
    //     alt={article.title}
    //     className="img-fluid rounded mb-4"
    //   />

    //   <span className="badge bg-dark">
    //     {article.category}
    //   </span>

    //   <h1 className="my-3">{article.title}</h1>

    //   <p>{article.excerpt}</p>

    //   <div className="mt-4">
    //     <strong>{article.author.name}</strong>
    //   </div>
    // </div>
//   );
// }

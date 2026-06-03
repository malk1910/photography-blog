import React from "react";
import { Link, NavLink } from "react-router-dom";
import mountain from "./assets/mountain.jpg";
import sky from "./assets/sky.jpg";
import person1 from "./assets/person1.jpg";
import person2 from "./assets/person2.jpg";
import person3 from "./assets/person3.jpg";

import data from "./data/data.json";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="glow"></div>
        <div className="container lh-lg">
          <h1>
            اكتشف فن
            <br></br>التصوير الفوتوغرافي
          </h1>
          <p>
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="home-btns">
            <Link to="/Blog" className="btn blog-btn rounded-pill btn-lg">
              استكشف المقالات
            </Link>
            <NavLink to="/About" className="btn about-btn rounded-pill btn-lg">
              اعرف المزيد
            </NavLink>
          </div>

          <div className="row g-4 justify-content-center home-mini-cards">
            <div className="col-6 col-md-3 ">
              <div className="mini-card">
                <i className="fa-solid fa-newspaper card-icon"></i>
                <h5 className="card-number">50+</h5>
                <small className="card-text">مقالة</small>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="mini-card">
                <i className="fa-solid fa-people-group card-icon"></i>
                <h5 className="card-number">10+ألف</h5>
                <small className="card-text">قارئ</small>
              </div>
            </div>

            <div className="col-6 col-md-3 ">
              <div className="mini-card">
                <i className="fa-solid fa-folder-open card-icon"></i>
                <h5 className="card-number">4</h5>
                <small className="card-text">تصنيفات</small>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="mini-card">
                <i className="fa-solid fa-pen-nib card-icon"></i>
                <h5 className="card-number">6</h5>
                <small className="card-text">كاتب</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------Article section------ */}
      <section className="article-home">
        <div className="container">
          <h1 className="text-white">مقالات مختارة</h1>
          <div className="article-text mb-5 d-flex justify-content-between">
            <p>محتوى منتقى لبدء رحلة تعلمك</p>
            <Link to="/Blog" className="btn rounded text-white">
              عرض الكل
              <i className="fa-solid fa-arrow-left mx-2"></i>
            </Link>
          </div>

          {/* ------Cards in article section------ */}
          {/* CARD ONE */}
          <div className="card  mb-5">
            <div className="row g-0  ">
              <div className=" col-md-4 ">
                <img src={sky} className="img-fluid " alt="..." />
              </div>
              <div className=" col-md-8 p-5">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <span className="badge-category">إضاءة</span>
                    <span className="text-muted-custom">
                      <i className="fa-regular fa-clock"></i> 8 دقائق للقراءة
                    </span>
                  </div>

                  <h2 className="card-title  fw-bold mb-3">
                    إتقان تصوير الساعة الذهبية: دليل شامل
                  </h2>
                  <p className="card-text">
                    تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح
                    احترافية حول الإضاءة والتكوين.
                  </p>
                  <div className="card-text ">
                    <div className="text-body-secondary">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={person1}
                          className="author-img"
                          alt="سالم أحمد"
                        />
                        <div className="author-info text-end">
                          <h6 className="author-name mb-0 text-white">
                            سالم أحمد
                          </h6>
                          <small className="text-muted-custom">
                            ١٥ يناير ٢٠٢٦
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CARD TWO */}
          <div className="card  mb-5">
            <div className="row g-0 ">
              <div className="col-md-4 ">
                <img src={person1} className="img-fluid " alt="..." />
              </div>
              <div className="col-md-8 p-5">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <span className="badge-category">بورتريه</span>
                    <span className="text-muted-custom">
                      <i className="fa-regular fa-clock"></i> 6 دقائق للقراءة
                    </span>
                  </div>

                  <h2 className="card-title fw-bold mb-3">
                    أسرار تصوير البورتريه: كيف تلتقط روح الشخصية
                  </h2>
                  <p className="card-text">
                    اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية
                    الموضوع الحقيقية.
                  </p>
                  <div className="card-text">
                    <div className="text-body-secondary">
                      <div className="d-flex align-items-center gap-2">
                        <div className="position-relative">
                          <img
                            src={person1}
                            className="author-img"
                            alt="محمد علي"
                          />
                        </div>
                        <div className="author-info text-end">
                          <h6 className="author-name mb-0 text-white">
                            محمد علي
                          </h6>
                          <small className="text-muted-custom">
                            ١٥ يناير ٢٠٢٦
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CARD THREE */}
          <div className="card  mb-5">
            <div className="row g-0 ">
              <div className="col-md-4 ">
                <img src={mountain} className="img-fluid " alt="..." />
              </div>
              <div className="col-md-8 p-5">
                <div className="card-body">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <span className="badge-category">مناظر طبيعية</span>
                    <span className="text-muted-custom">
                      <i className="fa-regular fa-clock"></i> 10 دقائق للقراءة
                    </span>
                  </div>

                  <h2 className="card-title  fw-bold mb-3">
                    دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف{" "}
                  </h2>
                  <p className="card-text">
                    استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط
                    جمال الطبيعة بعدستك.
                  </p>
                  <div className="card-text">
                    <div className="text-body-secondary">
                      <div className="d-flex align-items-center gap-2">
                        <div className="position-relative">
                          <img
                            src={person1}
                            className="author-img"
                            alt="ابراهيم حسن"
                          />
                        </div>
                        <div className="author-info text-end">
                          <h6 className="author-name mb-0 text-white">
                            ابراهيم حسن
                          </h6>
                          <small className="text-muted-custom">
                            ١٥ يناير ٢٠٢٦
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------The categories section------ */}

      <section className="categories-home">
        <div className="container">
          <div className="categories-text text-center mb-5">
            <h1 className="text-white">استكشف حسب الموضوع</h1>
            <p>اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <Link to="/Lighting" className="card ">
                <i className="fa-solid fa-sun"></i>
                <div className="card-body">
                  <h5 className="card-title">اضاءة</h5>
                  <small>3 مقالة</small>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/Portrait" className="card">
                <i className="fa-solid fa-user"></i>
                <div className="card-body">
                  <h5 className="card-title">بورتريه</h5>
                  <small>3 مقالة</small>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/Landscapes" className="card">
                <i className="fa-solid fa-mountain-sun"></i>
                <div className="card-body">
                  <h5 className="card-title">مناظر طبيعية</h5>
                  <small>2 مقالة</small>
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/Tech" className="card">
                <i className="fa-solid fa-sliders"></i>
                <div className="card-body">
                  <h5 className="card-title">تقنيات</h5>
                  <small>5 مقالة</small>
                </div>
              </Link>
            </div>

            <div className="col">
              <Link to="/Tools" className="card">
                <i className="fa-solid fa-camera-retro"></i>
                <div className="card-body">
                  <h5 className="card-title">معدات</h5>
                  <small>3 مقالة</small>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------The newest Articles section------ */}
      <section className="new-art">
        <div className="container">
          <h1 className="text-white"> احدث المقالات</h1>
          <div className="new-art-text mb-5 d-flex justify-content-between">
            <p> محتوى جديد طازج من المطبعة</p>
            <Link to="/Blog" className="btn-new-art ">
              عرض جميع المقالات
              <i className="fa-solid fa-arrow-left mx-2"></i>
            </Link>
          </div>

          <div className="row cards-new-art row-cols-1 row-cols-md-3 g-4">
            {data.posts.slice(3, 6).map((post) => (
              <div className="col" key={post.id}>
                <div className="card h-100">
                  <img
                    src={post.image}
                    className="card-img-top"
                    alt={post.title}
                  />

                  <div className="card-body lh-lg p-4">
                    <span className="badge bg-dark mb-3">{post.category}</span>

                    <h5 className="card-title">{post.title}</h5>

                    <p className="card-text">{post.excerpt}</p>
                  </div>
                  <div className="card-footer py-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        width="45"
                        height="45"
                        className="rounded-circle mx-3"
                      />

                      <div>
                        <strong>{post.author.name}</strong>
                        <br />
                        <small>{post.author.role}</small>
                      </div>
                    </div>

                    <i className="fa-solid fa-chevron-left g-5"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------The Subscription section------ */}
      <section className="subs">
        <div className="container">
          <div className="content-container text-center">
            <i class="fa-regular fa-envelope"></i>
            <h1 className="text-white fw-bold lh-lg">
              اشترك في نشرتنا الإخبارية
            </h1>
            <p>
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>

            <form className="row g-3 my-2 justify-content-center text-center">
              <div className="col-auto">
                <label for="email" className="visually-hidden">
                  أدخل بريدك الالكتروني
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="أدخل بريدك الالكتروني"
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn-subs mb-3">
                  اشترك الان
                </button>
              </div>
            </form>

            <div className="small-text d-flex justify-content-center align-items-center gap-5 mt-3">
              <div class="avatar-stack">
                <img src={person1} alt="Avatar 1" class="avatar" />
                <img src={person2} alt="Avatar 2" class="avatar" />
                <img src={person3} alt="Avatar 3" class="avatar" />
              </div>
              <small>انضم الى 10,000+ مصور</small>
              <small>بدون ازعاج</small>
              <small>الغاء الاشتراك في اي وقت</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

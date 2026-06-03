import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer p-5">
        <div className="container text-right">
          <div className="row g-4">
            <div className="col col-12 col-md-6 col-lg-4">
              <span></span>
              <h4>عدسة </h4>
              <p className="footer-desc">
                مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                المحترفين ونصائح عملية لتطوير مهاراتكم.
              </p>
              <div className="social-icons-footer d-flex gap-2 mt-4">
                <a href="#" className="social-link">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>

            <div className="col col-6 col-md-3 col-lg-2">
              <h4>استكشف</h4>
              <div className="footer-links">
                <a href="">الرئيسية</a>
                <a href="">المدونة</a>
                <a href="">من نحن</a>
              </div>
            </div>
            <div className="col col-6 col-md-3 col-lg-2">
              <h4>التصنيفات</h4>
              <div className="footer-links">
                <a href="">إضاءة</a>
                <a href="">بورتريه</a>
                <a href=""> مناظر طبيعية</a>
                <a href="">تقنيات</a>
              </div>
            </div>
            <div className="col col-12 col-md-6 col-lg-4">
              <h4>ابقى على اطلاع</h4>
              <p>اشترك للحصول على أحدث المقالات والتحديثات.</p>

              <div className="d-flex flex-column  ">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="ادخل بريدك الالكتروني"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <button className="btn " type="button" id="button-addon1">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>

        <div className="container">
          <div className="row gy-2">
            <div className="col-12 col-md-6">© 2026 عدسة. جميع الحقوق محفوظة.</div>
            <div className="col-6 col-md-3">سياسة الخصوصية </div>
            <div className="col-6 col-md-3"> شروط الخدمة</div>
          </div>
        </div>
      </div>
    </>
  );
}

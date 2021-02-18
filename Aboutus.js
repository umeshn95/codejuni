import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import aboutus from "../image/about___us.png";
import "./Aboutus.css";
import Schools from "./Schools";
import parentpic1 from "../image/parentpic1.png";
function Aboutus() {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="relative flex justify-between rounded-b-2xl px-6"
        style={{
          background:
            "linear-gradient(82.95deg, #1287fa -6.56%, #1287fa 122.43%), #1287fa",
          height: "600px",
        }}
      >
        <div className="container mx-auto flex flex-col text-white z-5 lg:flex-row md:px-20 lg:items-center py-12">
          <div className="flex flex-col max-w-6xl">
            <h1 className="font-600 text-5xl max-w-3xl leading-tight">
              Moulding creators of the future
            </h1>
            <div className="font-300 text-2xl mt-10 max-w-4xl">
              Codingal started with a dream to inspire school kids to fall in
              love with coding. Our vision is to empower every child with the
              knowledge of coding, so that they can build anything they imagine.
            </div>
          </div>
          <div>
            <img
              src="https://cdn.codingal.com/images/about-us/first-fold/penguin.svg"
              alt="penguin"
            />
          </div>
        </div>
      </div>

      {/* quizzer */}

      <h1 className="our_journey">Our Journey</h1>

      <section
        data-force-default="false"
        className="PrismicTextCallout PrismicTextCallout--whiteBackground PrismicTextCallout--rightImage"
      >
        <div className="UIContainer UIContainer--isFullBleed UIContainer--isMaxWidthLarge">
          <div className="PrismicTextCallout-content1">
            <div className="PrismicTextCallout-image">
              <img
                alt=""
                srcSet="https://images.prismic.io/quizlet-prod/4c74e2d7-19fe-452c-8630-4c009c086464_Quiz_About_spot.png?auto=compress,format 1x, https://images.prismic.io/quizlet-prod/4c74e2d7-19fe-452c-8630-4c009c086464_Quiz_About_spot.png?auto=compress,format 2x"
              />
            </div>
            <div className="PrismicTextCallout-description">
              <div className="PrismicTextCallout-title PrismicTextCallout--titleLeft">
                <div className="PrismicTextCallout-heading">
                  <h2 className="UIHeading--assembly UIHeading UIHeading--two" />
                </div>
                <h2 className="UIHeading--assembly UIHeading UIHeading--two">
                  {" "}
                  Making every student unstoppable
                </h2>
              </div>
              <div className="PrismicTextCallout-descriptionWrap PrismicTextCallout--descriptionLeft">
                <p className="UIParagraph--assembly UIParagraph" />
                <p>
                  At Quizlet, we believe that anyone can learn anything. All it
                  takes is a tenacious spirit, the right guidance. <br />
                  <br />
                </p>
                <p />
              </div>
              <div className="UIDiv PrismicTextCallout-cta PrismicTextCallout--descriptionLeft">
                <a
                  className="UIButton UIButton--hero"
                  role="button"
                  href="https://quizlet.com/blog/2019-impact-report"
                  onclick="return true"
                >
                  <span className="UIButton-wrapper"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-force-default="false"
        className="PrismicTextCallout PrismicTextCallout--whiteBackground PrismicTextCallout--rightImage"
      >
        <div className="UIContainer UIContainer--isFullBleed UIContainer--isMaxWidthLarge">
          <div className="PrismicTextCallout-content2">
            <div className="PrismicTextCallout-image">
              <img
                alt=""
                srcSet="https://images.prismic.io/quizlet-prod/8a272ccd-6569-419b-bddd-3e4eb20c363b_About_Artwork_2.png?auto=compress,format 1x, https://images.prismic.io/quizlet-prod/8a272ccd-6569-419b-bddd-3e4eb20c363b_About_Artwork_2.png?auto=compress,format 2x"
              />
            </div>
            <div className="PrismicTextCallout-description">
              <div className="PrismicTextCallout-title PrismicTextCallout--titleLeft">
                <h2 className="UIHeading--assembly UIHeading UIHeading--two">
                  It started with a victory
                </h2>
              </div>
              <div className="PrismicTextCallout-descriptionWrap PrismicTextCallout--descriptionLeft">
                <p className="UIParagraph--assembly UIParagraph" />
                <p>
                  In 2005 Andrew Sutherland created a studying tool to help him
                  ace a French vocabulary test. He aced it.
                </p>
                <p />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-force-default="false"
        className="PrismicTextCallout PrismicTextCallout--whiteBackground PrismicTextCallout--rightImage"
      >
        <div className="UIContainer UIContainer--isFullBleed UIContainer--isMaxWidthLarge">
          <div className="PrismicTextCallout-content1">
            <div className="PrismicTextCallout-image">
              <img
                alt=""
                srcSet="https://images.prismic.io/quizlet-prod/4c74e2d7-19fe-452c-8630-4c009c086464_Quiz_About_spot.png?auto=compress,format 1x, https://images.prismic.io/quizlet-prod/4c74e2d7-19fe-452c-8630-4c009c086464_Quiz_About_spot.png?auto=compress,format 2x"
              />
            </div>
            <div className="PrismicTextCallout-description">
              <div className="PrismicTextCallout-title PrismicTextCallout--titleLeft">
                <div className="PrismicTextCallout-heading">
                  <h2 className="UIHeading--assembly UIHeading UIHeading--two" />
                </div>
                <h2 className="UIHeading--assembly UIHeading UIHeading--two">
                  {" "}
                  Making every student unstoppable
                </h2>
              </div>
              <div className="PrismicTextCallout-descriptionWrap PrismicTextCallout--descriptionLeft">
                <p className="UIParagraph--assembly UIParagraph" />
                <p>
                  At Quizlet, we believe that anyone can learn anything. All it
                  takes is a tenacious spirit, the right guidance. <br />
                  <br />
                </p>
                <p />
              </div>
              <div className="UIDiv PrismicTextCallout-cta PrismicTextCallout--descriptionLeft">
                <a
                  className="UIButton UIButton--hero"
                  role="button"
                  href="https://quizlet.com/blog/2019-impact-report"
                  onclick="return true"
                >
                  <span className="UIButton-wrapper"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-force-default="false"
        className="PrismicTextCallout PrismicTextCallout--whiteBackground PrismicTextCallout--rightImage"
      >
        <div className="UIContainer UIContainer--isFullBleed UIContainer--isMaxWidthLarge">
          <div className="PrismicTextCallout-content2">
            <div className="PrismicTextCallout-image">
              <img
                alt=""
                srcSet="https://images.prismic.io/quizlet-prod/8a272ccd-6569-419b-bddd-3e4eb20c363b_About_Artwork_2.png?auto=compress,format 1x, https://images.prismic.io/quizlet-prod/8a272ccd-6569-419b-bddd-3e4eb20c363b_About_Artwork_2.png?auto=compress,format 2x"
              />
            </div>
            <div className="PrismicTextCallout-description">
              <div className="PrismicTextCallout-title PrismicTextCallout--titleLeft">
                <h2 className="UIHeading--assembly UIHeading UIHeading--two">
                  It started with a victory
                </h2>
              </div>
              <div className="PrismicTextCallout-descriptionWrap PrismicTextCallout--descriptionLeft">
                <p className="UIParagraph--assembly UIParagraph" />
                <p>
                  In 2005 Andrew Sutherland created a studying tool to help him
                  ace a French vocabulary test. He aced it.
                </p>
                <p />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* industry leader */}

      <div class="company-leaders">
        <div class="site_width_about">
          <h2 class="company-title caps">
            Industry leaders in
            <br />
            <b>Online Education</b>
          </h2>
          <div class="company-intro">
            eTeacherGroup develops human-centered education technology and has
            provided live instruction courses online since 2000. TekkieUni is
            one of the company's successful virtual schools, teaching kids
            coding, robotics and digital art.{" "}
          </div>{" "}
          <ul class="company-list">
            <li>
              <div class="item-num">20</div>
              <div class="main-text caps">YEARS OF EXPERIENCE</div>
              <div class="sub-text">In Online Courses</div>
            </li>
            <li>
              <div class="item-num">650</div>
              <div class="main-text caps">EMPLOYEES</div>
              <div class="sub-text">Around the World</div>
            </li>
            <li>
              <div class="item-num">190</div>
              <div class="main-text caps">COUNTRIES</div>
              <div class="sub-text">Around The World</div>
            </li>
            <li>
              <div class="item-num">120,000</div>
              <div class="main-text caps">GRADUATES</div>
              <div class="sub-text">Who Are Happy</div>
            </li>
          </ul>
        </div>{" "}
      </div>

      <section>
        <Schools></Schools>
      </section>

      {/* our team */}
      <section>
        <div className="ourteam_main_div">
        <h2>Code Juni Team</h2>
          <div className="our_team_inner_div">
            <div className="pic1">
              <img className="our_team_about_pic" src={parentpic1}></img>{" "}
            </div>
            <div className="pic2">
              {" "}
              <img className="our_team_about_pic" src={parentpic1}></img>
            </div>
            <div className="pic3">
              {" "}
              <img className="our_team_about_pic" src={parentpic1}></img>{" "}
            </div>
            <div className="pic4">
              {" "}
              <img className="our_team_about_pic" src={parentpic1}></img>{" "}
            </div>
            <div className="pic5">
              {" "}
              <img className="our_team_about_pic" src={parentpic1}></img>
            </div>
            <div className="pic6">
              {" "}
              <img className="our_team_about_pic" src={parentpic1}></img>
            </div>
            <div className="pic7">
              {" "}
              <img className="our_team_about_pic" src={parentpic1}></img>
            </div>
            <div className="pic8">
              {" "}
              <img className="our_team_about_pic" src={parentpic1}></img>
            </div>
            <div className="pic9">
              {" "}
              <img className="our_team_about_pic" src={parentpic1}></img>
            </div>
            <div className="pic11">
              <img className="our_team_about_pic" src={parentpic1}></img>{" "}
            </div>
            <div className="pic12">
              <img className="our_team_about_pic" src={parentpic1}></img>{" "}
            </div>
            <div className="pic13">
              <img className="our_team_about_pic" src={parentpic1}></img>{" "}
            </div>
            <div className="pic14">
              <img className="our_team_about_pic" src={parentpic1}></img>{" "}
            </div>
            <div className="pic15">
              <img className="our_team_about_pic" src={parentpic1}></img>{" "}
            </div>
            <div className="pic16">
              <img className="our_team_about_pic" src={parentpic1}></img>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutus;

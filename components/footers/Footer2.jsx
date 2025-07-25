"use client";

import { menuItems, menuItems2, menuItems3 } from "@/data/footer";
import Image from "next/image";
import Link from "next/link";
export default function Footer2() {
  return (
    <footer id="footer" className="style-1">
      <div className="item-1" />
      <div className="item-2" />
      <div className="themesflat-container">
        <div className="row">
          <div className="col-sm-12 col-lg-2">
            <div className="logo-footer" id="logo-footer">
              <Link href={`/`}>
                <Image
                  id="logo_footer"
                  src="/assets/images/logo/logo-eamot-white.png"
                  width={166}
                  alt="EAMOT Logo"
                  height={40}
                  data-retina="/assets/images/logo/logo-eamot-white.png"
                />
              </Link>
            </div>
          </div>
          <div className="col-sm-3 col-lg-2 list-1">
            <div className="footer-title ml-35">Solutions</div>
            <ul className="wg-menu ml-35">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-3 col-lg-2 list-2">
            <div className="footer-title">About Us</div>
            <ul className="wg-menu">
              {menuItems2.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-3 col-lg-3 list-3">
            <div className="footer-title ml--3">Support</div>
            <ul className="wg-menu ml--3">
              {menuItems3.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-3 col-lg-3 list-4">
            <div className="footer-title ml--3">Stay Updated</div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="comment-form mt-40 ml--3"
            >
              <fieldset className="email">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="style-1 mb-10"
                  name="email"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required
                />
              </fieldset>
              <div className="">
                <button className="" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="col-12">
            <div className="footer-bottom">
              <p className="text mb-0">
                Copyright @{new Date().getFullYear()},{" "}
                <a className="tf-color-green" href="#">
                  EAMOT
                </a>{" "}
                All Rights Reserved
              </p>
              <ul className="">
                <li>
                  <Link href="/terms-and-conditions">Terms Of Use</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>

                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

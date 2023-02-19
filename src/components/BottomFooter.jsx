import React from "react";
import Container from "./layout/Container";

function BottomFooter() {
  return (
    <div className="bg-neutral-700 py-6 text-slate-100">
      <Container>
        <div className="grid gap-y-6">
          <div className="flex items-center justify-evenly">
            <a href="https://dev3.growthbydesign.org/">
              <img
                decoding="async"
                src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/logo-footer.png"
                alt=""
                srcset=""
              />
            </a>
            <a className="text-lg font-bold" href="#">
              Privacy Policy
            </a>
            <a className="text-lg font-bold" href="#">
              Terms &amp; Disclosures
            </a>
            <a className="text-lg font-bold" href="#">
              Compliant Notice
            </a>
          </div>
          <div className="flex items-center justify-center gap-x-8">
            <div>
              <img
                decoding="async"
                src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/ncua-logo.png"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                decoding="async"
                src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/equal-housing-logo.png"
                alt=""
                srcset=""
              />
            </div>
            <div>
              <img
                decoding="async"
                src="https://dev3.growthbydesign.org/wp-content/uploads/2022/11/accredited-business.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="grid justify-center gap-y-1 text-sm">
            <div className="flex justify-center gap-x-4">
              <div>NMLS ID #736037</div>
              <div>NUMBER #311985791</div>
            </div>
            <div>
              Copyright © <span id="year">2023</span> Telco Plus Credit Union.
              Federally Insured By NCUA.
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BottomFooter;

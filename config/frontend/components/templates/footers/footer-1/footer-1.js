import { SocialLink } from "@/elements";

export default function Footer1({ content }) {
  if (!content) return <></>;
  let { collections, global } = { ...content };
  const collectionNames = {
    PRIMARY_MENU_ITEMS: "primary-menu-items",
    SECONDARY_MENU_ITEMS: "secondary-menu-items"
  };
  let primaryMenuItems = [];
  let secondaryMenuItems = [];
  let socialLinks = [];
  if (collections) {
    if (collections[collectionNames.PRIMARY_MENU_ITEMS]) {
      primaryMenuItems = collections[collectionNames.PRIMARY_MENU_ITEMS].items;
    }
    if (collections[collectionNames.SECONDARY_MENU_ITEMS]) {
      secondaryMenuItems =
        collections[collectionNames.SECONDARY_MENU_ITEMS].items;
    }
  }

  return (
    <footer id="footer-1" className="bg-primary-custom-light template">
      <div className="max-w-screen-xl px-4 pt-20 pb-10 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/5 mb-10 lg:mb-0">
            <a href="/">
              <img className="w-16" src="/images/logo-light.png" alt="" />
            </a>
            <p className="text-primary-70 font-bold tracking-wide text-xs my-5 lg:mr-5">
              {global.name}
            </p>
            <p className="text-primary-70 tracking-wide text-xs my-5 lg:mr-5">{global.description}</p>
          </div>
          <div className="flex flex-wrap lg:w-4/5">
            <div className="w-1/2 md:w-1/4 lg:w-1/5 lg:flex-grow lg:ml-5">
              <ul className="mb-10 lg:mb-0">
                <li>
                  <h5 className="mb-5">Support</h5>
                </li>

                {primaryMenuItems &&
                  primaryMenuItems.map((menuItem, i) => {
                    return (
                      <li className="mb-2" key={i}>
                        <a
                          className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                          href={`/${menuItem.attributes.slug}`}
                        >
                          {menuItem.attributes.label}
                        </a>
                      </li>
                    );
                  })}

                {/* <li className="mb-2">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="/events/page-1/"
                  >
                    Events
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="/subscribe/"
                  >
                    Subscribe
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="/donate/"
                  >
                    Donate
                  </a>
                </li> */}
                {/* <li className="mb-2">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="/contact/"
                  >
                    Sponsor
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/5 lg:flex-grow lg:ml-5">
              <ul className="mb-10 lg:mb-0">
                <li>
                  <h5 className="mb-5">Organisation</h5>
                </li>
                {secondaryMenuItems &&
                  secondaryMenuItems.map((menuItem, i) => {
                    return (
                      <li className="mb-2" key={i}>
                        <a
                          className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                          href={`/${menuItem.attributes.slug}/`}
                        >
                          {menuItem.attributes.label}
                        </a>
                      </li>
                    );
                  })}
                {/* <li className="mb-2">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="/volunteer/"
                  >
                    Volunteer
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="/about/"
                  >
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="/contact/"
                  >
                    Contact
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/5 lg:flex-grow lg:ml-5">
              <ul className="mb-10 lg:mb-0">
                <li>
                  <h5 className="mb-5">Privacy</h5>
                </li>
                <li className="mb-2">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="http://example.com"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="http://example.com"
                  >
                    Terms
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="http://example.com"
                  >
                    Admin
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 md:w-1/4 lg:w-1/5 lg:flex-grow lg:ml-5">
              <ul className="mb-10 lg:mb-0">
                <li>
                  <h5 className="mb-5">Find us on:</h5>
                </li>
                <li className="mb-2">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="http://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Social 1
                  </a>
                </li>
                <li className="mb-5">
                  <a
                    className="text-primary tracking-wider leading-none text-sm hover:text-primary-50 hover:underline"
                    href="http://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Social 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t border-primary-30 mt-20 mb-10" />
        <div className="flex flex-col md:flex-row items-center justify-between text-center">
          <p className="text-xs text-primary-50 tracking-wider mb-2 sm:mb-0">
            © <span id="year">2020</span> {global.name}. All Rights Reserved.
          </p>
          <p className="text-xs text-primary-50">
            <a
              className="text-xs tracking-wider text-primary-50 hover:text-primary"
              href={`tel:${global.tel}`}
            >
              {global.tel}
            </a>
            <span className="mx-2">|</span>
            <a
              className="text-xs tracking-wider text-primary-50 hover:text-primary"
              href={`mailto:${global.email}`}
            >
              {global.email}
            </a>
          </p>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="max-w-screen-xl w-full fixed top-0 z-index--2 px-4 mx-auto mix-blend-colo">
          <div className="flex justify-between">
            <div className="border-l border-primary-20 opacity-25 h-screen flex-grow"></div>
            <div className="border-l border-primary-20 opacity-25 h-screen flex-grow"></div>
            <div className="border-l border-primary-20 opacity-25 h-screen flex-grow"></div>
            <div className="border-l border-primary-20 opacity-25 h-screen flex-grow"></div>
            <div className="border-l border-r border-primary-20 opacity-25 h-screen flex-grow"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

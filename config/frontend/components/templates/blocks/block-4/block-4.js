import Link from "next/link";
import getConfig from "next/config";
import CTAButtonSimple from "../../../elements/cta-button-simple";

export default function Block4({ content }) {
  if (!content) return <></>;
  const { publicRuntimeConfig } = getConfig();
  let { attributes, collections } = content;
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }
  return (
    <section id="block-4" className="py-32 template">
      <div className="max-w-screen-xl px-4 mx-auto">
        <p className="pre-headline-secondary">{attributes.preheading}</p>
        <h2 className="mb-8 md:mb-16 leading-tight">{attributes.heading}</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5">
            <div className="sm:ml-6 lg:ml-12">
              <p className="text-primary-50 mb-12 lg:max-w-2xl sm:pr-4 lg:pr-8 leading-7 ">
                {attributes.body}
              </p>
              <CTAButtonSimple attributes={attributes} />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center flex-wrap">
            {items &&
              items.map((sponsor, i) => {
                return (
                  <div className="w-1/2 md:w-1/3" key={i}>
                    <Link href={attributes.ctaUrl}>
                      <a
                        href={sponsor.attributes.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="filter-grayscale-1 hover:filter-grayscale-0 transition-filter duration-500 w-full px-2 sm:px-10 pb-8" 
                          data-aos="fade-up" 
                          data-aos-once="true"
                          src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                            sponsor.attributes.image.data.attributes.url
                          }`}
                          alt={sponsor.attributes.heading}
                        />
                      </a>
                    </Link>           
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

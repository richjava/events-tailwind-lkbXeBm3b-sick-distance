import getConfig from "next/config";
import { CTAButton } from "@/elements";

export default function Block6({ content }) {
  if (!content) return <></>;
  const { publicRuntimeConfig } = getConfig();
  let { attributes } = content;
  return (
    <section
      id="block-6"
      className="cta-bg-image pt-32 mb-24 md:mb-32 xl:mb-48"
    >
      <div className="flex items-start flex-col lg:flex-row relative">
        <div
          className="w-full lg:w-2/5 lg:mt-17"
          data-aos="fade-up"
          data-aos-offset="250"
          data-aos-duration="500"
        >
          <img
            className="cta-generic-img filter-grayscale-1 home-about-image cta-generic-img home-about-image hover:filter-grayscale-0 transition-filter transition-all duration-500 blur-out"
            src={`${publicRuntimeConfig.BACKEND_URL || ""}${
              attributes.image.data.attributes.url
            }`}
            alt={attributes.heading}
          />
        </div>
        <div className="px-4 py-12 lg:pt-10 lg:pb-32 xl:pt-32 xl:pb-24 lg:px-10 xl:ml-8 w-full lg:w-3/5">
          <p className="pre-headline-white">{attributes.preheading}</p>
          <h2 className="text-white mb-10">{attributes.heading}</h2>
          <div className="sm:ml-6 lg:ml-12">
            <p className="text-white text-lg mb-6 lg:max-w-2xl sm:pr-4 leading-8">
              {attributes.blurb}
            </p>
            <p className="text-primary-10 mb-20 lg:max-w-2xl sm:pr-4 leading-7">
              {attributes.body}
            </p>
            <div className="inline-flex items-center group">
              <CTAButton attributes={attributes} type="primaryBg"/>
            </div>
          </div>
        </div>
        <div className="bg-secondary absolute top-0 right-0 w-full lg:w-4/5 h-full lg:-mt-16 z-index--1"></div>
      </div>
    </section>
  );
}

import Link from "next/link";

const getHTML = (content) => {
  return {
    __html: content,
  };
};

export default function FaqBlock({ content }) {
  if (!content) return <></>;
  let { collections } = content;

  if (!collections) {
    throw new Error(
      `No collections attribute provided in sections.json for template`
    );
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }
  return (
    <section id="block-6" className="cta-multi relative pb-16 template">
      <div className="max-w-screen-xl px-4 mx-auto pt-32 pb-10">
        <h2 className="text-center mb-20">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap">
            {items &&
              items.map((item, i) => (
                <div className="w-1/2 px-4 mb-10" key={i}>
                  <h5 className="font-sans text-lg font-semibold mb-2">
                    {item.attributes.question}
                  </h5>
                  <div
                    dangerouslySetInnerHTML={getHTML(item.attributes.answer)}
                  ></div>
                </div>
              ))}
          </div>
        </div>
        <p className="text-center my-20">
          Didn&apos;t answer your question?&nbsp;
          <Link href="/contact">
            <a className="underline">Contact us</a>
          </Link>
        </p>
      </div>
      <div className="absolute w-full h-full bg-primary-custom-light bottom-0 z-index--1"></div>
    </section>
  );
}

export default function Block7({ content }) {
  if (!content) return <></>;
  let { attributes } = content;
  return (
    <section id="block-7" className="cta-multi py-24 md:py-32 template">
        <div className="max-w-screen-xl px-4 mx-auto">
            <div className="flex flex-col md:flex-row">
                <div className="w-full lg:w-2/5">
                    <p className="pre-headline-secondary">{attributes.preheading}</p>
                    <h2 className="mb-16 leading-tight">{attributes.heading}</h2>
                </div>
                <div className="w-full lg:w-3/5 md:mt-8 sm:mx-4 lg:ml-10">
                    <h4 className="mb-6">{attributes.subheading1}</h4>
                    <p className="text-primary-50 mb-12 lg:max-w-2xl md:pr-4 leading-7">{attributes.blurb1}</p>
                    {/* {% call ctaBtnSimple.default({text: args.cta1, url: args.url1}) %}{% endcall %} */}
                    <h4 className="mb-6">{attributes.subheading2}</h4>
                    <p className="text-primary-50 mb-12 lg:max-w-2xl md:pr-4 leading-7">{attributes.blurb2}</p>
                    {/* {% call ctaBtnSimple.default({text: args.cta2, url: args.url2}) %}{% endcall %} */}
                </div>
            </div>
        </div>
    </section>
  );
}

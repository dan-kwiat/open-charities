const logos = [
  {
    imgSrc: "/images/logos/tythe.png",
    alt: "Tythe",
    href: "https://tythe.org",
  },
  {
    imgSrc: "/images/logos/sib.png",
    alt: "Social Investment Business",
    href: "https://www.sibgroup.org.uk",
  },
  {
    imgSrc: "/images/logos/timetospare.png",
    alt: "Time to Spare",
    href: "https://timetospare.com",
  },
  {
    imgSrc: "/images/logos/givingisgreat.png",
    alt: "Giving is Great",
    href: "http://givingisgreat.org",
  },
  {
    imgSrc: "/images/logos/cast.png",
    alt: "CAST",
    href: "https://www.wearecast.org.uk",
  },
  {
    imgSrc: "/images/logos/cytora.png",
    alt: "Cytora",
    href: "https://cytora.com",
  },
  {
    imgSrc: "/images/logos/chapmancharitabletrust.png",
    alt: "Chapman Charitable Trust",
    href: "https://www.chapmancharitabletrust.org.uk",
  },
  {
    imgSrc: "/images/logos/esmeefairbairn.png",
    alt: "Esmée Fairbairn",
    href: "https://esmeefairbairn.org.uk",
  },
  {
    imgSrc: "/images/logos/lloydsbankfoundation.png",
    alt: "Lloyds Bank Foundation",
    href: "https://www.lloydsbankfoundation.org.uk",
  },
]

const ITEM_WIDTH = 320

// For this to work, the unique logos must together be wider than the screen

export default function LogoCloud() {
  return (
    <div className="bg-white">
      <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider px-4">
        Powering startups, grantmakers and researchers
      </p>
      <div className="mt-12 w-full relative overflow-hidden">
        <div style={{ width: ITEM_WIDTH * logos.length * 2 }}>
          <div className="scroll-infinite whitespace-nowrap">
            {[...logos, ...logos].map(({ alt, imgSrc, href }, i) => (
              <div
                key={i}
                className="inline-block px-3"
                style={{ width: ITEM_WIDTH }}
              >
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={href}
                  className="flex items-center justify-center"
                >
                  <img className="max-h-12" alt={alt} src={imgSrc} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

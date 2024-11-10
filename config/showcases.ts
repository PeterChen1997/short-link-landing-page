const NEXT_PUBLIC_SHOWCASE_LIST = process.env.NEXT_PUBLIC_SHOWCASE_LIST;

const ENV_SHOWCASE_LIST =
  (NEXT_PUBLIC_SHOWCASE_LIST &&
    NEXT_PUBLIC_SHOWCASE_LIST.split(",").map((i) => {
      return {
        url: i,
      };
    })) ||
  [];

export const showcases = [
  {
    // title: 'Link Fun',
    // description: 'A free, open-source, and powerful link fun, ideal for various projects, enabling you to create a landing page in under an hour.',
    url: "https://www.linkp.fun",
    // logo: '',
    // og: 'https://www.linkp.fun/og.png'
  },
  {
    url: "https://PHCopilot.ai/",
  },
  {
    url: "https://regeai.com/",
  },
].concat(ENV_SHOWCASE_LIST);


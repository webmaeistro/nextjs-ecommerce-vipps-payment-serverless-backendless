import Cmp, { getData } from 'page-components/index';

export async function getStaticProps() {
  const data = await getData({ asPath: '/web-frontpage' });

  return {
    props: {
      ...data,
    },
    unstable_revalidate: 1,
  };
}

export default Cmp;

import React from 'react';
import DefaultLayout from 'components/templates/DefaultLayout';
import Link from 'next/link';

const Home = () => {
  return (
    <DefaultLayout title={'Home'}>
      <div>
        <p>
          hello from home page Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Illum eos nulla quis quas illo obcaecati, sint minus
          quam rerum, ex voluptatem molestiae aut esse praesentium fugiat dolore
          ea magnam eum. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quibusdam aliquam, aperiam aspernatur necessitatibus, amet,
          explicabo corporis quasi ut nulla exercitationem dolore distinctio? Ut
          quidem officia fugit qui. Cumque, eius aperiam?
        </p>

        <Link href="/profile">
          <a>profile</a>
        </Link>
      </div>
    </DefaultLayout>
  );
};

export default Home;

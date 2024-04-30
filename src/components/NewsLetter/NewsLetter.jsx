const NewsLetter = () => {
  return (
    <section className="my-24">
      <div className="max-w-screen-xl mx-auto rounded-md bg-amber-100 dark:bg-gray-500">
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-2xl md:text-4xl antialiased font-semibold leading-none text-center text-amber-600 dark:text-amber-50">
            Subscribe to our newsletter
          </h1>
          <p className="pt-2 pb-8 text-base lg:text-xl antialiased text-center text-amber-600 dark:text-gray-800">
            Find out about events and other news
          </p>
          <div className="flex flex-row ">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 border-none rounded-l-lg sm:w-2/3 dark:bg-gray-700"
            />
            <button type="button" className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

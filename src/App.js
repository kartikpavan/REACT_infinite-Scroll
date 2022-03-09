import React, { useState, useEffect } from 'react';
import Photo from './components/Photo';
import { FaSearch } from 'react-icons/fa';

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainURL = `https://api.unsplash.com/photos/`;
const searchURL = `https://api.unsplash.com/search/photos/`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    try {
      setLoading(true);
      let url;
      url = `${mainURL}${clientID}`;
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('hello');
  };

  return (
    <main className="my-10 flex flex-col items-center gap-10">
      <div className=" grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-10  ">
        <header>
          <h1 className="font-semibold text-6xl">Infinite Scroll</h1>
          <p className="text-gray-500 text-sm my-1 font-semibold">
            Made with Unsplash API
          </p>
          <hr />
        </header>

        <article>
          <form className="mt-4">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-[300px] "
              />
              <button
                className="btn btn-accent"
                type="submit"
                onClick={submitHandler}
              >
                <FaSearch />
              </button>
            </div>
          </form>
        </article>
      </div>

      <section className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-20 items-center ">
        {photos.map((item) => {
          return <Photo key={item.id} item={item} />;
        })}
      </section>
      {loading && <h2 className="text-6xl container mx-auto">Loading......</h2>}
    </main>
  );
};

export default App;

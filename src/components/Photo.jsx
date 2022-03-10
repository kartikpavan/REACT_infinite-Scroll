import React from 'react';

const Photo = ({ item }) => {
  return (
    <article>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-5 py-5 pb-0 ">
          <img
            src={item.urls.regular}
            alt={item.user.name}
            className="rounded-xl focus:bg-gray-900  cursor-pointer"
          />
        </figure>
        <div className="card-body items-center text-center"></div>
      </div>
    </article>
  );
};

export default Photo;

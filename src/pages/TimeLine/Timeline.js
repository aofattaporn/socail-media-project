import React from "react";
import components from "../../components";

const Timeline = () => {
  const monck = [
    {
      image:
        "https://i.pinimg.com/736x/c8/0e/45/c80e45faaf72732c79401c392c8f5501.jpg",
      descript:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      image:
        "https://i.pinimg.com/564x/30/68/79/306879837ec47945ea221a3576476f93.jpg",
      descript:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];
  return (
    <article className="conatianer-100 flex  ">
      <div className=" w-1/5 hidden md:block"></div>
      <button
        className="w-4/6 grow bg-gray-700 h-auto my-20 py-10 px-2 text-center  md:px-5 lg:px-28 xl:px-40 mx-2 space-y-20"
        style={{ backgroundColor: "#21252B" }}
      >
        {/* all post in time-line */}
        <components.CreatePost></components.CreatePost>

        {/* test-post-show  */}
        {monck.map((post, index) => {
          return (
            <components.Post
              key={index}
              image={post.image}
              descript={post.descript}
            ></components.Post>
          );
        })}
      </button>
      <div className=" md:w-96">{/* creete chat box  */}</div>
    </article>
  );
};

export default Timeline;

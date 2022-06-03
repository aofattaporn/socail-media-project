import React from "react";

const Post = (props) => {
  const { image, descript } = props;

  return (
    <div className="  bg-gray-700 h-auto rounded-lg shadow-lg shadow-white-500/40">
      {image !== null && image !== "" ? (
        <div className="image-container flex justify-center">
          <img
            className="object-contain h-96"
            src={image}
            alt="imgae-post"
          ></img>
        </div>
      ) : (
        <></>
      )}

      <article className=" bg-white rounded-lg p-5 text-gray-900 shadow-lg shadow-white-500/40 ">
        <p>{descript}</p>
        {/* <div className="container-100 bg-gray-800 mt-5">a</div> */}
      </article>
    </div>
  );
};

export default Post;

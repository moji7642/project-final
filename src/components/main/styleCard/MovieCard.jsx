import React from "react";
import { baseUrlImage } from "../../../api";

export default function MovieCard({ img, title, rating }) {
  return (
    <>
      <div  className=" bg-gray-300 aspect-[1/2] relative rounded overflow-hidden ">
        <img
          src={`${baseUrlImage}/w1280/${img}`}
          className="object-cover w-full h-full"
          alt="test"
        />

        <div className="opacity-0 flex flex-col justify-end p-8 absolute bottom-0 left-0 w-full h-full hover:opacity-100 bg-gradient-to-b from-[#0f172a12] to-[#0f172a81] hover:from-[#0f172a2a] hover:to-[#0f172a9c]">
          <h3>{title}</h3>

          <div className="flex gap-2 mt-2">
            <span className="text-yellow-400">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </span>

            <span>{rating}/ 10</span>
          </div>
        </div>
      </div>
    </>
  );
}

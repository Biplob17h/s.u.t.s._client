import React from 'react';

const EventsPost = () => {
    return (
        <div>
        <h1 className="text-xl font-semibold">Post an event</h1>
        <textarea
          className="textarea textarea-bordered w-full pb-20 rounded-none bg-slate-100 border-none"
          placeholder="Details"
        ></textarea>
        <div className="flex my-2 gap-5">
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full rounded-none bg-slate-100 border-none"
          />
          <input
            type="text"
            placeholder="Event Time"
            className="input input-bordered w-full rounded-none bg-slate-100 border-none"
          />
        </div>
        <input
          type="text"
          placeholder="Event Location"
          className="input input-bordered w-full rounded-none bg-slate-100 border-none"
        />
        <input type="file" className="file-input w-full mt-2 rounded-none" />
        <button
          className="btn rounded-none px-10 bg-black text-white hover:bg-slate-700 my-2"
          type="submit"
        >
          Submit
        </button>
      </div>
    );
};

export default EventsPost;
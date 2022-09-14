import React from "react";

const Tabs = () => (
  <section className="mb-5">
    <div className="flex gap-2">
      <div className="border-b-2 border-blue-600 pb-2 cursor-pointer">
        All Tasks <small className="text-gray-600">(3)</small>
      </div>
      <div className="pb-2 cursor-pointer">
        Completed <small className="text-gray-600">(0)</small>
      </div>
    </div>
  </section>
);

export default Tabs;

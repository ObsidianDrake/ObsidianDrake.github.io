import React from "react";

const events = [
  { title: "技術研討會", image: "/assets/images/event1.jpg" },
  { title: "攝影展覽", image: "/assets/images/event2.jpg" },
  { title: "黑客松", image: "/assets/images/event3.jpg" },
  { title: "健身大會", image: "/assets/images/event4.jpg" },
  { title: "開發者聚會", image: "/assets/images/event5.jpg" },
];

function Events() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-red-400">參加過的活動</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {events.map((event, index) => (
          <div key={index} className="text-center">
            <img src={event.image} alt={event.title} className="w-full h-40 object-cover rounded-lg" />
            <p className="mt-2 text-lg">{event.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;

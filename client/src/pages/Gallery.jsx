
import { useEffect, useState } from "react";
import { getGalleryItems } from "../services/galleryService";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const items = await getGalleryItems();
        setGalleryItems(items);
      } catch (error) {
        setError("Unable to load gallery images");
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) {
    return <p className="py-20 text-center">Loading gallery...</p>;
  }

  if (error) {
    return <p className="py-20 text-center text-red-600">{error}</p>;
  }

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold text-[#680818]">OUR GALLERY</p>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            A Closer Look at Trackly
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Explore our warehouse, delivery operations, and logistics services.
          </p>
        </div>

        {galleryItems.length === 0 ? (
          <p className="py-12 text-center text-gray-500">
            No gallery images available yet.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item._id}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <img
                  src={`http://localhost:5000${item.image}`}
                  alt={item.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h2>
                  {item.description && (
                    <p className="mt-2 text-sm text-gray-600">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

const API_URL = "http://localhost:5000/api/v1/gallery";

export const getGalleryItems = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch gallery items");
  }

  const data = await response.json();
  return data.galleryItems;
};
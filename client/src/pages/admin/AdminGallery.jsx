import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/v1/gallery";

const AdminGallery = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("banner");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    const token = localStorage.getItem("token");

    const fetchGalleryItems = async () => {
        try {
            const response = await fetch(`${API_URL}/admin`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Unable to load gallery");
            }

            setGalleryItems(data.galleryItems);
        } catch (error) {
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchGalleryItems();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!image) {
            setMessage("Please select an image");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);
        formData.append("image", image);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Upload failed");
            }

            setMessage("Image uploaded successfully");
            setTitle("");
            setDescription("");
            setCategory("banner");
            setImage(null);
            e.target.reset();

            fetchGalleryItems();
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this image?")) {
            return;
        }

        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Delete failed");
            }

            setGalleryItems((items) => items.filter((item) => item._id !== id));
            setMessage("Image deleted successfully");
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleStatusChange = async (item) => {
        try {
            const response = await fetch(`${API_URL}/${item._id}/status`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    isActive: !item.isActive,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to update status");
            }

            setGalleryItems((items) =>
                items.map((galleryItem) =>
                    galleryItem._id === item._id ? data.galleryItem : galleryItem
                )
            );

            setMessage("Gallery status updated successfully");
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <section className="min-h-screen bg-gray-50 px-5 py-10 sm:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <p className="font-semibold text-[#680818]">TRACKLY ADMIN</p>
                    <h1 className="mt-2 text-3xl font-bold text-gray-900">
                        Gallery & Content CMS
                    </h1>
                    <p className="mt-2 text-gray-600">
                        Manage banners, service images and company images.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
                    <form
                        onSubmit={handleSubmit}
                        className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                        <h2 className="mb-5 text-xl font-semibold text-gray-900">
                            Upload New Image
                        </h2>

                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Image Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#680818]"
                            placeholder="Enter image title"
                        />

                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#680818]"
                        >
                            <option value="banner">Banner</option>
                            <option value="service">Service Image</option>
                            <option value="company">Company Section</option>
                        </select>

                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="3"
                            className="mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#680818]"
                            placeholder="Enter a short description"
                        />

                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            Select Image
                        </label>
                        <input
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                            className="mb-5 w-full text-sm text-gray-600"
                        />

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#680818] px-4 py-3 font-semibold text-white transition hover:bg-[#500512]"
                        >
                            Upload Image
                        </button>

                        {message && (
                            <p className="mt-4 text-sm text-gray-700">{message}</p>
                        )}
                    </form>

                    <div>
                        <div className="mb-5 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Uploaded Images
                            </h2>
                            <span className="rounded-full bg-[#680818]/10 px-3 py-1 text-sm font-semibold text-[#680818]">
                                {galleryItems.length} items
                            </span>
                        </div>

                        {loading ? (
                            <p className="py-10 text-center text-gray-500">
                                Loading images...
                            </p>
                        ) : galleryItems.length === 0 ? (
                            <div className="rounded-xl border border-dashed border-gray-300 bg-white px-5 py-12 text-center text-gray-500">
                                No images uploaded yet.
                            </div>
                        ) : (
                            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                                {galleryItems.map((item) => (
                                    <div
                                        key={item._id}
                                        className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                                    >
                                        <img
                                            src={`http://localhost:5000${item.image}`}
                                            alt={item.title}
                                            className="h-44 w-full object-cover"
                                        />

                                        <div className="p-4">
                                            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium capitalize text-gray-700">
                                                {item.category || "Uncategorized"}
                                            </span>

                                            <h3 className="mt-3 font-semibold text-gray-900">
                                                {item.title}
                                            </h3>

                                            {item.description && (
                                                <p className="mt-1 text-sm text-gray-600">
                                                    {item.description}
                                                </p>
                                            )}

                                            <button
                                                type="button"
                                                onClick={() => handleDelete(item._id)}
                                                className="mt-4 w-full rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                                            >
                                                Delete
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => handleStatusChange(item)}
                                                className={`mt-2 w-full rounded-lg px-3 py-2 text-sm font-medium ${item.isActive
                                                    ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
                                                    : "bg-green-50 text-green-700 hover:bg-green-100"
                                                    }`}
                                            >
                                                {item.isActive ? "Deactivate" : "Activate"}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminGallery;
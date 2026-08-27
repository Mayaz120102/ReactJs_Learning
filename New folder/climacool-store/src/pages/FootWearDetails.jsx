import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const FootWearDetails = () => {
  const { id } = useParams();
  const { footWears } = useFetch();

  const singleFootWear = footWears.find((f) => f.id == id);

  if (!singleFootWear) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Footwear not found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500">
          Home <span className="mx-2">/</span>
          Footwear <span className="mx-2">/</span>
          <span className="text-gray-900">{singleFootWear.name}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left - Image Gallery */}
          <div>
            <div className="overflow-hidden rounded-2xl bg-white">
              <img
                src={singleFootWear.image[0]}
                alt={singleFootWear.name}
                className="h-[500px] w-full object-contain p-6 transition duration-500 hover:scale-105 sm:h-[600px]"
              />
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {singleFootWear.image.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  <img
                    src={img}
                    alt={`${singleFootWear.name} ${index + 1}`}
                    className="h-24 w-full object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Product Information */}
          <div className="flex flex-col">
            {/* Brand */}
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
              {singleFootWear.brand}
            </p>

            {/* Product Name */}
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {singleFootWear.name}
            </h1>

            {/* Product Meta */}
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
                {singleFootWear.silhouette}
              </span>

              <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
                {singleFootWear.color}
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm capitalize text-gray-700">
                {singleFootWear.gender?.join(", ")}
              </span>
            </div>

            {/* Price */}
            <div className="mt-8">
              <p className="text-3xl font-bold text-gray-900">
                ${singleFootWear.price}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Price includes the listed product
              </p>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-gray-200" />

            {/* Size Selection */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Select Size
                </h2>

                <button className="text-sm font-medium text-gray-500 underline hover:text-gray-900">
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
                {singleFootWear.sizes.map((size) => (
                  <button
                    key={size}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-800 transition hover:border-black hover:bg-black hover:text-white"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="mt-8 w-full rounded-xl bg-black px-6 py-4 text-base font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]">
              Add to Cart — ${singleFootWear.price}
            </button>

            {/* Product Details */}
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                Product Details
              </h2>

              <p className="text-base leading-7 text-gray-600">
                {singleFootWear.description}
              </p>
            </div>

            {/* Additional Information */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
              <div>
                <p className="text-sm text-gray-500">Brand</p>
                <p className="mt-1 font-medium text-gray-900">
                  {singleFootWear.brand}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Silhouette</p>
                <p className="mt-1 font-medium text-gray-900">
                  {singleFootWear.silhouette}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Color</p>
                <p className="mt-1 font-medium text-gray-900">
                  {singleFootWear.color}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Release Date</p>
                <p className="mt-1 font-medium text-gray-900">
                  {new Date(singleFootWear.released).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootWearDetails;

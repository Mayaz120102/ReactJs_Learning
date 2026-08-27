import { Link } from "react-router";
import useFetch from "../hooks/useFetch";
import FootwearCard from "../components/FootwearCard";

const Home = () => {
  const { footWears, loading, err } = useFetch();

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black" />
          <p className="text-sm font-medium text-gray-500">
            Loading footwear...
          </p>
        </div>
      </div>
    );
  }

  if (err) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="rounded-2xl bg-red-50 px-8 py-6 text-center">
          <h2 className="text-xl font-semibold text-red-700">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm text-red-500">{err}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-20 md:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
              Step Into Style
            </p>

            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl">
              Find Your
              <span className="block text-red-500">Perfect Pair.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
              Discover premium sneakers and iconic footwear designed to take
              your everyday style to the next level.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/footwears"
                className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-gray-200"
              >
                Shop Footwear
              </Link>

              <a
                href="#featured"
                className="rounded-xl border border-gray-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white"
              >
                Explore Collection
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 rounded-full bg-red-600/20 blur-3xl" />

            <img
              src={footWears[0]?.image?.[0]}
              alt={footWears[0]?.name || "Featured footwear"}
              className="relative z-10 h-[420px] w-full object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl">
              👟
            </div>
            <h3 className="font-bold text-gray-900">Sneakers</h3>
            <p className="mt-1 text-sm text-gray-500">
              Everyday styles built for comfort.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl">
              ⭐
            </div>
            <h3 className="font-bold text-gray-900">Iconic Styles</h3>
            <p className="mt-1 text-sm text-gray-500">
              Classic silhouettes that never go out of style.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-xl">
              🔥
            </div>
            <h3 className="font-bold text-gray-900">Latest Drops</h3>
            <p className="mt-1 text-sm text-gray-500">
              Discover the newest additions to our collection.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        id="featured"
        className="mx-auto max-w-7xl px-6 pb-16 lg:px-8"
      >
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Our Collection
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Footwear
            </h2>

            <p className="mt-2 text-gray-500">
              Handpicked styles you'll want to wear.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {footWears.slice(0, 6).map((footware) => (
            <FootwearCard
              key={footware.id}
              footware={footware}
            />
          ))}
        </div>

        {/* Mobile / Bottom CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/footwears"
            className="inline-flex items-center rounded-xl bg-black px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-gray-800 active:scale-95"
          >
            See All Footwears
            <span className="ml-2 text-lg">→</span>
          </Link>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">
            Your style starts here
          </p>

          <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
            What's your next pair?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Browse our complete collection and find footwear that matches your
            style.
          </p>

          <Link
            to="/footwears"
            className="mt-6 inline-block rounded-xl bg-red-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Browse Collection
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;

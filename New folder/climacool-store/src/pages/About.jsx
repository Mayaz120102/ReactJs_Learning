const About = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            About Climacool
          </p>

          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl">
            Built for your
            <span className="text-red-500"> next step.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Climacool is a footwear destination for people who believe the
            right pair of shoes can change the way you move, feel, and express
            yourself.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
              More than just footwear.
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              We believe footwear is more than something you wear. It is part
              of your identity, your lifestyle, and your everyday journey.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From timeless classics to modern silhouettes, Climacool brings
              together footwear designed for comfort, confidence, and
              everyday style.
            </p>
          </div>

          <div className="rounded-3xl bg-black p-10 text-white shadow-xl">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-black text-red-500">100+</p>
                <p className="mt-2 text-sm text-gray-400">Styles</p>
              </div>

              <div>
                <p className="text-4xl font-black text-red-500">24/7</p>
                <p className="mt-2 text-sm text-gray-400">Online Shopping</p>
              </div>

              <div>
                <p className="text-4xl font-black text-red-500">01</p>
                <p className="mt-2 text-sm text-gray-400">Goal: Your Style</p>
              </div>

              <div>
                <p className="text-4xl font-black text-red-500">∞</p>
                <p className="mt-2 text-sm text-gray-400">Ways to Style</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Why Climacool
            </p>

            <h2 className="mt-3 text-3xl font-black text-gray-900">
              What we stand for
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-xl text-white">
                👟
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Great Footwear
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                We focus on footwear that combines iconic design with
                everyday wearability.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-xl text-white">
                ❤️
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Style First
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Your shoes should reflect who you are. That's why we celebrate
                different styles and personalities.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-xl text-white">
                ⚡
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Keep Moving
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Whether you're heading out or staying on the move, we believe
                your footwear should keep up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">
            Ready to find your next pair?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-red-100">
            Explore our collection and discover footwear that fits your style.
          </p>

          <a
            href="/footwears"
            className="mt-7 inline-block rounded-xl bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-gray-900"
          >
            Explore Footwears
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;

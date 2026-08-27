import { useEffect, useState } from "react";
import FootwearCard from "../components/FootwearCard";
import useFetch from "../hooks/useFetch";

const Footwears = () => {
  const { footWears, loading, err } = useFetch();

  const [search, setSearch] = useState("")

  const [copyFootwears, setCopyFootwears] = useState([])

  const [sort, setSort] = useState("")


  useEffect(()=>{
    let res = [...footWears]

    if(!search.trim() !== ""){
      res = res.filter(f=>f.name.toLowerCase().includes(search.toLowerCase()))
    }
    
    if(sort == "low"){
      res.sort((a,b)=>a.price - b.price)
    }

    if(sort == "high"){
      res.sort((a,b)=>b.price - a.price)
    }
    setCopyFootwears(res)
  },[footWears,search,sort])

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
      {/* Page Header */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">
            Climacool Collection
          </p>

          <div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                All Footwears
              </h1>

              <p className="mt-3 max-w-xl text-gray-400">
                Explore our complete collection of premium footwear and find
                your perfect pair.
              </p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-gray-900 px-5 py-3">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Collection
              </p>
              <p className="mt-1 text-xl font-bold text-white">
                {footWears.length}{" "}
                <span className="text-sm font-normal text-gray-400">
                  Products
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Toolbar */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Browse Collection
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Showing all available footwear
            </p>
          </div>
          <div>
            <input className="hidden rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900 sm:block" value={search} onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Find Your Shoes"/>
           
            <select className="hidden rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900 sm:block" name="" id="" value={sort} onChange={e=>setSort(e.target.value)}>
              <option>Default</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
           
          </div>
          
           
         
        </div>

        {/* Product Grid */}
        {copyFootwears.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {copyFootwears.map((footware) => (
              <FootwearCard
                key={footware.id}
                footware={footware}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl bg-white py-20 text-center shadow-sm">
            <p className="text-lg font-semibold text-gray-700">
              No footwear found
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Check back later for new products.
            </p>
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Find your perfect pair
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Quality footwear. Iconic styles. Everyday comfort.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Footwears;

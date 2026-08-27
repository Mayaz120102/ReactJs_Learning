import { Link } from "react-router";

const FootwearCard = ({footware}) => {

   return (
    <div className="group relative max-w-sm overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
        <img
          src={footware?.image?.[0]}
          alt={footware?.name || "Footwear image"}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {/* Color Badge */}
        {footware?.color && (
          <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur-md">
            {footware.color}
          </span>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Brand */}
        {footware?.brand && (
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            {footware.brand}
          </p>
        )}

        {/* Name */}
        <h3 className="mt-1 line-clamp-1 text-lg font-bold text-slate-800">
          {footware?.name}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm text-slate-500">
          {footware?.description}
        </p>

        {/* Price & Action */}
        <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
          <div>
            <span className="text-xs text-slate-400 block">Price</span>
            <span className="text-xl font-extrabold text-slate-900">
              ${footware?.price}
            </span>
          </div>
         <Link to={`/footwears/${footware.id}`}>
          <button className="rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-medium text-white shadow-md transition-colors hover:bg-indigo-600 active:scale-95">
            See details
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default FootwearCard;
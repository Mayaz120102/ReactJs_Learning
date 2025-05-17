const Brandpage = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="herobtn">
          <button>Shop now</button>
          <button className="cateBtn">Category</button>
        </div>
        <div className="extra">
          <p>Also Available On</p>
        </div>
        <div className="brands">
          <img src="/images/amazon.png" alt="" />
          <img src="/images/flipkart.png" alt="" />
        </div>
      </div>
      <div className="hero-img">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default Brandpage;

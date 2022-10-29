
export function BlogCard(props) {

  return (
    <div className="blog-card">
      <a href="#">
        <img
          src={props.image}
          alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
          width="300"
          className="blog-banner"
        />
      </a>

      <div className="blog-content">
        <a href="#" className="blog-category">
          {props.category}
        </a>

        <a href="#">
          <h3 className="blog-title">
            {props.title}
          </h3>
        </a>

        <p className="blog-meta">
          By <cite>{props.name}</cite> /{" "}
          <time datetime="2022-04-06">props.date</time>
        </p>
      </div>
    </div>
  )
}
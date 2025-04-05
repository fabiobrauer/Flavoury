import GoogleReviewsWidget from "./GoogleReviewsWidget"; // Adjust the path based on your project structure

function Testimonial() {
  return (
    <section className="testimonial_section">
      <div className="container-fluid">
        <div className="section_title text-center">
        </div>
        {/* Elfsight Google Reviews Widget */}
        <GoogleReviewsWidget />

      </div>
    </section>
  );
}

export default Testimonial;

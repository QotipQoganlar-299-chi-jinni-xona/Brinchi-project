
import "./Values.css";

function Values() {
  return (
    <section className="values">
      <h1>Values</h1>

      <div className="values-container">

        <div className="value-item">
          <div className="value-icon">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="5" />
              <path d="M9 12l-1 9 4-2 4 2-1-9" />
            </svg>
          </div>

          <div>
            <h3>Excellent Quality</h3>
            <p>
              Forth forth moveth shall i unto midst tree,
              a fruit great subdue a every be so a fowl.
            </p>
            <a href="#">read more <span>→</span></a>
          </div>
        </div>

        <div className="value-item">
          <div className="value-icon">
            <svg viewBox="0 0 24 24">
              <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
              <path d="M4 13h4v6H6a2 2 0 0 1-2-2z" />
              <path d="M20 13h-4v6h2a2 2 0 0 0 2-2z" />
            </svg>
          </div>

          <div>
            <h3>Customer Service</h3>
            <p>
              Be saying moveth spirit fruitful called
              set evening fly give shall moveth lesser
              very.
            </p>
            <a href="#">read more <span>→</span></a>
          </div>
        </div>

        <div className="value-item">
          <div className="value-icon">
            <svg viewBox="0 0 24 24">
              <path d="M20.8 8.5c0 5-8.8 11-8.8 11s-8.8-6-8.8-11a4.5 4.5 0 0 1 8.8-1.2 4.5 4.5 0 0 1 8.8 1.2z" />
            </svg>
          </div>

          <div>
            <h3>The best People</h3>
            <p>
              Heaven to bearing that yielding and man.
              Brought over shall fill over blessed,
              he appear.
            </p>
            <a href="#">read more <span>→</span></a>
          </div>
        </div>

      </div>

      <div className="values-line">
        <span></span>
      </div>
    </section>
  );
}

export default Values;

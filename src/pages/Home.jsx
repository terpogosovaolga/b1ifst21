
import Filters from "../components/Filters";
import Tour from "../components/Tour";
import tours from "../tours.json";

function Home() {
    console.log('rerender home');
    return (
        <main>
        <div className="container">
          <h2>КАТАЛОГ ТУРОВ</h2>
          <Filters
            categories={["все", "по россии", "горящие"]}
            activeIndex={0}
          />
          <section className="tours">
            <div style={{ marginTop: "3rem" }}>
              {tours.map((t) => (
                <Tour key={t.id} {...t} />
              ))}
            </div>
          </section>
        </div>
      </main>
    );
}

export default Home;
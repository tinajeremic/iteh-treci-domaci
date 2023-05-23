import Card from "./Card";

function Izabrane({ knjige, kriterijum, remove }) {
  return (
    <div className="row">
      {kriterijum === "" ? (
        knjige.map((r) => (
          <div key={r.id}>
            <Card key={r.id} r={r} mod={2} remove={remove}></Card>
            <br />
          </div>
        ))
      ) : (
        <>
          {knjige
            .filter((r) =>
              r.naziv.toLowerCase().includes(kriterijum.toLowerCase())
            )
            .map((r) => (
              <div key={r.id}>
                <Card key={r.id} r={r} mod={2} remove={remove}></Card>
                <br />
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Izabrane;

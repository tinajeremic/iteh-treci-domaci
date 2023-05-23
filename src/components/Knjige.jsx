import Card from "./Card";

function Knjige({ knjige, kriterijum, add }) {

    if (!knjige) {
        return null; 
      }

  return (
    <div className="row">
      {kriterijum === "" ? (
        knjige.map((r) => (
          <div key={r.id}>
            <Card add={add} key={r.id} r={r} mod={1}></Card>
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
                <Card add={add} key={r.id} r={r} mod={1}></Card>
                <br />
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Knjige;

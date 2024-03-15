import FormData from "../../components/DataEdit";

export const UserProfile = () => {
  // ver favoritos, ver sus datos, editar sus datos,

  return (
    <>
      <section className="mainAdmin">
        <article className="dataView">
          <Button> Editar Datos</Button>
          <FormData />
        </article>
        <article className="dataView">
          su historial
        </article>
        <article className="dataView">
          favoritos
        </article>
        <article className="dataView">
          <div className="ListOfOrders">
            {/* usar axios y crear una lista con un map */}
            <ul>
              <li>a</li>
              <li>s</li>
              <li>d</li>
              <li>4</li>
              <li>g</li>
              <li>f</li>
            </ul>
          </div>
        </article>
      </section>
      <div></div>
    </>
  );
};

export default UserProfile;

import RegisterForm from "./../../components/RegisterForm.jsx"


export const UserProfile = () => {
  // ver favoritos, ver sus datos, editar sus datos,

  return (
    <>
      <section className="mainAdmin">
        <article className="dataView">
          <Button> Editar Datos</Button>
          <RegisterForm />
        </article>
        <article className="dataView">
            {/* usar axios y crear una lista con un map */}
            <ul>
              <li>a</li>
              <li>s</li>
              <li>d</li>
              <li>4</li>
              <li>g</li>
              <li>f</li>
            </ul>
        </article>

        <article className="dataView">
          navigate to = favorites

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

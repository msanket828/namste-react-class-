import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";

const Section = (props) => {
  const { title, content, isVisible, setIsVisible } = props;
  return (
    <div className="accordion">
      <h2 className="accordion-header">{title}</h2>
      {isVisible ? (
        <>
          <p className="accordion-body">{content}</p>
          <button className="btn btn-v1" onClick={() => setIsVisible(false)}>
            Show less
          </button>
        </>
      ) : (
        <button className="btn btn-v1" onClick={() => setIsVisible(true)}>
          Show more
        </button>
      )}
    </div>
  );
};

const Instamart = () => {
  const [visible, setVisibleSection] = useState("Second Section");
  const { user } = useContext(UserContext);
  return (
    <div className="main-body">
      <div className="accordion-wrapper">
        <div>
          <h3>{user.name}</h3>
        </div>
        <Section
          isVisible={visible == "First Section"}
          setIsVisible={(display) => {
            if (display) {
              setVisibleSection("First Section");
            } else {
              setVisibleSection("");
            }
          }}
          title="First Section"
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae deleniti vitae consequuntur quaerat consectetur praesentium cum, est fugiat, quidem eveniet asperiores voluptates tempore nam laborum illum vero? Maxime omnis excepturi nobis. Ullam ipsa minus odio quaerat, aspernatur dolore porro corporis."
        />
        <Section
          isVisible={visible == "Second Section"}
          setIsVisible={(display) => {
            if (display) {
              setVisibleSection("Second Section");
            } else {
              setVisibleSection("");
            }
          }}
          title="Second Section"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, magnam. Aliquam enim asperiores ducimus quam libero eos quaerat voluptas nobis perferendis debitis, eveniet error sit esse tenetur magni culpa cum numquam aut explicabo eaque quas suscipit ipsam rerum quibusdam? Nobis asperiores, quae quas adipisci exercitationem beatae enim incidunt expedita quasi nulla cum placeat suscipit mollitia necessitatibus ipsa magni tempora repellendus fuga facere dolor! Delectus ut atque labore minima iste officia ab sit, velit temporibus. Quas qui eveniet laborum suscipit illum! Praesentium harum facere est pariatur provident sint inventore voluptatibus molestias?"
        />
        <Section
          isVisible={visible == "Third Section"}
          setIsVisible={(display) => {
            if (display) {
              setVisibleSection("Third Section");
            } else {
              setVisibleSection("");
            }
          }}
          title="Third Section"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod hic perspiciatis amet, fugiat, tempora cum eaque corporis natus enim voluptates laudantium assumenda officia illo placeat, minus quibusdam ratione sapiente nulla a. Velit asperiores cupiditate, assumenda deleniti ut vel nam eos dicta sit quia esse explicabo quaerat placeat possimus laudantium perferendis optio doloribus voluptatibus voluptas excepturi fugiat provident officiis molestias tempora. Unde accusantium doloremque nesciunt reiciendis blanditiis voluptate! Saepe repudiandae dolorum fuga assumenda, id consequuntur, commodi ea accusantium enim tempore quae rerum voluptatum. Corporis ipsam vero repellendus officiis expedita illum nostrum asperiores necessitatibus obcaecati quam voluptate enim optio aperiam nobis, minus in iusto! Suscipit, dignissimos at. Assumenda expedita, tempora laboriosam repudiandae nemo hic consequatur recusandae numquam odio minima deserunt earum totam atque aspernatur nisi quae dolorem. Corporis laudantium id cumque nihil architecto aspernatur? Ad, voluptate explicabo tempora optio numquam ullam error incidunt ipsa quaerat autem magni aliquam suscipit iste dolore."
        />
      </div>
    </div>
  );
};

export default Instamart;

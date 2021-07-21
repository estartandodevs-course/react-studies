import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUserById } from "../../api/user";
import "./styles.scss";

const User = () => {
  const [userData, setUserData] = useState({});

  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    (async () => {
      const response = await getUserById(id);
      setUserData(response.data);
    })();
  }, [id]);

  return (
    <div id="user-page">
      <h1>
        {userData.first_name} {userData.last_name} - Welcome
      </h1>
      <div>
        <img
          src={userData.avatar}
          alt={userData.first_name}
          width="150px"
          height="150px"
        />
      </div>
      <button onClick={goBack}>Voltar para home</button>
    </div>
  );
};

export { User };

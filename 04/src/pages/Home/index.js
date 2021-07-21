import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import "./styles.scss";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetch(
        `https://reqres.in/api/users?page=${pagination.page}`
      );
      const response = await data.json();
      setUsers(response.data);
      setPagination({ page: response.page, totalPages: response.total_pages }); // {page: 1, totalPages: 2}
    };
    getUsers();
  }, [pagination.page]);

  const nextPage = () => {
    setPagination({ page: pagination.page + 1 });
  };

  const previousPage = () => {
    setPagination({ page: pagination.page - 1 });
  };

  const showNextButton = pagination.page < pagination.totalPages;
  const showPreviousButton = pagination.page > 1;

  return (
    <div id="home">
      <h1>Introdução ao hook UseEffect</h1>
      <section className="container-users">
        {users.map(({ first_name, last_name, avatar, id }) => (
          <Link to={`user/${id}`} key={id}>
            <div>
              <p>
                {first_name} {last_name}
              </p>
              <img src={avatar} alt={first_name} width="150px" height="150px" />
            </div>
          </Link>
        ))}
      </section>
      {showPreviousButton && (
        <Button onClick={previousPage}>Pagina anterior</Button>
      )}
      {showNextButton && <Button onClick={nextPage}>Proxima pagina</Button>}
    </div>
  );
};

export { Home };

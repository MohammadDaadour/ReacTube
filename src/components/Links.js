import { Link } from 'react-router-dom';

function Links({logo, setCurrentSection, direction, name, className}) {

  const visiting = (event) => {
    const listItems = document.querySelectorAll("li");
    listItems.forEach((item) => {
      item.classList.remove("visited")
    });
    event.target.classList.add("visited");
  };

  return (
    <div  >
        <Link
          onClick={() => {
            setCurrentSection(direction);
          }}
        >
          <li className={`slogan ${className}`} onClick={visiting}>
            {" "}
            <img alt="" src={logo} /> {name}
          </li>
        </Link>
    </div>
  )
}

export default Links
import { useState, useEffect } from "react";
import countryService from "./services/countries";

// a proper place to define a component
const Filter = ({ newFilter, setNewFilter }) => {
  return (
    <div>
      find countries{" "}
      <input
        value={newFilter}
        onChange={(event) => setNewFilter(event.target.value)}
      />
    </div>
  );
};

const Result = ({
  selected,
  newTemp,
  setNewTemp,
  newIcon,
  setNewIcon,
  newWind,
  setNewWind,
}) => {
  useEffect(() => {
    countryService
      .getWeather(selected.capital[0])
      .then((data) => {
        setNewTemp(data.main.temp);
        setNewIcon(data.weather[0].icon);
        setNewWind(data.wind.speed);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selected.capital, setNewIcon, setNewTemp, setNewWind]);

  return (
    <>
      <h2>{selected.name.common}</h2>
      <div>capital: {selected.capital[0]}</div>
      <div>area: {selected.area}</div>
      <h3>languages:</h3>
      <ul>
        {Object.entries(selected.languages).map(([key, value]) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
      <figure>
        <img src={selected.flags.png} />
      </figure>
      <h2>Weather in {selected.capital[0]}</h2>
      <div>temperature {newTemp} Celsius</div>
      <figure>
        {newIcon && (
          <img src={`https://openweathermap.org/img/wn/${newIcon}@2x.png`} />
        )}
      </figure>
      <div>wind {newWind} m/s</div>
    </>
  );
};

const Countries = ({
  countries,
  newFilter,
  setNewFilter,
  newTemp,
  setNewTemp,
  newIcon,
  setNewIcon,
  newWind,
  setNewWind,
}) => {
  const renderSwitch = (filtered) => {
    switch (true) {
      case filtered.length > 10:
        return <div>Too many matches, specify another filter</div>;

      case filtered.length > 1 && filtered.length <= 10:
        return (
          <ul>
            {filtered.map((country) => (
              <li key={country.name.common}>
                {country.name.common}{" "}
                <button onClick={() => setNewFilter(country.name.common)}>
                  show
                </button>
              </li>
            ))}
          </ul>
        );

      case filtered.length === 1:
        return (
          <Result
            selected={filtered[0]}
            newTemp={newTemp}
            setNewTemp={setNewTemp}
            newIcon={newIcon}
            setNewIcon={setNewIcon}
            newWind={newWind}
            setNewWind={setNewWind}
          />
        );

      default:
        return <div>Please search again</div>;
    }
  };

  return (
    newFilter &&
    renderSwitch(
      countries.filter((item) =>
        item.name.common.toLowerCase().includes(newFilter.toLowerCase())
      )
    )
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [newTemp, setNewTemp] = useState(0);
  const [newIcon, setNewIcon] = useState("");
  const [newWind, setNewWind] = useState(0);

  useEffect(() => {
    countryService
      .getAll()
      .then((initialCountries) => {
        setCountries(initialCountries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      <Countries
        countries={countries}
        newFilter={newFilter}
        setNewFilter={setNewFilter}
        newTemp={newTemp}
        setNewTemp={setNewTemp}
        newIcon={newIcon}
        setNewIcon={setNewIcon}
        newWind={newWind}
        setNewWind={setNewWind}
      />
    </div>
  );
};

export default App;

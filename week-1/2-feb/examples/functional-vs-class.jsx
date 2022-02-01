const { useEffect } = require("react");

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "Oscar" };
  }

  componentDidMount() {
    console.log("Skrivs ut när komponenten renderats");
  }

  componentWillUnmount() {
    console.log("Skrivs ut när komponenten tas bort");
  }

  render() {
    return (
      <div>
        <p>En klass-komponent</p>
      </div>
    );
  }
}

function FunctionComponent(props) {
  const [state, setState] = useState({ name: "Oscar" });

  useEffect(() => {
    console.log("Skrivs ut när komponenten renderats");

    return () => {
      console.log("Skrivs ut när komponenten tas bort");
    };
  }, []);

  return (
    <div>
      <p>En Funktions-komponent</p>
    </div>
  );
}

const AnotherFunctionComponent = (props) => {
  const [state, setState] = useState({ name: "Oscar" });

  useEffect(() => {
    console.log("Skrivs ut när komponenten renderats");

    return () => {
      console.log("Skrivs ut när komponenten tas bort");
    };
  }, []);

  return (
    <div>
      <p>En Funktions-komponent</p>
    </div>
  );
};

const SimpleStatelessComponent = () => (
  <div>
    <p>Detta är också en funktions-komponent, i sin allra enklaste form</p>
  </div>
);

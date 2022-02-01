
function One(props) {
  return (
    <div>
      <p>Ett</p>
      {props.children}
    </div>
  );
}

function Two({ children }) {
  return (
    <div>
      <p>Två</p>
      {children}
    </div>
  );
}

function Three() {
  return (
    <div>
      <p>Three</p>
    </div>
  );
}

function NestedComponents() {
  return (
    <One>
      <Two>
        <Three />
      </Two>
    </One>
  )
}

export default NestedComponents;

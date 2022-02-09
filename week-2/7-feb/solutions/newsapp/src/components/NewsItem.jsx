const styles = {
  title: {
    textTransform: "uppercase",
  },
  image: {
    maxHeight: "200px",
  },
  section: {
    border: "5px solid #c3c3c3",
    borderRadius: "10px",
    width: "100%",
    margin: "20px 0",
  },
};

function NewsItem(props) {
  return (
    <section style={styles.section}>
      <h1 style={styles.title}>{props.title}</h1>
      <img style={styles.image} src={props.image} alt="" />
      <p>{props.description}</p>
      <p>
        {/*if (props.author !== null) {
          props.author
        } else {
          okänd författare
        } */}

        { props.author !== null ? props.author : "okänd författare" }
      </p>
    </section>
  );
}

export default NewsItem;

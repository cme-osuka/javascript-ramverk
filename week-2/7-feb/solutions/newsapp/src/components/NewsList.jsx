import NewsItem from "./NewsItem";

const mainStyles = {
  width: "60%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "0 auto"
}


function NewsList(props) {
  return (
    <main style={mainStyles}>
      {props.data.map((newsItem, i) => {
        return (
          <NewsItem
            key={`${newsItem.title}_${i}`}
            title={newsItem.title}
            image={newsItem.image}
            description={newsItem.description}
            author={newsItem.author}
          />
        );
      })}
    </main>
  );
}

export default NewsList;

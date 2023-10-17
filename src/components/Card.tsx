interface Data {
  imgUrl: string;
  name: string;
  acronym: string;
  price: string;
}

export default function Card(props: Data) {
  return (
    <div>
      <img src={props.imgUrl} />
      <div>{props.name}</div>
      <div>{props.acronym}</div>
      <div>{props.price}</div>
    </div>
  );
}

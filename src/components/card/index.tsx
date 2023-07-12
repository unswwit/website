import Image from "next/image";
import Button from "../button";
import { card } from "./styles.module.css";

type CardProps = {
  title: string;
  description: string;
  image: string | null;
  link: string;
};

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className={card}>
      <div>{image && <Image src={image} alt={title} width="100" height="100" />}</div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <Button title="Learn More" link={link} />
      </div>
    </div>
  );
};

export default Card;

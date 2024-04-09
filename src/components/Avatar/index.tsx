// TODO: Criar lib de Componentes?

type Props = {
  name?: string;
  image?: string;
};

// TODO: usar imagem do amigo
const Avatar = ({ name, image }: Props) => {
  const nameParts = name ? name?.split(" ") : [""];
  const finalName = `${nameParts[0][0]}${nameParts[1] ? nameParts[1][0] : ""}`;

  return (
    <div className="avatar">
      {!image ? <p className="avatar-text">{finalName}</p> : <img src={image} alt={`Image of user ${name}`} />}
    </div>
  );
};

export default Avatar;
